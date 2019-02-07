/**
* CapTabDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapTab } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: "1",
    property: "activeKey",
    description: "Current TabPane's key",
    type: "string",
    default: "-",
  },
  {
    key: "2",
    property: "animated",
    description: "Whether to change tabs with animation. Only works while tabPosition=\"top\"\\|\"bottom\"",
    type: "boolean | {inkBar:boolean, tabPane:boolean}",
    default: "true, false when type=\"card\"",
  },
  {
    key: "3",
    property: "renderTabBar",
    description: "replace the TabBar",
    type: "(props: DefaultTabBarProps, DefaultTabBar: React.ReactNode) => React.ReactNode",
    default: "-",
  },
  {
    key: "4",
    property: "defaultActiveKey",
    description: "Initial active TabPane's key, if activeKey is not set.",
    type: "string",
    default: "-",
  },
  {
    key: "5",
    property: "hideAdd",
    description: "Hide plus icon or not. Only works while type=\"editable-card\"",
    type: "boolean",
    default: "false",
  },
  {
    key: "6",
    property: "size",
    description: "preset tab bar size",
    type: "large | default | small",
    default: "default",
  },
  {
    key: "7",
    property: "tabBarExtraContent",
    description: "Extra content in tab bar",
    type: "React.ReactNode",
    default: "-",
  },
  {
    key: "8",
    property: "tabBarGutter",
    description: "The gap between tabs",
    type: "number",
    default: "-",
  },
  {
    key: "9",
    property: "tabBarStyle",
    description: "Tab bar style object",
    type: "object",
    default: "-",
  },
  {
    key: "10",
    property: "tabPosition",
    description: "Position of tabs",
    type: "top | right | bottom | left",
    default: "top",
  },
  {
    key: "11",
    property: "type",
    description: "Basic style of tabs",
    type: "line | card | editable-card",
    default: "line",
  },
  {
    key: "12",
    property: "onChange",
    description: "Callback executed when active tab is changed",
    type: "Function(activeKey) {}",
    default: "-",
  },
  {
    key: "13",
    property: "onEdit",
    description: "Callback executed when tab is added or removed. Only works while type=\"editable-card\"",
    type: "(targetKey, action): void",
    default: "-",
  },
  {
    key: "14",
    property: "onNextClick",
    description: "Callback executed when next button is clicked",
    type: "Function",
    default: "-",
  },
  {
    key: "15",
    property: "onPrevClick",
    description: "Callback executed when prev button is clicked",
    type: "Function",
    default: "-",
  },
  {
    key: "16",
    property: "onTabClick",
    description: "Callback executed when tab is clicked",
    type: "Function",
    default: "-",
  },
  {
    key: "17",
    property: "panes",
    description: "array of object and object has the property of content and title",
    type: "array",
    default: "",
  },
];

export default class CapTabDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const panes = [{content: 'conatiner 1', title: 'tab 1'}, {content: 'conatiner 2', title: 'tab 2'}, {content: 'conatiner 3', title: 'tab 3'}];
    const panes1 = [{content: 'conatiner 1', title: 'tab 1', disabled: 'true'}, {content: 'conatiner 2', title: 'tab 2', disabled: 'true'}, {content: 'conatiner 3', title: 'tab 3', disabled: 'true'}];

    return (
      <div className="cap-tab-info">
        <div className="cap-tab-showcase">
          <CapTab panes={panes} />
          <CapTab panes={panes1} disabled />

        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
