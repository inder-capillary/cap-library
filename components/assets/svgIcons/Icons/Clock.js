import React from "react";

const SvgClock = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      id="clock_svg__a"
      d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 2A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm1.979-8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v2h.979z"
    />
  </svg>
);

export default SvgClock;
