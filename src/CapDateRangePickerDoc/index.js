/**
* CapDateRangePickerDoc
*/
import React, { Component } from "react";
import { CapDateRangePicker, CapHeading } from "../../components";
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

export default class CapDateRangePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  onChange = (date, dateStrings) => {
    console.log("CapDateRangePickerDoc onchange", date, dateStrings);
  }

  render() {
    return (
      <div className="cap-date-range-picker-info">
        <CapHeading type="h5">Please refer the below documentation, for any changes in this Component</CapHeading>
        <a href="https://github.com/react-component/calendar">https://github.com/react-component/calendar</a>
        <div className="cap-date-range-picker-showcase">
          <div style={{ marginTop: "24px" }}>
            <CapDateRangePicker onChange={this.onChange} size="large" />
          </div>
          <div style={{ marginTop: "24px" }}>
            <CapDateRangePicker
              onChange={this.onChange}
              label="Date Picker with label"
              inductiveText="Date picker with inductive text"
            />
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
