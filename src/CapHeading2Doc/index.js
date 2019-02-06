/**
* CapHeading2Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading2 } from "../../components";
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

export default class CapHeading2Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading2-info">
        <div className="cap-heading2-showcase">
          <CapHeading2>Heading 3</CapHeading2>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
