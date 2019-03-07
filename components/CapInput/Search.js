import React, { Component } from 'react';
import { Input } from 'antd';
import { CapIcon } from '../index';
import CapInputHOC from './CapInputHOC';

class Search extends Component {
  render() {
    const { alwaysShowFocus, allowClear, onClear, ...rest } = this.props;
    return (
      <Input
        {...rest}
        ref={(node) => {
          this.input = node;
          if (alwaysShowFocus && this.input) {
            this.input.focus();
          }
        }}
        prefix={<CapIcon style={{ color: "#b3bac5" }} type="search" size="s" />}
        suffix={allowClear && rest.value && <CapIcon style={{ color: "#b3bac5" }} onClick={onClear} type="close" size="s" />}
      />
    );
  }
}

Search.defaultProps = {
  allowClear: true,
};

export default CapInputHOC(Search);
