import * as React from "react";

const SvgReturn = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 2.5v-2L3.5 3 6 5.5v-2c1.655 0 3 1.345 3 3s-1.345 3-3 3-3-1.345-3-3H2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4Z"
      fill="#000"
    />
    <mask
      id="return_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={0}
      width={8}
      height={11}
    >
      <path
        d="M6 2.5v-2L3.5 3 6 5.5v-2c1.655 0 3 1.345 3 3s-1.345 3-3 3-3-1.345-3-3H2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#return_svg__a)">
      <path fill="#091E42" d="M0 0h12v12H0z" />
    </g>
  </svg>
);

export default SvgReturn;
