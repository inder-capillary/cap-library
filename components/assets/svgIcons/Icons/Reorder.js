import React from "react";

function SvgReorder(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="reorder_svg__a"
          d="M12.122 2.794a1.004 1.004 0 00-1.42 1.42l.886.876h-6.59a1 1 0 100 2h9a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-2.586-2.586zM10.998 9h-9a1 1 0 00-.92.62 1 1 0 00.21 1.09l2.586 2.586a1 1 0 001.42 0 1 1 0 000-1.42L4.408 11h6.59a1 1 0 100-2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="reorder_svg__b" fill="#fff">
          <use xlinkHref="#reorder_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#reorder_svg__a" />
        <g fill="#2466ea" mask="url(#reorder_svg__b)">
          <path d="M0 0h16v16H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgReorder;
