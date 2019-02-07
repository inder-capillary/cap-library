import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import classnames from 'classnames';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import * as styledVars from '../styled/variables';

const classPrefix = 'cap-input';

const CapInputStyled = styled.div`
  &.cap-input {
    cursor: ${(props) => props.disabled && 'not-allowed'};
    input {
      &::-webkit-input-placeholder {
        font-size: 14px;
      }
      &:focus {
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

const Span = styled.span`
  &.error-message {
    color: ${styledVars.CAP_RED};
    font-size: ${styledVars.FONT_SIZE_S};
    margin-top: 10px;
    margin-left: ${(props) => props.labelPosition === 'left' && '140px'};
    display: block;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${(props) => props.status === "error" && styledVars.CAP_RED};
  color: ${(props) => props.status === "success" && styledVars.CAP_PRIMARY.base};
`;

const InductiveText = styled.span`
  display: block;
  font-size: ${styledVars.FONT_SIZE_S};
  color: ${styledVars.CAP_G05};
  margin-bottom: 6px;
`;


class CapInput extends Component {
  componentDidMount() {
    if (this.props.focusOnMount && this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      errorMessage,
      label,
      labelPosition,
      isRequired,
      isVerified,
      inductiveText,
      className,
      ...rest
    } = this.props;
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
          <Input
            {...rest}
            ref={(node) => { this.input = node; }}
            suffix={(errorMessage && <StyledIcon className="error-icon" type="warning" status="error" />)
            || (isVerified && <StyledIcon type="check-circle" status="success" />) || this.props.suffix}
          />
        </InputWithLabelWrapper>
        {errorMessage && <Span className="error-message" labelPosition={labelPosition}>{errorMessage}</Span>}
      </CapInputStyled>
    );
  }
}

CapInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelPosition: PropTypes.string,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isVerified: PropTypes.bool,
  size: PropTypes.string,
  inductiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CapInput.defaultProps = {
  label: '',
  labelPosition: 'top',
  isRequired: false,
  errorMessage: '',
  isVerified: false,
  size: 'large',
  inductiveText: '',
};

export default CapInput;
