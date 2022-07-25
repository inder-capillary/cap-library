import styled from "styled-components";
import CapLabel from "../CapLabel";

export const StyledFlexWrapDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 16px;
  & > * {
    margin: 6px 4px;
  }

  .csv-fileipload-container {
    display: flex;
    align-items: center;
    .buttonFileUpload {
      display: flex;
      align-items: center;
    }
  }

  .cap-multi-tree-select-v2-left-content {
    max-width: 50% !important;
  }
`;

export const StyledCapLabel = styled(CapLabel)`
  background-color: #ecece7;
  border-radius: 16px;
  height:32px;
  padding:9px 13px;
`;
