import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import moment from "moment";
import {
  getQuarterForDate,
  getMonthsForQuarter,
  getDaysOfMonth,
  getTotalNumberOfDaysInQuarter,
  formatDateToSuitCanvas,
} from "./utils";

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
    start: "2022/5/4",
    end: "2022/5/29",
    backgroundColor: "#c7e7c7",
  },
  {
    event_id: 3,
    title: "Event 3",
    start: "2022/4/15",
    end: "2022/5/1",
    backgroundColor: "#feedc0",
  },
];

const CapEventCalendar = ({calendarDate = moment().format(), events = datas}) => {
  const [currentDate, setCurrentDate] = useState(moment().format());
  const [displayMonths] = useState(
    getMonthsForQuarter(getQuarterForDate(moment().format()))
  );
  const [formattedEvents] = useState(formatDateToSuitCanvas(events));

  useEffect(() => {
    setCurrentDate(currentDate || moment().format());
  }, [calendarDate]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pixelRatio = window.devicePixelRatio;
  const ref = useRef(null);
  const canvas = useRef(null);

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

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");

    let startAt = 0;
    const itemWidth = width / getTotalNumberOfDaysInQuarter(currentDate);

    const dayObject = {};

    displayMonths.forEach((month, monthIndex) => {
      const allDays = getDaysOfMonth(month.start);

      allDays.forEach((day) => {
        context.beginPath();
        context.rect(startAt, 0, itemWidth, height);
        context.closePath();

        dayObject[moment(day).format()] = {
          x: startAt,
          y: 0,
          width: itemWidth,
          height,
        };

        if (moment(day).day() === 1) {
          context.beginPath();
          context.fillStyle = "#ffff";
          context.fillRect(startAt, 10, 20, 20);
          context.fillStyle = "#091e42";
          context.font = "12px Roboto";
          context.textAlign = "center";
          context.fillText(moment(day).format("D"), startAt + 10, 10 + 5);
          context.closePath();

          context.beginPath();
          context.setLineDash([5, 3]);
          context.strokeStyle = "#b3bac5";
          context.moveTo(startAt + itemWidth / 2, +20);
          context.lineTo(startAt + itemWidth / 2, height);
          context.stroke();
          context.setLineDash([]);
          context.closePath();
        }

        if (showBorder(month, day, monthIndex)) {
          context.beginPath();
          context.strokeStyle = "#7a869a";
          context.moveTo(startAt + itemWidth / 2, 0);
          context.lineTo(startAt + itemWidth / 2, height);
          context.stroke();
          context.closePath();
        }

        if (moment(day).date() === moment().date() && moment(day).month() === moment().month()) {
          context.beginPath();
          context.strokeStyle = "#2466ea";
          context.arc(startAt, 50, itemWidth / 2, 0, 2 * Math.PI);

          context.moveTo(startAt + itemWidth / 2, +20);
          context.lineTo(startAt + itemWidth / 2, height);
          // context.globalCompositeOperation ='destination-over'
          context.stroke();
          context.closePath();
        }

        startAt += itemWidth;
      });
    });

    let heightCalc = 20;
    formattedEvents.forEach(({ title, start, end, backgroundColor }) => {
      const startRect = dayObject[moment(start).format()];
      const endRect = dayObject[moment(end).format()];
      context.beginPath();
      context.fillStyle = backgroundColor;
      context.fillRect(startRect.x, heightCalc, startRect.x + endRect.x, 20);
      context.fillStyle = "#091e42";
      context.font = "12px Roboto";
      context.textAlign = "start";
      context.fillText(title, startRect.x + 8, heightCalc + 14);
      context.closePath();
      heightCalc += 20 + 10;
      // console.log({ startRect, endRect });
    });


    // console.log({ dayObject });
  }, [width, height]);

  const displayWidth = Math.floor(pixelRatio * width);
  const displayHeight = Math.floor(pixelRatio * height);
  const style = { width, height };

  return (
    <div style={{ width: "100%", height: "100%" }} ref={ref}>
      <canvas
        ref={canvas}
        width={displayWidth}
        height={displayHeight}
        style={style}
      />
    </div>
  );
};

CapEventCalendar.propTypes = {
  calendarDate: PropTypes.string,
  events: PropTypes.array,
};

export default CapEventCalendar;
