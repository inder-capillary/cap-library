import styled from 'styled-components';
import CapIcon from '../CapIcon';
import CapTree from '../CapTree';
import CapHeading from '../CapHeading';
import CapColumn from '../CapColumn';

import {
  FONT_COLOR_05,
  CAP_G08,
  CAP_WHITE,
  CAP_PALE_GREY,
  BG_01,
} from '../styled/variables';


export const ExpandIcon = styled(CapIcon)`
  margin-top: 10px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

export const StyledIcon = styled(CapIcon)`
  padding: 4px; 
  border-radius: 8px;
  background: ${CAP_G08};
`;

export const StyledCapHeading = styled(CapHeading)`
  display: inline;
  margin-left: 4px;
  type: h5;
`;

export const StyledCapColumn = styled(CapColumn)`
  display: inline;
`;

export const StyledCapTree = styled(CapTree)`
  &.ant-tree.cap-tree-v2 {
    padding: 3px 0 3px 16px;
    min-height: 124px;
    li {
      padding: 0;
    }
    .ant-tree-node-content-wrapper {
      height: 40px;
      padding: 9px 0 11px 4px;
      :hover {
        background-color: ${BG_01};
        margin-left: -40px;
        padding-left: 44px;
        width: 324px;
      }
    }
    .ant-tree-node-selected {
      .tree-node-title {
        color: #1d61ee;
      }
    }

    .ant-tree-node-content-wrapper-open {
      background: ${(props) => props?.isExpanded && CAP_PALE_GREY};
      border-left: ${(props) => props?.isExpanded && `2px solid ${FONT_COLOR_05}`};
      margin-left: -40px;
      padding-left: 44px;
      width: 324px;
      :hover {
        background-color: ${(props) => props?.isExpanded && CAP_PALE_GREY};
      }
      .tree-node-title {
        color: ${(props) => props.isExpanded && '#1d61ee'};
      }
      .tree-node-icon {
        background: ${(props) => props?.isExpanded ? FONT_COLOR_05 : CAP_G08};
        color: ${(props) => props?.isExpanded && CAP_WHITE};
      }
    }
    .ant-tree-child-tree {
      .ant-tree-node-content-wrapper {
          margin-left: 16px;
          padding-left: 0;
          width: 250px;
      }
      .ant-tree-node-selected {
        background-color: ${CAP_PALE_GREY};
      }
      .ant-tree-title {
        margin-left: -12px;
      }
    }
  }
`;
