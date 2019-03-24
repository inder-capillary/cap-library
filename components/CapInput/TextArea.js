import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

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
    resize: none;
`;

class TextArea extends Component {
    state = { charLimitExeeded: false }

    onKeyDown = () => {
      const { value, maxLength } = this.props;
      const { charLimitExeeded } = this.state;
      if (maxLength && value.length === maxLength) {
        this.setState({ charLimitExeeded: true });
      } else if (charLimitExeeded) {
        this.setState({ charLimitExeeded: false });
      }
    }

    onKeyUp = () => {
      const { value, maxLength } = this.props;
      const { charLimitExeeded } = this.state;
      if (charLimitExeeded && value.length < maxLength) {
        this.setState({ charLimitExeeded: false });
      }
    }

    render() {
      const { alwaysShowFocus, maxLength, ...rest } = this.props;
      const { charLimitExeeded } = this.state;
      const charLength = rest.value.length;
      return (
        <div style={{ position: 'relative' }}>
          <StyledTextArea
            cols={35}
            autosize={{ minRows: 5 }}
            maxLength={maxLength}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
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
                <ErrorCount showError={charLimitExeeded}>
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
  size: 'large',
};

export default ComponentWithLabelHOC(TextArea);
