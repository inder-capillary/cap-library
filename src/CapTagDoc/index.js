/**
* CapTagDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapTag } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "type",
    description: "Type can be `outline` or `static`",
    type: "outline | static",
    default: "",
  },
  {
    key: 2,
    property: "disabled",
    description: "wheather tag is a disabled tag",
    type: "boolean",
    default: "false",
  },
];

export default class CapTagDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-tag-info">
        <div className="cap-tag-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/tag/#header"> Tag </a>
            component. Please refer their component for detailed explaination of component and supported props.
          </div>
          <div>
            <CapTag disabled>I am disabled Tag</CapTag>
            <CapTag type="outline" onClick={() => { }}>My type is outline</CapTag>
            <CapTag type="static">My Type is static</CapTag>
            <CapTag closable>CapTag 2</CapTag>
            <CapTag closable>Prevent Default</CapTag>
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
