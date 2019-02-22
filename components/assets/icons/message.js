import React from "react";

const SvgMessage = props => (
  <svg width={200} height={24} {...props}>
    <defs>
      <path
        id="message_svg__a"
        d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="message_svg__b" fill="#fff">
        <use xlinkHref="#message_svg__a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#message_svg__a" />
      <g fill={(props.color?props.color:"#091E42")} mask="url(#message_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
    <text x="35" y="16">{props.text}</text>
  </svg>
);

export default SvgMessage;