/**
 *
 * CapErrorStateIllustration
 *
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";
import "./_capErrorStateIllustration.scss";

import CapRow from "../CapRow";
import CapIcon from "../CapIcon";
import CapImage from "../CapImage";
import CapHeading from "../CapHeading";
import CapButton from "../CapButton";

import expiryErrorStateIllustration from "../assets/images/expiryErrorStateIllustration.svg";
import refreshErrorStateIllustration from "../assets/images/refreshErrorStateIllustration.svg";
import { CAP_SPACE_04, CAP_SECONDARY } from "../styled/variables";

const ErrorStateIllustrationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const RefreshButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${CAP_SPACE_04};
  padding: ${CAP_SPACE_04};
  color: ${CAP_SECONDARY.base};
`;

const CapErrorStateIllustration = ({
  showImage,
  className,
  refreshText,
  expiryTitle,
  refreshTitle,
  onRefreshClick,
  isRefreshExpired,
  expiryDescription,
  ...rest
}) => (
  <ErrorStateIllustrationContainer
    className={classnames("cap-error-state-illustration", className)}
    {...rest}
  >
    <CapRow>
      {showImage && (
        <CapImage
          src={
            isRefreshExpired
              ? expiryErrorStateIllustration
              : refreshErrorStateIllustration
          }
          className="error-state-image"
        />
      )}
      {!isRefreshExpired ? (
        <>
          {refreshTitle && <CapHeading type="h4">{refreshTitle}</CapHeading>}
          {refreshText && (
            <CapButton
              type="link"
              onClick={onRefreshClick}
              className="error-state-refresh-button"
            >
              <RefreshButtonTextContainer>
                <CapIcon type="refresh" className="error-state-refresh-icon" />
                {refreshText}
              </RefreshButtonTextContainer>
            </CapButton>
          )}
        </>
      ) : (
        <>
          {expiryTitle && <CapHeading type="h4">{expiryTitle}</CapHeading>}
          {expiryDescription && (
            <CapHeading type="h4">{expiryDescription}</CapHeading>
          )}
        </>
      )}
    </CapRow>
  </ErrorStateIllustrationContainer>
);

CapErrorStateIllustration.defaultProps = {
  className: "",
  refreshText: "",
  expiryTitle: "",
  showImage: true,
  refreshTitle: "",
  expiryDescription: "",
  isRefreshExpired: false,
  onRefreshClick: () => {},
};

CapErrorStateIllustration.propTypes = {
  showImage: PropTypes.bool,
  className: PropTypes.string,
  onRefreshClick: PropTypes.func,
  isRefreshExpired: PropTypes.bool,
  refreshText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  refreshTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default CapErrorStateIllustration;
