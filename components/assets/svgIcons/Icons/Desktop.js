import React from "react";

const SvgDesktop = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="desktop_svg__a"
        d="M19 3H5a3 3 0 00-3 3v8a3 3 0 003 3h6v2H7a1 1 0 000 2h10a1 1 0 000-2h-4v-2h6a3 3 0 003-3V6a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="desktop_svg__b" fill="#fff">
        <use xlinkHref="#desktop_svg__a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#desktop_svg__a" />
      <g fill="#091E42" mask="url(#desktop_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDesktop;
