/**
* CapProgressDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapProgress } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "type",
    description: "to set the type, options: line circle dashboard",
    type: "string",
    default: "line",
  },
  {
    key: 2,
    property: "format",
    description: "template function of the content",
    type: "function(percent, successPercent)",
    default: "percent => percent + '%'",
  },
  {
    key: 3,
    property: "percent",
    description: "to set the completion percentage",
    type: "number",
    default: "0",
  },
  {
    key: 4,
    property: "showInfo",
    description: "whether to display the progress value and the status icon",
    type: "boolean",
    default: "true",
  },
  {
    key: 5,
    property: "status",
    description: "to set the status of the Progress, options: success exception active normal",
    type: "string",
    default: "-",
  },
  {
    key: 6,
    property: "strokeLinecap",
    description: "to set the style of the progress linecap",
    type: "Enum{ 'round', 'square' }",
    default: "round",
  },
  {
    key: 7,
    property: "strokeColor",
    description: "color of progress bar",
    type: "string",
    default: "-",
  },
  {
    key: 8,
    property: "successPercent",
    description: "segmented success percent",
    type: "number",
    default: "0",
  },
];

export default class CapProgressDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-progress-info">
        <div className="cap-progress-showcase">
          <CapProgress type="circle" percent={75}>Email</CapProgress>
          <br />
          <br />
          <CapProgress percent={75} size="small" format={(percent) => `${percent}% 3,46,21,234`}>Email</CapProgress>
          <br />
          <br />
          <CapProgress percent={90} size="small" format={(percent) => `${percent}% 2,46,71,234`}>Email</CapProgress>
          <br />
          <br />
          <CapProgress percent={50} size="small" format={(percent) => `${percent}% 1,12,71,234`}>Email</CapProgress>
          <br />
          <br />
          <CapProgress percent={49} size="small" format={(percent) => `${percent}% 1,21,71,001`}>Email</CapProgress>


        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
