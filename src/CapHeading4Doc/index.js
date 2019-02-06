/**
* CapHeading4Doc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeading4 } from "../../components";
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

export default class CapHeading4Doc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading4-info">
        <div className="cap-heading4-showcase">
          <CapHeading4>Heading 4</CapHeading4>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
