import * as React from "react";

function SvgUnicode(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="unicode_svg__a"
          d="M10.75 1.008L10.766 1 15.2 9.529V4h2v10h-2v-.039l-.001.002-4.449-8.63V9a5 5 0 01-10 0V1h2v8a3 3 0 106 0V1h2v.008zM16.2 3a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 0016.2 3z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(3 5)">
        <mask id="unicode_svg__b" fill="#fff">
          <use xlinkHref="#unicode_svg__a" />
        </mask>
        <use fill="#979797" fillRule="nonzero" xlinkHref="#unicode_svg__a" />
        <g fill="#EA213A" mask="url(#unicode_svg__b)">
          <path d="M-3-5h24v24H-3z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgUnicode;
