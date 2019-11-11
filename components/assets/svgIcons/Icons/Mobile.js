import React from "react";

const SvgMobilePhone = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="mobile-phone_svg__a"
        d="M16.246 20H7.763A.764.764 0 017 19.237V4.746C7 4.334 7.334 4 7.746 4H9.5v1h5V4h1.754c.412 0 .746.334.746.746v14.5a.754.754 0 01-.754.754M17.5 2c.83 0 1.5.672 1.5 1.501v16.998A1.5 1.5 0 0117.5 22h-11A1.501 1.501 0 015 20.499V3.501A1.5 1.5 0 016.5 2h11zM12 16.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mobile-phone_svg__b" fill="#fff">
        <use xlinkHref="#mobile-phone_svg__a" />
      </mask>
      <use fill="#000" xlinkHref="#mobile-phone_svg__a" />
      <g fill="#091E42" mask="url(#mobile-phone_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgMobilePhone;
