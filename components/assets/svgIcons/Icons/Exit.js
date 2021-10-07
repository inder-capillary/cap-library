import * as React from "react";

function SvgExit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M16 7l-1.4 1.4 2.6 2.6H7v2h10.2l-2.6 2.6L16 17l5-5-5-5zm-5 3h2v4h-2v-4zm0 9H3v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H3v2h8v14z"
        />
      </g>
    </svg>
  );
}

export default SvgExit;
