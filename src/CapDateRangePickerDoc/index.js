/**
* CapDateRangePickerDoc
*/
import React, { Component } from "react";
import { CapDateRangePicker, CapHeading } from "../../components";
import "./info.scss";

export default class CapDateRangePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  onChange = () => {

  }

  render() {
    return (
      <div className="cap-date-range-picker-info">
        <div className="cap-date-range-picker-showcase">
          <CapHeading type="h5">This component takes all the props that antd rangePicker allows.</CapHeading>
          <a href="https://ant.design/components/date-picker/#header">https://ant.design/components/date-picker/#header</a>
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
      </div>
    );
  }
}
