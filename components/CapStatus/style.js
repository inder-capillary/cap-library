import styled from "styled-components";

export const StatusDot = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;
