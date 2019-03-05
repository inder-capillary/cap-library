import React from "react";

const SvgImage = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M4 4v8h8V4H4zm0-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5.033 6l1.912 3H5l1.486-2.253 1.06 1.512L9.033 8z" />
  </svg>
);

export default SvgImage;
