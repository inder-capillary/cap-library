import * as React from "react";

function SvgError(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="error_svg__a"
          d="M7 3.5a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM7 8a1.25 1.25 0 110 2.5A1.25 1.25 0 017 8zm0 4a5 5 0 10-.001-10.001A5 5 0 007 12zm0 2A7 7 0 117 0a7 7 0 010 14z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <mask id="error_svg__b" fill="#fff">
          <use xlinkHref="#error_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#error_svg__a" />
        <g fill="currentColor" mask="url(#error_svg__b)">
          <path d="M-1-1h16v16H-1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgError;
