import styled from "styled-components";
import CapLabel from "../CapLabel";

const { CapLabelInline } = CapLabel;

export const StyledFlexWrapDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 6px 4px;
  }
`;

export const StyledCapLabel = styled(CapLabel)`
  background-color: #ecece7;
  border-radius: 16px;
  height:32px;
  padding:9px 13px;
`;

export const StyledCapInlineLabel = styled(CapLabelInline)`
  font-size: 12px;
`;
