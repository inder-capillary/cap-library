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
import CapSlideBox from "../CapSlideBox";
import CapErrorStateIllustration from "../CapErrorStateIllustration";

const CapErrorBoundary = ({
  children,
  className,
  isExpired,
  isApiError,
  refreshText,
  expiryTitle,
  useSlideBox,
  refreshTitle,
  errorHandler,
  slideBoxProps,
  onRefreshClick,
  onCloseSlideBox,
  refreshThreshold,
  expiryDescription,
  isApiErrorBoundary,
  showIllustrationImage,
  prefix,
  suffix,
  showAnimation,
  ...rest
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
    <CapRow
      className={classnames(
        "cap-error-boundary-illustration-container",
        className
      )}
    >
      {prefix}
      <CapErrorStateIllustration
        className={classnames({
          "cap-error-boundary-illustration-animation": showAnimation,
        })}
        refreshText={refreshText}
        expiryTitle={expiryTitle}
        refreshTitle={refreshTitle}
        showImage={showIllustrationImage}
        onRefreshClick={handleRefreshClick}
        expiryDescription={expiryDescription}
        isRefreshExpired={refreshCount === refreshThreshold || isExpired}
        {...rest}
      />
      {suffix}
    </CapRow>
  );

  const fallbackRender = ({ error }) => {
    errorHandler(error);
    if (useSlideBox) {
      const { className: slideBoxClassName } = slideBoxProps || {};
      return (
        <CapSlideBox
          show
          content={errorStateIllustration}
          handleClose={onCloseSlideBox}
          className={classnames(
            "cap-error-boundary-slide-box",
            slideBoxClassName
          )}
          {...slideBoxProps}
        />
      );
    }
    return errorStateIllustration;
  };

  return (
    <React.Fragment key={updatedKey}>
      {!isApiErrorBoundary && (
        <ErrorBoundary fallbackRender={fallbackRender}>
          {children}
        </ErrorBoundary>
      )}
      {isApiErrorBoundary && (isApiError ? errorStateIllustration : children)}
    </React.Fragment>
  );
};

CapErrorBoundary.defaultProps = {
  className: "",
  refreshText: "",
  expiryTitle: "",
  refreshTitle: "",
  isExpired: false,
  isApiError: false,
  slideBoxProps: {},
  useSlideBox: false,
  refreshThreshold: 3,
  expiryDescription: "",
  errorHandler: () => {},
  onRefreshClick: () => {},
  onCloseSlideBox: () => {},
  isApiErrorBoundary: false,
  showIllustrationImage: true,
  prefix: "",
  suffix: "",
  showAnimation: true,
};

CapErrorBoundary.propTypes = {
  children: PropTypes.node,
  isExpired: PropTypes.bool,
  isApiError: PropTypes.bool,
  className: PropTypes.string,
  useSlideBox: PropTypes.bool,
  errorHandler: PropTypes.func,
  onRefreshClick: PropTypes.func,
  onCloseSlideBox: PropTypes.func,
  slideBoxProps: PropTypes.object,
  refreshThreshold: PropTypes.number,
  isApiErrorBoundary: PropTypes.bool,
  showIllustrationImage: PropTypes.bool,
  showAnimation: PropTypes.bool,
  refreshText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  refreshTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expiryDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default CapErrorBoundary;
