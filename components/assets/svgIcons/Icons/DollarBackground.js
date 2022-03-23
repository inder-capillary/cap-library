import * as React from "react";

const SvgDollarBackground = (props) => (
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
        d="M42.798 42.797c-2.336 2.455-5.458 3.949-9.366 4.481-2.743.562-5.887.796-9.432.702-3.545.094-6.69-.14-9.432-.702-3.908-.532-7.03-2.026-9.366-4.48-2.454-2.336-3.948-5.458-4.48-9.366C.16 30.689-.075 27.545.02 24c-.094-3.545.14-6.69.701-9.432.533-3.908 2.027-7.03 4.481-9.366 2.336-2.454 5.458-3.948 9.366-4.48C17.311.158 20.455-.075 24 .02c3.545-.094 6.689.14 9.432.701 3.908.533 7.03 2.027 9.366 4.481 2.454 2.336 3.948 5.458 4.48 9.366.562 2.743.796 5.887.702 9.432.094 3.545-.14 6.689-.702 9.432-.532 3.908-2.026 7.03-4.48 9.365z"
        id="dollar-background_svg__a"
      />
      <path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V3H8.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H6.04c.1 1.7 1.36 2.66 2.86 2.97V17h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"
        id="dollar-background_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dollar-background_svg__b" fill="#fff">
        <use xlinkHref="#dollar-background_svg__a" />
      </mask>
      <use fill="#F4F5F7" xlinkHref="#dollar-background_svg__a" />
      <g mask="url(#dollar-background_svg__b)">
        <g transform="translate(14 14)">
          <mask id="dollar-background_svg__d" fill="#fff">
            <use xlinkHref="#dollar-background_svg__c" />
          </mask>
          <use
            fill="#000"
            fillRule="nonzero"
            xlinkHref="#dollar-background_svg__c"
          />
          <g mask="url(#dollar-background_svg__d)" fill="#091E42">
            <path d="M-2-2h24v24H-2z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgDollarBackground;
