/**
* CapHeading5Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading5 } from "../../components";
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

export default class CapHeading5Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading5-info">
        <div className="cap-heading5-showcase">
          <CapHeading5>Heading 5</CapHeading5>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
