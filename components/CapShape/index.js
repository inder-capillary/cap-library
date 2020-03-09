// import React from 'react';
import styled from 'styled-components';
import { CAP_G01 } from '../styled/variables';

const borderRadiusMap = {
  circle: '50%',
  square: '0%',
};

const CapShape = styled.div`
  width: ${(props) => props.width || '8px'};
  height: ${(props) => props.height || '8px'};
  background-color: ${(props) => props.bgColor || CAP_G01};
  border-radius: ${(props) => borderRadiusMap[props.shape || 'circle'] || 'inherit'};
  transform: ${(props) => props.transform || 'none'};
`;

export default CapShape;
