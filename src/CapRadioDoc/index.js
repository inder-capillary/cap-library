/**
* CapRadioDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapRadio from "../../components/CapRadio";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "autoFocus",
    description: "get focus when component mounted",
    type: "boolean",
    default: "false",
  },
  {
    key: 2,
    property: "checked",
    description: "Specifies whether the radio is selected.",
    type: "boolean",
    default: "-",
  },
  {
    key: 3,
    property: "defaultChecked",
    description: "Specifies the initial state: whether or not the radio is selected.",
    type: "boolean",
    default: "false",
  },
  {
    key: 4,
    property: "disabled",
    description: "Disable radio",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "value",
    description: "According to value for comparison, to determine whether the selected",
    type: "any",
    default: "-",
  },
];

export default class CapRadioDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-radio-button-info">
        <div className="cap-radio-button-showcase">
          <CapRadio>Plain</CapRadio>
          <CapRadio autoFocus>autoFocus</CapRadio>
          <CapRadio defaultChecked>defaultChecked</CapRadio>
          <CapRadio disabled>disabled</CapRadio>
          <CapRadio value={10}>value</CapRadio>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
