/**
* CapModalInfo
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapMultiSelect } from "../../components";

const api = [
  {
    key: 1,
    property: "onSelect",
    description: "Call back function to be executed when user selects an option and click on Select button",
    type: "Function",
    default: "-",
  },
  {
    key: 2,
    property: "placeholder",
    description: "Placeholder on the Select",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "searchPlaceholder",
    description: "Placeholder on search",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "closeText",
    description: "Text on close button",
    type: "string",
    default: "Close",
  },
  {
    key: 5,
    property: "selectText",
    description: "Text on select button",
    type: "string",
    default: "Select",
  },
  {
    key: 6,
    property: "treeData",
    description: "List of data to be shown on multi-select",
    type: "Array[{title:'', key:'', info:'optional'}]",
    default: "-",
  },
  {
    key: 7,
    property: "disabled",
    description: "To make multi select disabled",
    type: "boolean",
    default: "false",
  },
  {
    key: 8,
    property: "appliedKeys",
    description: "Initial selected keys",
    type: "Array of keys",
    default: "[]",
  },
  {
    key: 9,
    property: "triggerClassName",
    description: "To override class for the selection",
    type: "string",
    default: "",
  },
  {
    key: 10,
    property: "noResultsFoundText",
    description: "Text shown when no search results found",
    type: "string",
    default: "No results founds",
  },
  {
    key: 11,
    property: "selectedText",
    description: "Text shown on the bottom side showing number of options selected",
    type: "string",
    default: "selected",
  },
  {
    key: 12,
    property: "disableSelectAll",
    description: "disable select all option in container",
    type: "boolean",
    default: "false",
  },
  {
    key: 13,
    property: "popoverClassName",
    description: "To add class for the popover",
    type: "string",
    default: "",
  },
  {
    key: 14,
    property: "searchKey",
    description: "key to be used for filtering tree nodes. Ex: Tree nodes can be filtered using title if searchKey=title",
    type: "string",
    default: "title",
  },
  {
    key: 15,
    property: "selectAllText",
    description: "Text shown for Select All",
    type: "string",
    default: "Select all",
  },
  {
    key: 16,
    property: "selectAllSearchResultsText",
    description: "Text shown for Select all searched results",
    type: "string",
    default: "Select all searched results",
  },
  {
    key: 17,
    property: "getPopupContainer",
    description: "The DOM container of the tip, the default behavior is to create a div element in body. Use getTooltipContainer if you are using antd@<2.5.2",
    type: "Function(triggerNode)",
    default: "() => document.body",
  },
  {
    key: 18,
    property: "moreText",
    description: "Eg.- points +2more",
    type: "string",
    default: "more",
  },
  {
    key: 19,
    property: "maxValuesToSelect",
    description: "Maximum values that can be selected to apply",
    type: "number",
    default: "-",
  },
  {
    key: 20,
    property: "showSelectButtonToolTip",
    description: "Whether to show Tooltip on disabled Select button",
    type: "boolean",
    default: "false",
  },
  {
    key: 21,
    property: "selectTooltipText",
    description: "Tooltip content to show on disabled Selection button. Shows only if 'showSelectButtonToolTip' is true",
    type: "string",
    default: "-",
  },
];

const list = [
  { title: 'This is a very very very long long long text', key: '1', info: "This is Info" },
  { title: 'Option2', key: '2', info: "This is Info 2" },
  { title: 'Testing', key: '3' },
  { title: 'Testing3', key: '4' },
  { title: 'Option3', key: '5' },
  { title: 'Option4', key: '6' },
  { title: 'This is also a very very very very very long text', key: '7' },
  { title: 'Option6', key: '8' },
  { title: 'Test', key: '9' },
  { title: 'Store', key: '10' },
];

export default class CapMultiSelectInfo extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="cap-multi-select-info" style={{ display: "flex" }}>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelect
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={list}
              onSelect={() => { }}
              disableSelectAll
            />
          </div>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelect
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={list}
              appliedKeys={["10", "1"]}
              onSelect={() => { }}
              maxValuesToSelect={5}
              showSelectButtonToolTip
              selectTooltipText="Only 5 values can be selected"
            />
          </div>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelect
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={list}
              onSelect={() => { }}
              disabled
            />
          </div>
        </div>
        <PropertyTable data={api} />
      </div>
    );
  }
}
