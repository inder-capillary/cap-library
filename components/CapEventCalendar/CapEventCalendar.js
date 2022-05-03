import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as _ from 'lodash';
import './_capEventCalendar.scss';
// import CapPopover from '../CapPopover';
import { weekDays } from './constants';
import CapIcon from '../CapIcon';
import { getQuarterForDate, getMonthsForQuarter, getMondaysOfMonth } from './utils';
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
    admin_id: [3],
  },
];
const CapEventCalendar = ({currentDate = moment().format(), events = data}) => {
  // const [quarter, setQuarter] = useState(getQuarterForDate(currentDate));
  const [displayMonths] = useState(getMonthsForQuarter(getQuarterForDate(currentDate)));
  // const [startDate, setStartDate] = useState(currentDate);

  useEffect(() => {
  }, []);


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
               const mondayList = getMondaysOfMonth(month.start);
               return (
                 <div key={monthIndex + month.name} className="month">
                   {
                     mondayList.map((monday) => (
                       <div className="week" key={`${month.name + monday}`}>
                         {
                           weekDays.map((day, dayIndex) => (
                             <div
                               className={`week__label ${day === 1 ? '' : 'hide'}
                               ${moment(month.start).day() === day || moment(month.end).day() === day
                               ? 'show-left-border' : ''}`}
                               key={day + monday + dayIndex}>
                               {monday}
                             </div>
                           ))
                         }
                       </div>
                     ))
                   }
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
                         const mondayList = getMondaysOfMonth(month.start);
                         return (
                           <div key={`${monthIndex}month`} className="month">
                             {
                               mondayList.map((monday) => (
                                 <div className="week" key={`${month.name + monday}`}>
                                   {/* {
                                           weekDays.map((day,index2) =>{
                                             console.log("I am here", )
                                           return (moment(month.start).date() === day || moment(month.end) === day || day === 1 &&
                                           <div className='week__label' key={event.title + index2}>{day}</div>)
                                           }
                                           )
                                         } */}
                                   {
                                     weekDays.map((day, dayIndex) => (
                                       <div
                                         className={`week__label 
                                 ${moment(month.start).day() === day || moment(month.end).day() === day || day === 1 ? '' : 'hide'}`}
                                         key={`week${dayIndex}of${month}`}>
                                         {day}
                                       </div>
                                     ))
                                   }
                                 </div>
                               ))
                             }
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
