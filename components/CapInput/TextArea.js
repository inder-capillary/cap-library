import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';



const CharCount = styled.div`
    position: absolute;
    bottom: 12px;
    right: 16px;
    background-color: white;
`;

const ErrorCount = styled.span`
    color: ${(props) => props.showError ? "#e83135" : "auto"}
`;

const StyledTextArea = styled(Input.TextArea)`
    resize: none;
`;

class TextArea extends Component {
    state = { charLimitExeeded: false }

    componentDidMount() {
      if (this.input && this.props.setInputRef) {
        this.props.setInputRef(this.input);
      }
    }

    onKeyDown = () => {
      const { value, maxLength } = this.props;
      const { charLimitExeeded } = this.state;
      const valueLength = value ? value.length : 0;
      if (maxLength && valueLength === maxLength) {
        this.setState({ charLimitExeeded: true });
      } else if (charLimitExeeded) {
        this.setState({ charLimitExeeded: false });
      }
    }

    onKeyUp = () => {
      const { value, maxLength } = this.props;
      const { charLimitExeeded } = this.state;
      const valueLength = value ? value.length : 0;
      if (charLimitExeeded && valueLength < maxLength) {
        this.setState({ charLimitExeeded: false });
      }
    }

    render() {
      const { alwaysShowFocus, maxLength, setInputRef, ...rest } = this.props;
      const { charLimitExeeded } = this.state;
      const valueLength = rest.value ? rest.value.length : 0;
      const charLength = valueLength;
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
