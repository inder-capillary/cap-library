/**
* CapRadioGroup
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import "./_capRadioGroup.scss";
import CapError from '../CapError';
const RadioGroup = Radio.Group;
const classNames = require('classnames');
export default class CapRadioGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, errorMessage, ...rest} = this.props;
    return (
      <React.Fragment>
        <RadioGroup {...rest} className={classNames("cap-radio-group-v2", className)}>
          {children}
        </RadioGroup>
        {errorMessage && <CapError type="error">{errorMessage}</CapError>}
      </React.Fragment>
    );
  }
}

CapRadioGroup.defaultProps = {
  errorMessage: "",
};

CapRadioGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};
