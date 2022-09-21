import * as React from "react";

const SvgWarningCircleFilled = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.333A6.67 6.67 0 0 0 1.335 8a6.67 6.67 0 0 0 6.667 6.667A6.67 6.67 0 0 0 14.667 8a6.67 6.67 0 0 0-6.666-6.667Z"
      fill="#fff"
    />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6Zm.833 8.167a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0ZM8 8.667A.667.667 0 0 0 8.667 8V6a.667.667 0 0 0-1.334 0v2c0 .368.299.667.667.667Z"
        fill="#F87D23"
      />
  </svg>
);

export default SvgWarningCircleFilled;
