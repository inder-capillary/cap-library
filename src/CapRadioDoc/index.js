/**
* CapRadioDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading, CapRadio } from "../../components";

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
  {
    key: 6,
    property: "inductiveText",
    description: "String to be shown below checkbox label",
    type: "String",
    default: "-",
  },
  {
    key: 7,
    property: "suffix",
    description: "React element to be added as suffix to header.",
    type: "String| ReactNode",
    default: "-",
  },
];

const {CapRadioGroup} = CapRadio;

export default class CapRadioDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'radio1',
    };
  }

  render() {
    return (
      <div className="cap-radio-button-info">
        <div className="cap-radio-button-showcase">
          <CapRadio>Plain</CapRadio>
          <CapRadio autoFocus>autoFocus</CapRadio>
          <CapRadio defaultChecked>defaultChecked</CapRadio>
          <CapRadio disabled>disabled</CapRadio>
          <CapRadio value={10}>value</CapRadio>
<<<<<<< HEAD
          <CapRadio
            value={3}
            indeterminate
            suffix={<CapHeading.CapHeadingSpan type="label2">(this is my custom suffix)</CapHeading.CapHeadingSpan>}
            inductiveText="Global campaign settings can be overridden through advanced settings">
          </CapRadio>
=======
          <CapRadioGroup value={this.state.radioValue} onChange={(e) => { this.setState({radioValue: e.target.value}); }}>
            <CapRadio
              value="radio1"
              suffix={<CapHeading.CapHeadingSpan type="label2">(this is my custom suffix)</CapHeading.CapHeadingSpan>}
              inductiveText="Global campaign settings can be overridden through advanced settings">
              Radio1
            </CapRadio>
            <CapRadio
              value="radio2"
              suffix={<CapHeading.CapHeadingSpan type="label2">(this is my custom suffix)</CapHeading.CapHeadingSpan>}
              inductiveText="Global campaign settings can be overridden through advanced settings">
              Radio2
            </CapRadio>
          </CapRadioGroup>

>>>>>>> e9d97d7c44bc619126b0189e777cab4ab87bee45
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
