import React from "react";

const SvgChevronRight = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M11.293 14.993L6.7 10.4A.99.99 0 0 1 8.1 9l3.9 3.9L15.9 9a.99.99 0 0 1 1.4 1.4l-4.593 4.593a1 1 0 0 1-1.414 0z"
        id="chevron-right_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chevron-right_svg__b" fill="#fff">
        <use xlinkHref="#chevron-right_svg__a" />
      </mask>
      <use
        fill="#FFF"
        transform="rotate(-90 12 11.998)"
        xlinkHref="#chevron-right_svg__a"
      />
      <g mask="url(#chevron-right_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgChevronRight;
