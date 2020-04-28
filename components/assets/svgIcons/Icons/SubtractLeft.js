import * as React from "react";

function SubtractLeft(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle
          cx={8}
          cy={8}
          r={8}
          fill="#B3BAC5"
          transform="rotate(-180 8 8)"
        />
        <path fill="#091E42" d="M8 16a8 8 0 008-8 8 8 0 11-8 8z" />
      </g>
    </svg>
  );
}

export default SubtractLeft;
