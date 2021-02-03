import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  CAP_YELLOW,
  CAP_G05,
  CAP_WHITE,
} from '../styled/variables';
import CapIcon from '../CapIcon';
import './_capAdvancedIcon.scss';

const getActionIcons = (actionNodes) => actionNodes.map((node) => {
  const { type, backgroundColor, position, customProps } = node;
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
      {...customProps}
      size="xs"
    />
  );
});

const CapAdvancedIcon = (props) => {
  const { type, backgroundColor, actionNodes, label1, label2, ...rest } = props;
  const [actionIconsVisible, setActionIconsVisibility] = useState(false);

  const showActionIcons = useCallback(() => {
    setActionIconsVisibility(true);
  }, []);

  const hideActionIcons = useCallback(() => {
    setActionIconsVisibility(false);
  }, []);

  return (
    <>
      <div className="advanced-icon-container">
        <div
          onMouseEnter={actionNodes.length ? showActionIcons : undefined}
          onMouseLeave={actionNodes.length ? hideActionIcons : undefined}
        >
          <CapIcon
            type={type}
            withBackground
            backgroundProps={{
              style: {
                backgroundColor: backgroundColor || CAP_YELLOW,
                lineHeight: 1,
                padding: '9px',
              },
            }}
            style={{ color: CAP_WHITE }}
            {...rest}
          />
          {actionIconsVisible && getActionIcons(actionNodes)}
        </div>
      </div>
      {label1}
      {label2}
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
