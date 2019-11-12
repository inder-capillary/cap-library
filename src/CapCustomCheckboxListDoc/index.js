/**
* CapCustomCheckboxDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapCustomCheckboxList } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

const props = {paneList: [{
  iconProps: {
    type: "store",
  },
  inductiveText: 'Customers who purchased at specified stores will receive the content',
  title: 'Store/Geo',
  value: 'STORE',
}, {
  iconProps: {
    type: "footwear",
  },
  inductiveText: 'Customers who like specified products will receive the content',
  title: 'Products',
  value: 'PRODUCT_CATEGORY',
}]};
export default class CapCustomCheckboxListDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-custom-checkbox-info">
        <div className="cap-custom-checkbox-showcase">
          <CapCustomCheckboxList {...props}>  </CapCustomCheckboxList>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
