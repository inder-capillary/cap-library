import * as React from "react";

function SvgSplit(props) {
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
          id="split_svg__a"
          d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4h-6zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="split_svg__b" fill="#fff">
          <use xlinkHref="#split_svg__a" />
        </mask>
        <use
          fill="#000"
          fillRule="nonzero"
          transform="rotate(90 12 12)"
          xlinkHref="#split_svg__a"
        />
        <g fill="#FFF" mask="url(#split_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSplit;
