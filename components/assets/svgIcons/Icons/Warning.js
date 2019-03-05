import React from "react";

const SvgWarning = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M6 18.013h11.594a1 1 0 0 0 .865-1.501L12.663 6.499a1 1 0 0 0-1.731 0L5.135 16.512a1 1 0 0 0 .865 1.5zm0 2a3 3 0 0 1-2.596-4.503L9.201 5.497a3 3 0 0 1 5.192 0L20.19 15.51a3 3 0 0 1-2.596 4.503H6zM12 9a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm0 5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
        id="WARNING_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="WARNING_svg__b" fill="#fff">
        <use xlinkHref="#WARNING_svg__a" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#WARNING_svg__a" />
      <g mask="url(#WARNING_svg__b)" fill="#E83135">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgWarning;
