import styled from 'styled-components';
import { CAP_G07 } from '../styled/variables';

const CapIconWithBackground = styled.div`
  background-color: ${CAP_G07};
  border-radius: 18px;
  padding: ${(props) => props.padding || '12px'};
  display: inline-block;
`;

export default CapIconWithBackground;
