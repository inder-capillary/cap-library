import * as React from "react";

const SvgNote = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.914 1a3 3 0 0 1 1.92.695L12.921 5.1A3 3 0 0 1 14 7.405V13c0 1.1-.9 2-2 2H3.99C2.89 15 2 14.1 2 13l.01-10c0-1.1.89-2 1.99-2h2.914ZM4 3v10h8V7H9a2 2 0 0 1-2-2V3H4Z"
      fill="#5E6C84"
    />
  </svg>
);

export default SvgNote;
