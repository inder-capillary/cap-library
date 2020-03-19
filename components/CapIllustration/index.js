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
import {CAP_SPACE_16, CAP_SPACE_12} from '../styled/variables';
import LocaleHoc from '../LocaleHoc';

const GetActionButton = (props) => {
  const { onClick, buttonLabel, hasAccess } = props;
  return (
    <CapButton
      style={{ marginTop: CAP_SPACE_12 }}
      onClick={onClick}
      disabled={!hasAccess}
    >
      {buttonLabel}
    </CapButton>
  );
};
// import styled from 'styled-components';
const CapIllustration = (props) => {
  const { description, illustrationImage, title, hasAccess, accessForbiddenMsg, buttonLabel, onClick } = props;
  const actionButtonProps = {
    onClick,
    hasAccess,
    buttonLabel,
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
};

GetActionButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hasAccess: PropTypes.bool,
};

CapIllustration.defaultProps = {
  hasAccess: true,
};


export default LocaleHoc(CapIllustration, { key: 'CapIllustration' });
