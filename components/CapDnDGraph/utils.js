import isEmpty from "lodash/isEmpty";

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