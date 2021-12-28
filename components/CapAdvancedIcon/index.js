import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  CAP_YELLOW,
  CAP_G05,
  CAP_WHITE,
} from '../styled/variables';
import CapIcon from '../CapIcon';
import CapRow from '../CapRow';
import {StyledDiv} from './styles';
import './_capAdvancedIcon.scss';

const getActionIcons = (actionNodes, id) => actionNodes.map((node) => {
  const { type, backgroundColor, position, props } = node;

  const onClickIcon = () => node.onClick({blockId: id, actionType: type});
  return (
    <CapIcon
      type={type}
      key={type}
      withBackground
      backgroundProps={{
        style: {
          backgroundColor: backgroundColor || CAP_G05,
        },
        className: classnames(`${position}-action-icon-container`, 'action-icon-container'),
      }}
      onClick={onClickIcon}
      {...props}
      size="xs"
    />
  );
});

const CapAdvancedIcon = (props) => {
  const {
    type,
    backgroundColor,
    actionNodes = [],
    label,
    preview,
    dragRef,
    backgroundProps,
    positionLabel,
    id,
    isConfigured,
    isDisabled,
    userHistoryProps,
    ...rest
  } = props;
  const [actionIconsVisible, setActionIconsVisibility] = useState(false);

  const labelStyles = positionLabel ? {
    width: 135,
    marginLeft: -47,
  } : {};

  const showActionIcons = useCallback(() => {
    setActionIconsVisibility(true);
  }, []);

  const hideActionIcons = useCallback(() => {
    setActionIconsVisibility(false);
  }, []);

  return (
    <>
      <CapRow className={`advanced-icon-container ${isDisabled ? 'item-disabled' : ''}`}>
        <StyledDiv
          onMouseEnter={actionNodes.length ? showActionIcons : undefined}
          onMouseLeave={actionNodes.length ? hideActionIcons : undefined}
          ref={dragRef}
          color={userHistoryProps?.color} //used to give box-shadow for userJourneyHistory
        >
          <CapIcon
            type={type}
            withBackground
            backgroundProps={{
              backgroundColor: backgroundColor || CAP_YELLOW,
              lineHeight: 1,
              padding: '9px',
              style: {
                lineHeight: 1,
              },
              ...backgroundProps,
            }}
            style={{ color: CAP_WHITE }}
            {...rest}
          />
          {actionIconsVisible && getActionIcons(actionNodes, id)}
        </StyledDiv>
      </CapRow>
      <CapRow style={{ textAlign: 'center', ...labelStyles }}>
        {label}
        {preview}
      </CapRow>
    </>
  );
};

CapAdvancedIcon.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  actionNodes: PropTypes.array,
  label: PropTypes.node,
  preview: PropTypes.node,
};

export default CapAdvancedIcon;
