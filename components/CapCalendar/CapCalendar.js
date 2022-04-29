import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { DndProvider, createDndContext } from 'react-dnd';
// import {HTML5Backend} from 'react-dnd-html5-backend';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import withDragDropContext from './withDndContext';
import 'react-big-scheduler/lib/css/style.css';
import CapPopover from '../CapPopover';
import { quarterInfo } from './constants';

/**
 * Capillary Calendar Component using react big scheduler
 */
// const DndContext = createDndContext(HTML5Backend);
/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
const CapCalendar = ({
  resources = [],
  events = [],
  schedulerWidth = '100%',
  schedulerMaxHeight = 700,
  checkConflict = true,
}) => {
  const [viewModel, setViewModel] = useState(undefined);
  const [startMonth, setStartMonth] = useState(null);
  const displayMonths = moment.months();

  useEffect(() => {
    const CalendarInfo = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Quarter,
      false,
      false,
      {
        nonAgendaOtherCellHeaderFormat: 'D',
        quarterCellWidth: 16,
        quarterResourceTableWidth: 50,
        resourceName: '',
        schedulerWidth,
        nonWorkingTimeHeadBgColor: '',
        views: [],
        schedulerMaxHeight,
        checkConflict,
      }, {
        getDateLabelFunc: getDateLabel,
      }, moment);
    CalendarInfo.setLocaleMoment(moment);
    CalendarInfo.setResources(resources);
    CalendarInfo.setEvents(events);
    CalendarInfo.startDate = moment().date();
    setViewModel(CalendarInfo);
  }, []);

  useEffect(() => {
    setStartMonth(viewModel && viewModel.startDate ? moment(viewModel.startDate, 'YYYY-MM-DD').toDate().getMonth()
      : moment('YYYY-MM-DD').toDate().getMonth());
    hideWeekDays();
    mondayVerticalLine();
    plotVerticalsToday();
    monthlyVerticalLine();
  }, [viewModel]);

  const hideWeekDays = () => {
    let showIndex = -1;
    document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {
      item.style.visibility = "hidden";
      if (item.style.color === "rgb(153, 153, 153)") {
        showIndex = index + 2;
      } else if (index === showIndex) {
        item.style.visibility = "unset";
      }
    });
  };

  const mondayVerticalLine = () => {
    let showBar = -1;

    document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
      item.style.border = "none";
      if (item.style.backgroundColor === "rgb(255, 240, 246)") {
        showBar = index + 2;
        item.style.visibility = "hidden";
      } else if (index === showBar) {
        item.style.borderLeft = "dashed 1px #b3bac5";
        item.style.zIndex = "5000";
      }
    });
  };

  const plotVerticalsToday = () => {
    const todayIndex = viewModel && viewModel.headers && viewModel.headers.length
      ? viewModel.headers.findIndex((item) => moment(item.time).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')) : 0;
    let cursor = todayIndex;
    document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
      if (index === todayIndex) {
        item.childNodes[0].style.height = '8px';
        item.childNodes[0].style.width = '8px';
        item.childNodes[0].style.borderRadius = '100%';
        item.childNodes[0].style.border = "2px solid blue";
        item.childNodes[0].style.backgroundColor = "blue";
        item.childNodes[0].style.position = "relative";
        item.childNodes[0].style.left = "-5px";
        item.childNodes[0].style.top = "-9px";
      }
      if (todayIndex !== -1 && index === cursor) {
        item.style.borderLeft = "2px solid blue";
        item.style.zIndex = "5000";
        cursor += (viewModel && viewModel.headers ? viewModel.headers : []).length;
      }
    });
  };

  const getDateLabel = (schedulerData, viewType, startDate) => {
    const start = schedulerData.localeMoment(startDate);
    let dateLabel = start.format('YYYY');

    if (viewType === ViewTypes.Quarter) {
      const string = quarterInfo[start.quarter()];
      dateLabel = `${string} ${start.format('YYYY')}`;
    }
    return dateLabel;
  };


  const monthlyVerticalLine = () => {
    let showLine = -1;
    const length = viewModel && viewModel.headers.length;
    document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {
      const date = item.firstChild.firstChild.innerHTML;

      //beginning of first month of every quarter
      if (date === 1 && index === 0) {
        showLine = index;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item1, index1) => {
          if (index1 === showLine) {
            item1.style.borderLeft = "solid 1.5px #7a869a";
            showLine += length;
          }
        });
      }

      // end of month - for month ends falling in between the quarter
      if (date === 1) {
        showLine = index - 1;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item2, index2) => {
          if (index2 === showLine) {
            item2.style.borderLeft = "solid 1.5px #7a869a";
            showLine += length;
          }
        });
      }

      // end of month -  for dates falling at the end of the quarter
      if ((date === 31 || date === 30) && length === index + 1) {
        showLine = index;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item3, index3) => {
          if (index3 === showLine) {
            item3.style.borderLeft = "solid 1.5px #7a869a";
            showLine += length;
          }
        });
      }
    });
  };

  const eventItemTemplateResolver = (schedulerData, event, bgColor, isStart, isEnd, mustAddCssClass, mustBeHeight, agendaMaxEventWidth) => {
    const titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, event);
    let divStyle = {
      backgroundColor: bgColor,
      height: `${mustBeHeight}px`,
      margin: '20px 1px 12px 9px',
      padding: '4px 180px 4px 12px',
      borderRadius: '4px',
    };

    const spanStyle = {
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      color: '#091e42',
    };

    if (agendaMaxEventWidth) divStyle = {...divStyle, maxWidth: agendaMaxEventWidth};

    return (
      <div key={event.id} className={mustAddCssClass} style={divStyle}>
        <span style={spanStyle}>{titleText}</span>
      </div>
    );
  };

  const eventItemPopoverTemplateResolver = (schedulerData, eventItem, title, start, end, statusColor) => (
    <CapPopover>
      <div style={{width: '300px'}}>
        <div className="status-dot" style={{backgroundColor: statusColor}} />

        <span className="header2-text" title={title}>{title}</span>

        <span className="header1-text">
          {start.format("HH:mm")}
          {' '}
-
          {' '}
          {end.format("HH:mm")}
        </span>

        {/* <button onClick={() => { demoButtonClicked(eventItem); }}>Demo</button> */}
      </div>
    </CapPopover>
  );
  const prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(events);
    setViewModel(schedulerData);
    hideWeekDays();
    mondayVerticalLine();
    plotVerticalsToday();
    monthlyVerticalLine();
    // setState({
    //     viewModel: schedulerData
    // }, () => {
    //     hideWeekDays();
    //     mondayVerticalLine();
    //     plotVerticalsToday();
    //     monthlyVerticalLine();
    // });
  };

  const nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(events);
    setViewModel(schedulerData);
    hideWeekDays();
    mondayVerticalLine();
    plotVerticalsToday();
    monthlyVerticalLine();
    // setState({
    //     viewModel: schedulerData
    // }, () => {
    //     hideWeekDays();
    //     mondayVerticalLine();
    //     plotVerticalsToday();
    //     monthlyVerticalLine();
    // });
  };
  //   const managerRef = useRef(DndContext);
  return (
    <div style={{ maxWidth: '100%'}}>
      { viewModel
                && <>
                  <div className="month-view-container">
                    <div className="month-view">{displayMonths[startMonth]}</div>
                    <div className="month-view">{displayMonths[startMonth + 1]}</div>
                    <div className="month-view">{displayMonths[startMonth + 2]}</div>
                  </div>
                  {/* <DndProvider
                    debugMode
                    backend={HTML5Backend}
                    manager={managerRef.current.dragDropManager}
                    context={DndContext}> */}
                  <Scheduler
                    schedulerData={viewModel}
                    prevClick={prevClick}
                    nextClick={nextClick}
                    showAgenda={false}
                    eventItemTemplateResolver={eventItemTemplateResolver}
                    eventItemPopoverTemplateResolver={eventItemPopoverTemplateResolver}
                  />
                  {/* </DndProvider> */}
                </>
      }
    </div>
  );
};

CapCalendar.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    parentId: PropTypes.string,
    groupOnly: PropTypes.bool,
  })),
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    start: PropTypes.string,
    end: PropTypes.string,
    resourceId: PropTypes.string,
    resizable: PropTypes.bool,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    startResizable: PropTypes.bool,
    endResizable: PropTypes.bool,
    movable: PropTypes.bool,
  })),
  schedulerWidth: PropTypes.string,
  schedulerMaxHeight: PropTypes.number,
  checkConflict: PropTypes.bool,
};
/* eslint-enable no-param-reassign */

export default withDragDropContext(CapCalendar);
// export default CapCalendar;
