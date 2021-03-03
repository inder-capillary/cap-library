/**
* CapColorPickerDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapColorPicker } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: "1",
    property: "className",
    description: "Specifies the class need to be applied on component",
    type: "string",
    default: "' '",
  },
  {
    key: "1",
    property: "color",
    description: "Current value of the slider color",
    type: "string",
    default: "#d42020",
  },
  {
    key: "3",
    property: "setColor",
    description: "The callback function that is used to force change the color.",
    type: "Function(color: hexCode)",
    default: "-",
  },
  {
    key: "4",
    property: "hexSelector",
    description: "Whether to show hex selector or not",
    type: "boolean",
    default: "false",
  },
];


export default class CapColorPickerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-color-picker-info">
        <div className="cap-color-picker-showcase">
          <CapColorPicker />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
