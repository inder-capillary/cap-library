/**
* CapRadioButton
*/
import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "antd";
import classNames from 'classnames';
import "./_capRadioButton.scss";
const RadioButton = Radio.Button;

const clsPrefix = 'cap-radio-button-v2';

export default class CapRadioButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className, ...rest } = this.props;
    return (
      <RadioButton {...rest} className={classNames(clsPrefix, className)} />
    );
  }
}

CapRadioButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
