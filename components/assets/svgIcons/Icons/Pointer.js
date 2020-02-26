import * as React from "react";

const SvgPointer = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      id="pointer_svg__a"
      d="M0 0v19.8l4.912-4.673L8.761 24l2.639-1.2-3.966-8.759 6.966-.602z"
    />
  </svg>
);

export default SvgPointer;
