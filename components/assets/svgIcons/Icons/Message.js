import React from "react";

const SvgMessage = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5zm0-2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm8.15 8.586H10.32l1.414-1.414 1.414 1.414zM14.906 8h2.828l-6 6-6-6h2.829l3.171 3.172L14.907 8zm-1.758 4.586h-2.828l1.414-1.414 1.414 1.414zM14.907 8h2.828l-6 6-6-6h2.829l3.171 3.172L14.907 8z"
        id="message_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="message_svg__b" fill="#fff">
        <use xlinkHref="#message_svg__a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#message_svg__a" />
      <g mask="url(#message_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgMessage;
