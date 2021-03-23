import * as React from "react";

function SvgSortUp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="SortUp_svg__a"
          d="M10.406 7.24L5.23 12.415c-.332.332-.918.285-1.308-.106-.39-.39-.438-.976-.106-1.308l5.177-5.177H5.406a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0V7.239z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="SortUp_svg__b" fill="#fff">
          <use xlinkHref="#SortUp_svg__a" />
        </mask>
        <use
          fill="#FFF"
          fillRule="nonzero"
          transform="rotate(-45 8 8.231)"
          xlinkHref="#SortUp_svg__a"
        />
        <g fill="#B3BAC5" mask="url(#SortUp_svg__b)">
          <path d="M0 0h16v16H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSortUp;
