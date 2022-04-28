import * as React from "react";

const SvgWalletBackground = (props) => (
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
        id="wallet-background_svg__a"
      />
      <path
        d="M17 4h-1V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM3 2h10a1 1 0 0 1 1 1v1H3a1 1 0 1 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1v2Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.83A3 3 0 0 0 3 6h14a1 1 0 0 1 1 1v1Z"
        id="wallet-background_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wallet-background_svg__b" fill="#fff">
        <use xlinkHref="#wallet-background_svg__a" />
      </mask>
      <use fill="#F4F5F7" xlinkHref="#wallet-background_svg__a" />
      <g mask="url(#wallet-background_svg__b)">
        <path
          d="M31 19h-1v-1a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm-14-2h10a1 1 0 0 1 1 1v1H17a1 1 0 1 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1v2Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-9.17a3 3 0 0 0 1 .17h14a1 1 0 0 1 1 1v1Z"
          fill="#6563FF"
          fillRule="nonzero"
        />
        <g transform="translate(14 15)">
          <mask id="wallet-background_svg__d" fill="#fff">
            <use xlinkHref="#wallet-background_svg__c" />
          </mask>
          <g mask="url(#wallet-background_svg__d)">
            <path fill="#091E42" fillRule="nonzero" d="M-2-3h24v24H-2z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgWalletBackground;
