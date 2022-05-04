import moment from 'moment';
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
    },
    {
      start: quarterMidDate,
      end: moment(quarterMidDate).endOf('month').format(),
      name: getMonthName(quarterMidMonth),
      month: quarterMidMonth,
    },
    {
      start: quarterEndDate,
      end: moment(quarterEndDate).endOf('month').format(),
      name: getMonthName(quarterEndMonth),
      month: quarterEndMonth,
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
