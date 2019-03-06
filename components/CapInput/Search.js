import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import CapInputHOC from './CapInputHOC';
import { SearchIcon, CloseIcon } from '../assets/icons';

const InputSuffix = styled(CloseIcon)`
  cursor: pointer;
`;

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
        prefix={<SearchIcon />}
        suffix={allowClear && rest.value && <InputSuffix onClick={onClear} />}
      />
    );
  }
}

Search.defaultProps = {
  allowClear: true,
};

export default CapInputHOC(Search);
