import styled from 'styled-components';

const CapEmptyDivWithBorder = styled.div`
  width: ${(props) => `${props.width}` || '42'}px;
  height: ${(props) => `${props.height}` || '42'}px;
  border: ${(props) => `1px dashed ${props.borderColor || '#b3bac5'}`};
  border-radius: ${(props) => props.width ? '21px' : '16px'};
  background-color: #fafbfc;
`;

export default CapEmptyDivWithBorder;
