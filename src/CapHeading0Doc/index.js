/**
* CapHeading0Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading0 } from "../../components";
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

export default class CapHeading0Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading0-info">
        <div className="cap-heading0-showcase">
          <CapHeading0>heading 1</CapHeading0>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
