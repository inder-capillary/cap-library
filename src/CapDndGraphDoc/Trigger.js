import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CapButton from '../../components/CapButton';
import CapIcon from '../../components/CapIcon';


const TriggerContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 16px;
  border: 1px dashed #b3bac5;
  background-color: #fafbfc;
  text-align: center;
  padding: 16px 8px;

  .ant-btn.cap-button-v2 {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Trigger = (props) => {
  const {width, height, className, showButton, buttonProps, triggerContent } = props;
  return (
    <TriggerContainer width={width} height={height} className={className}>
      {showButton && (
        <CapButton type={buttonProps.type}>
          <CapIcon type={buttonProps.iconType} />
          {buttonProps.title}
        </CapButton>
      )}
      {triggerContent}
    </TriggerContainer>
  );
};

Trigger.propTypes = {
  showButton: PropTypes.bool,
  buttonProps: PropTypes.object,
  triggerContent: PropTypes.oneOfType(
    [PropTypes.node,
      PropTypes.element,
      PropTypes.string]
  ),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
};

Trigger.defaultProps = {
  showButton: true,
  buttonProps: {
    type: 'primary',
    title: 'Entry trigger',
    iconType: 'entry',
  },
  width: '148px',
  height: '180px',
  triggerContent: null,
};

export default Trigger;
