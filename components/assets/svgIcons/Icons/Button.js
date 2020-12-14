import * as React from "react";

function SvgButton(props) {
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
          id="button_svg__a"
          d="M3.954 11.38c.28-1.47 1.66-2.48 3.16-2.48h2.93c.52 0 .95-.43.95-.95s-.43-.95-.95-.95h-2.83c-2.61 0-4.94 1.91-5.19 4.51A4.995 4.995 0 006.994 17h3.05c.52 0 .95-.43.95-.95s-.43-.95-.95-.95h-3.05a3.11 3.11 0 01-3.04-3.72zM8.994 13h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm7.78-6h-2.83c-.52 0-.95.43-.95.95s.43.95.95.95h2.93c1.5 0 2.88 1.01 3.16 2.48a3.11 3.11 0 01-3.04 3.72h-3.05c-.52 0-.95.43-.95.95s.43.95.95.95h3.05c2.92 0 5.26-2.51 4.98-5.49-.25-2.6-2.59-4.51-5.2-4.51z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="button_svg__b" fill="#fff">
          <use xlinkHref="#button_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#button_svg__a" />
        <g fill="#091E42" mask="url(#button_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgButton;
