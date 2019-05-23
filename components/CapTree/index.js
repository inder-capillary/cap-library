/**
*
* CapTree
*
*/

import React from 'react';
import { Tree } from 'antd';
import classNames from 'classnames';
import './_capTree.scss';
// import styled from 'styled-components';
const clsPrefix = 'cap-tree-v2';

class CapTree extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className, children } = this.props;
    return (
      <Tree {...this.props} className={classNames(`${clsPrefix}`, className)}>
        {children}
      </Tree>
    );
  }
}


CapTree.CapTreeNode = Tree.TreeNode;

export default CapTree;
