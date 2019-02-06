/**
*
* CapTreeNode
*
*/

import React from 'react';
import { Tree } from 'antd';
import './_capTreeNode.scss';
// import styled from 'styled-components';

const { TreeNode } = Tree;
class CapTreeNode extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div>
        <TreeNode {...this.props}>
          {children}
        </TreeNode>
      </div>
    );
  }
}

CapTreeNode.propTypes = {

};

export default CapTreeNode;
