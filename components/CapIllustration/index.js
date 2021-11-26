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
  const { onClick, buttonLabel, hasAccess, buttonClassName, disabled, buttonTooltip } = props;
  const Button = (
    <CapButton
      className={classNames(buttonClassName)}
      style={{ marginTop: CAP_SPACE_12 }}
      onClick={onClick}
      disabled={!hasAccess || disabled}
    >
      {buttonLabel}
    </CapButton>
  );
  return (
    <>
      {
        buttonTooltip ? (
          <CapTooltip
            title={buttonTooltip}
          >
            <span className="button-disabled-tooltip-wrapper">
              {Button}
            </span>
          </CapTooltip>
        ) : (
        <>{Button}</>
        )
      }
    </>
  );
};
// import styled from 'styled-components';
const CapIllustration = (props) => {
  const {
    description,
    illustrationImage,
    title, hasAccess,
    accessForbiddenMsg,
    buttonLabel,
    onClick,
    buttonClassName,
    disabled,
    descriptionPosition = 'top',
    titleClassName,
    descriptionClassName,
    buttonTooltip,
  } = props;
  const actionButtonProps = {
    onClick,
    hasAccess,
    buttonLabel,
    buttonClassName,
    disabled,
    buttonTooltip,
  };
  return (
    <div align="center" style={{ paddingTop: CAP_SPACE_16 }}>
      {description && descriptionPosition === 'top' && <CapLabel type="label1" className={descriptionClassName}>{description}</CapLabel>}
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
      <CapHeading type="h3" style={{ paddingTop: CAP_SPACE_12 }} className={titleClassName}>
        {title}
      </CapHeading>
      {description && descriptionPosition === 'bottom' && <CapLabel type="label1" className={descriptionClassName}>{description}</CapLabel>}
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
  buttonTooltip: PropTypes.string,
};

GetActionButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hasAccess: PropTypes.bool,
  buttonClassName: PropTypes.string,
  disabled: PropTypes.bool,
  buttonTooltip: PropTypes.string,
};

CapIllustration.defaultProps = {
  hasAccess: true,
};


export default LocaleHoc(CapIllustration, { key: 'CapIllustration' });
