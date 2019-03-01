import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { CapHeading } from "../index";
import CapInputHOC from './CapInputHOC';

const { TextArea: AntTextArea } = Input;


const CharCount = styled.div`
    position: absolute;
    bottom: 12px;
    right: 16px;
    background-color: white;
`;

const ErrorCount = styled.span`
    color: ${(props) => props.showError ? "#e83135" : "auto"}
`;

const StyledTextArea = styled(AntTextArea)`
`;

class TextArea extends Component {
  render() {
    const { alwaysShowFocus, maxLength, ...rest } = this.props;
    const charLength = rest.value.length;
    return (
      <div style={{ position: 'relative' }}>
        <StyledTextArea
          cols={35}
          autosize={{ maxRows: 5, minRows: 5 }}
          {...rest}
          ref={(node) => {
            this.input = node;
            if (alwaysShowFocus && this.input) {
              this.input.focus();
            }
          }}
        />
        {maxLength && (
          <CharCount>
            <CapHeading type="label1">
              <ErrorCount showError={charLength > maxLength}>
                {`${charLength} /${maxLength}`}
              </ErrorCount>
            </CapHeading>
          </CharCount>
        )}
      </div>
    );
  }
}

TextArea.defaultProps = {
};

export default CapInputHOC(TextArea);
