import isEmpty from "lodash/isEmpty";
import capitalize from "lodash/capitalize";
import {JOIN} from './constants';

/**
 * Returns all the children nodes in the specified paths.
 * used to delete all nodes in one or more paths
 * @param {*} graphNodes 
 * @param {*} pathsToDelete 
 * @returns 
 */
export const recursivelyDeleteNodes = (graphNodes, pathsToDelete) => {
    const nodesToDelete = {};
    const nodesObject = graphNodes.reduce((nodesObject, node) => {
        // eslint-disable-next-line no-param-reassign
        nodesObject[node.id] = node;
        return nodesObject;
      }, {});

      const addChildNodes = childId => {
        if (isEmpty(childId)) {
          return;
        }
        childId.forEach(id => {
          nodesToDelete[id] = true;
          addChildNodes(nodesObject[id].to);
        });
      };
      addChildNodes(pathsToDelete);
      return nodesToDelete;
}

//computes joinGraphNodesData, which is used by updateJoinOrJoinedGraphNodeProp function
  /* joinGraphNodesData structure
  joinGraphNodeId : [joined block id(pathBlockId),join block name] */
export const computeJoinGraphNodesData = (nodes = []) => {
  const joinGraphNodesData = {};
  nodes.forEach(node => {
    const { blockType = "", isConfigured = false, blockData = {} } =
      node?.props || {};
    if (blockType === JOIN && isConfigured) {
      const {
        name: joinName = "",
        nextBlock: { pathBlockId = "" } = {}
      } = blockData;
      joinGraphNodesData[node.id] = [pathBlockId, joinName];
    }
  });
  return joinGraphNodesData;
};

//to update join or joined graph node prop when path of(ENTRY_TRIGGER, WAIT_TILL_EVENT, DECISION_SPLIT)/node is deleted which contains join or joined graph node
export const updateJoinOrJoinedGraphNodeProp = (
  nodes = [],
  joinGraphNodesData = {}
) => {
  const filteredNodesIds = [];
  //computing filteredNodesIds array
  nodes.forEach(node => filteredNodesIds.push(node.id));
  /* joinGraphNodesData structure
  joinGraphNodeId : [joined block id(pathBlockId),join block name] */
  for (const joinGraphNodeId in joinGraphNodesData) {
    /* join node got deleted but joined node did not get deleted, update joined node props
    eg JOIN1 linked to SMS1; JOIN1 got deleted; update SMS1 props if SMS1 did not get deleted */
    if (
      !filteredNodesIds.includes(joinGraphNodeId) &&
      filteredNodesIds.includes(joinGraphNodesData[joinGraphNodeId][0])
    ) {
      nodes = nodes.map(node => {
        if (node?.id === joinGraphNodesData[joinGraphNodeId][0]) {
          //joined node was linked to only 1 join
          if (node?.props?.joinBlockNameArray?.length === 1) {
            delete node.props.joinBlockNameArray;
          }
          //joined node was linked to multiple join
          else {
            const joinBlockNameIndex = node?.props?.joinBlockNameArray?.findIndex(
              joinBlockName => joinBlockName === joinGraphNodesData[joinGraphNodeId][1]
            );
            if (joinBlockNameIndex >= 0){
              node.props.joinBlockNameArray.splice(joinBlockNameIndex, 1);
            }
          }
        }
        return node;
      });
    }
    //joined node got deleted but join node did not get deleted, update join node props
    //eg JOIN1 linked to SMS1; SMS1 got deleted; update JOIN1 props if JOIN1 did not get deleted
    if (
      filteredNodesIds.includes(joinGraphNodeId) &&
      !filteredNodesIds.includes(joinGraphNodesData[joinGraphNodeId][0])
    ) {
      nodes = nodes.map(node => {
        if (node.id === joinGraphNodeId) {
          node.props.isConfigured = false;
          node.props.nodeTitle = capitalize(JOIN);
          delete node.props.blockData.nextBlock;
          delete node.props.nodePreview;
        }
        return node;
      });
    }
  }
  return nodes;
};
