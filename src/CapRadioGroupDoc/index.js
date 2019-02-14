/**
* CapRadioGroupDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapRadioGroup from "../../components/CapRadioGroup";
import CapRadio from "../../components/CapRadio";

import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "defaultValue",
    description: "default selected value",
    type: "any",
    default: "-",
  },
  {
    key: 2,
    property: "disabled",
    description: "Disable all radio buttons",
    type: "boolean",
    default: "false",
  },
  {
    key: 3,
    property: "name",
    description: "The name property of all input[type=\"radio\"] children",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "options",
    description: "set children optional",
    type: "string[] | Array<{ label: string value: string disabled?: boolean }>",
    default: "-",
  },
  {
    key: 5,
    property: "size",
    description: "size for radio button style",
    type: "large | default | small",
    default: "default",
  },
  {
    key: 6,
    property: "value",
    description: "Used for setting the currently selected value.",
    type: "any",
    default: "-",
  },
  {
    key: 7,
    property: "onChange",
    description: "The callback function that is triggered when the state changes.",
    type: "Function(e:Event)",
    default: "-",
  },
  {
    key: 8,
    property: "buttonStyle",
    description: "style type of radio button",
    type: "outline | solid",
    default: "outline",
  },
];

export default class CapRadioGroupDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-radio-group-info">
        <div className="cap-radio-group-showcase">
          <p> defaultValue 1</p>
          <CapRadioGroup name="radiogroup" defaultValue={1}>
            <CapRadio value={1}>A</CapRadio>
            <CapRadio value={2}>B</CapRadio>
            <CapRadio value={3}>C</CapRadio>
            <CapRadio value={4}>D</CapRadio>
          </CapRadioGroup>
          <br />
          <br />
          <p>disabled</p>
          <CapRadioGroup name="radiogroup" disabled>
            <CapRadio value={1}>A</CapRadio>
            <CapRadio value={2}>B</CapRadio>
            <CapRadio value={3}>C</CapRadio>
            <CapRadio value={4}>D</CapRadio>
          </CapRadioGroup>
          <br />
          <br />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
