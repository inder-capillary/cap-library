/**
* CapRadio
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import "./_capRadio.scss";
const classNames = require('classnames');
export default class CapRadio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Radio {...rest} className={classNames("cap-radio-button", className)}>
        {children}
      </Radio>
    );
  }
}

CapRadio.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
