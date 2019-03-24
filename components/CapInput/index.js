import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import styled from 'styled-components';
import Search from './Search';
import TextArea from './TextArea';
import CapIcon from '../CapIcon';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
import * as styledVars from '../styled/variables';

const StyledIcon = styled(CapIcon)`
  color: ${(props) => props.status === "error" && styledVars.CAP_RED};
  color: ${(props) => props.status === "success" && styledVars.CAP_PRIMARY.base};
`;

class CapInput extends Component {
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
        suffix={(errorMessage && <StyledIcon type="warning" status="error" />)
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
  inline: PropTypes.bool,
};

CapInput.defaultProps = {
  size: 'large',
};

const InputFinal = ComponentWithLabelHOC(CapInput);
InputFinal.Search = Search;
InputFinal.TextArea = TextArea;

export default InputFinal;
