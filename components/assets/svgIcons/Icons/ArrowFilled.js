import React from "react";

const SvgArrowFilled = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M14.406 11.24L9.23 16.415c-.332.332-.918.285-1.308-.106-.39-.39-.438-.976-.106-1.308l5.177-5.177H9.406a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586z"
        id="arrow-filled_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle
        stroke="#FFF"
        strokeWidth={2}
        fill="#42B040"
        cx={12}
        cy={12}
        r={11}
      />
      <use
        fill="#FFF"
        fillRule="nonzero"
        transform="rotate(-45 12 12.231)"
        xlinkHref="#arrow-filled_svg__a"
      />
    </g>
  </svg>
);

export default SvgArrowFilled;
