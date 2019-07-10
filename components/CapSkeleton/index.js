/**
*
* CapSkeleton
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Skeleton} from 'antd';

function CapSkeleton(props) {
  const className = `cap-skeleton ${props.className}`;
  const capProps = {...props, className};
  return (
    <Skeleton {...capProps} />
  );
}

CapSkeleton.propTypes = {

};

export default CapSkeleton;
