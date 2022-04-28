import * as React from "react";

const SvgBill = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M20 2H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7zm-3.5-4a1.49 1.49 0 0 0-1 .39 1.5 1.5 0 1 0 0 2.22 1.5 1.5 0 1 0 1-2.61zM16 17a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h1a1 1 0 0 0 0-2H3v-1a1 1 0 0 1 1-1 1 1 0 0 0 0-2 3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1zM6 18h1a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2z"
        id="Bill_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Bill_svg__b" fill="#fff">
        <use xlinkHref="#Bill_svg__a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#Bill_svg__a" />
      <g mask="url(#Bill_svg__b)" fill="#B3BAC5">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgBill;
