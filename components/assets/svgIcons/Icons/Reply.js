import * as React from "react";

function SvgReply(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="currentColor"
      {...props}
    >
      <g
        transform="matrix(-1 0 0 1 27.75 -1.75)"
        fill="none"
        fillRule="evenodd"
      >
        <circle stroke="#091E42" strokeWidth={3} cx={15} cy={15} r={11} />
        <path d="M0 0h30v30H0z" />
        <path
          d="M13.18 12.038v-1.25c0-.698-.849-1.052-1.344-.557L8.23 13.837a.782.782 0 000 1.108l3.606 3.607c.495.495 1.344.149 1.344-.55v-1.328c3.928 0 6.678 1.257 8.643 4.007-.786-3.929-3.143-7.857-8.643-8.643z"
          fill="#091E42"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgReply;
