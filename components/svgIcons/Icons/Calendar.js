import React from "react";

const SvgCalendar = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M5 7v12h14V7H5zm13-2h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 1 1 2 0v1h8V4a1 1 0 0 1 2 0v1zm1 4H5v2h14V9zm-5 5v3h3v-3h-3z"
      id="calendar_svg__a"
    />
  </svg>
);

export default SvgCalendar;
