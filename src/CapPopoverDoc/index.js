/**
* CapPopoverDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapPopover, CapButton } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "content",
    description: "Content of the card",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 2,
    property: "title",
    description: "Title of the card",
    type: "string|ReactNode",
    default: "-",
  },
];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


export default class CapPopoverDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-popover-info">
        <div className="cap-popover-showcase">
          <CapPopover content={content} title="Title">
            <CapButton type="primary">Hover me</CapButton>
          </CapPopover>
        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/popover/#header"> Popover </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
