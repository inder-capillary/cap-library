/**
*
* CapColorPicker - component used to select color
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './_capColorPicker.scss';
import { HexColorPicker } from "react-colorful";

const classNames = require('classnames');

const clsPrefix = "cap-colorpicker-v2";

class CapColorPicker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, color, setColor, hexSelector } = this.props;
    const colorPickerType = hexSelector ? "cap-hexslider-v2" : "cap-slider-v2";

    return (
      <div className={classNames(clsPrefix, className, colorPickerType)}>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    );
  }
}

CapColorPicker.defaultProps = {
  className: '',
  color: '#d42020',
  setColor: () => {},
  hexSelector: false,
};

CapColorPicker.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  setColor: PropTypes.func,
  hexSelector: PropTypes.bool,
};

export default CapColorPicker;
