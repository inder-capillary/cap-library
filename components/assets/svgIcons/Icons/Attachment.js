import React from "react";

const SvgAttachment = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="attachment_svg__a"
        d="M2 10a3.5 3.5 0 007 0V5.545a1 1 0 112 0V10a5.5 5.5 0 01-11 0V4.5a4 4 0 118 0V9a2.5 2.5 0 11-5 0V5.545a1 1 0 112 0V9a.5.5 0 001 0V4.5a2 2 0 10-4 0V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(3)">
      <mask id="attachment_svg__b" fill="#fff">
        <use xlinkHref="#attachment_svg__a" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#attachment_svg__a" />
      <g fill="#2466EA" mask="url(#attachment_svg__b)">
        <path d="M-3 0h16v16H-3z" />
      </g>
    </g>
  </svg>
);

export default SvgAttachment;
