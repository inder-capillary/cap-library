/**
* CapHeadingDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapHeading from "../../components/CapHeading";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "type",
    description: "heading type like h1, h2",
    type: "string",
    default: "h5",
  },
  {
    key: 2,
    property: "data",
    description: "content of heading",
    type: "string",
    default: "h5",
  },
];

export default class CapHeadingDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-heading0-info">
        <div className="cap-heading0-showcase">
          <CapHeading type="h1" data="heading 1"></CapHeading>
          <br />
          <CapHeading type="h2" data="heading 2"></CapHeading>
          <br />
          <CapHeading type="h3" data="heading 3"></CapHeading>
          <br />
          <CapHeading type="h4" data="heading 4"></CapHeading>
          <br />
          <CapHeading type="h5" data="heading 5"></CapHeading>
          <br />
          <CapHeading type="h6" data="heading 6"></CapHeading>
          <br />

        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
