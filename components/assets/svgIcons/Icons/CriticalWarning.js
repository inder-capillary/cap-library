import * as React from "react";

const SvgCriticalWarning = (props) => (
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
      d="M6.214 2.106C6.95.63 9.054.63 9.79 2.106l5 10A2 2 0 0 1 13.003 15h-10a2 2 0 0 1-1.79-2.894l5-10ZM8.003 3l-5 10h10l-5-10ZM8 8.5a1 1 0 0 0-1 1V11a1 1 0 1 0 2 0V9.5a1 1 0 0 0-1-1ZM7 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="#EA213A"
    />
  </svg>
);

export default SvgCriticalWarning;
