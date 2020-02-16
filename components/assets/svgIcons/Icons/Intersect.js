import React from "react";

function SvgIntersect(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#B3BAC5"
          d="M16 8a8 8 0 11-8 8 8 8 0 118-8zm0 0a8 8 0 00-8 8 8 8 0 008-8z"
        />
        <path fill="#091E42" d="M16 8a8 8 0 01-8 8 8 8 0 018-8z" />
      </g>
    </svg>
  );
}

export default SvgIntersect;
