import React from "react";

const SvgLaunch = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="launch_svg__a"
        d="M19 19H5V5h5a1 1 0 0 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-6a1 1 0 0 0-2 0v6zM14 4a1 1 0 0 0 1 1h2.59l-6.297 6.297a.997.997 0 0 0 1.41 1.41L19 6.41V9a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="launch_svg__b" fill="currentColor">
        <use xlinkHref="#launch_svg__a" />
      </mask>
      <use fill="currentColor" xlinkHref="#launch_svg__a" />
      <g fill="currentColor" mask="url(#launch_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgLaunch;
