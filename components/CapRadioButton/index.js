/**
* CapRadioButton
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import "./_capRadioButton.scss";
const RadioButton = Radio.Button;

export default class CapRadioButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RadioButton {...this.props} className={this.props.className ? `cap-radio-button-v2 ${this.props.className}` : "cap-radio-button-v2"}>
        {this.props.children}
      </RadioButton>
    );
  }
}

CapRadioButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
