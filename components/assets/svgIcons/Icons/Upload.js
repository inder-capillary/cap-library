import React from "react";

const SvgUpload = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M18.992 9.11l-6.553 6.554c-.363.362-.973.34-1.364-.051-.39-.39-.413-1.001-.05-1.364l6.553-6.553h-3.586a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9.11zm-12.146.86a1 1 0 0 1 0 1.413l-2.12 2.122a1 1 0 1 1-1.414-1.414l2.12-2.122a1 1 0 0 1 1.414 0zm7.806 13.376a.821.821 0 0 1-.139.129 1 1 0 0 1-1.4-.173 1.548 1.548 0 0 1-.084-.079L3.465 13.66c-.483-.483-.558-1.191-.168-1.582.39-.39 1.099-.315 1.582.168l9.023 9.023 1.412-1.412a1 1 0 1 1 1.415 1.414l-2.077 2.076z"
        id="upload_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="upload_svg__b" fill="#fff">
        <use xlinkHref="#upload_svg__a" />
      </mask>
      <use
        fill="#FFF"
        fillRule="nonzero"
        transform="rotate(-45 12.005 14.69)"
        xlinkHref="#upload_svg__a"
      />
      <g mask="url(#upload_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgUpload;
