import React from "react";

const SvgCheckFilled = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle
        stroke="#FFF"
        strokeWidth={2}
        fill="#42B040"
        cx={12}
        cy={12}
        r={11}
      />
      <path
        d="M10.5 13.086l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a.997.997 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l1.293 1.293z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgCheckFilled;
