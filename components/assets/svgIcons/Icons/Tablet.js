import React from "react";

const SvgTablet = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="tablet_svg__a"
        d="M18.625 2H5.375C3.511 2 2 3.343 2 5v14c0 1.657 1.511 3 3.375 3h13.25C20.489 22 22 20.657 22 19V5c0-1.657-1.511-3-3.375-3zM20 19c0 .552-.522 1-1.167 1H5.167C4.522 20 4 19.552 4 19V5c0-.552.522-1 1.167-1h13.666C19.478 4 20 4.448 20 5v14zm-7.29-2.71a1 1 0 00-.91-.29l-.18.06a.76.76 0 00-.18.09l-.15.12a1 1 0 00-.21.33 1 1 0 00.21 1.09c.1.088.21.162.33.22A1 1 0 0013 17a.84.84 0 00-.08-.38 1.15 1.15 0 00-.21-.33z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tablet_svg__b" fill="#fff">
        <use xlinkHref="#tablet_svg__a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#tablet_svg__a" />
      <g fill="currentColor" mask="url(#tablet_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgTablet;
