/**
* CapDateRangePickerDoc
*/
import React, { Component } from "react";
import moment from 'moment';
import { CapDateRangePicker, CapHeading } from "../../components";
import "./info.scss";

const initialVisibleMonth = () => moment(1575339378000);
const disableDateRange = (startDate, endDate) => (current) => moment(endDate)
  .subtract(1, 'days')
  .endOf('day') < current
  || current
    < moment(startDate)
      .subtract(1, 'days')
      .endOf('day');

export default class CapDateRangePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-date-range-picker-info">
        <CapHeading type="h5">This component takes all the props that react-dates allows</CapHeading>
        <a href="https://github.com/airbnb/react-dates">https://github.com/airbnb/react-dates</a>
        <div className="cap-date-range-picker-showcase">
          <div key={1} style={{ marginTop: "24px" }}>
            <CapDateRangePicker
              appendToBody
            />
          </div>
          <div key={2} style={{ marginTop: "24px" }}>
            <CapDateRangePicker
              label="Date Picker with label"
              inductiveText="Date picker with inductive text"
              initialVisibleMonth={initialVisibleMonth}
              appendToBody
              disabledDate={disableDateRange(1569349800000, 1572028199999)}
            />
          </div>
        </div>
      </div>
    );
  }
}
