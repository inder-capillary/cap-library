import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as _ from 'lodash';
import './_capEventCalendar.scss';
// import CapPopover from '../CapPopover';
// import { weekDays } from './constants';
import CapIcon from '../CapIcon';
import { getQuarterForDate, getMonthsForQuarter, getDaysOfMonth } from './utils';
import MonthHeader from './components/MonthHeader';

/**
 * Capillary Calendar Component using react big scheduler
 */
/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */

const data = [
  {
    event_id: 7,
    title: "Event 7",
    start: new Date("2022/5/4 09:00"),
    end: new Date("2022/5/5 09:20"),
  },
  {
    event_id: 8,
    title: "Event 7",
    start: new Date("2022/5/4 09:00"),
    end: new Date("2022/5/5 09:20"),
  },
];
const CapEventCalendar = ({currentDate = moment().format(), events = data}) => {
  // const [quarter, setQuarter] = useState(getQuarterForDate(currentDate));
  const [displayMonths] = useState(getMonthsForQuarter(getQuarterForDate(currentDate)));
  // const [startDate, setStartDate] = useState(currentDate);

  useEffect(() => {
  }, []);

  const showBorder = (month, day, monthIndex) => {
    if (moment(month.end).date() === moment(day).date()) return true;
    if (!monthIndex) {
      if (moment(month.start).date() === moment(day).date()) return true;
    }
    return false;
  };

  // const showEvent = (event, monthObj, day) => {
  //   const eventStart = moment(event.start).format();
  //   const eventEnd = moment(event.end).format();
  //   if (moment(eventStart).month() === monthObj.month) {
  //     if (moment(eventStart).date() >= moment(day).date() || moment(eventEnd).date() >= moment(day).date()) {
  //       return <>{event.title}</>;
  //     }
  //   }
  // };

  return (
    <div className="event-calendar">
      <div className="event-calendar__header">
        <div>
          <CapIcon type="chevron-left" />
          <CapIcon type="chevron-right" />
        </div>
      </div>
      <MonthHeader displayMonths={displayMonths} />
      <div className="event-calendar__scheduler">
        <div className="event-calendar__scheduler__header">
          {
            !_.isEmpty(displayMonths)
             && displayMonths.map((month, monthIndex) => {
               const allDays = getDaysOfMonth(month.start);
               return (
                 <div key={monthIndex + month.name} className="month">
                   <div className="days">
                     {
                       allDays.map((day) => (
                         <div
                           key={month.name + day}
                           className={`each-day ${moment(day).day() === 1 ? '' : 'hide'}
                              ${showBorder(month, day, monthIndex)
                           ? 'show-right-border' : ''}`}>
                           {moment(day).format('D')}
                         </div>
                       ))
                     }
                   </div>
                 </div>
               );
             })
          }
        </div>
        <div className="event-calendar__scheduler__timeline">
          {
            events && events.length
              && events.map((event) => (
                event && (
                  <div className="event-row">
                    {
                      !_.isEmpty(displayMonths)
                       && displayMonths.map((month, monthIndex) => {
                         const allDays = getDaysOfMonth(month.start);
                         return (
                           <div key={`${monthIndex}month`} className="month">
                             <div className="days">
                               {
                                 allDays.map((day) => (
                                   <div
                                     key={month.name + day}
                                     className={`each-day ${moment(day).day() === 1 ? 'show-dashed-border' : 'hide'}
                                      ${showBorder(month, day, monthIndex)
                                     ? 'show-right-border' : ''}`}>
                                     {/* {moment(day).format('D')} */}
                                   </div>
                                 ))
                               }
                             </div>
                           </div>
                         );
                       })
                    }
                  </div>
                )
              ))
          }
        </div>
      </div>
    </div>
  );
};

CapEventCalendar.propTypes = {
  currentDate: PropTypes.string,
  events: PropTypes.array,
};
/* eslint-enable no-param-reassign */

export default CapEventCalendar;
