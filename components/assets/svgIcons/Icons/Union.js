import React from "react";

function SvgUnion(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="#091E42" fillRule="evenodd">
        <circle cx={8} cy={8} r={8} />
        <circle cx={16} cy={16} r={8} />
      </g>
    </svg>
  );
}

export default SvgUnion;
