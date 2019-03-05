import React from "react";

const SvgMegaphone = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M20 17.581L8 13.295v-2.59L20 6.42v11.162zm-.789-13.004L20 3h2v18h-2l-.789-1.577-6.863-2.45-.171.47a1 1 0 0 1-1.281.598l-1.883-.686a.996.996 0 0 1-.596-1.277l.164-.45L6 14.704v-5.41l13.211-4.718zM2 15V9h2v6H2z"
        id="megaphone_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="megaphone_svg__b" fill="#fff">
        <use xlinkHref="#megaphone_svg__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#megaphone_svg__a" />
      <g mask="url(#megaphone_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgMegaphone;
