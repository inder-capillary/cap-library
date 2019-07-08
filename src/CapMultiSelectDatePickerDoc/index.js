/**
* CapMultiSelectDatePickerDoc
*/
import React, { Component } from "react";
import { Row, Col } from 'antd';
import PropertyTable from '../../helpers/PropertyTable';
import { CapMultiSelectDatePicker } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "selected",
    description: "Selected days list",
    type: "Array",
    default: "[]",
  },
  {
    key: 2,
    property: "defaultValue",
    description: "Default Selected days list",
    type: "Array",
    default: "-",
  },
  {
    key: 3,
    property: "showLastDay",
    description: "Boolean to show last day of month option",
    type: "Boolean",
    default: "false",
  },
  {
    key: 3,
    property: "onChange",
    description: "Callback function called on selection/deselection of day",
    type: "Function",
    default: "-",
  },
  {
    key: 4,
    property: "lastDayText",
    description: "Custom text for Last day of month",
    type: "String",
    default: "Last day of month",
  },
];

export default class CapMultiSelectDatePickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-multi-select-date-picker-info">
        <div className="cap-multi-select-date-picker-showcase">
          <Row span={24}>
            <Col span={12}>
              <div></div>
              <CapMultiSelectDatePicker />
            </Col>
            <Col span={12}>
              <div>Show Last Day</div>
              <CapMultiSelectDatePicker
                selected={[4, 16]}
                showLastDay
              />
            </Col>
          </Row>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
