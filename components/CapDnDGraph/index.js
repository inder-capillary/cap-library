/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import '@antv/x6-react-shape';
import { Graph, Markup } from '@antv/x6';
import { Layout } from '@antv/layout';
import { useDrop } from 'react-dnd';

import { nanoid } from 'nanoid';
import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import LocaleHoc from '../LocaleHoc';

import CapIconsSidebar from '../CapDndGraphSidebar';
import CapRow from '../CapRow';
import CapLabel from '../CapLabel';
import GraphBlockNode from './GraphBlockNode';
import CapIcon from '../CapIcon';
import CapTooltip from '../CapTooltip';
import CapModal from '../CapModal';
import CapHeading from '../CapHeading';
import CapNotification from '../CapNotification';

import {
  CUSTOM_EDGE,
  CUSTOM_EDGE_DASHED,
  GRAPH_DIRECTION,
  GRAPH_LAYOUT_TYPE,
  GRAPH_ALIGNMENT,
  ENTRY_TRIGGER,
  EXIT_TRIGGER,
  WAIT_TILL_EVENT,
  DECISION_SPLIT,
  EMPTY_GRAPH_TEXT,
  PLACEHOLDER_NODE,
  END_NODE,
  BLOCK_NODE,
  SETTINGS,
  DELETE,
  VIEW,
  SOURCE_COORDINATES,
  SCHEDULE_BLOCK,
  JOIN,
  JOIN_NOTIFICATION_STYLE,
} from './constants';

import { CAP_G06, CAP_PRIMARY } from '../styled/variables';
import './index.scss';
import CapBorderedBox from '../CapBorderedBox';
import {
  recursivelyDeleteNodes,
  computeJoinGraphNodesData,
  updateJoinOrJoinedGraphNodeProp,
} from "./utils";

const endIconProps = {
  type: 'end',
  style: {
    color: CAP_PRIMARY.base,
    padding: '9px 0',
  },
  textLabel: <CapLabel type="label2" className="margin-l-2">End</CapLabel>,
};

const CapDndGraph = (props) => {
  const {
    sidebarProps = {},
    dndGraphId,
    onClickConfigure,
    deleteNodesFromMeta = () => {},
    onDropNewNode = () => {},
    graphNodes,
    setGraphNodes,
    nodeTitleMapping,
    offset = 0,
    getPathsInfo,
    viewMode,
    deleteBlockModalHeaderText,
    deleteBlockModalDescriptionText,
    yesDeleteButtonText,
    noButtonText,
    joinDropErrorText,
    theText,
    blockIsLinkedText,
    blockText,
    disconnectText,
    areYouSureText,
  } = props;

  const graphRef = useRef(null);
  const dagreLayoutRef = useRef(null);
  const previouslyFoundEdge = useRef(-1);
  const edgesData = useRef([]);
  const graphContainerPositionStart = useRef(null);

  const [graphData, setGraphData] = useState({
    nodes: [],
    edges: [],
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [blockId, setBlockId] = useState(null);

  const blockNodes = useMemo(() => graphNodes.filter(
    (node) => ![ENTRY_TRIGGER, EXIT_TRIGGER, END_NODE, PLACEHOLDER_NODE, EMPTY_GRAPH_TEXT, SCHEDULE_BLOCK].includes(node?.type)
  ),
  [graphNodes]);

  /* Register Custom Edges
  Currently two types of custom edges are supported,
  Normal line and dashed line*/
  const registerEdges = useCallback(() => {
    Graph.registerEdge(
      CUSTOM_EDGE_DASHED,
      {
        zIndex: -1,
        attrs: {
          line: {
            stroke: CAP_G06,
            strokeWidth: 1,
            sourceMarker: null,
            targetMarker: null,
            strokeDasharray: '3, 3',
          },
        },
      },
      true,
    );
    Graph.registerEdge(
      CUSTOM_EDGE,
      {
        zIndex: -1,
        attrs: {
          line: {
            fill: 'none',
            strokeLinejoin: 'round',
            strokeWidth: 1,
            stroke: CAP_G06,
            sourceMarker: null,
            targetMarker: null,
          },
        },
      },
      true,
    );
  }, []);

  const initializeGraphAndLayout = useCallback(() => {
    graphRef.current = new Graph({
      container: document.getElementById(dndGraphId),
      connecting: {
        allowBlank: true,
      },
      interacting: {
        nodeMovable: false,
      },
      scroller: {
        padding: 2,
        enabled: true,
        pannable: false,
      },
      onEdgeLabelRendered: (args) => {
        const { selectors, label } = args;
        const content = selectors.foContent;
        if (content && label.text) {
          ReactDOM.render(
            /**Will be replaced by Label component passed as prop */
            <CapLabel.CapLabelInline
              type="label1"
              style={{
                background: "white",
                display: "inline-flex",
                alignItems: "center",
                padding: "0px 4px",
                maxWidth: "64px",
              }}
            >
              <CapTooltip>
                <div className="truncate-text">{label.text}</div>
              </CapTooltip>
              {/*
                // Commenting the below code as per the current requirement. It might be required in future so not removing it.
                <CapTooltip title="Tooltip with path information">
                  <CapIcon type="info" size="xs" className="margin-l-4" />
                </CapTooltip>
              */}
            </CapLabel.CapLabelInline>, content
          );
        }
      },
    });

    dagreLayoutRef.current = new Layout({
      type: GRAPH_LAYOUT_TYPE, // dagre
      rankdir: GRAPH_DIRECTION, // LR
      align: GRAPH_ALIGNMENT, // UL
      nodesepFunc: (node) => {
        if (node.type === ENTRY_TRIGGER) {
          return 42;
        }
        return 15;
      },
      ranksepFunc: (node) => {
        if (node.type === ENTRY_TRIGGER) {
          /**Gap between the Entry Trigger and First child */
          return 150;
        }
        /**Gap between other nodes */
        return 35;
      },
    });
  }, []);

  /* Function to prepare data to pass to the graph instance */
  const prepareGraphNodeEdges = useCallback(() => {
    const graphNodesData = [];
    let graphEdges = [];

    const edgeType = blockNodes.length ? CUSTOM_EDGE : CUSTOM_EDGE_DASHED;
    const size = 42;
    /**Distance is calculated by converting the position 1 to absolute value
     * getDifference return the value that needs to be reduced from absolute value
     * To create aligned path info distance
     */
    const getDifference = (index) => {
      switch (index) {
        case 0:
          return 2.5;
        case 1:
          return 2;
        default:
          return index * 1;
      }
    };

    graphNodes.forEach((node) => {
      const Component = node.component; // Passed from parent
      graphNodesData.push({
        id: node.id,
        component: <Component {...node.props} onClickActionIcon={onClickActionIcon} width={node.width || size} height={node.height || size} />,
        width: node.width || size,
        height: node.height || size,
        shape: 'react-shape',
        zIndex: 2,
        type: node.type,
      });
      if (node.showEdge !== false) { //  We do not show edges for two nodes, Exit trigger and Graph Text
        (node.to || []).forEach((toNodeId, index) => {
          const {
            previewComponent: PreviewContainer,
            previewProps,
          } = node?.pathsInfo?.[toNodeId] || {};
          graphEdges.push({
            source: node.id,
            target: toNodeId,
            zIndex: 1,
            shape: node.toType === PLACEHOLDER_NODE && node.placeholderToIndex === index ? CUSTOM_EDGE_DASHED : edgeType,
            defaultLabel: {
              markup: Markup.getForeignObjectMarkup(),
              attrs: {
                fo: {
                  width: 120,
                  height: 30,
                  x: -85 - getDifference(index),
                  y: -10,
                },
              },
            },
            label: {
              position: 1,
              text: PreviewContainer && <PreviewContainer {...previewProps} />,
            },
          });
        });
      }
    });

    /**Update the graphEdges with appropriate color if viewMode and userHistoryProps */
    if (viewMode) {
      graphEdges = graphEdges.map((graphEdge) => {
        const edge = cloneDeep(graphEdge);
        const {target} = edge;
        const targetNode = graphNodes.find((node) => node.id === target);
        if (!isEmpty(targetNode?.props?.userHistoryProps)) {
          const attrs = {
            line: {
              stroke: targetNode?.props?.userHistoryProps?.color,
              strokeWidth: 2,
            },
          };
          edge.attrs = attrs;
          edge.zIndex = 2;
        }
        return edge;
      });
    }


    setGraphData({
      nodes: graphNodesData,
      edges: graphEdges,
    });
  }, [graphNodes]);

  // Pass nodes and Edges data to graph
  const layout = () => {
    if (graphData.nodes.length) {
      const model = dagreLayoutRef.current.layout({ nodes: graphData.nodes, edges: graphData.edges });
      graphRef.current.fromJSON(model);
    }
  };

  // Set the vertices to edges so that, edges shows with 90 degree angel
  const setEdgeVertices = () => {
    if (!graphRef.current) return; // Do nothing if graph is not initialized yet
    let sourcePosition = null;
    const edges = graphRef.current.getEdges();

    edges.forEach((edge) => {
      const source = edge.getSourceNode() || {};
      const target = edge.getTargetNode() || {};
      const sourceNode = graphNodes.find((node) => node.id === source.id) || {};
      if (sourceNode.type === ENTRY_TRIGGER && source.getBBox && target.getBBox) {
        const sourceBBox = source.getBBox();
        const targetBBox = target.getBBox();
        if (!sourcePosition || targetBBox.center.y < sourcePosition.y) {
          // Sets the top most node's center.y as sourcePosition.y
          sourcePosition = { x: sourceBBox.topRight.x, y: targetBBox.center.y };
        }
      }
    });

    /** Added fixed x and y co ordinates in case of error in above flow
     * Position of the source node is fixed, which makes the first node position fixed as well
     * Below value is the generated value. In case if there is an error in the flow setting source position
     * This value will be used as fallback
     */
    if (!sourcePosition) sourcePosition = SOURCE_COORDINATES;

    edges.forEach((edge) => {
      const source = edge.getSourceNode() || {};
      const target = edge.getTargetNode() || {};
      if (source.getBBox && target.getBBox) {
        const sourceBBox = source.getBBox();
        const targetBBox = target.getBBox();

        const sourceNode = graphNodes.find((node) => node.id === source.id) || {};
        /* By default, edges start from the middle of the node,
        but for Exit Trigger, we need to start the edge from the top
        custom logic to place the edge source based on the Entry trigger vertices
        */
        if (sourceNode.type === ENTRY_TRIGGER) {
          edge.setSource({
            x: sourcePosition.x, y: sourcePosition.y,
          });
        }

        /* Logic to show the edges with 90 degree angle instead of straight edge lines,
        logic taken from ant v x6 examples: https://x6.antv.vision/en/examples/showcase/practices#orgchart
        */
        if (sourceNode.type !== ENTRY_TRIGGER) {
          if ((GRAPH_DIRECTION === 'LR' || GRAPH_DIRECTION === 'RL') && sourceBBox.y !== targetBBox.y) {
            const fix = GRAPH_DIRECTION === 'LR' ? sourceBBox.width : 0;
            const x = sourceBBox.x + fix / 2;
            edge.setVertices([
              // { x, y: sourceBBox.center.y },
              { x, y: targetBBox.center.y },
            ]);
          } else if (
            (GRAPH_DIRECTION === 'TB' || GRAPH_DIRECTION === 'BT')
            && sourceBBox.x !== targetBBox.x
          ) {
            const gap = GRAPH_DIRECTION === 'TB'
              ? targetBBox.y - sourceBBox.y - sourceBBox.height
              : -sourceBBox.y + targetBBox.y + targetBBox.height;
            const fix = GRAPH_DIRECTION === 'TB' ? sourceBBox.height : 0;
            const y = sourceBBox.y + fix + gap / 2;
            edge.setVertices([
              // { x: sourceBBox.center.x, y },
              { x: targetBBox.center.x, y },
            ]);
          } else {
            edge.setVertices([]);
          }
        } else if ((GRAPH_DIRECTION === 'LR' || GRAPH_DIRECTION === 'RL') && sourceBBox.y !== targetBBox.y) {
          const gap = GRAPH_DIRECTION === 'LR'
            ? targetBBox.x - sourceBBox.x - sourceBBox.width
            : -sourceBBox.x + targetBBox.x + targetBBox.width;
          const fix = GRAPH_DIRECTION === 'LR' ? sourceBBox.width : 0;
          const x = sourceBBox.x + fix + gap / 4;
          edge.setVertices([
            { x, y: sourcePosition.y },
            { x, y: sourceBBox.center.y },
            { x, y: targetBBox.center.y },
          ]);
        } else if (
          (GRAPH_DIRECTION === 'TB' || GRAPH_DIRECTION === 'BT')
          && sourceBBox.x !== targetBBox.x
        ) {
          const gap = GRAPH_DIRECTION === 'TB'
            ? targetBBox.y - sourceBBox.y - sourceBBox.height
            : -sourceBBox.y + targetBBox.y + targetBBox.height;
          const fix = GRAPH_DIRECTION === 'TB' ? sourceBBox.height : 0;
          const y = sourceBBox.y + fix + gap / 2;
          edge.setVertices([
            { x: sourceBBox.center.x, y },
            { x: targetBBox.center.x, y },
          ]);
        } else {
          edge.setVertices([]);
        }
      }
    });
  };

  const getEntryTrigger = () => graphNodes.find((node) => node.type === ENTRY_TRIGGER);

  const getToNodeId = (endNode, endNodeId, endNodeIdSecondary, blockType) => {
    if(blockType === JOIN){
      return undefined;
    }else{
      if(!isEmpty(endNode)){
        return [endNodeId, endNodeIdSecondary];
      }
      return [endNodeId];
    }
  };
  // Position of Exit Trigger and Empty Graph Text to be placed manually based on the requirement
  const positionNodesManually = () => {
    const entryTrigger = getEntryTrigger();
    const exitTrigger = graphNodes.find((node) => node.type === EXIT_TRIGGER);
    const emptyGraphTextNode = graphNodes.find((node) => node.type === EMPTY_GRAPH_TEXT);
    const placeholderNode = graphNodes.find((node) => node.type === PLACEHOLDER_NODE);// First placeholder node where we need to show text
    const scheduleBlock = graphNodes.find((node) => node.type === SCHEDULE_BLOCK);

    const entryTriggerNode = graphRef.current.getCell(entryTrigger.id);
    const exitTriggerNode = graphRef.current.getCell(exitTrigger?.id);
    const emptyGraphText = emptyGraphTextNode && graphRef.current.getCell(emptyGraphTextNode.id);
    const nextNode = placeholderNode && graphRef.current.getCell(placeholderNode.id);
    const scheduleBlockNode = scheduleBlock && graphRef.current.getCell(scheduleBlock.id);

    if (entryTriggerNode) {
      const entryTriggerBBox = entryTriggerNode.getBBox().bottomLeft;
      const entryTriggerTopBBox = entryTriggerNode.getBBox().topLeft;

      entryTriggerNode.position(entryTriggerTopBBox.x, entryTriggerTopBBox.y - 16);

      if (entryTriggerNode && scheduleBlock) {
        scheduleBlockNode.position(entryTriggerBBox.x, entryTriggerBBox.y + 16);
      }
      if (exitTriggerNode && scheduleBlock) {
        const scheduleBlockBBox = scheduleBlockNode.getBBox().bottomLeft;
        exitTriggerNode.position(scheduleBlockBBox.x, scheduleBlockBBox.y + 16);
      }
    }

    if (emptyGraphText && nextNode) {
      const node2BBox = nextNode.getBBox().bottomLeft;
      emptyGraphText.position(node2BBox.x, node2BBox.y + 16);
    }
  };

  const getEdges = useCallback(() => {
    const edges = graphRef.current.getEdges();
    edgesData.current = [];
    edges.forEach((edge) => {
      const { x, y, width, height } = edge.getBBox();
      let boundClient = null;
      if (graphRef.current.zoom() !== 1) {
        const domEdge = document.querySelector(`g[data-cell-id="${edge.id}"`).getBoundingClientRect();
        boundClient = {
          start: {
            x: domEdge.x,
            y: domEdge.y,
          },
          end: {
            x: domEdge.x + domEdge.width,
            y: domEdge.y + domEdge.height,
          },
        };
      }
      edgesData.current.push({
        sourceId: (edge.getSourceNode() || {}).id,
        targetId: (edge.getTargetNode() || {}).id,
        start: { x, y },
        end: { x: x + width, y: y + height },
        vertices: edge.vertices,
        boundClient,
      });
    });
  }, [graphRef.current?.scale]);

  useEffect(() => {
    registerEdges();
    initializeGraphAndLayout();
    prepareGraphNodeEdges();
    graphContainerPositionStart.current = document.querySelector('.cap-graph-builder .x6-graph-scroller').getBoundingClientRect().x;
  }, []);

  useEffect(() => {
    prepareGraphNodeEdges();
  }, [graphNodes]);

  useEffect(() => {
    layout();
    setEdgeVertices();
    getEdges();
    positionNodesManually();
  }, [graphData]);

  const onDrop = useCallback((item) => {
    const newNodeId = nanoid(10);
    const endNodeIdSecondary = nanoid(10);
    let endNode;
    previouslyFoundEdge.current = -1;
    if (item.isMultiPath) {
      endNode = {
        from: newNodeId,
        id: endNodeIdSecondary,
        component: CapIcon,
        props: {
          ...endIconProps,
          id: endNodeIdSecondary,
        },
        type: END_NODE,
      };
    }
    let oldToNode;
    let sourceId;
    if (!blockNodes.length && getEntryTrigger().to.length === 1) {
      const entryTrigger = getEntryTrigger();
      const exitTrigger = graphNodes.find((node) => node.type === EXIT_TRIGGER);
      const scheduleBlock = graphNodes.find((node) => node.type === SCHEDULE_BLOCK);

      const endNodeId = nanoid(10);
      const newSetNodes = [
        {
          ...entryTrigger,
          to: [newNodeId],
        },
        {
          from: entryTrigger.id,
          id: newNodeId,
          component: GraphBlockNode,
          props: {
            iconType: item.iconType,
            color: item.color,
            id: newNodeId,
            blockType: item.id,
            onClickActionIcon,
            isMultiPath: item.isMultiPath,
            nodeTitle: nodeTitleMapping[item.id],
          },
          to: getToNodeId(endNode, endNodeId, endNodeIdSecondary, item.id),
          type: BLOCK_NODE,
        }
      ];

      if(item.id !== JOIN){
        newSetNodes.push({
          from: newNodeId,
          id: endNodeId,
          component: CapIcon,
          props: {
            ...endIconProps,
            id: endNodeId,
          },
          type: END_NODE,
        })
      }

      //change node id in pathsInfo
      if (!isEmpty(entryTrigger.pathsInfo)) {
        newSetNodes[0].pathsInfo = {
          [newNodeId]: {
            ...entryTrigger.pathsInfo[entryTrigger.to[0]],
          },
        };
      }

      [oldToNode] = entryTrigger.to;
      sourceId = entryTrigger.id;

      if (item.isMultiPath) {
        newSetNodes.push(endNode);
      }
      if (item.id === WAIT_TILL_EVENT) {
        newSetNodes[1].pathsInfo = getPathsInfo(WAIT_TILL_EVENT, [endNodeId, endNodeIdSecondary]);
      }
      if (exitTrigger) {
        newSetNodes.splice(1, 0, exitTrigger);
      }
      if (scheduleBlock) {
        newSetNodes.splice(1, 0, scheduleBlock);
      }
      previouslyFoundEdge.current = -1;
      setGraphNodes(newSetNodes);
      onDropNewNode({ blockId: newNodeId, blockType: item.id, oldToNode, sourceId });
    } else {
      setGraphNodes((prevNodes) => {
        let nodes = cloneDeep(prevNodes);
        const placeholderNodeIndex = nodes.findIndex((node) => node.type === PLACEHOLDER_NODE);
        if (placeholderNodeIndex !== -1) {
          const placeHolderNode = nodes[placeholderNodeIndex];
          sourceId = placeHolderNode.from;
          const sourceIndex = nodes.findIndex((node) => node.id === sourceId);
          const sourceToArrayIndex = nodes[sourceIndex].to.findIndex((nodeId) => nodeId === placeHolderNode.id);
          const targetId = placeHolderNode.to[0];
          const targetIndex = nodes.findIndex(node => node.id === targetId);
          const targetNode = nodes[targetIndex];
          if (item.id === JOIN) {
            if (targetNode.type === BLOCK_NODE) {
               //not allowing JOIN to be placed in middle of journey
               nodes.splice(placeholderNodeIndex, 1);
               //updating JOIN source
               nodes[sourceIndex] = {
                  ...nodes[sourceIndex],
                  toType: undefined,
                  placeholderToIndex: undefined,
                };
               nodes[sourceIndex].to[sourceToArrayIndex] = targetId;
               //displaying error when JOIN node is dropped in middle of journey
               CapNotification.error({ 
                  key: joinDropErrorText, 
                  message: joinDropErrorText, 
                  style: JOIN_NOTIFICATION_STYLE
              });
            } else if (targetNode.type === END_NODE) {
              //adding JOIN to node array
              nodes.splice(placeholderNodeIndex, 1, {
                id: newNodeId,
                component: GraphBlockNode,
                props: {
                  iconType: item.iconType,
                  color: item.color,
                  id: newNodeId,
                  blockType: item.id,
                  onClickActionIcon,
                  isMultiPath: false,
                  nodeTitle: nodeTitleMapping[item.id],
                },
                to: undefined,
                from: nodes[sourceIndex].id,
                type: BLOCK_NODE,
              });
              //updating JOIN source
              nodes[sourceIndex] = {
                ...nodes[sourceIndex],
                toType: undefined,
                placeholderToIndex: undefined,
              };
              nodes[sourceIndex].to[sourceToArrayIndex] = newNodeId;
              if ((sourceId === getEntryTrigger().id || [WAIT_TILL_EVENT, DECISION_SPLIT].includes(nodes[sourceIndex].props.blockType)) && nodes[sourceIndex]?.pathsInfo) {
                [oldToNode] = placeHolderNode.to;
                nodes[sourceIndex].pathsInfo[newNodeId] = nodes[sourceIndex]?.pathsInfo[targetId];
                delete nodes[sourceIndex].pathsInfo[targetId];
              }
              //removing END_NODE adter JOIN
              nodes.splice(targetIndex, 1);
              onDropNewNode({ blockId: newNodeId, blockType: item.id, oldToNode, sourceId });
            }
          } else{
          let from;
          nodes = nodes.map((node) => {
            from = '';
            if (node.from === sourceId && node.id === targetId) {
              from = newNodeId;
            }
            return {
              ...node,
              from: from || node.from,
            };
          });

          let toNodes = placeHolderNode.to;
          if (item.isMultiPath) {
            toNodes = [...toNodes, endNodeIdSecondary];
            nodes.push(endNode);
          }

          nodes.splice(placeholderNodeIndex, 1, {
            id: newNodeId,
            component: GraphBlockNode,
            props: {
              iconType: item.iconType,
              color: item.color,
              id: newNodeId,
              blockType: item.id,
              onClickActionIcon,
              isMultiPath: item.isMultiPath,
              nodeTitle: nodeTitleMapping[item.id],
            },
            to: toNodes,
            from: nodes[sourceIndex].id,
            type: BLOCK_NODE,
          });
          nodes[sourceIndex] = {
            ...nodes[sourceIndex],
            toType: undefined,
            placeholderToIndex: undefined,
          };

          if (item.id === WAIT_TILL_EVENT) {
            placeHolderNode.pathsInfo = getPathsInfo(WAIT_TILL_EVENT, toNodes);
          }
          if ((sourceId === getEntryTrigger().id || [WAIT_TILL_EVENT, DECISION_SPLIT].includes(nodes[sourceIndex].props.blockType)) && nodes[sourceIndex]?.pathsInfo) {
            [oldToNode] = toNodes;
            nodes[sourceIndex].pathsInfo[newNodeId] = nodes[sourceIndex]?.pathsInfo[toNodes[0]];
            delete nodes[sourceIndex].pathsInfo[toNodes[0]];
          }

          if (sourceToArrayIndex !== -1) {
            nodes[sourceIndex].to[sourceToArrayIndex] = newNodeId;
          }
          onDropNewNode({ blockId: newNodeId, blockType: item.id, oldToNode, sourceId });
        }
      }
        return nodes;
      });
      previouslyFoundEdge.current = -1;
    }
  }, [graphNodes]);

  const [, drop] = useDrop({
    accept: 'draggableNode',
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    hover: debounce((item, monitor) => {
      const draggingItemPosition = monitor.getClientOffset();

      if (
        draggingItemPosition
        && (
          blockNodes.length
          || !(getEntryTrigger().to.length === 1) //if more than one path, allow nodes to be dropped
        )) {
        let dragPosition = {
          x: draggingItemPosition.x,
          y: draggingItemPosition.y,
        };
        const isZoomed = graphRef.current.zoom() !== 1;
        // const isZoomed = false;
        if (!isZoomed) {
          dragPosition = {
            x: draggingItemPosition.x - graphContainerPositionStart.current - 10,
            y: draggingItemPosition.y - 34 - offset,
          };
        }
        const scrollPosition = isZoomed ? {left: 0, top: 0} : graphRef.current.getScrollbarPosition();
        const foundEdgeIndex = edgesData.current.findIndex(
          (edgeD) => {
            const pos = isZoomed ? edgeD.boundClient : edgeD;
            if (edgeD.vertices.length) {
              return (
                dragPosition.x > (edgeD.vertices[0].x - scrollPosition.left)
                && dragPosition.y > (edgeD.vertices[0].y - 40 - scrollPosition.top)
                && dragPosition.x < (edgeD.end.x - scrollPosition.left)
                && dragPosition.y < (edgeD.end.y + 40 - scrollPosition.top)
              );
            }
            return (
              dragPosition.x > (pos.start.x - (scrollPosition.left))
                && dragPosition.y > (pos.start.y - 40 - scrollPosition.top)
                && dragPosition.x < (pos.end.x - (scrollPosition.left))
                && dragPosition.y < (pos.end.y + 40 - scrollPosition.top)
            );
          }
        );
        if (foundEdgeIndex !== -1 && previouslyFoundEdge.current !== foundEdgeIndex) {
          const nodes = cloneDeep(graphNodes);
          const { sourceId, targetId } = edgesData.current[foundEdgeIndex];
          const targetIndex = nodes.findIndex((node) => node.id === targetId);
          const sourceIndex = sourceId === undefined ? 0 : nodes.findIndex((node) => node.id === sourceId);
          const sourceNode = nodes[sourceIndex];
          const targetNode = nodes[targetIndex];
          if (sourceNode?.type === PLACEHOLDER_NODE
            || targetNode?.type === PLACEHOLDER_NODE
            || !targetNode || !sourceNode) return;
          const sourceChildrens = nodes[sourceIndex].to || [];
          const toIndex = sourceChildrens.findIndex((nodeId) => nodeId === targetId);
          const id = nanoid(10);
          nodes.splice(targetIndex, 0, {
            from: sourceNode.id,
            id,
            component: CapBorderedBox,
            to: [targetNode.id],
            width: 42,
            height: 42,
            type: PLACEHOLDER_NODE,
          });
          nodes[sourceIndex] = {
            ...nodes[sourceIndex],
            toType: PLACEHOLDER_NODE,
            placeholderToIndex: toIndex,
          };
          if (toIndex !== -1) {
            nodes[sourceIndex].to[toIndex] = id;
          }
          previouslyFoundEdge.current = foundEdgeIndex;
          let secondaryPlaceholderId = null;
          nodes.forEach((node) => {
            if (node.type === PLACEHOLDER_NODE && node.id !== id) secondaryPlaceholderId = node.id;
          });
          const updatedNodes = secondaryPlaceholderId ? deleteNode(nodes, secondaryPlaceholderId).nodes : nodes;
          setGraphNodes(updatedNodes);
        }
      }
    }),

  });

  const deleteNode = (nodesParam, blockId) => {
    let nodes = cloneDeep(nodesParam);

    //JOIN specific start --- handling individual join/joined node delete
    const blockName = nodes.find(node => node.id === blockId)?.props?.blockData?.name || '';
    const linkedToJoinNodeId = [];
    nodes = nodes.flatMap(node => {
      const { blockType = "", isConfigured = false, blockData = {} } =
        node?.props || {};
      const { nextBlock: { pathBlockId = "" } = {} } = blockData;
       //handling update of graphnodes of join block when joined block is deleted
      if (blockType === JOIN && isConfigured && pathBlockId === blockId) {
        const clonedNode = cloneDeep(node);
        clonedNode.props.isConfigured = false;
        clonedNode.props.nodeTitle = nodeTitleMapping.JOIN;
        delete clonedNode.props.blockData.nextBlock;
        delete clonedNode.props.nodePreview;
        return clonedNode;
      }
      else if (blockType === JOIN && node?.id === blockId) {
        //handling update of graphnodes of joined block when join block is deleted
        if(isConfigured){
          linkedToJoinNodeId.push(pathBlockId);
        }
        //adding END_NODE
        const endNodeId = nanoid(10);
        node.to = [endNodeId];
        return [
          node,
          {
            from: node?.id,
            id: endNodeId,
            component: CapIcon,
            props: {
              ...endIconProps,
              id: endNodeId
            },
            type: END_NODE
          }
        ];
      }
      return node;
    });
    //handling update of graphnodes of joined block when join block is deleted
    nodes = nodes.map(node => {
      if (linkedToJoinNodeId.includes(node.id)) {
        if (node.props.joinBlockNameArray.length === 1) {
          delete node.props.joinBlockNameArray;
        } else {
          const joinBlockNameIndex = node.props.joinBlockNameArray.findIndex(
            i => i === blockName,
          );
          node.props.joinBlockNameArray.splice(joinBlockNameIndex,1);
        }        
      }
      return node;
    });
     //JOIN specific end
    const foundNode = nodes.find((node) => node.id === blockId);
    const { isMultiPath = false } = foundNode?.props || {};
    const secondaryNode = isMultiPath ? foundNode.to.length > 1 : false;
    let nodesToDelete = {
      [blockId]: true,
    };
    if (secondaryNode) {
      const childrens = foundNode.to.slice(1);
      nodesToDelete = {
        ...nodesToDelete,
        ...recursivelyDeleteNodes(nodes, childrens),
      };
    }

    nodes = nodes.map((node) => {
      if (node.from === foundNode.id) {
        return {
          ...node,
          from: foundNode.from,
        };
      }
      if (node.id === foundNode.from) {
        const updatedSource = cloneDeep(node);
        const toIndex = updatedSource.to && updatedSource.to.findIndex((nodeId) => nodeId === foundNode.id);
        updatedSource.to[toIndex] = foundNode.to && foundNode.to[0];
        updatedSource.toType = undefined;

        if (updatedSource.pathsInfo && foundNode.type !== PLACEHOLDER_NODE) {
          updatedSource.pathsInfo[foundNode.to[0]] = updatedSource.pathsInfo[foundNode.id];
          delete updatedSource.pathsInfo[foundNode.id];
        }

        return updatedSource;
      }
      return node;
    });
    let filteredNodes = nodes.filter(
      node => node && node.id !== blockId && !nodesToDelete[node.id]
    );

    return {
      nodes:
        Object.keys(nodesToDelete)?.length > 1
          ? updateJoinOrJoinedGraphNodeProp(
              filteredNodes,
              computeJoinGraphNodesData(nodes)
            )
          : filteredNodes,
      nodesToDelete,
      newToId: foundNode.type !== PLACEHOLDER_NODE ? foundNode.to[0] : null,
    };
  };

  const deleteNodeHandler = useCallback((blockId) => {
    setGraphNodes((prevNodes) => {
      const { nodes, nodesToDelete, newToId } = deleteNode(prevNodes, blockId);
      deleteNodesFromMeta(nodesToDelete, prevNodes.find((node) => node.id === blockId).from, blockId, newToId );
      return nodes;
    });
  }, []);

  const handleOnClickModalDeleteBtn = () => {
    deleteNodeHandler(blockId);
    setShowConfirmationModal(false);
  };

  const handleOnCloseModal = () => {
    setShowConfirmationModal(false);
  };

  const renderBlockName = blockName => (
    <CapLabel.CapLabelInline type="label4">{blockName}</CapLabel.CapLabelInline>
  );

  const getJoinDeleteDesc = (deletedNodeName, linkedNodeNameArray) => (
    <CapRow className="join-row">
      <CapLabel type="label2">
        {theText} {renderBlockName(deletedNodeName)} {blockIsLinkedText} {renderBlockName(linkedNodeNameArray)} {blockText}
      </CapLabel>
      <CapLabel type="label2">{disconnectText}</CapLabel>
      <CapLabel type="label2" className="margin-t-8">
        {areYouSureText}
      </CapLabel>
    </CapRow>
  );

  const getDeleteDesc = () => {
    let deleteDesc = (
      <CapLabel className="margin-t-8" type="label2">
        {deleteBlockModalDescriptionText}
      </CapLabel>
    );
    const joinArr = graphNodes?.reduce((acc, node) => {
      const { blockType = "", isConfigured = false, id = "", blockData = {} } =
        node.props || {};
      if (blockType === JOIN && isConfigured) {
        const {
          name = "",
          nextBlock: { pathBlockId = "", pathName = "" } = {}
        } = blockData;
        acc.push([id, name, pathBlockId, pathName]);
      }
      return acc;
    }, []);
    //arr[0] = join block id, arr[1] = join block name, arr[2] = joined block id, arr[3] = joined block name
    let deletedNodeName = '';
    const linkedNodeNameArray = [];
    joinArr.forEach(arr => {
      if (arr[0] === blockId) {
        deletedNodeName = arr[1];
        linkedNodeNameArray.push(arr[3]);
      } else if (arr[2] === blockId) {
        deletedNodeName = arr[3];
        linkedNodeNameArray.push(arr[1]);
      }
    });
    if(linkedNodeNameArray.length > 0){
      deleteDesc = getJoinDeleteDesc(deletedNodeName, linkedNodeNameArray.toString());
    }
    return deleteDesc;
  };

  const getDeleteBlockWarningModal = () => {
    return (
      <CapModal
        className="delete-block-modal"
        title={
          <>
            <CapHeading type="h3">{deleteBlockModalHeaderText}</CapHeading>
            {getDeleteDesc()}
          </>
        }
        visible={showConfirmationModal}
        onOk={handleOnClickModalDeleteBtn}
        onCancel={handleOnCloseModal}
        okText={yesDeleteButtonText}
        closeText={noButtonText}
      />
    );
  };

  const onClickActionIcon = useCallback(({ blockId, actionType }) => {
    if (actionType === DELETE) {
      setShowConfirmationModal(true);
      setBlockId(blockId);
    } else if ([SETTINGS, VIEW].includes(actionType)) {
      onClickConfigure(blockId);
    }
  }, []);

  return (
    <CapRow className="cap-graph-builder" style={{height: 'calc(100vh - 120px)'}}>
      <CapIconsSidebar {...sidebarProps} onDropOutsideCanvas={onDrop} isNodeDraggable={viewMode ? null : true} viewMode={viewMode} />
      <div
        id={dndGraphId}
        ref={drop}
        className="cap-graph-builder-element"
        style={{
          height: '100%',
          width: '100%',
          display: 'inline-block',
          overflow: 'auto',
        }}
      />
      {showConfirmationModal && getDeleteBlockWarningModal()}
    </CapRow>
  );
};

CapDndGraph.propTypes = {
  sidebarIcons: PropTypes.array,
  graphBuilderId: PropTypes.string,
  nodeTitleMapping: PropTypes.object,
};

CapDndGraph.defaultProps = {
  nodeTitleMapping: {},
};

export default LocaleHoc(CapDndGraph, { key: 'CapDndGraph' });
