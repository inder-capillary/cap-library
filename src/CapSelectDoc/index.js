/**
* CapSelectDoc
*/
import React, { useState } from "react";
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

const productsList = [
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Campaign manager', value: 'Campaign manager' },
  { label: 'Membercare', value: 'Membercare' },
  { label: 'Loyalty manager', value: 'Loyalty manager' },
  { label: 'Essential insights', value: 'Essential insights' },
];


function CapSelectDoc() {
  const [selectedOrg, handleOrgChange] = useState("");
  const [selectedProduct, handleProductChange] = useState("Campaign manager");
  return (
    <div className="cap-select-info">
      <div className="cap-select-showcase">
        <div style={{ marginRight: '20px' }}>
          <div>With Search</div>
          <CapSelect
            width="250px"
            selectPlaceholder="Select organizations"
            showSearch
            items={orgsList}
            selectedItem={selectedOrg}
            handleItemChange={handleOrgChange}
          />
        </div>
        <div>
          <div>Without Search</div>
          <CapSelect
            width="250px"
            selectPlaceholder="Select product"
            items={productsList}
            selectedItem={selectedProduct}
            handleItemChange={handleProductChange}
          />
        </div>
      </div>
      <PropertyTable data={infoData} />
    </div>
  );
}

export default CapSelectDoc;
