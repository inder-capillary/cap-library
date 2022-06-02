import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
} from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import { getDaysOfMonth } from "../utils";
import CapTooltip from "../../CapTooltip";
import CapPopover from "../../CapPopover";
import {
  FONT_COLOR_01,
  FONT_SIZE_S,
  FONT_FAMILY,
} from "../../styled/variables";
import { DATE_KEY_FORMAT } from "../constants";
import {
  drawHeadingText,
  drawDashedLines,
  drawTodayLine,
  drawLineSeperator,
  drawRoundRectWithText,
} from "../drawUtils";

//This is the default view of the popover if popoverContent props is empty
const DefaultPopover = ({ title }) => <div>{title}</div>;

DefaultPopover.propTypes = {
  title: PropTypes.string,
};

const CalendarCanvas = ({
  displayMonths,
  dayGrid,
  formattedEvents,
  todayTooltipProps,
  dashLineOffsetY,
  eventHeight,
  eventRowGap,
  textPadding,
  eventStartYOffset,
  minCanvasHeight,
  canvasFont,
  popoverPlacement,
  carouselDate,
  popoverContent,
}) => {
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
    if (canvas?.current) {
      const context = canvas.current.getContext("2d");
      contextRef.current = context;
    }
  }, []);

  useEffect(() => {
    if (width > 0 && height > 0) {
      contextRef.current.scale(pixelRatio, pixelRatio);
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
    //checking canvasContainerRef is defined to prevent client width undefined errors
    if (
      width > 0
      && height > 0
      && canvasContainerRef
      && canvasContainerRef.current
    ) {
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
    const minHeight = minCanvasHeight || canvasContainerRef.current.clientHeight;
    const { y: rectY } = getRectInitDimension();
    const estimatedHeight = rectY
      + eventStartYOffset
      + (eventHeight + eventRowGap) * totalEventRowsPerQuater.current;
    setWidth(canvasContainerRef.current.clientWidth);
    setHeight(estimatedHeight > minHeight ? estimatedHeight : minHeight);
  };

  //for all page actions like resize and scroll and mouse move, check if canvas container ref is present
  //this is needed to tackle empty state page resizing and navigation between quarters with empty states
  const doResize = () => canvasContainerRef?.current && handleDimension();

  const onWindowScroll = (event) => {
    const popoverContainer = document.getElementsByClassName(
      "event-calendar-popover-overlay"
    )?.[0];
    if (
      canvasContainerRef?.current
      && !(popoverContainer && popoverContainer.contains(event.target))
    ) {
      hidePopoverAndToolTip();
    }
  };

  const onWindowMouseMove = (event) => {
    if (canvasContainerRef.current) {
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
    const today = moment()
      .set("year", moment(carouselDate).year())
      .format(DATE_KEY_FORMAT);
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
          const eventWidth = endRect.midX + endRect.width - startRect.midX;
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

  return (
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
      <div style={{ position: "absolute" }} id="event-calendar-tool-tip-knob" />
      <div style={{ position: "absolute" }} id="event-calendar-popover-knob" />
    </div>
  );
};

CalendarCanvas.propTypes = {
  popoverContent: PropTypes.any,
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

CalendarCanvas.defaultProps = {
  popoverContent: DefaultPopover,
  dashLineOffsetY: 20,
  eventHeight: 24,
  eventRowGap: 12,
  textPadding: 12,
  eventStartYOffset: 40,
  minCanvasHeight: 0,
  todayTooltipProps: { title: "Today" },
  canvasFont: `normal ${FONT_SIZE_S} ${FONT_FAMILY}`,
  popoverPlacement: "leftTop",
};

export default CalendarCanvas;
