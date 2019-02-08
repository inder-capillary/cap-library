/**
*
* CapSlider
*
*/
import React from 'react';
import './_capSlider.scss';
import { Slider } from 'antd';
import PropTypes from 'prop-types';
const classNames = require('classnames');

class CapSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  translateType(type) {
    let tipFormatter = null;
    switch (type) {
      case 'ratio':
        tipFormatter = (value) => `${value} | ${100 - value}`;
        break;
      default:
        tipFormatter = null;
    }
    return tipFormatter;
  }

  render() {
    const {type, children, className, ...rest} = this.props;
    const formatter = this.translateType(type);
    return (
      <div>
        <Slider tipFormatter={formatter} {...rest} className={classNames("cap-slider", className)}>
          {React.Children.toArray(children)}
        </Slider>
      </div>
    );
  }
}

CapSlider.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapSlider;
