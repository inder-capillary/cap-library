/**
* CapHeading1Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading1 } from "../../components";
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

export default class CapHeading1Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading1-info">
        <div className="cap-heading1-showcase">
          <CapHeading1>Heading 2</CapHeading1>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
