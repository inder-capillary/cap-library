/**
* CapColumnDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapColumn from "../../components/CapColumn";
import CapRow from "../../components/CapRow";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "offset",
    description: "the number of cells to offset Col from the left",
    type: "number",
    default: "0",
  },
  {
    key: 2,
    property: "order",
    description: "raster order, used in flex layout mode",
    type: "number",
    default: "0",
  },
  {
    key: 3,
    property: "pull",
    description: "the number of cells that raster is moved to the left",
    type: "number",
    default: "0",
  },
  {
    key: 4,
    property: "push",
    description: "the number of cells that raster is moved to the right",
    type: "number",
    default: "0",
  },
  {
    key: 5,
    property: "span",
    description: "raster number of cells to occupy, 0 corresponds to display: none",
    type: "number",
    default: "none",
  },
  {
    key: 6,
    property: "xs",
    description: "<576px and also default setting, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
  {
    key: 7,
    property: "sm",
    description: "≥576px, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
  {
    key: 8,
    property: "md",
    description: "≥768px, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
  {
    key: 9,
    property: "lg",
    description: "≥992px, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
  {
    key: 10,
    property: "xl",
    description: "≥1200px, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
  {
    key: 11,
    property: "xxl",
    description: "≥1600px, could be a span value or an object containing above props",
    type: "number|object",
    default: "-",
  },
];

export default class CapColumnDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-column-info">
        <div className="cap-column-showcase">
          <CapRow justify="center">
            <CapColumn className="gutter-box" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</CapColumn>
            <CapColumn className="gutter-box" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</CapColumn>
            <CapColumn className="gutter-box" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</CapColumn>
          </CapRow>
,
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
