import styled from "styled-components";
import * as StyledVars from "../styled/variables";
import CapIcon from "../CapIcon";

import {
  ARROW_UP,
  HORIZONTAL,
  VERTICAL,
  BORDER_DASHED,
  BORDER_SOLID,
} from "./constants";
const {CAP_G04, CAP_G06, CAP_G07, CAP_SECONDARY } = StyledVars;
/**
 * MultiplePathRowWrapper : used for styling single Path row
 */
export const MultiplePathRowWrapper = styled.div`
  display: flex;
  position: relative;
`;

/**
 * PathConnector : used to style the horizontal/veritical lines to connect different components
 */
export const PathConnector = styled.div`
  margin-left: ${(props) => (props.type === VERTICAL ? props.marginLeft : "")};
  height: ${(props) => props.type === VERTICAL ? props.height || "44px" : props.height || "1px"};
  width: ${(props) => props.type === VERTICAL ? props.width || "1px" : props.width || "44px"};
  border-right: ${(props) => props.type === VERTICAL
    ? `${props.borderWidth || "1px"} ${
      props.borderType === BORDER_DASHED ? BORDER_DASHED : BORDER_SOLID
    } ${CAP_G07}`
    : ""};
  border-bottom: ${(props) => props.type === HORIZONTAL
    ? `${props.borderWidth || "1px"} ${
      props.borderType === BORDER_DASHED ? BORDER_DASHED : BORDER_SOLID
    } ${CAP_G07}`
    : ""};
`;

export const StyledPathNamePlaceHolder = styled.div`
text-align: center;
color: ${CAP_G04} 
`;

export const StyledPathNameHolder = styled.div`
  padding: 2px;
  max-height: 40px;
  width: 80px;
  div {
    text-overflow: ellipsis;
    overflow: hidden;
    // Addition lines for 2 line or multiline ellipsis
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-align: center;
  }
`;

/**
 * StyledArrowIcon : Used to style the StyledArrowIcons
 */
export const StyledArrowIcon = styled(CapIcon)`
  display:flex;
  align-items:center;
  svg {
    height: 16px;
    width: 16px;
    margin-bottom: ${(props) => (props.type === ARROW_UP ? "7px" : "")};
  }
  color: ${(props) => props?.disabled && CAP_G06};
  display: ${(props) => props.disabled};
`;

/**
 * StyledAddPath : used to style the AddPath Component
 */
export const StyledAddPath = styled.div`
  margin-left: ${(props) => props.marginLeft};
  .button-disabled-tooltip-wrapper .cap-button-v2.ant-btn[disabled] > * {
    color: ${CAP_SECONDARY.base};
  }
`;

export const StyledPathInput = styled.div`
  transform: ${(props) => (props.hasError ? "translateY(10px)" : 'translateY(0)')};
  .error-message {
    text-align: center;
  }
`;

export const StyledCapIcon = styled(CapIcon)`
  color:${((props) => props.color)};
`;
