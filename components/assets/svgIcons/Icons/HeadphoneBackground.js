import * as React from "react";

const SvgHeadphoneBackground = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M9 0a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H2V9c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2V9a9 9 0 0 0-9-9zM4 12v4H2v-4h2zm12 4h-2v-4h2v4z"
        id="headphone-background_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M42.798 42.797c-2.336 2.455-5.458 3.949-9.366 4.481-2.743.562-5.887.796-9.432.702-3.545.094-6.69-.14-9.432-.702-3.908-.532-7.03-2.026-9.366-4.48-2.454-2.336-3.948-5.458-4.48-9.366C.16 30.689-.075 27.545.02 24c-.094-3.545.14-6.69.701-9.432.533-3.908 2.027-7.03 4.481-9.366 2.336-2.454 5.458-3.948 9.366-4.48C17.311.158 20.455-.075 24 .02c3.545-.094 6.689.14 9.432.701 3.908.533 7.03 2.027 9.366 4.481 2.454 2.336 3.948 5.458 4.48 9.366.562 2.743.796 5.887.702 9.432.094 3.545-.14 6.689-.702 9.432-.532 3.908-2.026 7.03-4.48 9.365z"
        fill="#F4F5F7"
      />
      <g transform="translate(15 15)">
        <mask id="headphone-background_svg__b" fill="#fff">
          <use xlinkHref="#headphone-background_svg__a" />
        </mask>
        <use
          fill="#000"
          fillRule="nonzero"
          xlinkHref="#headphone-background_svg__a"
        />
        <g mask="url(#headphone-background_svg__b)" fill="#091E42">
          <path d="M-3-3h24v24H-3z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgHeadphoneBackground;
