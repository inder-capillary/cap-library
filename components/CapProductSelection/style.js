import styled from 'styled-components';
import CapCard from '../CapCard';
import CapTree from '../CapTree';
import { CAP_G07 } from '../styled/variables';

export const StyledCapTree = styled(CapTree)`
  &.ant-tree.cap-tree-v2 {
    background-color: ${(props) => props?.showModal && CAP_G07};
  }
`;

export const StyledCapCard = styled(CapCard)`
  &.ant-card.cap-card-v2   {
    position: absolute;
    top: 40px;
    left: 12px;
    width: 300px;
    .card { 
      &-title {
        font-size: 14px;
        line-height: 24px;
        padding-bottom: 12px;
        padding-top: 8px;
      }
      &-description {
        font-size: 12px;
      }
      &-buttons {
        padding-top: 16px;
        &-primary {
          margin-right: 12px;
        }
      }
    }
  }
`;
