import React from "react";

function SvgReferal(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          d="m19.571 12 3.149 3.146-3.149 3.145v-2.273a5 5 0 0 0-4.566 4.759L15 21h-2a7 7 0 0 1 6.571-6.987V12zM12 13c.797 0 1.831.12 2.89.358a8.552 8.552 0 0 0-1.914 1.693A9.804 9.804 0 0 0 12 15c-2.618 0-5.612 1.213-5.974 1.943L6 17.01V18h5.374a8.474 8.474 0 0 0-.36 2H4v-3c0-2.66 5.33-4 8-4zm0-9c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          id="5wkiwjq0sa"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="dpvh6g0fpb" fill="#fff">
          <use xlinkHref="#5wkiwjq0sa" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#5wkiwjq0sa" />
        <g mask="url(#dpvh6g0fpb)" fill="#091E42">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgReferal;
