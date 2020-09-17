import * as React from "react";

function SvgCarouselSelected(props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" fill="#091E42" />
    </svg>
  );
}

export default SvgCarouselSelected;
