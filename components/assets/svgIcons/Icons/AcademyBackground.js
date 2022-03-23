import * as React from "react";

const SvgAcademyBackground = (props) => (
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
        d="M11 0 0 6l4 2.18v6L11 18l7-3.82v-6l2-1.09V14h2V6L11 0zm6.82 6L11 9.72 4.18 6 11 2.28 17.82 6zM16 12.99l-5 2.73-5-2.73V9.27L11 12l5-2.73v3.72z"
        id="academy-background_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M42.798 42.797c-2.336 2.455-5.458 3.949-9.366 4.481-2.743.562-5.887.796-9.432.702-3.545.094-6.69-.14-9.432-.702-3.908-.532-7.03-2.026-9.366-4.48-2.454-2.336-3.948-5.458-4.48-9.366C.16 30.689-.075 27.545.02 24c-.094-3.545.14-6.69.701-9.432.533-3.908 2.027-7.03 4.481-9.366 2.336-2.454 5.458-3.948 9.366-4.48C17.311.158 20.455-.075 24 .02c3.545-.094 6.689.14 9.432.701 3.908.533 7.03 2.027 9.366 4.481 2.454 2.336 3.948 5.458 4.48 9.366.562 2.743.796 5.887.702 9.432.094 3.545-.14 6.689-.702 9.432-.532 3.908-2.026 7.03-4.48 9.365z"
        fill="#F4F5F7"
      />
      <g transform="translate(13 15)">
        <mask id="academy-background_svg__b" fill="#fff">
          <use xlinkHref="#academy-background_svg__a" />
        </mask>
        <use
          fill="#000"
          fillRule="nonzero"
          xlinkHref="#academy-background_svg__a"
        />
        <g mask="url(#academy-background_svg__b)" fill="#091E42">
          <path d="M-1-3h24v24H-1z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgAcademyBackground;
