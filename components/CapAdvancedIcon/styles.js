import styled from 'styled-components';

export const StyledDiv = styled.div`
box-shadow: ${(props) => `0 0 10px 2px ${props?.color}`};
border-radius: 18px;
`;
