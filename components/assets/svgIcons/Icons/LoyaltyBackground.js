import * as React from "react";

const SvgLoyaltyBackground = (props) => (
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
        d="M42.798 42.797c-2.336 2.455-5.458 3.949-9.366 4.481-2.743.562-5.887.796-9.432.702-3.545.094-6.69-.14-9.432-.702-3.908-.532-7.03-2.026-9.366-4.48-2.454-2.336-3.948-5.458-4.48-9.366C.16 30.689-.075 27.545.02 24c-.094-3.545.14-6.69.701-9.432.533-3.908 2.027-7.03 4.481-9.366 2.336-2.454 5.458-3.948 9.366-4.48C17.311.158 20.455-.075 24 .02c3.545-.094 6.689.14 9.432.701 3.908.533 7.03 2.027 9.366 4.481 2.454 2.336 3.948 5.458 4.48 9.366.562 2.743.796 5.887.702 9.432.094 3.545-.14 6.689-.702 9.432-.532 3.908-2.026 7.03-4.48 9.365Z"
        id="loyalty-background_svg__a"
      />
      <path
        d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2Zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1ZM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm11 15H4v-2h16v2Zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6Z"
        id="loyalty-background_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="loyalty-background_svg__b" fill="#fff">
        <use xlinkHref="#loyalty-background_svg__a" />
      </mask>
      <use fill="#F4F5F7" xlinkHref="#loyalty-background_svg__a" />
      <g mask="url(#loyalty-background_svg__b)">
        <g transform="translate(12 12)">
          <mask id="loyalty-background_svg__d" fill="#fff">
            <use xlinkHref="#loyalty-background_svg__c" />
          </mask>
          <use
            fill="#000"
            fillRule="nonzero"
            xlinkHref="#loyalty-background_svg__c"
          />
          <g mask="url(#loyalty-background_svg__d)" fill="#091E42">
            <path d="M0 0h24v24H0z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgLoyaltyBackground;
