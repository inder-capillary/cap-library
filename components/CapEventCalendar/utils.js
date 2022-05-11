import moment from "moment";
import * as _ from "lodash";

//not used
export const getMondaysOfMonth = (date) => {
  const _date = date || new Date();
  const monday = moment(_date)
    .startOf("month")
    .day("Monday");
  if (monday.date() > 7) monday.add(7, "d");
  const month = monday.month();
  const mondaysOfMonth = [];
  while (month === monday.month()) {
    mondaysOfMonth.push(monday.date());
    monday.add(7, "d");
  }
  return mondaysOfMonth;
};

//not used
export const getDate = (date) => date.format("D").toString();

export const getQuarterForDate = (date) => moment(date).quarter();

export const getMonthsForQuarter = (quarter) => {
  let months = [];
  const quarterStartDate = moment()
    .utc()
    .quarter(quarter)
    .startOf("quarter")
    .format();
  const quarterMidDate = moment(quarterStartDate)
    .add(1, "M")
    .startOf("month")
    .format();
  const quarterEndDate = moment(quarterStartDate)
    .add(2, "M")
    .startOf("month")
    .format();

  const quarterStartMonth = moment(quarterStartDate).month();
  const quarterMidMonth = moment(quarterMidDate).month();
  const quarterEndMonth = moment(quarterEndDate).month();

  months = [
    ...months,
    {
      start: quarterStartDate,
      end: moment(quarterStartDate)
        .endOf("month")
        .format(),
      name: getMonthName(quarterStartMonth),
      month: quarterStartMonth,
      daysInMonth: moment(quarterStartDate).daysInMonth(),
    },
    {
      start: quarterMidDate,
      end: moment(quarterMidDate)
        .endOf("month")
        .format(),
      name: getMonthName(quarterMidMonth),
      month: quarterMidMonth,
      daysInMonth: moment(quarterMidDate).daysInMonth(),
    },
    {
      start: quarterEndDate,
      end: moment(quarterEndDate)
        .endOf("month")
        .format(),
      name: getMonthName(quarterEndMonth),
      month: quarterEndMonth,
      daysInMonth: moment(quarterEndDate).daysInMonth(),
    },
  ];
  return months;
};

export const monthNames = moment.months();
export const getMonthName = (month) => monthNames[month];

/**
  * To display the dates in the header
  * @param {*} date
  * @returns
  */
export const getDaysOfMonth = (date) => {
  const month = moment(date).month();
  const year = moment(date).year();
  const monthDate = moment(`${year}-${month + 1}`, "YYYY-MM");
  const daysInMonth = monthDate.daysInMonth();
  const arrDays = [monthDate.format()];
  let current = monthDate.format();
  for (let i = 1; i < daysInMonth; ) {
    current = moment(current).add(1, "day");
    arrDays.push(current.format());
    i++;
  }
  return arrDays;
};

//not used
export const getTotalNumberOfDaysInQuarter = (date) => {
  const quarterStart = moment(date).startOf("quarter");
  const quarterEnd = moment(date).endOf("quarter");
  return quarterEnd.diff(quarterStart, "days");
};

export const checkIfDateIsInRange = (date, start, end) => {
  const _date = moment(date).format("DD-MM-YYYY");
  const _start = moment(start).format("DD-MM-YYYY");
  const _end = moment(end).format("DD-MM-YYYY");
  return moment(date).isBetween(start, end) || _date === _start || _date === _end;
};

export const isEventLong = (eventInRow, newEvent) => (
  moment(newEvent.start).isBefore(moment(eventInRow.start))
    && moment(newEvent.end).isAfter(moment(eventInRow.end))
);

/**
 * In order to decide if events are to be displayed in new row, we follow rules
 * 1- event start and end dates should not be in-between/same of any existing event in the row
 * 2- if there is a long event that spans the quarter, we show that event and any events that are in the same date range, appear below in a new row
 * @param {Array} events
 * @param {Number} chosenQuarter
 * @returns
 */
export const formatDataToSuitCanvas = (events, chosenQuarter) => {
  const formattedEvents = [];
  if (events.length) {
    _.forEach(events, (eventItem) => {
    //check if date existe in the chosen quarter to avoid adding incorrect rows to the formatted events
      if (getQuarterForDate(eventItem.start) === chosenQuarter || getQuarterForDate(eventItem.end) === chosenQuarter) {
        if (!formattedEvents.length) {
          formattedEvents.push([eventItem]);
        } else {
          const lastEventRow = formattedEvents[formattedEvents.length - 1];
          //
          const isClash = _.some(lastEventRow,
            (rowItem) => checkIfDateIsInRange(eventItem.start, rowItem.start, rowItem.end)
                        || checkIfDateIsInRange(eventItem.end, rowItem.start, rowItem.end));
          const isOnSameDateRange = _.some(lastEventRow, (rowItem) => {
            const eventItemStart = moment(eventItem.start, "DD-MM-YYYY");
            const eventItemEnd = moment(eventItem.end, "DD-MM-YYYY");
            const rowItemStart = moment(rowItem.start, "DD-MM-YYYY");
            const rowItemEnd = moment(rowItem.end, "DD-MM-YYYY");
            return (
              eventItemStart.isSame(rowItemStart)
                        && eventItemEnd.isSame(rowItemEnd)
            );
          });
          const ifEventIsLong = _.some(lastEventRow, (rowItem) => isEventLong(rowItem, eventItem)); //to check if events span over the quarters
          if (isClash || isOnSameDateRange || ifEventIsLong) {
            formattedEvents.push([eventItem]);
          } else {
            lastEventRow.push(eventItem);
            formattedEvents[formattedEvents.length - 1] = lastEventRow;
          }
        }
      }
    });
  }

  return formattedEvents;
};

const startMonthOfQuarter = {
  1: 0,
  2: 3,
  3: 6,
  4: 11,
};

export const getFirstDateOfQuarter = (quarter) => moment().month(quarter).startOf().format();

/**
 * Check if the year needs to be incremented/decremented based on the following rules
 * For decrement:
 * rule 1: Year can be decremented to the last year only
 * rule 2: check if the 1st quarter of last year is reached
 * For increment:
 * rule 1: Year is incremented infinitely
 * rule 2: Incremented if the last quarter if current year is reached
 * Default:
 * rule 1:Increment quarter for the current year
 * @param {Number} quarter
 * @param {String} date
 * @param {Boolean} increment
 * @param {String} referenceDate
 * @returns
 */
export const handleYearChange = (quarter, date, increment, referenceDate) => {
  const year = moment(date).year();
  const refYear = referenceDate && moment(referenceDate).year();
  if (referenceDate) {
    if ((year === refYear - 1) && quarter === 1) return false;

    if (quarter === 1 && !increment) {
      const updatedDate = moment().set({year: year - 1, month: 11});
      return [4, updatedDate.startOf('month').format()];
    }
  }
  if (quarter === 4 && increment) {
    const updatedDate = moment().set({year: year + 1, month: 0});
    return [1, updatedDate.startOf('month').format()];
  }

  const _quarter = increment ? quarter + 1 : quarter - 1;
  const updatedDate = moment().set({year, month: startMonthOfQuarter[_quarter]});
  return [_quarter, updatedDate.startOf('month').format(), quarter === 2 && year === (refYear - 1)];
};
