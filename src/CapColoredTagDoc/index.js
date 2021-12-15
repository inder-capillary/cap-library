/**
* CapColoredTagTagDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapColoredTag } from "../../components";
import './index.scss';
const infoData = [
  {
    key: 1,
    property: "type",
    description: "Type can be `static` (OPTIONAL)",
    type: "static",
    default: "",
  },
  {
    key: 2,
    property: "disabled",
    description: "weather tag is a disabled tag (OPTIONAL)",
    type: "boolean",
    default: "false",
  },
  {
    key: 3,
    property: "tagColor",
    description: "tagColor (REQUIRED) : gives background color",
    type: "string",
    default: "white",
  },
  {
    key: 4,
    property: "tagTextColor",
    description: "tagTextColor (OPTIONAL)",
    type: "string",
    default: "white",
  },
  {
    key: 5,
    property: "tagBorderColor",
    description: "tagBorderColor (OPTIONAL)",
    type: "string",
    default: "none",
  },
  {
    key: 6,
    property: "closable",
    description: "puts a cross arrow (OPTIONAL)",
    type: "bool",
    default: "false",
  },
  {
    key: 7,
    property: "tagCloseIconColor",
    description: "tagCloseIconColor (OPTIONAL)",
    type: "string",
    default: "white if closable is true",
  },
  {
    key: 8,
    property: "tagFontSize",
    description: "tagFontSize (OPTIONAL)",
    type: "string",
    default: "12px",
  },
  {
    key: 9,
    property: "tagHeight",
    description: "tagHeight (OPTIONAL)",
    type: "string",
    default: "24px",
  },
];

export default class CapColoredTagDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-tag-info">
        <div className="cap-tag-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/tag/#header"> Tag </a>
            component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <div>
            <CapColoredTag tagColor="#0065ff">Colored Tag with default props</CapColoredTag>
            <CapColoredTag tagColor="lightgrey" tagTextColor="black">Colored Tag with black text</CapColoredTag>
            <CapColoredTag tagColor="white" tagTextColor="black" tagBorderColor="black">Colored Tag with black border</CapColoredTag>
            <br />
            <CapColoredTag tagColor="grey" disabled>Disabled colored tag</CapColoredTag>
            <CapColoredTag tagColor="#47af46" static>static colored tag</CapColoredTag>
            <br />
            <CapColoredTag tagColor="#47af46" closable>closable colored tag</CapColoredTag>
            <CapColoredTag tagColor="#f87d23" closable tagCloseIconColor="black">closable colored tag and clored cross icon</CapColoredTag>
            <br />
            <CapColoredTag tagColor="red" tagHeight="32px" tagFontSize="16px">custom height and font-size</CapColoredTag>


          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
