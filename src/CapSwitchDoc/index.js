/**
* CapSwitchDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapSwitch from "../../components/CapSwitch";
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
    description: "determine whether the Switch is checked",
    type: "boolean",
    default: "false",
  },
  {
    key: "3",
    property: "checkedChildren",
    description: "content to be shown when the state is checked",
    type: "string|ReactNode",
    default: "",
  },
  {
    key: "4",
    property: "defaultChecked",
    description: "to set the initial state",
    type: "boolean",
    default: "false",
  },
  {
    key: "5",
    property: "disabled",
    description: "Disable switch",
    type: "boolean",
    default: "false",
  },
  {
    key: "6",
    property: "loading",
    description: "loading state of switch",
    type: "boolean",
    default: "false",
  },
  {
    key: "7",
    property: "size",
    description: "the size of the Switch, options: default small",
    type: "string",
    default: "default",
  },
  {
    key: "8",
    property: "unCheckedChildren",
    description: "content to be shown when the state is unchecked",
    type: "string|ReactNode",
    default: "",
  },
  {
    key: "9",
    property: "onChange",
    description: "trigger when the checked state is changing",
    type: "Function(checked: boolean, event: Event)",
    default: "",
  },
  {
    key: "10",
    property: "onClick",
    description: "trigger when clicked",
    type: "Function(checked: boolean, event: Event)",
    default: "",
  },
  {
    key: "11",
    property: "className",
    description: "additional class to Switch",
    type: "string",
    default: "-",
  },
];

export default class CapSwitchDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-switch-info">
        <div className="cap-switch-showcase">
          <CapSwitch defaultChecked></CapSwitch>
          <br />
          <CapSwitch size="small" defaultChecked></CapSwitch>
          <br />
          <CapSwitch loading defaultChecked />
          <br />
          <br />
          <CapSwitch checkedChildren="1" unCheckedChildren="0" />
          <br />
          <br />
          <CapSwitch
            style={{ marginLeft: '16px' }}
            label="This is label title"
            inductiveText="This is inductive text for left label position"
            labelPosition="left"
          />
          <br />
          <br />
          <CapSwitch
            label="This is label title"
            inductiveText="This is inductive text for top label position"
            labelPosition="top"
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
