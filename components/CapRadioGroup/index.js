/**
* CapRadioGroup
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import "./_capRadioGroup.scss";
const RadioGroup = Radio.Group;
const classNames = require('classnames');
export default class CapRadioGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <RadioGroup {...rest} className={classNames("cap-radio-group", className)}>
        {children}
      </RadioGroup>
    );
  }
}

CapRadioGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
