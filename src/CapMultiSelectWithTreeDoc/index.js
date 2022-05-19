/**
* CapMultiSelectWithTreeDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapMultiSelectWithTree } from "../../components";
import "./info.scss";

const infoData = [
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
    property: "treeData",
    description: "List of data to be shown on multi-select",
    type: "Array[{title:'', key:'', info:'optional', isCategory: 'optional(if this key is not selectable)'}]",
    default: "-",
  },
  {
    key: 4,
    property: "disabled",
    description: "To make multi select disabled",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "appliedKeys",
    description: "Initial selected keys",
    type: "Array of keys",
    default: "[]",
  },
  {
    key: 6,
    property: "searchKey",
    description: "key to be used for filtering tree nodes. Ex: Tree nodes can be filtered using title if searchKey=title",
    type: "string",
    default: "title",
  },
  {
    key: 7,
    property: "enableDebouncedSearch",
    description: "On search, expanded keys would be calculated in debounce. Debounce value is 300ms",
    type: "string",
    default: "false",
  },
  {
    key: 8,
    property: "triggerClassName",
    description: "To add class for the toggle selection",
    type: "string",
    default: "",
  },
  {
    key: 9,
    property: "noResultsFoundText",
    description: "Text shown when no search results found",
    type: "string",
    default: "No results founds",
  },
  {
    key: 10,
    property: "selectedText",
    description: "Text shown on the bottom side showing number of options selected",
    type: "string",
    default: "selected",
  },
  {
    key: 11,
    property: "popoverClassName",
    description: "To add class for the popover",
    type: "string",
    default: "",
  },
  {
    key: 12,
    property: "selectAllText",
    description: "Text shown for Select All",
    type: "string",
    default: "Select all",
  },
  {
    key: 13,
    property: "selectAllSearchResultsText",
    description: "Text shown for Select all searched results",
    type: "string",
    default: "Select all searched results",
  },
  {
    key: 14,
    property: "searchPlaceholder",
    description: "Placeholder on search",
    type: "string",
    default: "-",
  },
  {
    key: 15,
    property: "closeText",
    description: "Text on close button",
    type: "string",
    default: "Close",
  },
  {
    key: 16,
    property: "selectText",
    description: "Text on select button",
    type: "string",
    default: "Select",
  },
  {
    key: 17,
    property: "width",
    description: "width of toggle content and popover",
    type: "string",
    default: "300px",
  },
  {
    key: 18,
    property: "showLoader",
    description: "If true loader will show in popover instead of content",
    type: "boolean",
    default: "false",
  },
  {
    key: 19,
    property: "minValuesToSelect",
    description: "minimum values the user should select to apply selected values",
    type: "number",
    default: "-",
  },
  {
    key: 20,
    property: "maxValuesToSelect",
    description: "maximum values the user can select to apply selected values",
    type: "number",
    default: "-",
  },
  {
    key: 21,
    property: "disableSelectAll",
    description: "disable select all option in container",
    type: "boolean",
    default: "false",
  },
  {
    key: 22,
    property: "getPopupContainer",
    description: "The DOM container of the tip, the default behavior is to create a div element in body. Use getTooltipContainer if you are using antd@<2.5.2",
    type: "Function(triggerNode)",
    default: "() => document.body",
  },
  {
    key: 23,
    property: "moreText",
    description: "Eg.- points +2more",
    type: "string",
    default: "more",
  },
  {
    key: 24,
    property: "showSelectButtonToolTip",
    description: "Whether to show Tooltip on disabled Select button",
    type: "boolean",
    default: "false",
  },
  {
    key: 25,
    property: "selectTooltipText",
    description: "Tooltip content to show on disabled Selection button. Shows only if 'showSelectButtonToolTip' is true",
    type: "string",
    default: "-",
  },
];

const treeData = [
  {
    title: "Vouchers",
    key: "Vouchers",
    isCategory: true,
    children: [
      {
        info: "Total number of Coupon issued during the campaign",
        title: "Coupon Issued",
        key: "Vouchers__58e5faf4f48500043255d7ce",
      },
      {
        info: "Total number of Coupon redeemed during the campaign",
        title: "Coupon Redeemed",
        key: "Vouchers__58e5fbdef48500215355d7ce",
      },
    ],
  },
  {
    title: "Footfall",
    key: "Footfall",
    isCategory: true,
    children: [
      {
        info: "The total number of In count",
        title: "In Footfall Count",
        key: "Footfall__59fc708832164f29d1b4ab32",
      },
      {
        info: "The total number of out count",
        title: "Out Footfall Count",
        key: "Footfall__59fc7142f9a53a29c2a2cc02",
      },
    ],
  },
  {
    title: "Campaign",
    key: "Campaign",
    isCategory: true,
    children: [
      {
        info: "The total number of transactions made by Contacted Customers in the campaign period",
        title: "Responder Txns jfdsaklf jdsaklf jfjdksalfj adsf dsjaklfj sad",
        key: "Campaign__592e6a998d7ebbde2b1fc0d2",
      },
      {
        info: "The ratio of the total Customer Responded and the total Customer Contacted",
        title: "Hit Rate",
        key: "Campaign__599420958d7ebb1f5b4dc550",
      },
    ],
  },
];

const treeData2 = [{
  title: 'Returned Type',
  key: 'Returned Type',
  isCategory: true,
  info: 'This is so cool',
  children: [{
    title: 'Coupon Event Type',
    key: 'Coupon Event Type',
    info: 'This is so cool',
    children: [
      { title: 'Zone Name', key: 'Zone Name', info: 'This is so cool' },
      { title: 'Is billable', key: 'Is billable' },
      { title: 'Till', key: 'Till' },
    ],
  }, {
    title: 'Transaction',
    key: 'Transaction',
    isCategory: true,
    info: 'This is so cool',
    children: [
      { title: 'Avg. Transaction Value', key: 'Avg.Transaction Value', info: 'This is so cool' },
      { title: 'Transaction Amount', key: 'Transaction Amount' },
      { title: 'Transaction Dates', key: 'Transaction Dates' },
    ],
  }, {
    title: 'Communication Channel',
    key: 'Communication Channel',
  }],
}, {
  title: 'Delivery Status',
  key: 'Delivery Status',
  info: "this is coool",
  children: [
    { title: 'Points & Coupons', key: 'Points & Coupons' },
    { title: 'Loyalty', key: 'Loyalty' },
    {
      title: 'Testing2',
      key: 'Testing2',
      children: [
        { title: 'Brand Name very very very long text', key: 'Brand Name very very very long text', info: "this is coool" },
        { title: 'Parent Category', key: 'Parent Category', info: "this is also cool" },
      ],
    },
  ],
}, {
  title: 'Customer Profile',
  key: 'Customer Profile',
  info: 'This is so cool',
}];


export default class CapMultiSelectWithTreeDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      value1: [],
      value2: [],
    };
  }

  render() {
    return (
      <div>
        <div className="cap-multi-select-info" style={{ display: "flex" }}>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelectWithTree
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={treeData}
              appliedKeys={this.state.value}
              popoverClassName="my-pop-over"
              onSelect={(selectedKeys) => {
                this.setState({ value: selectedKeys });
              }}
              enableDebouncedSearch
              maxValuesToSelect={5}
              disableSelectAll
              showSelectButtonToolTip
              selectTooltipText="Only 5 values can be selected"
            />
          </div>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelectWithTree
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={treeData2}
              appliedKeys={this.state.value1}
              onSelect={(selectedKeys) => { this.setState({ value1: selectedKeys }); }}
            />
          </div>
          <div style={{ marginLeft: '24px', flex: 1 }}>
            <CapMultiSelectWithTree
              placeholder="Select Segments"
              searchPlaceholder="Search"
              closeText="Close"
              selectText="Select"
              treeData={treeData2}
              appliedKeys={this.state.value2}
              onSelect={(selectedKeys) => { this.setState({ value2: selectedKeys }); }}
              disabled
            />
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
