import * as React from "react";

function SvgStar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="Star_svg__a"
          d="M21.994 9.234a1.001 1.001 0 00-.86-.67l-5.69-.83-2.55-5.17a1 1 0 00-1.8 0l-2.55 5.16-5.69.84a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 001.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1.001 1.001 0 00.99-1.19l-1-5.68 4.13-4c.294-.25.419-.647.32-1.02zm-6.15 4a.998.998 0 00-.29.88l.72 4.2-3.76-2a1.063 1.063 0 00-.94 0l-3.76 2 .72-4.2a1 1 0 00-.29-.88l-3-3 4.21-.61c.329-.046.613-.252.76-.55l1.78-3.81 1.88 3.82c.146.298.43.504.76.55l4.21.61-3 2.99z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="Star_svg__b" fill="#fff">
          <use xlinkHref="#Star_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#Star_svg__a" />
        <g fill="#091E42" mask="url(#Star_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgStar;
