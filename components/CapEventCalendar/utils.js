import moment from "moment";
import { forEach, some } from "lodash";

export const getQuarterForDate = (date) => moment(date).quarter();

export const splitMonthsArrayToQuarterChunks = () => {
  const chunkSize = 3;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const chunks = [];
  for (let i = 0; i < months.length; i += chunkSize) {
    const chunk = months.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};

/**
 * The start and end of the months is calculated along with other information needed for month
 * This is being used for drawing the canvas via the displayMonths state value in CapEventCalendar
 * @param {Number} quarter  quarter for which we need to get all month info in order to calculate days and other information
 * @param {*} monthNames  this is for localization of month strings when displaying the month names in the header
 * @returns
 */
export const getMonthsForQuarter = (quarter, monthNames) => {
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
      name: monthNames[quarter - 1][0],
      month: quarterStartMonth,
      daysInMonth: moment(quarterStartDate).daysInMonth(),
    },
    {
      start: quarterMidDate,
      end: moment(quarterMidDate)
        .endOf("month")
        .format(),
      name: monthNames[quarter - 1][1],
      month: quarterMidMonth,
      daysInMonth: moment(quarterMidDate).daysInMonth(),
    },
    {
      start: quarterEndDate,
      end: moment(quarterEndDate)
        .endOf("month")
        .format(),
      name: monthNames[quarter - 1][2],
      month: quarterEndMonth,
      daysInMonth: moment(quarterEndDate).daysInMonth(),
    },
  ];
  return months;
};

/**
  * To display the dates in the header and caculate the rectangles to be drawn in the canvas
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

/**
 * Checks if the date lies between start and end or
 * if it is same as start date or end date
 * this is to decide if event associated with date param needs to be added/not
 * in the array containing the event which has the start and end dates params
 * @param {*} date
 * @param {*} start
 * @param {*} end
 * @returns
 */
export const checkIfDateIsInRange = (date, start, end) => {
  const _date = moment(date).format("DD-MM-YYYY");
  const _start = moment(start).format("DD-MM-YYYY");
  const _end = moment(end).format("DD-MM-YYYY");
  return moment(date).isBetween(start, end) || _date === _start || _date === _end;
};

/**
 * This is to check if the given event spans a longer duration( quarter long or spans multiple quarter)
 * So as to create a new array for such events
 * @param {*} eventInRow
 * @param {*} newEvent
 * @returns
 */
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
export const formatDataToSuitCanvas = (events) => {
  if (events.length) {
    const formattedEvents = [];//array containing multiple array of events
    forEach(events, (eachEvent) => {
      if (formattedEvents.length === 0) {
        formattedEvents.push([eachEvent]);
      } else if (formattedEvents.length > 0) {
        let isPushed = false;
        let isNewRow = false;
        formattedEvents.forEach((eventRow, index) => {
          if (!isPushed) {
            const lastEventRow = eventRow;
            const isClash = some(lastEventRow,
              (rowItem) => checkIfDateIsInRange(eachEvent.start, rowItem.start, rowItem.end)
                                            || checkIfDateIsInRange(eachEvent.end, rowItem.start, rowItem.end));
            const isOnSameDateRange = some(lastEventRow, (rowItem) => {
              const eventItemStart = moment(eachEvent.start, "DD-MM-YYYY");
              const eventItemEnd = moment(eachEvent.end, "DD-MM-YYYY");
              const rowItemStart = moment(rowItem.start, "DD-MM-YYYY");
              const rowItemEnd = moment(rowItem.end, "DD-MM-YYYY");
              return (
                eventItemStart.isSame(rowItemStart)
                                                && eventItemEnd.isSame(rowItemEnd)
              );
            });
            const ifEventIsLong = some(lastEventRow, (rowItem) => isEventLong(rowItem, eachEvent)); //to check if events span over the quarters
            if (isClash || isOnSameDateRange || ifEventIsLong) {
              isNewRow = true;
            } else {
              lastEventRow.push(eachEvent);
              formattedEvents[index] = lastEventRow;
              isPushed = true;
              isNewRow = false;
            }
          }
        });
        if (isNewRow) formattedEvents.push([eachEvent]);
      }
    });
    return formattedEvents;
  }
  return [];
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
 * rule 2: Incremented if the last quarter of current year is reached
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
