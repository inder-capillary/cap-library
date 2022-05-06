import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import ReactDom from "react-dom";
import moment from "moment";

import CapTooltip from "../CapTooltip";

import {
  getQuarterForDate,
  getMonthsForQuarter,
  getDaysOfMonth,
  getTotalNumberOfDaysInQuarter,
  formatDateToSuitCanvas,
} from "./utils";
import {
  drawHeadingText,
  drawDashedLines,
  drawTodayLine,
  drawLineSeperator,
} from "./drawUtils";

const datas = [
  {
    event_id: 1,
    title: "Event 1",
    start: "2022/4/1",
    end: "2022/6/30",
    backgroundColor: "#e9e9ea",
  },
  {
    event_id: 2,
    title: "Event 2",
    start: "2022/4/1",
    end: "2022/6/30",
    backgroundColor: "#c7e7c7",
  },
  {
    event_id: 3,
    title: "Event 3",
    start: "2022/5/4",
    end: "2022/5/29",
    backgroundColor: "#c7e7c7",
  },
  {
    event_id: 4,
    title: "Event 4",
    start: "2022/4/15",
    end: "2022/5/1",
    backgroundColor: "#feedc0",
  },
];
// const datas2 = [[
//   {
//     event_id: 1,
//     title: "Event 1",
//     start: "2022/4/1",
//     end: "2022/4/9",
//     backgroundColor: "#e9e9ea",
//   },
//   {
//     event_id: 1.1,
//     title: "Event 1.1",
//     start: "2022/4/30",
//     end: "2022/5/15",
//     backgroundColor: "#feedc0",
//   },
// ],
// [
//   {
//     event_id: 2,
//     title: "Event 2",
//     start: "2022/5/4",
//     end: "2022/5/29",
//     backgroundColor: "#c7e7c7",
//   },
// ],
// [
//   {
//     event_id: 3,
//     title: "Event 3",
//     start: "2022/4/15",
//     end: "2022/5/1",
//     backgroundColor: "#feedc0",
//   },
// ],
// ];

/* eslint-disable */
const dashLineOffsetY = 20;
const dateKeyFormat = "DD/MM/YYYY";

const CapEventCalendar = ({calendarDate = moment().format(), events = datas}) => {
  const [currentDate, setCurrentDate] = useState(moment().format());
  const [displayMonths] = useState(
    getMonthsForQuarter(getQuarterForDate(moment().format()))
  );
  const [formattedEvents] = useState(formatDateToSuitCanvas(events));

  useEffect(() => {
    setCurrentDate(currentDate || moment().format());
  }, [calendarDate]);
  const noOfDaysInQuarter = getTotalNumberOfDaysInQuarter(currentDate);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pixelRatio = window.devicePixelRatio;

  const ref = useRef(null);
  const canvas = useRef(null);
  const contextRef = useRef(null);
  const drawObject = useRef(null);
  const isTooltipVisible = useRef(null);

  const showBorder = (month, day, monthIndex) => {
    if (moment(month.end).date() === moment(day).date()) return true;
    if (!monthIndex) {
      if (moment(month.start).date() === moment(day).date()) return true;
    }
    return false;
  };

  // responsive width and height
  useEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight > 400 ? ref.current.clientHeight : 400);
  }, []);

  const drawLayout = ({ context, width, height }) => {
    const dayObject = {};

    const [rectX, rectY, rectHeight, rectWidth] = [
      0,
      0,
      height,
      width / noOfDaysInQuarter,
    ];

    displayMonths.forEach((month, monthIndex) => {
      const allDays = getDaysOfMonth(month.start);

      allDays.forEach((day) => {
        const rectMidX = rectX + rectWidth / 2;
        context.beginPath();
        context.rect(rectX, rectY, rectWidth, rectHeight);
        context.closePath();

        const dayKey = moment(day).format(dateKeyFormat);
        const today = moment().format(dateKeyFormat);
        const isToday = dayKey === today;

        dayObject[dayKey] = {
          x: rectX,
          y: rectY,
          midX: rectMidX,
          width: rectWidth,
          height: rectHeight,
        };

        if (moment(day).day() === 1 && !isToday) {
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

        if (showBorder(month, day, monthIndex)) {
          drawLineSeperator({
            context,
            x: rectMidX,
            y: rectY,
            x1: rectMidX,
            y1: rectHeight,
          });
        }

        rectX += rectWidth;
      });
    });
    drawObject.current = { ...drawObject.current, day: dayObject };
    return dayObject;
  };

  // let heightCalc = 20;
  // formattedEvents.forEach(({ title, start, end, backgroundColor }) => {
  //   const startRect = dayObject[moment(start).format()];
  //   const endRect = dayObject[moment(end).format()];
  //   context.beginPath();
  //   context.fillStyle = backgroundColor;
  //   context.fillRect(startRect.x, heightCalc, startRect.x + endRect.x, 20);
  //   context.fillStyle = "#091e42";
  //   context.font = "12px Roboto";
  //   context.textAlign = "start";
  //   context.fillText(title, startRect.x + 8, heightCalc + 14);
  //   context.closePath();
  //   heightCalc += 20 + 10;
  // console.log({ startRect, endRect });
  const toggleTooltip = (visible) => {
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

  const updateKnobPosition = ({ mouseX, mouseY } = {}) => {
    const knob = document.getElementById("event-calendar-tool-tip-knob");
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

  const handleTodayLine = ({ mouseX, mouseY } = {}) => {
    const {
      current: { day },
    } = drawObject;
    const context = contextRef.current;

    const today = moment().format(dateKeyFormat);
    const currentDayObj = day[today];

    if (currentDayObj) {
      const { x, y, midX, height } = currentDayObj;
      return drawTodayLine({
        context,
        x: midX,
        y: y + dashLineOffsetY,
        x1: midX,
        y1: height,
        mouseX,
        mouseY,
      });
    }
  };

  const drawEvent = () => {
    let eventStartY = 40;
    const eventHeight = 20;
    const eventRowGap = 10;
    const {
      current: { day },
    } = drawObject;
    const context = contextRef.current;

    formattedEvents.forEach((row) => {
      row.forEach(({ title, start, end, backgroundColor }) => {
        console.log(
          moment(start).format(dateKeyFormat),
          moment(end).format(dateKeyFormat)
        );
        const startRect = day[moment(start).format(dateKeyFormat)];
        const endRect = day[moment(end).format(dateKeyFormat)];
        if (startRect && endRect) {
          context.beginPath();
          context.fillStyle = backgroundColor;
          context.fillRect(
            startRect.midX,
            eventStartY,
            endRect.midX - startRect.midX,
            eventHeight
          );
          context.fillStyle = "#091e42";
          context.font = "12px Roboto";
          context.textAlign = "start";
          context.fillText(title, startRect.midX + 8, eventStartY + 14);
          context.closePath();
        }
      });
      eventStartY += eventHeight + eventRowGap;
    });
  };

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");
    contextRef.current = context;

    drawLayout({ context, width, height });
    handleTodayLine();
    drawEvent();
  }, [width, height]);

  const displayWidth = Math.floor(pixelRatio * width);
  const displayHeight = Math.floor(pixelRatio * height);
  const style = { width, height };

  const onMouseMove = (event) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;

    if (handleTodayLine({ mouseX, mouseY })) {
      if (!isTooltipVisible.current) {
        updateKnobPosition({ mouseX, mouseY });
        toggleTooltip(event);
      }
    } else {
      toggleTooltip();
    }
  };

  return (
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
      <div style={{ position: "absolute" }} id="event-calendar-tool-tip-knob" />
    </div>
  );
};

CapEventCalendar.propTypes = {
  calendarDate: PropTypes.string,
  events: PropTypes.array,
};

export default CapEventCalendar;
