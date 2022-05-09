import moment from 'moment';
import * as _ from 'lodash';
export const getMondaysOfMonth = (date) => {
  const _date = date || new Date();
  const monday = moment(_date).startOf('month').day("Monday");
  if (monday.date() > 7) monday.add(7, 'd');
  const month = monday.month();
  const mondaysOfMonth = [];
  while (month === monday.month()) {
    mondaysOfMonth.push(monday.date());
    monday.add(7, 'd');
  }
  return mondaysOfMonth;
};

export const getDate = (date) => date.format('D').toString();

export const getQuarterForDate = (date) => moment(date).quarter();

export const getMonthsForQuarter = (quarter) => {
  let months = [];
  const quarterStartDate = moment().utc().quarter(quarter).startOf('quarter').format();
  const quarterMidDate = moment(quarterStartDate).add(1, 'M').startOf('month').format();
  const quarterEndDate = moment(quarterStartDate).add(2, 'M').startOf('month').format();

  const quarterStartMonth = moment(quarterStartDate).month();
  const quarterMidMonth = moment(quarterMidDate).month();
  const quarterEndMonth = moment(quarterEndDate).month();

  months = [
    ...months,
    {
      start: quarterStartDate,
      end: moment(quarterStartDate).endOf('month').format(),
      name: getMonthName(quarterStartMonth),
      month: quarterStartMonth,
      daysInMonth: moment(quarterStartDate).daysInMonth(),
    },
    {
      start: quarterMidDate,
      end: moment(quarterMidDate).endOf('month').format(),
      name: getMonthName(quarterMidMonth),
      month: quarterMidMonth,
      daysInMonth: moment(quarterMidDate).daysInMonth(),
    },
    {
      start: quarterEndDate,
      end: moment(quarterEndDate).endOf('month').format(),
      name: getMonthName(quarterEndMonth),
      month: quarterEndMonth,
      daysInMonth: moment(quarterEndDate).daysInMonth(),
    },
  ];
  return months;
};

export const monthNames = moment.months();
export const getMonthName = (month) => monthNames[month];

export const getDaysOfMonth = (date) => {
  const month = moment(date).month();
  const year = moment(date).year();
  const monthDate = moment(`${year}-${month + 1}`, 'YYYY-MM');
  const daysInMonth = monthDate.daysInMonth();
  const arrDays = [monthDate.format()];
  let current = monthDate.format();
  for (let i = 1; i< daysInMonth;) {
    /* console.log({i}); */
    current = moment(current).add(1, 'day');
    arrDays.push(current.format());
    i++;
  }
  return arrDays;
};

export const getTotalNumberOfDaysInQuarter = (date) => {
  const quarterStart = moment(date).startOf('quarter');
  const quarterEnd = moment(date).endOf('quarter');
  return quarterEnd.diff(quarterStart, 'days');
};


export const checkIfDateIsInRange = (date, start, end) => moment(date).isBetween(start, end);

export const formatDataToSuitCanvas = (events) => {
  const formattedEvents = [];
  if (events.length) {
    _.forEach(events, (eventItem) => {
      if (!formattedEvents.length) {
        formattedEvents.push([eventItem]);
      } else {
        const lastEventRow = formattedEvents[formattedEvents.length - 1];
        const isClash = _.some(lastEventRow, (rowItem) => checkIfDateIsInRange(eventItem.start, rowItem.start, rowItem.end) || checkIfDateIsInRange(eventItem.end, rowItem.start, rowItem.end));
        const isOnSameDateRange = _.some(lastEventRow, ((rowItem) => moment(rowItem.end).diff(moment(rowItem.start), 'days') === moment(eventItem.end).diff(moment(eventItem.start), 'days') ));
        if (isClash || isOnSameDateRange) {
          formattedEvents.push([eventItem]);
        } else {
          lastEventRow.push(eventItem);
          formattedEvents[formattedEvents.length - 1] = lastEventRow;
        }
      }
    });
  }
  //   console.log(formattedEvents);
  return formattedEvents;
};
