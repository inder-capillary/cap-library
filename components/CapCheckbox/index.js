/**
*
* CapCheckbox
*
*/
import React from "react";
import PropTypes from 'prop-types';
import { Checkbox } from "antd";
import "./_capCheckbox.scss";
const classNames = require('classnames');

class CapCheckbox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, errorMessage, ...rest} = this.props;
    return (
      <div className={classNames("cap-checkbox-v2", className)}>
        <Checkbox {...rest}>
          { children }
        </Checkbox>
        {
          className && className.indexOf('error') > -1 && errorMessage
          && <div className="error-message">{ errorMessage }</div>
        }
      </div>
    );
  }
}

CapCheckbox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default CapCheckbox;
