import React from "react";

const SvgMessage = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm10.172 4L12 11.172 8.828 8H6l6 6 6-6h-2.828z" />
  </svg>
);

export default SvgMessage;
