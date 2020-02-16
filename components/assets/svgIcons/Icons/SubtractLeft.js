import React from "react";

function SvgSubtractLeft(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={8} fill="#091E42" />
        <path fill="#B3BAC5" d="M16 8a8 8 0 00-8 8 8 8 0 118-8z" />
      </g>
    </svg>
  );
}

export default SvgSubtractLeft;
