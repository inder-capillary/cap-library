import styled from 'styled-components';

const CapBorderedBox = styled.div`
  width: ${(props) => props.width || '42'}px;
  height: ${(props) => props.height || '42'}px;
  border: ${(props) => props.border || '1px dashed #b3bac5'};
  border-radius: ${(props) => props.width ? '21px' : '16px'};
  background-color: ${(props) => props.backgroundColor || '#fafbfc'};
`;

export default CapBorderedBox;
