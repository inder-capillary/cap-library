/**
 * CapCardBoxDoc
 */
import React, { Component } from "react";
import styled from "styled-components";
import PropertyTable from "../../helpers/PropertyTable";
import CapBlock from "../../components/CapBlock";

/**
 *   width: PropTypes.string,
  borderLeftColor: PropTypes.string,
  isDeleteEnabled: PropTypes.bool,
  deleteCallback: PropTypes.func,
  isCollapseEnabled: PropTypes.bool,
  componentName: PropTypes.string,
  children: PropTypes.any
 */
const infoData = [
  {
    key: 1,
    property: "width",
    description: "width of the block",
    type: "string",
    default: "800px"
  },
  {
    key: 2,
    property: "borderLeftColor",
    description: "border left color",
    type: "string",
    default: "#2466EA"
  },
  {
    key: 3,
    property: "isDeleteEnabled",
    description: "is delete enabled for block",
    type: "bool",
    default: "false"
  },
  {
    key: 4,
    property: "deleteCallback",
    description: "delete callback to delete block if isDeleteEnabled",
    type: "func",
    default: "-"
  },
  {
    key: 5,
    property: "isCollapseEnabled",
    description: "if enabled. it will allow to expand and collapse the block",
    type: "bool",
    default: "false"
  },
  {
    key: 6,
    property: "componentName",
    description:
      "Component name i.e. Path. Tooltip will display 'Delete Path' / 'Expand Path'",
    type: "string",
    default: "path"
  }
];
const MarginDiv = styled.div`
  margin-top: 8px;
`;
export default class CapBlockDoc extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-card-box-doc-info">
        <div className="cap-card-box-doc-showcase">
          <CapBlock
            isDeleteEnabled={true}
            deleteCallback={() => console.log("Delete this path.")}
            isCollapseEnabled={true}
            componentName={"path"}
          >
            {"Hello World"}
          </CapBlock>
          <MarginDiv />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
