import React from "react";

const SvgDelete = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="delete_svg__a"
        d="M16 9v10H8V9h8zm-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="delete_svg__b" fill="#fff">
        <use xlinkHref="#delete_svg__a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#delete_svg__a" />
      <g fill="#091E42" mask="url(#delete_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDelete;
