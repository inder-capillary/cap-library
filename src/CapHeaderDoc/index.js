/**
 * CapHeaderDoc
 */
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapHeader } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "title",
    description: "-",
    type: "sting | react node",
    default: "-",
    required: "true",
  },
  {
    key: 2,
    property: 'description',
    description: "-",
    type: "string | react node",
    default: "-",
    required: "_",
  },
  {
    key: 3,
    property: "descriptionPosition",
    description: "where to show description: right | bottom",
    type: "string",
    default: "bottom",
    required: "_",
  },
  {
    key: 4,
    property: 'icon',
    description: "shows icon left to description, the click should be handled by the consumer",
    type: "react node",
    default: "-",
    required: "-",
  },
];

export default class CapHeaderDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-header-info">
        <div className="cap-header-showcase">
          <CapHeader description="Description" title="Title" descriptionPosition="right" />
          <CapHeader description="Description" title="Title" />
          <CapHeader
            description="Description"
            title="Title"
            icon={(
              <i className="material-icons">
                keyboard_backspace
              </i>
            )} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
