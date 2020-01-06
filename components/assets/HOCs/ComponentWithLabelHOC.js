import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import CapHeading from '../../CapHeading';
import * as styledVars from '../../styled/variables';

const classPrefix = 'component-with-label';

const CapComponentStyled = styled.div`
  &.component-with-label {
    display: ${(props) => props.inline ? 'inline-block' : 'block'};
    cursor: ${(props) => props.disabled && 'not-allowed'};
    input,
    textarea {
      &::-webkit-input-placeholder {
        font-size: 14px;
      }
      &.ant-input:hover {
        border-color: ${(props) => props.errorMessage ? styledVars.CAP_RED : styledVars.CAP_G11};
        box-shadow: none;
      }
      &.ant-input:focus {
        border-color: ${(props) => props.errorMessage ? styledVars.CAP_RED : styledVars.CAP_G01};
        box-shadow: none;
      }
      &:not(.ant-calendar-range-picker-input) {
        width: ${(props) => props.labelPosition === 'left' ? 'calc(100% - 140px)' : '100%'};
      }
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
    .ant-select.cap-select-v2 {
      &.ant-select-enabled.ant-select-focused .ant-select-selection,
      &.ant-select-enabled .ant-select-selection,
      &.ant-select-enabled .ant-select-selection {
        border-color: ${(props) => props.errorMessage ? styledVars.CAP_RED : styledVars.CAP_G01};
      }
    }
`;

const ComponentWithLabelWrapper = styled.div`  
  display: ${(props) => props.labelPosition === 'left' && 'flex'};  
  align-items: ${(props) => props.componetPosition === 'top' ? 'normal' : 'center'};  
  justify-content: ${(props) => props.componetPosition === 'top' ? 'space-between' : 'unset'};
`;

const Sup = styled.sup`
  color: ${styledVars.CAP_RED};
`;

const StyledCapHeading = styled(CapHeading)`
  margin-right: ${(props) => props.labelPosition === 'left' ? '12px' : ''};
  display: ${(props) => props.labelPosition === 'top' ? 'block' : 'inline-block'};
  margin-bottom:  ${(props) => props.labelPosition === 'top' ? '6px' : ''};
  color: ${(props) => props.disabled && styledVars.CAP_G06};
  &.requied-indicator {
    display: inline-block;
  }
`;

const ColumnsWrapper = styled.div`
  display: inline-block;
  align-items: center;
`;

const StyledSpan = styled.span`
  &.error-message {
    color: ${styledVars.CAP_RED};
    font-size: ${styledVars.FONT_SIZE_S};
    margin-top: 10px;
    margin-left: ${(props) => props.labelPosition === 'left' && '140px'};
    display: block;
    line-height: normal;
  }
`;

const InductiveText = styled.span`
  display: block;
  font-size: ${styledVars.FONT_SIZE_S};
  line-height: ${styledVars.FONT_SIZE_M};
  color: ${styledVars.CAP_G05};
  margin-bottom: 8px;
`;


function ComponentWithLabelHOC(Component) {
  return class extends React.Component {
    static defaultProps = {
      labelPosition: 'top',
    }

    componentDidMount() {
      if (this.props.focusOnMount && this.input) {
        this.input.focus();
      }
    }

    returnRowsOfComponent = (label, labelPosition, isRequired, inductiveText, type, rest) => {
      const rows = [];
      if (labelPosition === 'left') {
        rows.push(
          <React.Fragment>
            <ColumnsWrapper>
              <div>
                { label && (
                  <StyledCapHeading
                    type={type}
                    labelPosition={labelPosition}
                    disabled={this.props.disabled}
                    className={classnames(`${classPrefix}-label`)}
                  >
                    {label}
                    {isRequired && <Sup className="requied-indicator">*</Sup>}
                  </StyledCapHeading> )
                }
              </div>
              <div>
                {inductiveText
                  && (
                    <InductiveText className={classnames(`${classPrefix}-inductive-text`)}>{inductiveText}</InductiveText>
                  )
                }
              </div>
            </ColumnsWrapper>
            <ColumnsWrapper>
              <Component {...rest} />
            </ColumnsWrapper>
          </React.Fragment>
        );
      } else {
        if (label) {
          rows.push(
            <StyledCapHeading
              type={type}
              labelPosition={labelPosition}
              disabled={this.props.disabled}
              className={classnames(`${classPrefix}-label`)}
            >
              {label}
              {isRequired && <Sup className="requied-indicator">*</Sup>}
            </StyledCapHeading>
          );
        }
        if (inductiveText) {
          rows.push(<InductiveText className={classnames(`${classPrefix}-inductive-text`)}>{inductiveText}</InductiveText>);
        }
        rows.push(<Component {...rest} />);
      }
      return rows;
    }

    render() {
      const {
        label,
        labelPosition,
        isRequired,
        inductiveText,
        className,
        inline,
        componetPosition,
        ...rest
      } = this.props;
      const { errorMessage } = rest;
      const type = inductiveText ? 'h3' : 'h4';
      if (rest.focusOnMount) {
        delete rest.focusOnMount;
      }
      const rows = this.returnRowsOfComponent(label, labelPosition, isRequired, inductiveText, type, rest);
      return (
        <CapComponentStyled
          className={classnames(`${classPrefix}`, className)}
          labelPosition={labelPosition}
          errorMessage={errorMessage}
          disabled={this.props.disabled}
          inline={inline}
        >
          <ComponentWithLabelWrapper labelPosition={labelPosition} componetPosition={componetPosition}>
            {rows}
          </ComponentWithLabelWrapper>
          {errorMessage && <StyledSpan className="error-message" labelPosition={labelPosition}>{errorMessage}</StyledSpan>}
        </CapComponentStyled>
      );
    }
  };
}

export default ComponentWithLabelHOC;
