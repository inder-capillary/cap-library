/**
*
* CapTree
*
*/

import React from 'react';
import { Tree } from 'antd';
import './_capTree.scss';
// import styled from 'styled-components';


class CapTree extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div>
        <Tree {...this.props}>
          {children}
        </Tree>
      </div>
    );
  }
}

CapTree.propTypes = {

};

export default CapTree;
