import * as React from "react";

function SvgColor(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="color_svg__a"
          d="M7 18H2v-5a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2zM1 8a1 1 0 001-1V2h5a1 1 0 000-2H1a1 1 0 00-1 1v6a1 1 0 001 1zm6 6h6v-4H7v4zm2-7a1 1 0 012 0v1H9V7zm1-3a3 3 0 00-3 3v1a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2V7a3 3 0 00-3-3zm9 8a1 1 0 00-1 1v5h-5a1 1 0 100 2h6a1 1 0 001-1v-6a1 1 0 00-1-1zm0-12h-6a1 1 0 100 2h5v5a1 1 0 102 0V1a1 1 0 00-1-1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="color_svg__b" fill="#fff">
          <use xlinkHref="#color_svg__a" />
        </mask>
        <use fill="#000" xlinkHref="#color_svg__a" />
        <g fill="#091E42" mask="url(#color_svg__b)">
          <path d="M-2-1h24v24H-2z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgColor;
