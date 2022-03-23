import * as React from "react";

const SvgMonitorBackground = (props) => (
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
        id="monitor-background_svg__a"
      />
      <path
        d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8z"
        id="monitor-background_svg__b"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#F4F5F7" xlinkHref="#monitor-background_svg__a" />
      <g transform="translate(12 12)">
        <mask id="monitor-background_svg__c" fill="#fff">
          <use xlinkHref="#monitor-background_svg__b" />
        </mask>
        <use
          fill="#000"
          fillRule="nonzero"
          xlinkHref="#monitor-background_svg__b"
        />
        <g mask="url(#monitor-background_svg__c)" fill="#091E42">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgMonitorBackground;
