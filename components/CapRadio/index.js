/**
* CapRadio
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import CapHeading from '../CapHeading';

import "./_capRadio.scss";

const { CapHeadingSpan } = CapHeading;

const classNames = require('classnames');
export default class CapRadio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, errorMessage, inductiveText, suffix, ...rest} = this.props;
    return (
      <div className={classNames("cap-radio-v2", className)}>
        <Radio {...rest}>
          <CapHeadingSpan className={classNames('title', { 'has-suffix': suffix })} type="h4">{children}</CapHeadingSpan>
          {suffix}
          {inductiveText && <CapHeading className="inductive-text" type="label3">{inductiveText}</CapHeading>}
        </Radio>
        {
          className && className.indexOf('error') > -1 && errorMessage
          && <div className="error-message">{errorMessage}</div>
        }
      </div>

    );
  }
}

CapRadio.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  inductiveText: PropTypes.string,
  errorMessage: PropTypes.string,
  suffix: PropTypes.node,
};
