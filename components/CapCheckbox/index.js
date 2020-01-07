/**
*
* CapCheckbox
*
*/
import React from "react";
import PropTypes from 'prop-types';
import { Checkbox } from "antd";
import "./_capCheckbox.scss";
import CapHeading from '../CapHeading';

const classNames = require('classnames');

const { CapHeadingSpan } = CapHeading;
const { Group: CheckboxGroup } = Checkbox;

const clsPrefix = "cap-checkbox-v2";
class CapCheckbox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      className,
      children,
      errorMessage,
      inductiveText,
      suffix,
      labelType,
      ...rest
    } = this.props;
    return (
      <div className={classNames(clsPrefix, className)}>
        <Checkbox {...rest}>
          <CapHeadingSpan
            className={classNames('title', { 'has-suffix': suffix })}
            type={labelType}
          >
            {children}
          </CapHeadingSpan>
          {suffix}
          {inductiveText && <CapHeading className="inductive-text" type="label3">{inductiveText}</CapHeading>}
        </Checkbox>
        {
          className && className.indexOf('error') > -1 && errorMessage
          && <div className="error-message">{errorMessage}</div>
        }
      </div>
    );
  }
}

CapCheckbox.defaultProps = {
  labelType: 'h4',
};

CapCheckbox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  labelType: PropTypes.string,
};

CapCheckbox.Group = CheckboxGroup;

export default CapCheckbox;
