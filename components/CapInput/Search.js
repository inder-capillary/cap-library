import React, { Component } from 'react';
import { Input } from 'antd';
import * as styledVars from "../styled/variables";
import CapIcon from '../CapIcon';
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
        prefix={<CapIcon style={{ color: styledVars.CAP_G06 }} type="search" size="s" />}
        suffix={allowClear && rest.value && <CapIcon style={{ color: styledVars.CAP_G06 }} onClick={onClear} type="close" size="s" />}
      />
    );
  }
}

Search.defaultProps = {
  allowClear: true,
  size: 'large',
};

export default CapInputHOC(Search);
