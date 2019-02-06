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
    return (
      <div className={classNames("cap-checkbox", this.props.className )}>
        <Checkbox {...this.props}>
          { this.props.children }
        </Checkbox>
        {
          this.props.className && this.props.className.indexOf('error') > -1 && this.props.errorMessage
          && <div className="error-message">{ this.props.errorMessage }</div>
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
