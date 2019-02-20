/**
* CapDatePickerDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapDatePicker, CapHeading } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

export default class CapDatePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  onChange = () => {

  }

  render() {
    return (
      <div className="cap-date-picker-info">
        <div className="cap-date-picker-showcase">
          <CapHeading type="h5">This component takes all the props that antd rangePicker allows.</CapHeading>
          <a href="https://ant.design/components/date-picker/#header">https://ant.design/components/date-picker/#header</a>
          <div style={{ marginTop: "24px" }}>
            <CapDatePicker onChange={this.onChange} size="large" />
          </div>
        </div>
        {/* <PropertyTable data={infoData} /> */}
      </div>
    );
  }
}
