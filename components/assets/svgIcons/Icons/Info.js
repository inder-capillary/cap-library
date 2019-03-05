import React from "react";

const SvgInfo = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M12 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 6.5zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        id="info_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="info_svg__b" fill="#fff">
        <use xlinkHref="#info_svg__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#info_svg__a" />
      <g mask="url(#info_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgInfo;
