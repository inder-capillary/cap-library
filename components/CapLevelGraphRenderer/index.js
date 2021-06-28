/**
 *
 * CapLevelGraphRenderer
 *
 * It render graph with custom node and draw level by level backward edge
 *
 * Mock Data
 * nodes = [{ id: 'tier1', height: 295 }, { id: 'tier2', height: 500 }]
 * connections = [ { sourceId: 'tier2', targetId: 'tier1' }]
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import get from 'lodash/get';
import { Graph } from "@antv/x6";

import TooltipTool from "./Tooltip";
import CapIcon from "../CapIcon";
import CapButton from "../CapButton";

import "@antv/x6-react-shape";
import "./_capLevelGraphRenderer.scss";

const nodePostionObj = {};
const idSeparator = " ";

const CapLevelGraphRenderer = ({
  nodes,
  graphId,
  className,
  graphWidth,
  showToolTip,
  connections,
  graphStyles,
  graphHeight,
  offsetHeight,
  defaultStartX,
  defaultStartY,
  scrollerProps,
  containerStyles,
  lineStrokeColor,
  defaultEleWidth,
  scrollClassName,
  forwardConnProps,
  reverseConnProps,
  defaultEleDistance,
  offsetLineDistance,
}) => {
  const graphRef = useRef(null);
  const [scrollbarPosition, setScrollbarPosition] = useState(0);
  const totalAvailWidth = nodes.length * defaultEleWidth
    + defaultEleDistance * (nodes.length - 1)
    - parseInt(graphWidth, 10);

  useEffect(() => {
    // Initlize graph and events
    initializeGraph();
    initializeEvents();
  }, []);

  useEffect(() => {
    // Draw nodes after graph inilization
    drawNodes();
  }, [nodes, connections]);

  useEffect(() => {
    // Initilize and set scroll position on pagination change
    graphRef.current.setScrollbarPosition(scrollbarPosition);
  }, [nodes, connections, scrollbarPosition]);

  // Initlize Graph area
  const initializeGraph = useCallback(() => {
    if (showToolTip) {
      Graph.registerEdgeTool("tooltip", TooltipTool, true);
    }
    graphRef.current = new Graph({
      container: document.getElementById(graphId),
      resizing: false,
      width: graphWidth,
      height: graphHeight,
      fitView: true,
      scroller: {
        padding: 0,
        enabled: true,
        pannable: false,
        autoResize: true,
        className: scrollClassName,
        ...scrollerProps,
      },
      interacting: false,
    });
  }, []);

  const drawNodes = useCallback(
    (
      eleWidth = defaultEleWidth,
      distance = defaultEleDistance,
      offsetY = offsetHeight
    ) => {
      let nextX = defaultStartX;
      nodes.forEach(({ id, component, height, props, toolTip = "" }, index) => {
        const Component = component;
        const x = nextX;
        const y = defaultStartY;
        const endX = nextX + eleWidth;
        // draw the node
        graphRef.current.addNode({
          id,
          x,
          y,
          width: eleWidth,
          height,
          component: <Component {...props} />,
          shape: "react-shape",
          zIndex: 2,
        });

        // Adding node poisitions to obj
        nodePostionObj[id] = {
          x,
          y,
          x1: endX,
          y1: y + height,
          height,
          width: eleWidth,
          toolTip,
        };

        // Draw forward connection left to right - starts
        nextX = endX + distance;
        // Skip connection for last node
        if (nodes[index + 1]) {
          // offsetY - Connection offset height from node point
          graphRef.current.addEdge({
            id: `${id} ${nodes[index + 1].id}`,
            sourcePoint: { x: endX, y: y + offsetY },
            targetPoint: { x: nextX, y: y + offsetY },
            attrs: {
              line: {
                stroke: lineStrokeColor,
                ...forwardConnProps,
              },
            },
          });
        }
        // Forward connection ends
      });
      calculateAndDrawRevConnections(nodes);
    },
    [nodes]
  );

  // Calculate levels / Split connections based on level and Draw reverse connection
  const calculateAndDrawRevConnections = useCallback(() => {
    let connectionListTemp = connections;
    // maintains in and out list for each node
    const connectionObj = {};
    // maintains connections by level
    const levelList = [];
    // Iterate level by level
    for (let levelIndex = 1; levelIndex <= nodes.length; levelIndex++) {
      let levels = [];
      let lastTargetIndex;
      // Iterate nodes by reverse order
      for (
        let sourceIndex = nodes.length - 1;
        sourceIndex >= 0;
        sourceIndex--
      ) {
        const targetIndex = sourceIndex - levelIndex;
        if (nodes[sourceIndex] && nodes[targetIndex]) {
          const source = nodes[sourceIndex];
          const target = nodes[targetIndex];
          const filterConnection = connectionListTemp.filter(
            ({ sourceId, targetId }) => source.id !== sourceId || target.id !== targetId
          );
          // check if two nodes have connection or not
          const isConncection = filterConnection.length !== connectionListTemp.length;
          if (isConncection) {
            // If connection, connections is assigned with filterList to avoid unwanted iteration
            connectionListTemp = filterConnection;
            if (!lastTargetIndex && levelIndex !== 1) {
              lastTargetIndex = targetIndex;
            }
            // Put in next level when two connection get intracts
            if (targetIndex <= lastTargetIndex && levelIndex !== 1) {
              levels.push({ sourceId: source.id, targetId: target.id });
              levelList.push(levels);
              levels = [];
            }

            if (levelIndex === 1) {
              levels.push({ sourceId: source.id, targetId: target.id });
            }

            // Handle connections in and out list
            if (!connectionObj[source.id]) {
              connectionObj[source.id] = {
                in: [],
                out: [target.id],
              };
            } else {
              connectionObj[source.id].out.push(target.id);
            }
            if (!connectionObj[target.id]) {
              connectionObj[target.id] = {
                in: [source.id],
                out: [],
              };
            } else {
              connectionObj[target.id].in.push(source.id);
            }
          }
        }
      }
      // Added connection in level list
      if (levels.length > 0) {
        levelList.push(levels);
      }
    }
    drawReverseConnections(nodes, connectionObj, levelList);
  }, [connections, nodes]);

  // Get height bewteen a two nodes having connection
  // This Avoid connection overloops over node
  const getMaxHeight = (nodeList, sourceId, targetId) => {
    let maxY1 = 0;
    let isStart = false;
    nodeList.forEach(({ id }) => {
      const { y1 } = nodePostionObj[id];
      if (id === targetId) {
        isStart = true;
      }
      if (isStart && y1 > maxY1) {
        maxY1 = y1;
      }
      if (id === sourceId) {
        isStart = false;
      }
    });
    return maxY1;
  };

  // Draw reverse connection
  const drawReverseConnections = (nodeList, connectionObj, levelList) => {
    // Iterate level list by level by level
    levelList.forEach((levels, index) => {
      // Iterate connection on a each level
      levels.forEach(({ sourceId, targetId }, levelItemIndex) => {
        // Get source and target total connection count
        const srcConCount = connectionObj[sourceId].in.length
          + connectionObj[sourceId].out.length
          + 1;
        const targetConCount = connectionObj[targetId].in.length
          + connectionObj[targetId].out.length
          + 1;

        // split connection based on connection count for a node
        let x = nodePostionObj[sourceId].x
          + nodePostionObj[sourceId].width / srcConCount;
        let x1 = nodePostionObj[targetId].x1
          - nodePostionObj[targetId].width / targetConCount;

        if (connectionObj[sourceId].out.includes(targetId)) {
          // set start position of connection, based on connection count and arrangements
          x = nodePostionObj[sourceId].x
            + (nodePostionObj[sourceId].width / srcConCount)
              * ([
                ...connectionObj[sourceId].out,
                ...connectionObj[sourceId].in,
              ].indexOf(targetId)
                + 1);
        }

        if (connectionObj[targetId].in.includes(sourceId)) {
          // set end position of connection, based on connection count and arrangements
          x1 = nodePostionObj[targetId].x1
            - (nodePostionObj[targetId].width / targetConCount)
              * ([
                ...connectionObj[targetId].in,
                ...connectionObj[targetId].out,
              ].indexOf(sourceId)
                + 1);
        }

        // Handle connection overloops over node
        const maxHeight = getMaxHeight(nodeList, sourceId, targetId);
        const { y1: y } = nodePostionObj[sourceId];
        const { y1 } = nodePostionObj[targetId];
        const v1 = { x, y: maxHeight + offsetLineDistance * (index + 1) };
        const v2 = { x: x1, y: maxHeight + offsetLineDistance * (index + 1) };
        graphRef.current
          .addEdge({
            id: `${sourceId}${idSeparator}${targetId}`,
            sourcePoint: [x, y],
            target: [x1, y1],
            vertices: [v1, v2],
            router: {
              name: "orth",
              args: {
                padding: {},
              },
            },
            attrs: {
              line: {
                stroke: lineStrokeColor,
                ...reverseConnProps,
              },
            },
          })
          .setConnector("jumpover");
        // adding emtpy edge at last level
        if (
          levelList.length - 1 === index
          && levels.length - 1 === levelItemIndex
        ) {
          const v3 = {
            x: v1.x,
            y: v1.y + 8,
          };
          const v4 = {
            x: v2.x,
            y: v2.y + 8,
          };
          graphRef.current.addEdge({
            id: `${sourceId}${idSeparator}${targetId}-end`,
            sourcePoint: [x, y],
            target: [x1, y1],
            vertices: [v3, v4],
            router: {
              name: "orth",
              args: {
                padding: {},
              },
            },
            attrs: {
              line: {
                stroke: "transparent",
              },
            },
          });
        }
      });
    });
  };

  const initializeEvents = useCallback(() => {
    graphRef.current.on("node:mousedown", (data) => {
      const targetElement = get(data, "e.target", {});
      if (targetElement.tagName === "INPUT") {
        targetElement.focus();
      }
    });

    if (showToolTip) {
      graphRef.current.on("edge:mouseenter", ({ edge }) => {
        const [sourceId, targetId] = edge.id.split(idSeparator);
        const sourceToolTip = get(nodePostionObj, [sourceId, 'toolTip']);
        const targetToolTip = get(nodePostionObj, [targetId, 'toolTip']);
        if (sourceToolTip && targetToolTip) {
          edge.addTools([
            {
              name: "tooltip",
              args: {
                tooltip: `${sourceToolTip} - ${targetToolTip}`,
              },
            },
          ]);
        }
      });

      graphRef.current.on("edge:mouseleave", ({ edge }) => {
        edge.removeTools();
      });
    }
  });

  const onPreviousPageClick = useCallback(() => {
    let newScrollValue = parseFloat(
      (scrollbarPosition - (defaultEleWidth + defaultEleDistance)).toFixed(5),
      10
    );
    if (newScrollValue < 0) {
      newScrollValue = 0;
    }
    if (newScrollValue >= 0) setScrollbarPosition(newScrollValue);
  }, [scrollbarPosition]);

  const onNextPageClick = useCallback(() => {
    const newScrollValue = parseFloat(
      (scrollbarPosition + defaultEleWidth + defaultEleDistance).toFixed(5),
      10
    );
    if (newScrollValue < totalAvailWidth) setScrollbarPosition(newScrollValue);
  }, [nodes, scrollbarPosition]);

  return (
    <div className={classnames("cap-level-graph-renderer-v2", className)}>
      <div className="level-graph-pagination-row">
        <div className="level-graph-pagination-container">
          <CapButton
            type="flat"
            className="pointer-cursor level-graph-pagination-left"
            disabled={scrollbarPosition <= 0}
            onClick={onPreviousPageClick}
          >
            <CapIcon type="chevron-left"></CapIcon>
          </CapButton>
          <CapButton
            type="flat"
            className="pointer-cursor level-graph-pagination-right"
            disabled={
              parseFloat(
                (
                  scrollbarPosition
                  + defaultEleWidth
                  + defaultEleDistance
                ).toFixed(5),
                10
              ) > totalAvailWidth
            }
            onClick={onNextPageClick}
          >
            <CapIcon type="chevron-right"></CapIcon>
          </CapButton>
        </div>
      </div>
      <div className="graph-renderer-container" style={{ ...containerStyles }}>
        <div id={graphId} style={{ ...graphStyles }} />
      </div>
    </div>
  );
};

CapLevelGraphRenderer.propTypes = {
  nodes: PropTypes.array,
  showToolTip: PropTypes.bool,
  className: PropTypes.string,
  connections: PropTypes.array,
  graphStyles: PropTypes.object,
  offsetHeight: PropTypes.number,
  defaultStartX: PropTypes.number,
  defaultStartY: PropTypes.number,
  scrollerProps: PropTypes.object,
  scrollClassName: PropTypes.string,
  containerStyles: PropTypes.object,
  lineStrokeColor: PropTypes.string,
  defaultEleWidth: PropTypes.number,
  reverseConnProps: PropTypes.object,
  forwardConnProps: PropTypes.object,
  defaultEleDistance: PropTypes.number,
  offsetLineDistance: PropTypes.number,
  graphId: PropTypes.string.isRequired,
  graphWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  graphHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CapLevelGraphRenderer.defaultProps = {
  nodes: [],
  className: "",
  graphStyles: {},
  connections: [],
  defaultStartX: 0,
  defaultStartY: 0,
  offsetHeight: 20,
  scrollerProps: {},
  showToolTip: false,
  containerStyles: {},
  graphWidth: "500px",
  scrollClassName: "",
  graphHeight: "500px",
  reverseConnProps: {},
  forwardConnProps: {},
  defaultEleWidth: 100,
  defaultEleDistance: 20,
  offsetLineDistance: 18,
  lineStrokeColor: "gray",
};

export default CapLevelGraphRenderer;
