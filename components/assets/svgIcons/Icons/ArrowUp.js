import React from "react";

function SvgArrowUp(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{
        transform: 'rotate(180deg)',
        left: '-4px',
        position: 'relative',
      }}
    >
      <path
        id="arrow-up_svg__a"
        d="M5 8.25v-6.9a1 1 0 112 0v6.9l2.9-2.9a.99.99 0 011.4 1.4l-4.593 4.593a1 1 0 01-1.414 0L.7 6.75a.99.99 0 111.4-1.4L5 8.25z"
      />
    </svg>
  );
}

export default SvgArrowUp;
