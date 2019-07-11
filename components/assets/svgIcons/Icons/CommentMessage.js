import React from "react";

const SvgCommentMessage = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fill="#091E42"
      d="M10 0C4.477 0 0 4.477 0 10a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 1 20h9c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 18H3.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 10 18zm5-9H5a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm-2 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM7 7h6a1 1 0 0 0 0-2H7a1 1 0 1 0 0 2z"
    />
  </svg>
);

export default SvgCommentMessage;
