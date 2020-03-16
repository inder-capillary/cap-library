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
} from "..";
import {CAP_SPACE_16, CAP_SPACE_12} from '../styled/variables';


// import styled from 'styled-components';
const CapIllustration = (props) => {
  const { description, illustrationImage, onClick, buttonLabel, title } = props;
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
      {
        onClick && (
          <CapButton type="primary" style={{ marginTop: CAP_SPACE_12 }} onClick={onClick}>
            {buttonLabel}
          </CapButton>)
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
};

export default CapIllustration;
