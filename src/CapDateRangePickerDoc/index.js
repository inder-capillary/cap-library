/**
* CapDateRangePickerDoc
*/
import React, { Component } from "react";
import moment from 'moment';
import { CapDateRangePicker, CapHeading } from "../../components";
import DateRangePickerV2 from "../../components/CapDateRangePicker/DateRangePickerV2";
import PropertyTable from '../../helpers/PropertyTable';
import "./info.scss";


const infoData = [
  {
    key: 1,
    property: "size",
    description: "Size of the date range picker",
    type: "String (large | medium | small)",
    default: "large",
  },
  {
    key: 2,
    property: "seperator",
    description: "Seperator between start and end date",
    type: "string",
    default: "~",
  },
  {
    key: 3,
    property: "placeholder",
    description: "Placeholder for start and end date",
    type: "Array",
    default: "['Start date', 'End date']",
  },
  {
    key: 4,
    property: "value",
    description: "value for start and end date",
    type: "Array ",
    default: "[moment, monment]",
  },
  {
    key: 5,
    property: "format",
    description: "format for the date",
    type: "String",
    default: "YYYY-MM-DD",
  },
];

const initialVisibleMonth = () => moment(1575339378000);

export default class CapDateRangePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-date-range-picker-info">
        <CapHeading type="h5">Please refer the below documentation, for any changes in this Component</CapHeading>
        <a href="https://github.com/airbnb/react-dates">https://github.com/airbnb/react-dates</a>
        <div className="cap-date-range-picker-showcase">
          <div style={{ marginTop: "24px" }}>
            <CapDateRangePicker size="large" />
          </div>
          <div style={{ marginTop: "24px" }}>
            <CapDateRangePicker
              label="Date Picker with label"
              inductiveText="Date picker with inductive text"
            />
          </div>
          <div style={{ marginTop: "24px" }}>
            <DateRangePickerV2
              label="Date Range Picker using React Dates by airbnb"
              inductiveText="This Picker handles most of design feedback and few customization that was not supported by Antd's Range picker"
              initialVisibleMonth={initialVisibleMonth}
            />
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
