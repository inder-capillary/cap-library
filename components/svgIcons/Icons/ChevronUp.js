import React from "react";

const SvgChevronUp = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M8.705 7.705a.997.997 0 0 0-1.41 0l-3.588 3.588a1 1 0 0 0 0 1.414l3.588 3.588a.999.999 0 0 0 1.411-1.411L6.83 13h8.67a1 1 0 0 0 0-2H6.83l1.876-1.884a.999.999 0 0 0-.001-1.411zM19 3H5a2 2 0 0 0-2 2v1a1 1 0 1 0 2 0V5h14v14H5v-1a1 1 0 0 0-2 0v1a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        id="chevron-up_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chevron-up_svg__b" fill="#fff">
        <use xlinkHref="#chevron-up_svg__a" />
      </mask>
      <use
        fill="#000"
        fillRule="nonzero"
        transform="rotate(-180 12 12)"
        xlinkHref="#chevron-up_svg__a"
      />
      <g mask="url(#chevron-up_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgChevronUp;
