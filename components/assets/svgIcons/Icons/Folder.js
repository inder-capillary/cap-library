import * as React from "react";

function SvgFolder(props) {
  return (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="folder_svg__a"
          d="M11.39 4.185A.503.503 0 0011 4h-1v-.5A1.5 1.5 0 008.5 2H5.36l-.16-.5a1.501 1.501 0 00-1.42-1H2A1.5 1.5 0 00.5 2v6A1.5 1.5 0 002 9.5h7.2a1.5 1.5 0 001.46-1.175l.84-3.715a.503.503 0 00-.11-.425zM2.685 8.11a.5.5 0 01-.5.39H2a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5h1.78a.499.499 0 01.5.34l.27.82A.5.5 0 005 3h3.5a.5.5 0 01.5.5V4H4a.5.5 0 00-.5.39l-.815 3.72zm7 0a.5.5 0 01-.5.39h-5.58a.726.726 0 00.055-.175L4.4 5h6l-.715 3.11z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(0 1)">
        <mask id="folder_svg__b" fill="#fff">
          <use xlinkHref="#folder_svg__a" />
        </mask>
        <use fill="#6563FF" fillRule="nonzero" xlinkHref="#folder_svg__a" />
        <g fill="#091E42" mask="url(#folder_svg__b)">
          <path d="M0-1h12v12H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgFolder;
