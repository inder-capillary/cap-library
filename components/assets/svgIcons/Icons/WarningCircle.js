import * as React from "react";

const SvgWarningCircle = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0-2A5 5 0 1 0 8 3a5 5 0 0 0 0 10Zm0-8.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-1.25 5.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      fill="#fff"
    />
    <mask
      id="warning-circle_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={14}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0-2A5 5 0 1 0 8 3a5 5 0 0 0 0 10Zm0-8.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-1.25 5.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#warning-circle_svg__a)">
      <path fill="#F87D23" d="M0 0h16v16H0z" />
    </g>
  </svg>
);

export default SvgWarningCircle;
