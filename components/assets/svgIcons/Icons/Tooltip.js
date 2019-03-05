import React from "react";

const SvgTooltip = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx={8} cy={8} r={8} fill="#DFE2E7" />
      <path
        d="M7.998 7.268l2.475-2.475a.5.5 0 1 1 .707.707L8.352 8.328a.5.5 0 0 1-.707 0L4.816 5.5a.5.5 0 1 1 .708-.707l2.474 2.475zm0 2.828l2.475-2.475a.5.5 0 1 1 .707.707l-2.828 2.829a.5.5 0 0 1-.707 0L4.816 8.328a.5.5 0 1 1 .708-.707l2.474 2.475z"
        fill="#091E42"
      />
    </g>
  </svg>
);

export default SvgTooltip;
