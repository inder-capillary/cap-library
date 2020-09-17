import * as React from "react";

function SvgSmileymessageNormal(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
        <circle fill="#5E6C84" fillRule="nonzero" cx={15.5} cy={9.5} r={1.5} />
        <circle fill="#5E6C84" fillRule="nonzero" cx={8.5} cy={9.5} r={1.5} />
        <path
          d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0010.24 0h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          fill="#5E6C84"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgSmileymessageNormal;
