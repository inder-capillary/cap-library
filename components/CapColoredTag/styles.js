import styled from 'styled-components';

import { Tag } from 'antd';
import * as StyledVars from "../styled/variables";
const {FONT_SIZE_S, CAP_G08, CAP_WHITE} = StyledVars;

export const StyledColoredTag = styled(Tag)`
&.ant-tag.cap-colored-tag-v2{
  height: ${(props) => props.tagHeight || '24px'};
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.tagColor || CAP_G08};
  color: ${(props) => props.tagTextColor || CAP_WHITE};
  font-size: ${(props) => props.tagFontSize || FONT_SIZE_S};
  border: ${(props) => props.tagBorderColor ? (`solid 1px ${props.tagBorderColor}`) : ("none")};
  .anticon-close {
    color: ${(props) => props.tagCloseIconColor || CAP_WHITE};
  }
  &.static {
    cursor: default;
    pointer-events: none;
  }
  &.disabled {
    cursor: not-allowed;
  }
}
`;
