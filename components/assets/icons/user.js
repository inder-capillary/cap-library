import React from "react";

const SvgUser = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="user_svg__a"
        d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01zm0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="user_svg__b" fill="#fff">
        <use xlinkHref="#user_svg__a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#user_svg__a" />
      <g fill="#091E42" mask="url(#user_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgUser;