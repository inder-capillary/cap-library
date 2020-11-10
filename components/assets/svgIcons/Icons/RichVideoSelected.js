import * as React from "react";

function SvgRichVideoSelected(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#091E42"
          fillRule="nonzero"
          d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M10.877 10.532V9.9c0-.354.43-.533.68-.282l1.827 1.826a.397.397 0 010 .561l-1.827 1.827a.398.398 0 01-.68-.279v-.672c-1.99 0-3.382.636-4.377 2.029.398-1.99 1.592-3.979 4.377-4.377z"
        />
      </g>
    </svg>
  );
}

export default SvgRichVideoSelected;
