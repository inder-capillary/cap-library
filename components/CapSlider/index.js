/**
*
* CapSlider
*
*/
import React from 'react';
import './_capSlider.scss';
import { Slider, ConfigProvider} from 'antd';
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
    const {type, children, className, sliderRaleColor, ...rest} = this.props;
    const formatter = this.translateType(type);
    return (
      <ConfigProvider getPopupContainer={(triggerNode) => triggerNode.parentNode}>
        <Slider tipFormatter={formatter} {...rest} className={classNames(`cap-slider-v2 ${sliderRaleColor ? 'slider-rail' : ''}`, className)}>
          {React.Children.toArray(children)}
        </Slider>
      </ConfigProvider>
    );
  }
}

CapSlider.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  sliderRaleColor: PropTypes.string,
};

export default CapSlider;
