/**
 * CapLevelGraphRendererDoc
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import PropertyTable from "../../helpers/PropertyTable";
import CapLevelGraphRenderer from "../../components/CapLevelGraphRenderer";
import "./info.scss";

const elementWidth = 140;

const infoData = [
  {
    key: 1,
    property: "nodes",
    description: "node list",
    type: "array",
    default: "[]",
  },
  {
    key: 2,
    property: "connections",
    description: "connection list",
    type: "array",
    default: "[]",
  },
  {
    key: 3,
    property: "graphStyles",
    description: "style for graph",
    type: "object",
    default: "{}",
  },
  {
    key: 4,
    property: "defaultStartX",
    description: "default start x for the graph",
    type: "number",
    default: "0",
  },
  {
    key: 5,
    property: "defaultStartY",
    description: "default start y for the graph",
    type: "number",
    default: "0",
  },
  {
    key: 6,
    property: "offsetHeight",
    description: "height offset for forward connection",
    type: "number",
    default: "20",
  },
  {
    key: 7,
    property: "showToolTip",
    description: "show tool tip",
    type: "boolean",
    default: "false",
  },
  {
    key: 8,
    property: "containerStyles",
    description: "style for container",
    type: "object",
    default: "{}",
  },
  {
    key: 9,
    property: "graphWidth",
    description: "width of graph",
    type: "string",
    default: "500px",
  },
  {
    key: 10,
    property: "scrollClassName",
    description: "class name for scroll container",
    type: "string",
    default: "-",
  },
  {
    key: 11,
    property: "graphHeight",
    description: "height of graph",
    type: "string",
    default: "500px",
  },
  {
    key: 12,
    property: "reverseConnProps",
    description: "reverse connection props",
    type: "object",
    default: "{}",
  },
  {
    key: 13,
    property: "forwardConnProps",
    description: "forward connection props",
    type: "object",
    default: "{}",
  },
  {
    key: 14,
    property: "defaultEleWidth",
    description: "width for all node element",
    type: "number",
    default: "100",
  },
  {
    key: 15,
    property: "defaultEleDistance",
    description: "distance between two nodes",
    type: "number",
    default: "20",
  },
  {
    key: 16,
    property: "offsetLineDistance",
    description: "distance between two lines",
    type: "number",
    default: "18",
  },
  {
    key: 17,
    property: "lineStrokeColor",
    description: "Color for connectors",
    type: "string",
    default: "gray",
  },
  {
    key: 18,
    property: "graphId",
    description: "id for the graph element",
    type: "string",
    default: "cap-level-graph-renderer",
  },
];

const CustomNode = ({ height }) => (
  <div
    style={{
      height,
      display: "flex",
      width: elementWidth,
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #f1f1f1",
      backgroundColor: "#e6ffed",
    }}
  >
    {"Node"}
  </div>
);
CustomNode.propTypes = {
  height: PropTypes.string,
};

const nodes = [
  {
    id: `node-0`,
    height: 50,
    component: CustomNode,
    props: { height: 50 },
    toolTip: `Node 0`,
  },
  {
    id: `node-1`,
    height: 100,
    component: CustomNode,
    props: { height: 100 },
    toolTip: `Node 1`,
  },
  {
    id: `node-2`,
    height: 50,
    component: CustomNode,
    props: { height: 50 },
    toolTip: `Node 2`,
  },
  {
    id: `node-3`,
    height: 350,
    component: CustomNode,
    props: { height: 350 },
    toolTip: `Node 3`,
  },
  {
    id: `node-4`,
    height: 200,
    component: CustomNode,
    props: { height: 200 },
    toolTip: `Node 4`,
  },
  {
    id: `node-5`,
    height: 40,
    component: CustomNode,
    props: { height: 40 },
    toolTip: `Node 5`,
  },
  {
    id: `node-6`,
    height: 250,
    component: CustomNode,
    props: { height: 250 },
    toolTip: `Node 6`,
  },
];

const connections = [
  { sourceId: "node-1", targetId: "node-0" },
  { sourceId: "node-2", targetId: "node-0" },
  { sourceId: "node-3", targetId: "node-0" },
  { sourceId: "node-4", targetId: "node-0" },
  { sourceId: "node-5", targetId: "node-0" },
  { sourceId: "node-6", targetId: "node-0" },

  { sourceId: "node-2", targetId: "node-1" },
  { sourceId: "node-3", targetId: "node-1" },
  { sourceId: "node-4", targetId: "node-1" },
  { sourceId: "node-5", targetId: "node-1" },
  { sourceId: "node-6", targetId: "node-1" },

  { sourceId: "node-3", targetId: "node-2" },
  { sourceId: "node-4", targetId: "node-2" },
  { sourceId: "node-5", targetId: "node-2" },
  { sourceId: "node-6", targetId: "node-2" },

  { sourceId: "node-4", targetId: "node-3" },
  { sourceId: "node-5", targetId: "node-3" },
  { sourceId: "node-6", targetId: "node-3" },

  { sourceId: "node-5", targetId: "node-4" },
  { sourceId: "node-6", targetId: "node-4" },

  { sourceId: "node-6", targetId: "node-5" },
];

const connectionAttrs = {
  strokeWidth: 1,
  targetMarker: {
    name: "classic",
    size: 7,
  },
};

const graphProps = {
  nodes,
  connections,
  offsetHeight: 20,
  graphWidth: "1140px",
  reverseConnProps: {
    ...connectionAttrs,
    strokeDasharray: 3,
  },
  defaultEleDistance: 20,
  offsetLineDistance: 18,
  lineStrokeColor: "gray",
  graphId: "graph-renderer",
  graphHeight: "calc(100vh - 264px)",
  forwardConnProps: connectionAttrs,
  defaultEleWidth: elementWidth,
  scrollClassName: "graph-renderer-scroll-container",
};

export default class CapLevelGraphRendererDoc extends Component {
  render() {
    return (
      <div className="cap-link-info">
        <CapLevelGraphRenderer {...graphProps} />
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
