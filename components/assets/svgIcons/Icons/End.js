import * as React from "react";

function SvgEnd(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          fill="currentColor"
          d="M13.894 21.142l1.44 1.525L22 16l-6.667-6.667-1.44 1.646 4.048 4.023H4V17h13.941l-4.047 4.142zM25.334 4H6.666A2.666 2.666 0 004 6.667V12h2.028V6.059h20.006v19.964H6.028V20H4v5.333A2.666 2.666 0 006.667 28h18.666C26.8 28 28 26.8 28 25.333V6.667C28 5.2 26.8 4 25.333 4z"
        />
      </g>
    </svg>
  );
}

export default SvgEnd;
