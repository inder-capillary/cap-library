import React from "react";

const SvgDrag = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="drag_svg__a"
        d="M20 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="drag_svg__b" fill="#fff">
        <use xlinkHref="#drag_svg__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#drag_svg__a" />
      <g fill="#7A869A" mask="url(#drag_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDrag;
