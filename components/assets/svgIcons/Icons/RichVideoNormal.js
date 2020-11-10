import * as React from "react";

function SvgRichVideoNormal(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 12"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-3-6h24v24H-3z" />
        <path
          d="M14 4.5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7.5l4 4V.5l-4 4zM12 10H2V2h10v8z"
          fill="#5E6C84"
          fillRule="nonzero"
        />
        <path
          d="M7.752 4.885v-.543c0-.303.368-.457.583-.242L9.9 5.666a.34.34 0 010 .48L8.335 7.713a.341.341 0 01-.583-.239v-.576c-1.706 0-2.9.546-3.752 1.74.341-1.706 1.364-3.411 3.752-3.752z"
          fill="#5E6C84"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgRichVideoNormal;
