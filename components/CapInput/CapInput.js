import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import styled from 'styled-components';
import Search from './Search';
import CapInputHOC from './CapInputHOC';
import * as styledVars from '../styled/variables';

const StyledIcon = styled(Icon)`
  color: ${(props) => props.status === "error" && styledVars.CAP_RED};
  color: ${(props) => props.status === "success" && styledVars.CAP_PRIMARY.base};
`;

class CapInput extends Component {
  static Search;

  render() {
    const { alwaysShowFocus, errorMessage, isVerified, suffix, ...rest } = this.props;
    return (
      <Input
        {...rest}
        ref={(node) => {
          this.input = node;
          if (alwaysShowFocus && this.input) {
            this.input.focus();
          }
        }}
        suffix={(errorMessage && <StyledIcon className="error-icon" type="warning" status="error" />)
          || (isVerified && <StyledIcon type="check-circle" status="success" />) || suffix}
      />
    );
  }
}

CapInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelPosition: PropTypes.string,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isVerified: PropTypes.bool,
  size: PropTypes.string,
  inductiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  alwaysShowFocus: PropTypes.bool,
};

const InputFinal = CapInputHOC(CapInput);
InputFinal.Search = Search;

export default InputFinal;
