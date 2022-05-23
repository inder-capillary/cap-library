import React, { useState } from "react";
import moment from "moment";
import CapEventCalendar from "../../components/CapEventCalendar/CapEventCalendar";
import PropertyTable from "../../helpers/PropertyTable";
import {
  quarterLabels,
  dayLabels,
  allQuartersLabel,
  monthLabels,
  q1,
  q2,
  q3,
} from "./demoData";

const PopoverContent = (event) => (
  <div style={{ width: 180 }}>
    <div>{event.title}</div>
    {event.description && <p>{event.description}</p>}
    <span>
      {`${moment(event.start).format("DD MMM YYYY")} - ${moment(
        event.end
      ).format("DD MMM YYYY")}`}
    </span>
  </div>
);

const infoData = [
  {
    key: 1,
    property: "onQuarterChange(Mandatory)",
    description:
      "The callback function to detect the change in quarter in order to fetch events",
    type: "callback",
    default: "-",
  },
  {
    key: 2,
    property: "events(Mandatory)",
    description: "Events that are displayed on the calendar. ",
    type: "array",
    default: JSON.stringify([
      {
        event_id: "event_id1",
        title: "Event 1",
        start: "2022-01-02 09:30:00",
        end: "2022-03-20 23:30:00",
        backgroundColor: "#e9e9ea",
        popoverProps: {
          link: "https://link.com",
          name: "John Doe",
        },
      },
    ]),
  },
  {
    key: 3,
    property: "popoverConent",
    description:
      "The callback function to get the popover content for the event",
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
    description:
      "Pass the appropriate quarter value from the example upon quarter change. The letters are month initials.",
    type: "string",
    default: "For ex: JFM/AMJ/JAS/OND",
  },
  {
    key: 6,
    property: "calendarGridLineLabel(Mandatory)",
    description:
      "Label that appear beside the dropdown that selects the day to be highlighted in calendar",
    type: "string",
    default: "Calendar Grid Line",
  },
  {
    key: 7,
    property: "dayLabels(Mandatory)",
    description:
      "Array of day names in the language of your choice needs to be passed to be displayed in dropdown. Please follow the order followed in default.",
    type: "string",
    default: JSON.stringify([
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]),
  },
  {
    key: 6,
    property: "allQuartersLabel(Mandatory)",
    description:
      "Array of quarter labels in the language of your choice are used to highlight the current quarter. 4 items in array correspond to 4 quarters in ascending order",
    type: "string",
    default: JSON.stringify([
      "(Jan  Feb  Mar)",
      "(Apr  May  Jun)",
      "(July  Aug  Sep)",
      "(Oct  Nov  Dec)",
    ]),
  },
  {
    key: 7,
    property: "monthLabels(Mandatory)",
    description:
      "Array of month names in the language of choice needs to be passed to be displayed as header above each month in the calendar. Please follow the order followed in default.",
    type: "string",
    default: JSON.stringify([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
  },
  {
    key: 8,
    property: "dashLineOffsetY",
    description: "Dashed line start Y",
    type: "number",
    default: 20,
  },
  {
    key: 9,
    property: "eventHeight",
    description: "Height of event",
    type: "number",
    default: 24,
  },
  {
    key: 10,
    property: "eventRowGap",
    description: "Row gap between events",
    type: "number",
    default: 12,
  },
  {
    key: 11,
    property: "textPadding",
    description: "Text padding left and right inside event",
    type: "number",
    default: 12,
  },
  {
    key: 12,
    property: "eventStartYOffset",
    description: "First event start Y",
    type: "number",
    default: 40,
  },
  {
    key: 13,
    property: "minCanvasHeight",
    description: "Minimum canvas height",
    type: "number",
    default: 150,
  },
  {
    key: 14,
    property: "todayTooltipProps",
    description: "Props for today tooltip",
    type: "object",
    default: JSON.stringify({ title: "Today" }),
  },
  {
    key: 15,
    property: "canvasFont",
    description: "Font weight, size and family for canvas drawing",
    type: "string",
    default: "normal 12px Roboto",
  },
  {
    key: 16,
    property: "popoverPlacement",
    description: "Placement for event popover",
    type: "string",
    default: "leftTop",
  },
];

const CapEventCalendarDoc = () => {
  const [events, setEvents] = useState(q1);
  const [quarter, setQuarter] = useState("JFM");

  const fetchEventsForQuarter = (quarterNum) => {
    setQuarter(quarterLabels[quarterNum - 1]);
    switch (quarterNum) {
      case 1:
        setEvents(q1);
        break;
      case 2:
        setEvents(q2);
        break;
      case 3:
        setEvents(q3);
        break;
      default:
        setEvents([]);
        break;
    }
  };
  return (
    <div>
      <CapEventCalendar
        events={events}
        onQuarterChange={fetchEventsForQuarter}
        popoverContent={PopoverContent}
        selectedQuarter={quarter}
        calendarDate={moment().format()}
        calendarGridLineLabel="Calendar Grid Line"
        dayLabels={dayLabels}
        allQuartersLabel={allQuartersLabel}
        monthLabels={monthLabels}
        emptyState
      />
      <PropertyTable data={infoData} />
    </div>
  );
};

export default CapEventCalendarDoc;
