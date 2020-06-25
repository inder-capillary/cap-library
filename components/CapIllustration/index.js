/**
 *
 * CapIllustration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  CapRow,
  CapHeading,
  CapButton,
  CapLabel,
  CapTooltip,
} from "..";
import classNames from 'classnames';
import {CAP_SPACE_16, CAP_SPACE_12} from '../styled/variables';
import LocaleHoc from '../LocaleHoc';

const GetActionButton = (props) => {
  const { onClick, buttonLabel, hasAccess, buttonClassName, disabled } = props;
  return (
    <CapButton
      className={classNames(buttonClassName)}
      style={{ marginTop: CAP_SPACE_12 }}
      onClick={onClick}
      disabled={!hasAccess || disabled}
    >
      {buttonLabel}
    </CapButton>
  );
};
// import styled from 'styled-components';
const CapIllustration = (props) => {
  const { description, illustrationImage, title, hasAccess, accessForbiddenMsg, buttonLabel, onClick, buttonClassName, disabled } = props;
  const actionButtonProps = {
    onClick,
    hasAccess,
    buttonLabel,
    buttonClassName,
    disabled,
  };
  return (
    <div align="center" style={{ paddingTop: CAP_SPACE_16 }}>
      {description && <CapLabel type="label1">{description}</CapLabel>}
      <CapRow>
        <img
          src={illustrationImage}
          alt=""
          style={{
            width: '256px',
            minHeight: '256px',
          }}
        />
      </CapRow>
      <CapHeading type="h3" style={{ paddingTop: CAP_SPACE_12 }}>
        {title}
      </CapHeading>
      {!hasAccess
        ? (
          <CapTooltip
            placement="top"
            title={accessForbiddenMsg}>
            <span>
              <GetActionButton {...actionButtonProps} />
            </span>
          </CapTooltip>
        )
        : <GetActionButton {...actionButtonProps} />
      }
    </div>
  );
};

CapIllustration.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  illustrationImage: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  hasAccess: PropTypes.bool,
  accessForbiddenMsg: PropTypes.string,
  buttonClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

GetActionButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hasAccess: PropTypes.bool,
  buttonClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

CapIllustration.defaultProps = {
  hasAccess: true,
};


export default LocaleHoc(CapIllustration, { key: 'CapIllustration' });
