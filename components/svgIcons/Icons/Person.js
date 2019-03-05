import React from "react";

const SvgPerson = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M8 8c1.934 0 3.5-1.566 3.5-3.5S9.934 1 8 1a3.499 3.499 0 0 0-3.5 3.5C4.5 6.434 6.066 8 8 8zm0 1.75c-2.336 0-7 1.172-7 3.5V15h14v-1.75c0-2.328-4.664-3.5-7-3.5z" />
  </svg>
);

export default SvgPerson;
