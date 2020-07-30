import React, { Component } from 'react';
import { InputNumber } from 'antd';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

class Number extends Component {
  render() {
    const { alwaysShowFocus, allowClear, onClear, ...rest } = this.props;
    return (
      <InputNumber
        {...rest}
        ref={(node) => {
          this.input = node;
          if (alwaysShowFocus && this.input) {
            this.input.focus();
          }
        }}
      />
    );
  }
}

Number.defaultProps = {
  allowClear: true,
  size: 'large',
};

export default ComponentWithLabelHOC(Number);
