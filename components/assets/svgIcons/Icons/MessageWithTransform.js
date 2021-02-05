import * as React from "react";

function SvgMessageWithTransform(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="message1_svg__a"
          d="M3 2a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H3zm0-2h14a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9.907 4h2.828l-6 6-6-6h2.828l3.172 3.172L12.907 4z"
        />
      </defs>
      <g transform="translate(2 4)" fill="none" fillRule="evenodd">
        <mask id="message1_svg__b" fill="#fff">
          <use xlinkHref="#message1_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#message1_svg__a" />
        <g fill="#FFF" mask="url(#message1_svg__b)">
          <path d="M-2-4h24v24H-2z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgMessageWithTransform;
