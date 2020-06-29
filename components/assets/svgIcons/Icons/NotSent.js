import * as React from "react";

function SvgNotSent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="not-sent_svg__a"
          d="M6.707 6l1.06 1.06a.5.5 0 11-.706.708L6 6.708l-1.06 1.06a.5.5 0 01-.708-.707L5.292 6l-1.06-1.06a.5.5 0 01.707-.708L6 5.292l1.06-1.06a.5.5 0 01.708.707L6.708 6zM6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="rotate(-180 6 6)">
        <mask id="not-sent_svg__b" fill="#fff">
          <use xlinkHref="#not-sent_svg__a" />
        </mask>
        <use fill="#EA213A" xlinkHref="#not-sent_svg__a" />
        <g fill="#EA213A" mask="url(#not-sent_svg__b)">
          <path d="M0 0h12v12H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgNotSent;
