/**
*
* CapSkeleton
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Skeleton} from 'antd';

function CapSkeleton(props) {
  const className = `cap-skeleton-v2 ${props.className}`;
  const skeletonProps = {...props, className};
  return (
    <Skeleton {...skeletonProps} />
  );
}

CapSkeleton.propTypes = {

};

export default CapSkeleton;
