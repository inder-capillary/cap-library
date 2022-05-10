import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useLayoutEffect
} from "react";
import "./_capEventCalendar.scss";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import moment from "moment";

import CapIcon from "../CapIcon";
import CapMenu from "../CapMenu";
import CapButton from "../CapButton";
import CapTooltip from "../CapTooltip";
import CapPopover from "../CapPopover";
import CapDropdown from "../CapDropdown";

import MonthHeader from "./components/MonthHeader";

import {
  getQuarterForDate,
  getMonthsForQuarter,
  getDaysOfMonth,
  formatDataToSuitCanvas,
} from "./utils";
import {
  drawHeadingText,
  drawDashedLines,
  drawTodayLine,
  drawLineSeperator,
  drawRoundRectWithText,
} from "./drawUtils";

import { quarterInfo, workWeek } from "./constants";

import { events as datas } from "./mockData";

const PopoverConent = ({ title }) => <div>{title}</div>;

/* eslint-disable */
const dashLineOffsetY = 20;
const dateKeyFormat = "DD/MM/YYYY";
const eventHeight = 24;
const eventRowGap = 12;
const textPadding = 12;
const eventStartYOffset = 40;
const defaultCanvasLimit = 150;

const CapEventCalendar = ({
  calendarDate = moment().format(),
  events = datas,
  popoverConent = PopoverConent,
  fetchEventsForTheQuarter
}) => {
  const [currentDate, setCurrentDate] = useState(moment().format());
  const [quarter, setQuarter] = useState(getQuarterForDate(calendarDate));
  const [displayMonths, setDisplayMonths] = useState(
    getMonthsForQuarter(getQuarterForDate(calendarDate))
  );
  const [formattedEvents, setFormattedEvents] = useState(
    formatDataToSuitCanvas(events)
  );
  const [quarterChanged, setQuarterChanged] = useState(false);
  const [dayGrid, setDayGrid] = useState(1);

  useEffect(() => {
    setCurrentDate(currentDate || moment().format());
  }, [calendarDate]);
  const noOfDaysInQuarter = useMemo(
    () => displayMonths.reduce((acc, { daysInMonth }) => acc + daysInMonth, 0),
    [displayMonths]
  );

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pixelRatio = window.devicePixelRatio;

  const ref = useRef(null);
  const canvas = useRef(null);
  const contextRef = useRef(null);
  const drawObject = useRef(null);

  const isTooltipVisible = useRef(null);
  const currentHoverEvent = useRef(null);

  const showBorder = (month, day, monthIndex) => {
    if (moment(month.end).date() === moment(day).date()) return true;
    if (!monthIndex) {
      if (moment(month.start).date() === moment(day).date()) return true;
    }
    return false;
  };

  // responsive width and height
  useEffect(() => {
    handleDimension();
  }, [formattedEvents]);

  useEffect(() => {
    window.addEventListener("resize", doResize, true);
    return () => {
      window.removeEventListener("resize", doResize);
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

  useEffect(() => {
    if (width > 0 && height > 0) {
      reDrawCanvas();
    }
  }, [width, height, quarterChanged, dayGrid]);

  useEffect(() => {
    setDisplayMonths(getMonthsForQuarter(quarter));
    formatEventsForQuarter(quarter);
    setQuarterChanged(true);
  }, [quarter]);

  /**
   * on quarter change, fetch events for that quarter
   */
  const formatEventsForQuarter = quarter => {
    let events = fetchEventsForTheQuarter
      ? fetchEventsForTheQuarter(quarter)
      : [];
    if (quarter === 1) events = datas; //need to check events appear for chosen quarter
    setFormattedEvents(formatDataToSuitCanvas(events,quarter));
  };

  const handleDimension = () => {
    const { y: rectY } = getRectInitDimension();
    const estimatedHeight =
      rectY +
      eventStartYOffset +
      (eventHeight + eventRowGap) * formattedEvents.length;
    setWidth(ref.current.clientWidth);
    setHeight(
      estimatedHeight > defaultCanvasLimit
        ? estimatedHeight
        : defaultCanvasLimit
    );
  };

  const doResize = () => handleDimension();

  const initDayObject = ({ x, y, midX, width, height }) => ({
    x,
    y,
    midX,
    width,
    height
  });

  const getRectInitDimension = () => ({
    x: 0,
    y: 0,
    height,
    width: width / (noOfDaysInQuarter + 1)
  });

  const drawLayout = () => {
    const context = contextRef.current;
    const dayObject = {};

    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth
    } = getRectInitDimension();
    let startX = rectX;

    displayMonths.forEach((month, monthIndex) => {
      const allDays = getDaysOfMonth(month.start);

      allDays.forEach(day => {
        const rectMidX = startX + rectWidth / 2;
        context.beginPath();
        context.rect(startX, rectY, rectWidth, rectHeight);

        const dayKey = moment(day).format(dateKeyFormat);
        const today = moment().format(dateKeyFormat);
        const isToday = dayKey === today;

        dayObject[dayKey] = initDayObject({
          x: startX,
          y: rectY,
          midX: rectMidX,
          width: rectWidth,
          height: rectHeight
        });

        const showMonthBorder = showBorder(month, day, monthIndex);

        if (moment(day).day() === dayGrid && !isToday && !showMonthBorder) {
          const headingMarginBottom = 8;
          drawHeadingText({
            context,
            x: rectMidX,
            y: rectY,
            height: dashLineOffsetY - headingMarginBottom,
            text: moment(day).format("D")
          });

          drawDashedLines({
            context,
            x: rectMidX,
            y: rectY + dashLineOffsetY,
            x1: rectMidX,
            y1: rectHeight
          });
        }

        if (showMonthBorder) {
          drawLineSeperator({
            context,
            x: rectMidX,
            y: rectY,
            x1: rectMidX,
            y1: rectHeight
          });
        }

        context.closePath();
        startX += rectWidth;
      });
    });
    drawObject.current = { ...drawObject.current, day: dayObject };
    return dayObject;
  };

  const toggleTooltip = visible => {
    const knob = document.getElementById("event-calendar-tool-tip-knob");
    ReactDom.unmountComponentAtNode(knob);

    if (visible) {
      ReactDom.render(
        <CapTooltip title="Today" visible>
          <div />
        </CapTooltip>,
        knob
      );
    }
    isTooltipVisible.current = visible;
  };

  const togglePopover = (visible, popoverContentProps) => {
    const knob = document.getElementById("event-calendar-popover-knob");
    ReactDom.unmountComponentAtNode(knob);
    const Component = popoverConent;

    if (visible) {
      ReactDom.render(
        <CapPopover
          visible={true}
          placement="left"
          content={<Component {...popoverContentProps} />}
        >
          <div />
        </CapPopover>,
        knob
      );
    }
  };

  const updatePosition = ({ mouseX, mouseY, knob }) => {
    const { style } = knob;
    if (mouseX) {
      style.display = "block";
      style.left = `${mouseX}px`;
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
    updatePosition({ mouseX, mouseY, knob: popoverKnob });
  };

  const getDayObject = () => {
    const {
      current: { day }
    } = drawObject;
    return day;
  };

  const getTodayRectObj = () => {
    const today = moment().format(dateKeyFormat);
    return getDayObject()[today];
  };

  const handleTodayLine = ({ mouseX, mouseY } = {}) => {
    const context = contextRef.current;
    const currentDayObj = getTodayRectObj();

    if (currentDayObj) {
      const { y, midX, height } = currentDayObj;
      return drawTodayLine({
        context,
        x: midX,
        y: y + dashLineOffsetY,
        x1: midX,
        y1: height,
        mouseX,
        mouseY
      });
    }
  };

  const toggleCursor = pointer =>
    (canvas.current.style.cursor = pointer ? "pointer" : "auto");

  const getRectDimensionOnNotFound = (date, isEnd) => {
    const day = getDayObject();
    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth
    } = getRectInitDimension();

    const dayObject = isEnd
      ? {
          ...initDayObject({
            x: width,
            y: rectY,
            midX: width,
            width: rectWidth,
            height: rectHeight
          }),
          isCont: true
        }
      : {
          ...initDayObject({
            x: rectX,
            y: rectY,
            midX: 1,
            width: rectWidth,
            height: rectHeight
          }),
          isCont: true
        };

    if (date) {
      drawObject.current = {
        ...drawObject.current,
        day: { ...day, [date]: dayObject }
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

    formattedEvents.length &&
      formattedEvents.forEach(eventRow => {
        eventRow.forEach(event => {
          const { title, start, end, backgroundColor } = event;
          const startDate = moment(start).format(dateKeyFormat);
          const endDate = moment(end).format(dateKeyFormat);

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
              color: "#091e42",
              textPadding,
              openLeft: startRect.isCont,
              openRight: endRect.isCont,
              mouseX,
              mouseY
            });

            if (mouseX && isPointInRoundRectTextPath) {
              currentHoverItem = {
                event,
                startRect,
                endRect,
                eventStartY,
                eventHeight,
                isNewEvent: true
              };
            }
          }
        });
        eventStartY += eventHeight + eventRowGap;
      });

    if (currentHoverItem) {
      const {
        event: { event_id: currentEventId }
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
    context.font = "normal 12px sans-serif";
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

  const onMouseMove = event => {
    const mouseX = event.nativeEvent.offsetX * pixelRatio;
    const mouseY = event.nativeEvent.offsetY * pixelRatio;

    drawEvent({ mouseX, mouseY });
    if (currentHoverEvent.current) {
      if (currentHoverEvent.current.isNewEvent) {
        const {
          event,
          startRect,
          eventHeight,
          eventStartY
        } = currentHoverEvent.current;
        const { midX } = startRect;
        updatePopoverKnobPosition({
          mouseX: midX,
          mouseY: eventStartY + eventHeight / 2
        });
        togglePopover(true, { ...event });
        currentHoverEvent.current = {
          ...currentHoverEvent.current,
          isNewEvent: false
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
          mouseY: mouseY / pixelRatio
        });
        toggleTooltip(event);
      }
    } else {
      toggleTooltip();
    }

    toggleCursor(isTodayLineHovered || currentHoverEvent.current);
  };

  const menu = (
    <CapMenu selectable={true}>
      <CapMenu.Item onClick={event => setDayGrid(1)}>Monday</CapMenu.Item>
      <CapMenu.Item onClick={event => setDayGrid(2)}>Tuesday</CapMenu.Item>
      <CapMenu.Item onClick={event => setDayGrid(3)}>Wednesday</CapMenu.Item>
      <CapMenu.Item onClick={event => setDayGrid(4)}>Thursday</CapMenu.Item>
      <CapMenu.Item onClick={event => setDayGrid(5)}>Friday</CapMenu.Item>
    </CapMenu>
  );

  return (
    <>
      <div className="event-calendar__header">
        <div className="event-calendar__header__left">
          <div>
            <CapIcon
              type="chevron-left"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setQuarter(quarter => quarter - 1);
              }}
            />
            <CapIcon
              type="chevron-right"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setQuarter(quarter => quarter + 1);
              }}
            />
          </div>
          <div className="quarter-label">
            {quarterInfo[getQuarterForDate(calendarDate)]}
          </div>
        </div>
        <div className="event-calendar__header__right">
          Calendar Grid Line
          <CapDropdown overlay={menu} placement="topRight">
            <CapButton
              type="flat"
              className={"CapButton"}
              suffix={<CapIcon size="s" type="chevron-down" color="#091e42" />}
            >
              {workWeek[dayGrid]}
            </CapButton>
          </CapDropdown>
        </div>
      </div>
      <MonthHeader displayMonths={displayMonths} />
      {/* This is canvas, not to be changed: calculates dimensions */}
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        ref={ref}
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
  events: PropTypes.array
};

export default CapEventCalendar;
