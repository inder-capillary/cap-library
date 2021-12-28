import * as React from "react";

const SvgSplit = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4h-6Zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4Z"
        id="split_svg__a"
      />
    </defs>
    <use
      fill="#FFF"
      fillRule="nonzero"
      transform="rotate(90 12 12)"
      xlinkHref="#split_svg__a"
    />
  </svg>
);

export default SvgSplit;
