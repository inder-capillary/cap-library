import React from "react";

function SvgMinus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="minus_svg__a"
          d="M0 1.005a1 1 0 001.001 1.001H21a1.001 1.001 0 100-2.002H1a1 1 0 00-1 1.001z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(5 15)">
        <mask id="minus_svg__b" fill="#fff">
          <use xlinkHref="#minus_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#minus_svg__a" />
        <g fill="#2466EA" mask="url(#minus_svg__b)">
          <path d="M-5-15h32v32H-5z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgMinus;
