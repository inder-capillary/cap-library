import React, { Component } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import * as styledVars from '../styled/variables';

const classPrefix = 'cap-input-v2';

const CapInputStyled = styled.div`
  &.cap-input-v2 {
    display: ${(props) => props.inline ? 'inline-block' : 'block'};
    cursor: ${(props) => props.disabled && 'not-allowed'};
    input,
    textarea {
      &::-webkit-input-placeholder {
        font-size: 14px;
      }
      &.ant-input:hover {
        border-color: ${styledVars.CAP_G11};
        box-shadow: none;
      }
      &.ant-input:focus {
        border-color: ${styledVars.CAP_G01};
        box-shadow: none;
      }
      width: ${(props) => props.labelPosition === 'left' ? 'calc(100% - 140px)' : '100%'};
      border-color: ${(props) => props.errorMessage && styledVars.CAP_RED};
    }
    .ant-input-affix-wrapper {
      width: ${(props) => props.labelPosition === 'left' ? 'calc(100% - 140px)' : '100%'};

      & > input {
        width: 100%;
      }
    }
    .ant-input-affix-wrapper .ant-input-suffix {
      right: 8px;
    }
    .ant-input-affix-wrapper .ant-input-prefix {
      left: 8px;
    }
  }
`;

const InputWithLabelWrapper = styled.div`
  display: ${(props) => props.labelPosition === 'left' && 'flex'};
  align-items: center;
`;

const Sup = styled.sup`
  color: ${styledVars.CAP_RED};
`;

const StyledCapHeading = styled(CapHeading)`
  margin-right: ${(props) => props.labelPosition === 'left' ? '12px' : ''};
  display: ${(props) => props.labelPosition === 'top' ? 'block' : 'inline-block'};
  margin-bottom:  ${(props) => props.labelPosition === 'top' ? '6px' : ''};
  width: ${(props) => props.labelPosition === 'left' ? '128px' : '100%'};
  color: ${(props) => props.disabled && styledVars.CAP_G06};
  &.requied-indicator {
    display: inline-block;
  }
`;

const StyledSpan = styled.span`
  &.error-message {
    color: ${styledVars.CAP_RED};
    font-size: ${styledVars.FONT_SIZE_S};
    margin-top: 10px;
    margin-left: ${(props) => props.labelPosition === 'left' && '140px'};
    display: block;
  }
`;

const InductiveText = styled.span`
  display: block;
  font-size: ${styledVars.FONT_SIZE_S};
  color: ${styledVars.CAP_G05};
  margin-bottom: 6px;
`;


function CapInputHOC(InputComponent) {
  return class extends Component {
    componentDidMount() {
      if (this.props.focusOnMount && this.input) {
        this.input.focus();
      }
    }

    render() {
      const {
        label,
        labelPosition,
        isRequired,
        inductiveText,
        className,
        inline,
        ...rest
      } = this.props;
      const { errorMessage } = rest;
      const type = inductiveText ? 'h3' : 'h4';
      if (rest.focusOnMount) {
        delete rest.focusOnMount;
      }
      return (
        <CapInputStyled
          className={classnames(`${classPrefix}`, className)}
          labelPosition={labelPosition}
          errorMessage={errorMessage}
          disabled={this.props.disabled}
          inline={inline}
        >
          <InputWithLabelWrapper labelPosition={labelPosition}>
            {
              label
              && (
                <StyledCapHeading
                  type={type}
                  labelPosition={labelPosition}
                  disabled={this.props.disabled}
                  className={classnames(`${classPrefix}-label`)}
                >
                  {label}
                  {isRequired && <Sup className="requied-indicator">*</Sup>}
                </StyledCapHeading>
              )
            }
            {inductiveText && labelPosition === 'top'
              && (
                <InductiveText className={classnames(`${classPrefix}-inductive-text`)}>{inductiveText}</InductiveText>
              )
            }
            <InputComponent {...rest} />
          </InputWithLabelWrapper>
          {errorMessage && <StyledSpan className="error-message" labelPosition={labelPosition}>{errorMessage}</StyledSpan>}
        </CapInputStyled>
      );
    }
  };
}

CapInputHOC.defaultProps = {
  label: '',
  labelPosition: 'top',
  isRequired: false,
  errorMessage: '',
  isVerified: false,
  size: 'large',
  inductiveText: '',
};

export default CapInputHOC;
