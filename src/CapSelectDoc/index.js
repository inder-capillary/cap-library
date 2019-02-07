/**
* CapSelectDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSelect } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "items",
    description: "Select Options. Note: value of select options should be unique.",
    type: "Array[{ label:String, value: String}].",
    default: "-",
  },
  {
    key: 2,
    property: "selectedItem",
    description: "Current selected option",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "handleItemChange",
    description: "Called when select option changes",
    type: "function(value, item)",
    default: "-",
  },
  {
    key: 4,
    property: "showSearch",
    description: "Whether to show search input",
    type: "bool",
    default: "false",
  },
  {
    key: 5,
    property: "searchPlaceholder",
    description: "Placeholder of search input",
    type: "String",
    default: "Search",
  },
  {
    key: 6,
    property: "selectPlaceholder",
    description: "Placeholder of select",
    type: "string",
    default: "Select Option",
  },
  {
    key: 7,
    property: "width",
    description: "Width of Select",
    type: "Eg. 200px (String)",
    default: "100%",
  },
];

const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
  { label: 'Ski', value: 'ski' },
  { label: 'Splash', value: 'splash' },
  { label: 'Metro', value: 'metro' },
];

export default class CapSelectDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedOrg: "",
    };
  }

  handleOrgChange = (value) => {
    this.setState({ selectedOrg: value });
  }

  render() {
    const { selectedOrg } = this.state;
    return (
      <div className="cap-select-info">
        <div className="cap-select-showcase">
          <CapSelect
            width="250px"
            selectPlaceholder="Select organizations"
            showSearch
            items={orgsList}
            selectedItem={selectedOrg}
            handleItemChange={this.handleOrgChange}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
