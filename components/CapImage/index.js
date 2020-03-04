import React from "react";
import PropTypes from "prop-types";
import "./_capImage.scss";

const CapImage = ({ className, src, alt, rest }) => (
  <>
    {src ? (
      <img
        className={`cap-image-v2 ${className}`}
        src={src}
        alt={alt}
        {...rest}
      />
    ) : null}
  </>
);

CapImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CapImage;
