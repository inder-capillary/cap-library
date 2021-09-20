/**
 *
 * CapErrorBoundary
 *
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ErrorBoundary } from "react-error-boundary";
import "./_capErrorBoundary.scss";

import CapRow from "../CapRow";
import CapErrorStateIllustration from "../CapErrorStateIllustration";

const CapErrorBoundary = ({
  children,
  className,
  isApiError,
  refreshText,
  expiryTitle,
  refreshTitle,
  errorHandler,
  onRefreshClick,
  refreshThreshold,
  expiryDescription,
  isApiErrorBoundary,
  showIllustrationImage,
}) => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [updatedKey, setUpdatedKey] = useState(
    `cap-error-boundary-${Math.random()}`
  );

  const handleRefreshClick = () => {
    onRefreshClick();
    setRefreshCount((refreshValue) => refreshValue + 1);
    if (!isApiErrorBoundary) {
      setUpdatedKey(`cap-error-boundary-${Math.random()}`);
    }
  };

  const errorStateIllustration = (
    <CapErrorStateIllustration
      className="cap-error-boundary-illustration"
      refreshText={refreshText}
      expiryTitle={expiryTitle}
      refreshTitle={refreshTitle}
      showImage={showIllustrationImage}
      onRefreshClick={handleRefreshClick}
      expiryDescription={expiryDescription}
      isRefreshExpired={refreshCount === refreshThreshold}
    />
  );

  const fallbackRender = ({ error }) => {
    errorHandler(error);
    return errorStateIllustration;
  };

  return (
    <CapRow
      key={updatedKey}
      className={classnames("cap-error-boundary", className)}
    >
      {!isApiErrorBoundary && (
        <ErrorBoundary fallbackRender={fallbackRender}>
          {children}
        </ErrorBoundary>
      )}
      {isApiErrorBoundary && (isApiError ? errorStateIllustration : children)}
    </CapRow>
  );
};

CapErrorBoundary.defaultProps = {
  className: "",
  refreshText: "",
  expiryTitle: "",
  refreshTitle: "",
  isApiError: false,
  refreshThreshold: 3,
  expiryDescription: "",
  errorHandler: () => {},
  onRefreshClick: () => {},
  isApiErrorBoundary: false,
  showIllustrationImage: true,
};

CapErrorBoundary.propTypes = {
  children: PropTypes.node,
  isApiError: PropTypes.bool,
  className: PropTypes.string,
  errorHandler: PropTypes.func,
  onRefreshClick: PropTypes.func,
  refreshThreshold: PropTypes.number,
  isApiErrorBoundary: PropTypes.bool,
  showIllustrationImage: PropTypes.bool,
  refreshText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  refreshTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default CapErrorBoundary;
