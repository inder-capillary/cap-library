/**
* CapCheckboxDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapCheckbox, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: "1",
    property: "autoFocus",
    description: "get focus when component mounted",
    type: "boolean",
    default: "false",
  },
  {
    key: "2",
    property: "checked",
    description: "Specifies whether the checkbox is selected.",
    type: "boolean",
    default: "false",
  },
  {
    key: "3",
    property: "defaultChecked",
    description: "Specifies the initial state: whether or not the checkbox is selected.",
    type: "boolean",
    default: "false",
  },
  {
    key: "4",
    property: "disabled",
    description: "Disable checkbox",
    type: "boolean",
    default: "false",
  },
  {
    key: "5",
    property: "indeterminate",
    description: "indeterminate checked state of checkbox",
    type: "boolean",
    default: "false",
  },
  {
    key: "6",
    property: "onChange",
    description: "The callback function that is triggered when the state changes.",
    type: "Function(e:Event)",
    default: "-",
  },
  {
    key: "7",
    property: "inductiveText",
    description: "String to be shown below checkbox label",
    type: "String",
    default: "-",
  },
];

export default class CapCheckboxDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-checkbox-info">
        <div className="cap-checkbox-showcase">
          <CapCheckbox
            value={3}
            indeterminate
            suffix={<CapHeading.CapHeadingSpan type="label2">(this is my custom suffix)</CapHeading.CapHeadingSpan>}
            inductiveText="Global campaign settings can be overridden through advanced settings">
            Intermediate
          </CapCheckbox>
          <CapCheckbox checked={1}>checked</CapCheckbox>
          <CapCheckbox disabled defaultChecked={1} value={2}> Disabled and defaultChecked</CapCheckbox>
          <CapCheckbox autoFocus>autoFocus</CapCheckbox>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
