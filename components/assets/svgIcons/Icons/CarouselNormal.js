import * as React from "react";

function SvgCarouselNormal(props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M2 6h4v11H2zm5 13h10V4H7v15zM9 6h6v11H9V6zm9 0h4v11h-4z" fill="#5E6C84" />
    </svg>
  );
}

export default SvgCarouselNormal;
