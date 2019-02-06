/**
* CapHeading3Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading3 } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "className",
    description: "class for heading",
    type: "string",
    default: "",
  },
];

export default class CapHeading3Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading3-info">
        <div className="cap-heading3-showcase">
          <CapHeading3>heading 4</CapHeading3>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
