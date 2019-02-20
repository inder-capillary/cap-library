/**
* CapLinkDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapLink } from "../../components";
import "./info.scss";

const infoData = [
  {
    property: "href",
    description: "target of hyperlink",
    type: "string",
    default: "",
  },
  {
    property: "title",
    description: "content of  hyperlink",
    type: "string|ReactNode",
    default: "",
  },
];

export default class CapLinkDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-link-info">
        <div className="cap-link-showcase">
          <CapLink href="www.google.com" title="Campaign 1"></CapLink>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
