import React from "react";

const SvgBulb = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M10 17h4v-1.341a6 6 0 1 0-4 0V17zm0 2v1h4v-1h-4zm-6-9a8 8 0 1 1 12 6.93V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.07A8.001 8.001 0 0 1 4 10zm6.5.999a1 1 0 0 1-.857-1.515l1.5-2.499a1 1 0 0 1 1.714 1.03l-.59.984H13.5a1 1 0 0 1 .857 1.514l-1.5 2.5a1 1 0 0 1-1.714-1.029l.59-.985H10.5z"
      id="bulb_svg__a"
    />
  </svg>
);

export default SvgBulb;
