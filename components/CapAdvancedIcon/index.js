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
          lineHeight: 0.8,
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
    label1,
    label2,
    dragRef,
    backgroundProps,
    positionLabel,
    id,
    isConfigured,
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
      <CapRow className="advanced-icon-container">
        <div
          onMouseEnter={actionNodes.length ? showActionIcons : undefined}
          onMouseLeave={actionNodes.length ? hideActionIcons : undefined}
          ref={dragRef}
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
        </div>
      </CapRow>
      <CapRow style={{ textAlign: 'center', ...labelStyles }}>
        {label1}
        {label2}
      </CapRow>
    </>
  );
};

CapAdvancedIcon.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  actionNodes: PropTypes.array,
  label1: PropTypes.node,
  label2: PropTypes.node,
};

export default CapAdvancedIcon;
