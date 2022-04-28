import React from "react";
import { CapCalendar } from "../../components";
import { resources, events } from "./demoData";

const CapCalendarDoc = () => (
  <CapCalendar resources={resources} events={events} />
);

export default CapCalendarDoc;
