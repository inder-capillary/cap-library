import styled from 'styled-components';
import CapMenu from '../CapMenu';

import {
  CAP_SPACE_04,
  CAP_SPACE_08,
  CAP_SPACE_16,
  CAP_SPACE_32,
  CAP_G13,
  CAP_G01,
  CAP_RED,
  CAP_WHITE,
  FONT_COLOR_05,
  CAP_PALE_GREY,
  FONT_SIZE_S,
  FONT_SIZE_L,
  FONT_WEIGHT_MEDIUM,
} from '../styled/variables';

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: ${CAP_SPACE_08} ${CAP_SPACE_08} ${CAP_SPACE_08} ${CAP_SPACE_16};
    border: ${(props) => (props?.selected ? 'none' : `1px solid #9e9d87`)};
    border-radius: ${CAP_SPACE_16};
    height: ${CAP_SPACE_32};
    width: ${(props) => (props?.showBadge ? `calc(${props?.width} + 25px)` : props?.width)};
    background-color: ${(props) => props?.selected && CAP_G13};
    cursor: pointer;
    &.ant-dropdown-open {
        border: 1px solid ${CAP_G01};
    }
`;

export const MenuItem = styled(CapMenu.Item)`
    background-color: ${(props) => props?.selected && CAP_PALE_GREY};
    border-left: ${(props) => props?.selected && `3px solid ${FONT_COLOR_05}`};
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${CAP_RED};
  color: ${CAP_WHITE};
  height: ${FONT_SIZE_L};
  width: ${FONT_SIZE_L};
  border-radius: 50%;
  margin: 0 ${CAP_SPACE_04};
  padding: 0 5px;
  font-size: ${FONT_SIZE_S};
  font-weight: ${FONT_WEIGHT_MEDIUM};
  line-height: normal;
`;
