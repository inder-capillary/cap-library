import React from "react";

const SvgEdit = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
        id="edit_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="edit_svg__b" fill="#fff">
        <use xlinkHref="#edit_svg__a" />
      </mask>
      <use fill="#7A869A" xlinkHref="#edit_svg__a" />
      <g mask="url(#edit_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgEdit;
