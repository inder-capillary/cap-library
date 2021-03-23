import * as React from "react";

function SvgRefreshCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M19.91 15.51h-4.53a1 1 0 000 2h2.4A7.998 7.998 0 014 12a1 1 0 00-2 0 9.998 9.998 0 0016.88 7.23V21a1 1 0 002 0v-4.5a1 1 0 00-.97-.99zM12 2a9.997 9.997 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4a8.003 8.003 0 018.746-1.9A8.003 8.003 0 0120 12a1 1 0 002 0A10.001 10.001 0 0012 2z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgRefreshCircle;
