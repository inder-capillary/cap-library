import React, {useState} from "react";
import moment from 'moment';
import CapEventCalendar from "../../components/CapEventCalendar/CapEventCalendar";
import PropertyTable from "../../helpers/PropertyTable";
import { q1, q2, q3 } from "./demoData";

const PopoverContent = (event) => (
  <div>
    <div>{event.title}</div>
    {
      event.description
        && <p>{event.description}</p>
    }
    <span>{`${moment(event.start).format('DD MMM YYYY')} - ${moment(event.end).format('DD MMM YYYY')}`}</span>
  </div>
);

const infoData = [
  {
    key: 1,
    property: "onQuarterChange(Mandatory)",
    description: "The callback function to detect the change in quarter in order to fetch events",
    type: "callback",
    default: "-",
  },
  {
    key: 2,
    property: "events(Mandatory)",
    description: "Events that are displayed on the calendar. ",
    type: "array",
    default: JSON.stringify([{
      event_id: 'event_id1',
      title: "Event 1",
      start: '2022-01-02 09:30:00',
      end: '2022-03-20 23:30:00',
      backgroundColor: "#e9e9ea",
      popoverProps: {
        link: 'https://link.com',
        name: 'John Doe',
      },
    }]),
  },
  {
    key: 3,
    property: "popoverConent",
    description: "The callback function to get the popover content for the event",
    type: "callback",
    default: "Display's event name ",
  },
  {
    key: 4,
    property: "calendarDate (Use moment to handle these dates)",
    description: "The date is needed to present current day in quarter",
    type: "string",
    default: "current date",
  },
  {
    key: 5,
    property: "selectedQuarter(Mandatory)",
    description: "The date is needed to present current day in quarter",
    type: "string",
    default: "Ex: JFM,AMJ,JAS,OND",
  },
];

const quarterLabels = [
  "JFM",
  "AMJ",
  "JAS",
  "OND",
];

const CapEventCalendarDoc = () => {
  const [events, setEvents] = useState(q1);
  const [quarter, setQuarter] = useState("JFM");

  const fetchEventsForQuarter = (quarterNum) => {
    setQuarter(quarterLabels[quarterNum - 1]);
    switch (quarterNum) {
      case 1: setEvents(q1); break;
      case 2: setEvents(q2); break;
      case 3: setEvents(q3); break;
      default: setEvents([]); break;
    }
  };
  return (
    <div>
      <CapEventCalendar
        events={events}
        onQuarterChange={fetchEventsForQuarter}
        popoverContent={PopoverContent}
        selectedQuarter={quarter}
        calendarDate={moment().format()} />
      <PropertyTable data={infoData} />
    </div>
  );
};

export default CapEventCalendarDoc;
