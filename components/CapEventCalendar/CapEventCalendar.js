import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ReactDom from "react-dom";
import moment from "moment";

//components
import CapIcon from "../CapIcon";
import CapTooltip from "../CapTooltip";
import CapPopover from "../CapPopover";
import MonthHeader from "./components/MonthHeader";
import DayDropdown from "./components/DayDropdown";
import { FONT_COLOR_01, FONT_SIZE_S, FONT_FAMILY } from "../styled/variables";

//styles
import "./_capEventCalendar.scss";

//utils
import {
  getMonthsForQuarter,
  getDaysOfMonth,
  formatDataToSuitCanvas,
  handleYearChange,
  splitMonthsArrayToQuarterChunks,
} from "./utils";
import {
  drawHeadingText,
  drawDashedLines,
  drawTodayLine,
  drawLineSeperator,
  drawRoundRectWithText,
} from "./drawUtils";

//constants
import {
  DATE_KEY_FORMAT,
  QUATERS,
  QUARTER_LABELS,
  DAY_LABELS,
  MONTH_LABELS,
} from "./constants";

const DefaultPopover = ({ title }) => <div>{title}</div>;

DefaultPopover.propTypes = {
  title: PropTypes.string,
};

const CapEventCalendar = ({
  calendarDate = moment().format(),
  events,
  popoverContent,
  onQuarterChange,
  selectedQuarter,
  calendarGridLineLabel,
  dayLabels,
  allQuartersLabel,
  monthLabels,
  todayTooltipProps,
  dashLineOffsetY,
  eventHeight,
  eventRowGap,
  textPadding,
  eventStartYOffset,
  minCanvasHeight,
  canvasFont,
  popoverPlacement,
}) => {
  const [carouselDate, setCarouselDate] = useState(
    calendarDate || moment().format()
  ); //To calculate the year based on carousel navigation

  const [quarter, setQuarter] = useState(
    selectedQuarter ? QUATERS[selectedQuarter] : moment().quarter()
  ); //display quarter info in the view

  const [displayMonths, setDisplayMonths] = useState([]);
  const [formattedEvents, setFormattedEvents] = useState([]);

  const [error, showError] = useState(false); //disable the left carousel click when first month of previous year is reached
  const [dayGrid, setDayGrid] = useState(1); //show grid line based on the day selected in dropdown
  const [quarterMonths] = useState(
    splitMonthsArrayToQuarterChunks(monthLabels)
  );

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pixelRatio = window.devicePixelRatio;

  const canvasContainerRef = useRef(null);
  const canvas = useRef(null);
  const contextRef = useRef(null);
  const drawObject = useRef(null);

  const isTooltipVisible = useRef(null);
  const isPopoverVisible = useRef(null);
  const currentHoverEvent = useRef(null);
  const totalEventRowsPerQuater = useRef(0);

  useEffect(() => {
    const _quarter = selectedQuarter ? QUATERS[selectedQuarter] : quarter;
    setDisplayMonths(
      getMonthsForQuarter(_quarter, quarterMonths) //show months of the quarter
    );
    setFormattedEvents(
      formatDataToSuitCanvas(
        events,
        selectedQuarter
          ? QUATERS[selectedQuarter]
          : quarter || moment().quarter()
      )
    );
  }, [events]);

  // responsive width and height
  useEffect(() => {
    totalEventRowsPerQuater.current = formattedEvents.length;
    handleDimension();
  }, [formattedEvents]);

  useEffect(() => {
    window.addEventListener("resize", doResize, true);
    window.addEventListener("scroll", onWindowScroll, true);
    window.addEventListener("mousemove", onWindowMouseMove, false);
    return () => {
      window.removeEventListener("resize", doResize);
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("mousemove", onWindowMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    contextRef.current = context;
  }, []);

  useEffect(() => {
    if (width > 0 && height > 0) {
      const context = contextRef.current;
      context.scale(pixelRatio, pixelRatio);
    }
  }, [width, height]);

  const hidePopoverAndToolTip = () => {
    toggleTooltip(false);
    togglePopover(false);
  };

  useEffect(
    () => () => {
      hidePopoverAndToolTip();
    },
    []
  );

  useEffect(() => {
    if (width > 0 && height > 0) {
      hidePopoverAndToolTip();
      reDrawCanvas();
    }
  }, [width, height, formattedEvents, dayGrid]);

  const noOfDaysInQuarter = useMemo(
    () => displayMonths.reduce((acc, { daysInMonth }) => acc + daysInMonth, 0),
    [displayMonths]
  );

  const showBorder = (month, day, monthIndex) => {
    if (moment(month.end).date() === moment(day).date()) return true;
    if (!monthIndex) {
      if (moment(month.start).date() === moment(day).date()) return true;
    }
    return false;
  };

  const handleDimension = () => {
    const { y: rectY } = getRectInitDimension();
    const estimatedHeight = rectY
      + eventStartYOffset
      + (eventHeight + eventRowGap) * totalEventRowsPerQuater.current;
    setWidth(canvasContainerRef.current.clientWidth);
    setHeight(
      estimatedHeight > minCanvasHeight ? estimatedHeight : minCanvasHeight
    );
  };

  const doResize = () => handleDimension();

  const onWindowScroll = () => hidePopoverAndToolTip();

  const onWindowMouseMove = (event) => {
    const canvasContainer = canvasContainerRef.current;
    const moveX = event.clientX;
    const moveY = event.clientY;
    // Mouse x and y should be between canvas container co-ordinates
    // If not tooltip and popover will be closed
    const { top, left } = canvasContainer.getBoundingClientRect();
    const popoverContainer = document.getElementsByClassName(
      "event-calendar-popover-overlay"
    )?.[0];
    if (
      !(
        (moveX > left
          && moveX < left + canvasContainer.clientWidth
          && moveY > top
          && moveY < top + canvasContainer.clientHeight)
        || (popoverContainer && popoverContainer.contains(event.target))
      )
    ) {
      hidePopoverAndToolTip();
    }
  };

  const initDayObject = ({
    x: rectX,
    y: rectY,
    midX: rectMidX,
    width: rectWidth,
    height: rectHeight,
  }) => ({
    x: rectX,
    y: rectY,
    midX: rectMidX,
    width: rectWidth,
    height: rectHeight,
  });

  const getRectInitDimension = () => ({
    x: 0,
    y: 0,
    height,
    width: width / noOfDaysInQuarter,
  });

  const drawLayout = () => {
    const context = contextRef.current;
    const dayObject = {};

    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth,
    } = getRectInitDimension();
    let startX = rectX;

    displayMonths.forEach((month, monthIndex) => {
      const allDays = getDaysOfMonth(month.start);

      allDays.forEach((day) => {
        const rectMidX = startX + rectWidth / 2;
        context.beginPath();
        context.rect(startX, rectY, rectWidth, rectHeight);

        const dayKey = moment(day).format(DATE_KEY_FORMAT);
        const today = moment().format(DATE_KEY_FORMAT);
        const isToday = dayKey === today;

        dayObject[dayKey] = initDayObject({
          x: startX,
          y: rectY,
          midX: rectMidX,
          width: rectWidth,
          height: rectHeight,
        });

        const showMonthBorder = showBorder(month, day, monthIndex);

        if (moment(day).day() === dayGrid && !isToday && !showMonthBorder) {
          const headingMarginBottom = 8;
          drawHeadingText({
            context,
            x: rectMidX,
            y: rectY,
            height: dashLineOffsetY - headingMarginBottom,
            text: moment(day).format("D"),
          });

          drawDashedLines({
            context,
            x: rectMidX,
            y: rectY + dashLineOffsetY,
            x1: rectMidX,
            y1: rectHeight,
          });
        }

        if (showMonthBorder) {
          drawLineSeperator({
            context,
            x: rectMidX,
            y: rectY,
            x1: rectMidX,
            y1: rectHeight,
          });
        }

        context.closePath();
        startX += rectWidth;
      });
    });
    drawObject.current = { ...drawObject.current, day: dayObject };
    return dayObject;
  };

  const toggleTooltip = (visible) => {
    // Allow if visible and hide only if tooltip is already visible
    if (visible || isTooltipVisible.current) {
      const knob = document.getElementById("event-calendar-tool-tip-knob");
      ReactDom.unmountComponentAtNode(knob);

      if (visible) {
        ReactDom.render(
          <CapTooltip visible {...todayTooltipProps}>
            <div />
          </CapTooltip>,
          knob
        );
      }
      isTooltipVisible.current = visible;
    }
  };

  const togglePopover = (visible, popoverContentProps) => {
    // Allow if visible and hide only if popover is already visible
    if (visible || isPopoverVisible.current) {
      const knob = document.getElementById("event-calendar-popover-knob");
      ReactDom.unmountComponentAtNode(knob);
      const Component = popoverContent;
      const body = document.getElementsByTagName("body")?.[0];
      if (visible) {
        ReactDom.render(
          <CapPopover
            visible
            arrowPointAtCenter
            placement={popoverPlacement}
            content={<Component {...popoverContentProps} />}
            overlayClassName="event-calendar-popover-overlay"
            getPopupContainer={(trigger) => body || trigger}
          >
            <div />
          </CapPopover>,
          knob
        );
      }

      isPopoverVisible.current = visible;
    }
  };

  const updatePosition = ({ mouseX, mouseY, knob, offsetX = 0 }) => {
    const { style } = knob;
    if (mouseX) {
      style.display = "block";
      style.left = `${mouseX + offsetX}px`;
      style.top = `${mouseY}px`;
    } else {
      style.display = "none";
      style.left = "-1000px";
      style.top = "-1000px";
    }
  };

  const updateToolTipKnobPosition = ({ mouseX, mouseY } = {}) => {
    const toolTipKnob = document.getElementById("event-calendar-tool-tip-knob");
    updatePosition({ mouseX, mouseY, knob: toolTipKnob });
  };

  const updatePopoverKnobPosition = ({ mouseX, mouseY } = {}) => {
    const popoverKnob = document.getElementById("event-calendar-popover-knob");
    // offsetX - 6 to make "popover arrow" completely touch over "event" left
    // To avoid popover close - From mouse move from "event" to "popover content"
    updatePosition({ mouseX, mouseY, knob: popoverKnob, offsetX: 6 });
  };

  const getDayObject = () => {
    const {
      current: { day },
    } = drawObject;
    return day;
  };

  const getTodayRectObj = () => {
    const today = moment().format(DATE_KEY_FORMAT);
    return getDayObject()[today];
  };

  const handleTodayLine = ({ mouseX, mouseY } = {}) => {
    const context = contextRef.current;
    const currentDayObj = getTodayRectObj();

    if (!currentDayObj) {
      return null;
    }

    const { y, midX, height: currentDayRectHeight } = currentDayObj;
    return drawTodayLine({
      context,
      x: midX,
      y: y + dashLineOffsetY,
      x1: midX,
      y1: currentDayRectHeight,
      mouseX,
      mouseY,
    });
  };

  const toggleCursor = (pointer) => {
    canvas.current.style.cursor = pointer ? "pointer" : "auto";
  };

  const getRectDimensionOnNotFound = (date, isEnd) => {
    const day = getDayObject();
    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth,
    } = getRectInitDimension();

    const dayObject = isEnd
      ? {
        ...initDayObject({
          x: width,
          y: rectY,
          midX: width,
          width: rectWidth,
          height: rectHeight,
        }),
        isCont: true,
      }
      : {
        ...initDayObject({
          x: rectX,
          y: rectY,
          midX: 1,
          width: rectWidth,
          height: rectHeight,
        }),
        isCont: true,
      };

    if (date) {
      drawObject.current = {
        ...drawObject.current,
        day: { ...day, [date]: dayObject },
      };
    }

    return dayObject;
  };

  const drawEvent = ({ mouseX, mouseY } = {}) => {
    const { y: rectY } = getRectInitDimension();
    let eventStartY = rectY + eventStartYOffset;
    const day = getDayObject();
    const context = contextRef.current;
    let currentHoverItem = null;

    formattedEvents.forEach((eventRow) => {
      eventRow.forEach((event) => {
        const { title, start, end, backgroundColor } = event;
        const startDate = moment(start).format(DATE_KEY_FORMAT);
        const endDate = moment(end).format(DATE_KEY_FORMAT);

        let startRect = day[startDate];
        let endRect = day[endDate];

        if (!startRect) {
          startRect = getRectDimensionOnNotFound(startDate);
        }

        if (!endRect) {
          endRect = getRectDimensionOnNotFound(endDate, true);
        }

        if (startRect && endRect) {
          const eventWidth = endRect.midX - startRect.midX;
          const isPointInRoundRectTextPath = drawRoundRectWithText({
            context,
            x: startRect.midX,
            y: eventStartY,
            width: eventWidth,
            height: eventHeight,
            bgColor: backgroundColor,
            borderRadius: 5,
            text: title,
            color: FONT_COLOR_01,
            textPadding,
            openLeft: startRect.isCont,
            openRight: endRect.isCont,
            mouseX,
            mouseY,
          });
          if (mouseX && isPointInRoundRectTextPath) {
            currentHoverItem = {
              event,
              startRect,
              endRect,
              eventStartY,
              eventHeight,
              isNewEvent: true,
            };
          }
        }
      });
      eventStartY += eventHeight + eventRowGap;
    });

    if (currentHoverItem) {
      const {
        event: { event_id: currentEventId },
      } = currentHoverItem;
      if (currentHoverEvent.current?.event?.event_id !== currentEventId) {
        currentHoverEvent.current = currentHoverItem;
      }
    } else {
      currentHoverEvent.current = null;
    }
  };

  const reDrawCanvas = () => {
    const context = contextRef.current;
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.font = canvasFont;
    drawCanvas();
    context.closePath();
  };

  const drawCanvas = () => {
    drawLayout();
    handleTodayLine();
    drawEvent();
  };

  const displayWidth = Math.floor(pixelRatio * width);
  const displayHeight = Math.floor(pixelRatio * height);
  const style = { width, height };

  const onMouseMove = (mouseEvent) => {
    const mouseX = mouseEvent.nativeEvent.offsetX * pixelRatio;
    const mouseY = mouseEvent.nativeEvent.offsetY * pixelRatio;

    drawEvent({ mouseX, mouseY });
    if (currentHoverEvent.current) {
      if (currentHoverEvent.current.isNewEvent) {
        const {
          event: hoverEvent,
          startRect: hoverStartRect,
          eventHeight: hoverEventHeight,
          eventStartY: hoverEventStartY,
        } = currentHoverEvent.current;
        const { midX } = hoverStartRect;
        updatePopoverKnobPosition({
          mouseX: midX,
          mouseY: hoverEventStartY + hoverEventHeight / 2,
        });
        togglePopover(true, { ...hoverEvent, ...hoverEvent.popoverProps });
        currentHoverEvent.current = {
          ...currentHoverEvent.current,
          isNewEvent: false,
        };
      }
    } else {
      togglePopover(false);
    }

    const isTodayLineHovered = handleTodayLine({ mouseX, mouseY });
    if (isTodayLineHovered && !currentHoverEvent.current) {
      if (!isTooltipVisible.current) {
        const currentDayObj = getTodayRectObj();
        const { midX } = currentDayObj;
        updateToolTipKnobPosition({
          mouseX: midX,
          mouseY: mouseY / pixelRatio,
        });
        toggleTooltip(mouseEvent);
      }
    } else {
      toggleTooltip();
    }

    toggleCursor(isTodayLineHovered || currentHoverEvent.current);
  };

  /**
   * Perform respective date and year changes on left and right carousel icon clicks
   * @param {*} currentQuarter , needed to increment/decrement the quarter
   * @param {*} date , to calculate if the year needs to be decremented based on date
   * @param {*} increment , true => increment and false => decrement
   * @param {*} referenceDate , date that decides the default year of the calendar
   * @returns
   */
  const handleCarouselClick = (
    currentQuarter,
    date,
    increment,
    referenceDate
  ) => {
    if (increment) showError(false);
    const values = handleYearChange(
      currentQuarter,
      date,
      increment,
      referenceDate
    );
    if (values) {
      setCarouselDate(values[1]);
      onQuarterChange(values[0], moment(values[1]).year());
      if (values[2]) showError(true);
      return values[0];
    }
    return currentQuarter;
  };

  /**
   *
   * @param {*} ifDecrement, if true, pass calendarDate to decide if the limit that is previous year is reached
   * if false, unlimited movement to the future quarters
   */
  const handleQuarterSelection = (ifDecrement) => {
    if (ifDecrement) {
      setQuarter((prevQuarter) => handleCarouselClick(prevQuarter, carouselDate, false, calendarDate));
    } else {
      setQuarter((prevQuarter) => handleCarouselClick(prevQuarter, carouselDate, true));
    }
  };

  const handleDayGridSelection = (day) => {
    setDayGrid(day);
  };

  const onClickQuarterLeft = () => handleQuarterSelection(true);

  const onClickQuarterRight = () => handleQuarterSelection(false);

  return (
    <>
      <div className="event-calendar__header">
        <div className="event-calendar__header__left">
          <div>
            <CapIcon
              type="chevron-left"
              style={{ cursor: "pointer" }}
              className={classnames({ "disable-left": error, "carousel-icon": true})}
              onClick={onClickQuarterLeft}
            />
            <CapIcon
              type="chevron-right"
              className="carousel-icon"
              onClick={onClickQuarterRight}
            />
          </div>
          <div className="quarter-label">
            {allQuartersLabel[quarter - 1]}
            {/**&nbsp; stands for non breakable space, used commonly between strings */}
            {moment(carouselDate).year()}
          </div>
        </div>
        <div className="event-calendar__header__right">
          {calendarGridLineLabel}
          <DayDropdown
            fetchDay={handleDayGridSelection}
            day={dayGrid}
            dayLabels={dayLabels}
          />
        </div>
      </div>
      <MonthHeader displayMonths={displayMonths} />
      {/* This is needs to calculates dimensions for canavs & Do not add any elements as children */}
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        ref={canvasContainerRef}
      >
        <canvas
          ref={canvas}
          style={style}
          width={displayWidth}
          height={displayHeight}
          onMouseMove={onMouseMove}
        />
        <div
          style={{ position: "absolute" }}
          id="event-calendar-tool-tip-knob"
        />
        <div
          style={{ position: "absolute" }}
          id="event-calendar-popover-knob"
        />
      </div>
    </>
  );
};

CapEventCalendar.propTypes = {
  calendarDate: PropTypes.string,
  events: PropTypes.array,
  popoverContent: PropTypes.any,
  onQuarterChange: PropTypes.func,
  selectedQuarter: PropTypes.string,
  calendarGridLineLabel: PropTypes.string,
  dayLabels: PropTypes.array,
  allQuartersLabel: PropTypes.array,
  monthLabels: PropTypes.array,
  todayTooltipProps: PropTypes.object,
  dashLineOffsetY: PropTypes.number,
  eventHeight: PropTypes.number,
  eventRowGap: PropTypes.number,
  textPadding: PropTypes.number,
  eventStartYOffset: PropTypes.number,
  minCanvasHeight: PropTypes.number,
  canvasFont: PropTypes.string,
  popoverPlacement: PropTypes.string,
};

CapEventCalendar.defaultProps = {
  popoverContent: DefaultPopover,
  dashLineOffsetY: 20,
  eventHeight: 24,
  eventRowGap: 12,
  textPadding: 12,
  eventStartYOffset: 40,
  minCanvasHeight: 150,
  todayTooltipProps: { title: "Today" },
  allQuartersLabel: QUARTER_LABELS,
  dayLabels: DAY_LABELS,
  monthLabels: MONTH_LABELS,
  canvasFont: `normal ${FONT_SIZE_S} ${FONT_FAMILY}`,
  calendarGridLineLabel: "Calendar Grid Line",
  popoverPlacement: "leftTop",
};

export default CapEventCalendar;
