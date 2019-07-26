/**
* CapTimePickerDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapTimePicker } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

export default class CapTimePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-time-picker-info">
        <div className="cap-time-picker-showcase">
          <div style={{ marginBottom: '24px', marginTop: '24px' }}>
            <b>NOTE: </b>
          This component is the extended version of ant design
            <a href="https://ant.design/components/time-picker/#header"> TimePicker </a>
          component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <CapTimePicker use12Hours />
          <CapTimePicker use12Hours format="h:mm:ss A" />
          <CapTimePicker use12Hours format="h:mm a" />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
