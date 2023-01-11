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
import CapLabel from '../CapLabel';
import CapTooltip from "../CapTooltip";
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
    hasError,
    joinBlockNameArray = [],
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

  const joinBlockNameArrayLength = joinBlockNameArray.length;
  const getShowActionIcons = () => {
    actionNodes.length ? showActionIcons() : undefined;
    if (joinBlockNameArrayLength > 0) {
      document.getElementById(props.id).style.transform = 'translateY(-10px)';
    } 
  }
  const gethideActionIcons = () => {
    actionNodes.length ? hideActionIcons() : undefined
    if (joinBlockNameArrayLength > 0) {
      document.getElementById(props.id).style.transform = 'translateY(0px)';
    } 
  }
  return (
    <>
      {joinBlockNameArrayLength > 0 && (
        <CapRow className="join-link-row" id={props.id}>
          <CapIcon type="join-link" size="s" />
          <CapTooltip title={joinBlockNameArray.join(", ")}>
            <CapLabel type="label9" className="join-link-label">
              {joinBlockNameArrayLength === 1 ? joinBlockNameArray : `${joinBlockNameArrayLength} joins`}
            </CapLabel>
          </CapTooltip>
        </CapRow>
      )}
      <CapRow className={`advanced-icon-container ${isDisabled ? 'item-disabled' : ''}`}>
        <StyledDiv
          onMouseEnter={getShowActionIcons}
          onMouseLeave={gethideActionIcons}
          ref={dragRef}
          color={userHistoryProps?.color} //used to give box-shadow for userJourneyHistory
        >
          {hasError && ( // error icon to highlight block has error.
            <CapIcon
              type="error"
              className={classnames(`top-center-error-icon-container`, 'error-icon-container')}
              size="s"
            />
          )}
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
