/**
* CapSelectDoc
*/
import React, { useState } from "react";
import { Divider } from 'antd';
import PropertyTable from '../../helpers/PropertyTable';
import { CapSelect, CapHeading } from "../../components";
import "./info.scss";

const { CapCustomSelect } = CapSelect;

const infoData = [
  {
    key: 1,
    property: "options",
    description: "Select Options. Note: value of select options should be unique.",
    type: "Array[{ label:String, value: String}].",
    default: "-",
  },
  {
    key: 2,
    property: "value",
    description: "Current selected option value",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "onChange",
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
  {
    key: 8,
    property: "className",
    description: "className of select component",
    type: "string",
    default: "-",
  },
  {
    key: 9,
    property: "popoverClassName",
    description: "className of dropdown component",
    type: "string",
    default: "-",
  },
];

const infoDataCapSelect = [
  {
    key: 1,
    property: "label",
    description: "Label of the select component.",
    type: "String",
    default: "-",
  },
  {
    key: 2,
    property: "errorMessage",
    description: "Error Message",
    type: "string",
    default: "-",
  },
];

const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
  { label: 'Ski', value: 'ski' },
  { label: 'Splash', value: 'splash' },
  { label: 'Metro', value: 'metro' },
];

const productsList = [
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Campaign manager', value: 'Campaign manager' },
  { label: 'Membercare', value: 'Membercare' },
  { label: 'Loyalty manager', value: 'Loyalty manager' },
  { label: 'Essential insights', value: 'Essential insights' },
];


const list = [
  { label: 'option1', value: 'option1', key: '0' },
  { label: 'option2', value: 'option2', key: '1' },
  { label: 'option3', value: 'option3', key: '2' },
  { label: 'option4', value: 'option4', key: '3' },
  { label: 'option5', value: 'option5', key: '4' },
  { label: 'option6', value: 'option6', key: '5' },
  { label: 'option7', value: 'option7', key: '6' },
  { label: 'option8', value: 'option8', key: '7' },
];


function CapSelectDoc() {
  const [selectedOrg, handleOrgChange] = useState("");
  const [selectedProduct, handleProductChange] = useState("Campaign manager");
  return (
    <div className="cap-select-info">
      <div className="cap-select-showcase">
        <CapHeading type="h3">{"import { CapSelect } from '@capillarytech/cap-ui-library"}</CapHeading>
        <div style={{ marginBottom: '24px', marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/select/#header"> Select </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
        <div>
          <CapSelect
            options={list}
            style={{ width: 200 }}
            placeholder="Select a person"
            defaultValue="option4"
            label="Title of select"
            errorMessage="Custom Error Message"
          />
          <CapSelect
            mode="tags"
            options={list}
            style={{ width: 480, marginLeft: '16px' }}
            placeholder="Select a person"
            defaultValue="option4"
          />
          <CapSelect
            options={list}
            style={{ width: 300, marginLeft: '16px' }}
            placeholder="Select a person"
            disabled
          />
        </div>
        <Divider />
        <div style={{ marginTop: '24px' }}>
          <CapHeading type="h3">{"import { CapSelect } from '@capillarytech/cap-ui-library"}</CapHeading>
          <CapHeading type="h3">{"const { CapCustomSelect } =  CapSelect"}</CapHeading>
          <div style={{ marginBottom: '24px', marginTop: '24px' }}>
            <b>NOTE: </b>
            This component is custom select which shows search inside the dropdown. It accepts only limited props which are mentioned in the table below.
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
              <div>With Search</div>
              <CapCustomSelect
                label="label of select"
                errorMessage="Error Message goes here."
                width="250px"
                selectPlaceholder="Select organizations"
                showSearch
                options={orgsList}
                value={selectedOrg}
                onChange={handleOrgChange}
              />
            </div>
            <div>
              <div>Without Search</div>
              <CapCustomSelect
                width="250px"
                selectPlaceholder="Select product"
                options={productsList}
                value={selectedProduct}
                onChange={handleProductChange}
                className="test"
                popoverClassName="my-popover"
              />
            </div>
          </div>
        </div>
      </div>
      <PropertyTable data={infoData} title="CapSelect.CapCustomSelect Component Properties" />
      <PropertyTable data={infoDataCapSelect} title="CapSelect Component Properties" />
    </div>
  );
}

export default CapSelectDoc;
