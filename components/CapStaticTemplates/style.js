import styled from 'styled-components';
import CapRow from '../CapRow';
import CapInput from '../CapInput';
import CapIcon from '../CapIcon';
import CapModal from '../CapModal';
import CapCard from '../CapCard';
import {
  BLANK_TEMPLATE_CLASS,
} from './constants';
import {
  CAP_G09,
  CAP_G05,
  CAP_G07,
  CAP_SPACE_24,
  CAP_SPACE_12,
  CAP_SPACE_16,
  CAP_SPACE_20,
  CAP_SPACE_32,
  CAP_SPACE_08,
  CAP_SPACE_40,
  CAP_SPACE_04,
  CAP_PALE_GREY,
  CAP_WHITE,
  CAP_YELLOW01,
} from '../styled/variables';
import CapRadioCard from '../CapRadioCard';

export const StyledDiv = styled.div`
  display: flex;
  flex-flow: nowrap;
  min-width: 85vw;
`;

export const SideBar = styled.div`
    width: 258px;
    margin-right: ${CAP_SPACE_24};
    border: 1px solid ${CAP_G07};
`;

export const TemplatesAndSearchContainer = styled.div`
    width: ${(props) => props.width};
`;

export const TemplatesContainer = styled(CapRow)`
    max-height: ${(props) => props?.maxHeight};
    overflow-y: scroll;
    scroll-behavior: smooth;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${CAP_SPACE_40};
  background-color: ${(props) => props?.selected && CAP_G09};
  padding: ${CAP_SPACE_12} ${CAP_SPACE_16} ${CAP_SPACE_12} ${CAP_SPACE_20};
  border-left: ${(props) => `4px solid ${props?.color || CAP_G05}`};
  cursor: pointer;
`;

export const SearchBox = styled(CapInput.Search)`
  .ant-input.ant-input-lg {
    height: ${CAP_SPACE_32};
  }
  width: 278px;
  margin-bottom: ${CAP_SPACE_12};
  margin-left: 6px;
`;

export const TemplateIcon = styled(CapIcon)`
  &.cap-icon-v2 {
    font-size: 13px;
  }
`;

export const StrategyTemplate = styled(CapRadioCard)`
  &.ant-radio-group {
    .ant-radio-button-wrapper {
      .ant-card.ant-card-bordered {
        border-left: ${(props) => `4px solid ${props?.borderColor || CAP_G05}`};
      }
      opacity: ${(props) => props?.className !== BLANK_TEMPLATE_CLASS && 0.5};
      .card-header-title {
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .coming-soon-tag {
        display: none;
      }
      :hover {
        opacity: 1;
        .coming-soon-tag {
          display: inline-flex;
          height: auto;
        }
        .card-header-title {
          max-width: 116px;
          margin-right: 2px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .card-available {
          max-width: 200px;
        }
      }
      .icon-container {
        height: ${CAP_SPACE_40};
        width: ${CAP_SPACE_40};
        border-radius: ${CAP_SPACE_16};
        .div-icon {
          left: 32%;
          top: 21%;
          .cap-icon-v2-add {
            display: block;
            margin-left: 1px;
            margin-top: 6px;
          }
        }
      }
      .radio-card-icon {
        width: ${CAP_SPACE_40};
        height: ${CAP_SPACE_40};
        margin-right: ${CAP_SPACE_08};
      }
    }
    .ant-card {
      div.ant-card-body {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: auto;
        padding: ${CAP_SPACE_08} ${CAP_SPACE_08} ${CAP_SPACE_04} ${CAP_SPACE_12};
        div.radio-card-content-container {
          width: 203px;
        }
        .card-content {
          max-height: 45px;
        }
        .card-header-row {
          width: 208px;
          flex-flow: nowrap;
        }
        .custom-template {
          margin-left: ${CAP_SPACE_08};
          .title-desc-container {
            width: 196px;
          }
        }
        .strategy-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${CAP_SPACE_40};
          width: ${CAP_SPACE_40};
          margin-top: -8px;
          margin-left: -12px;
          svg {
            width: ${CAP_SPACE_40};
            height: ${CAP_SPACE_40};
          }
          .text-label {
            font-weight: 500;
            text-transform: uppercase;
          }
          .selected {
            color: ${CAP_WHITE};
          }
        }
      }
    }
  }
`;

export const TemplatesModal = styled(CapModal)`
  .ant-modal-content {
    width: 737px;
    height: 274px;
    right: 50%;
    div.ant-modal-body {
      padding: 24px 24px 22px 24px;
    }
    .modal-image {
      width: 243px;
      height: 220px;
    }
    .modal-info-content {
      width: 398px;
      margin-right: ${CAP_SPACE_24};
    }
    .ant-modal-close-x {
      margin-top: ${CAP_SPACE_08};
    }
    .ant-modal-footer {
      display: none;
    }
  }
`;

export const StyledCapCard = styled(CapCard)`
  &.ant-card.cap-card-v2 {
    width: 92px;
    height: 86px;
    div.ant-card-head {
      max-height: 39px;
      min-height: 39px;
      text-align: center;
      background-color: ${CAP_PALE_GREY};
      .ant-card-head-title {
        padding: ${CAP_SPACE_08} 0;
      }
    }
    div.ant-card-body {
      height: 47px;
      margin-top: ${CAP_SPACE_08};
      padding: 9px 10px 6px 10px;
      text-align: center;
    }
    .cap-icon-v2 {
      svg {
        height: ${CAP_SPACE_24};
        width: ${CAP_SPACE_24};
        color: #C7D8FB;
      }
    }
  }
`;

export const PremiumIcon = styled(CapIcon)`
  margin-left: ${CAP_SPACE_04};
  color: ${CAP_YELLOW01}
`;
