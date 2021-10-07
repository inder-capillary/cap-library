import styled from 'styled-components';
import { CAP_G07, CAP_SPACE_12 } from '../styled/variables';

const CapIconWithBackground = styled.div`
  background-color: ${(props) => props.backgroundColor || CAP_G07};
  border-radius: 18px;
  padding: ${(props) => props.padding || CAP_SPACE_12};
  display: inline-block;
  opacity: ${(props) => props.opacity || 1}
`;

export default CapIconWithBackground;
