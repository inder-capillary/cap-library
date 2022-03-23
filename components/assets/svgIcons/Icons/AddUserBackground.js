import * as React from "react";

const SvgAddUserBackground = (props) => (
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
        id="add-user-background_svg__a"
      />
      <path
        d="M19 5V2h-2v3h-3v2h3v3h2V7h3V5h-3zM8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C12.71 9.7 10.53 9 8 9s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 0 13.22V16h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM14 14H2v-.78c0-.38.2-.72.52-.88C3.71 11.73 5.63 11 8 11c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V14z"
        id="add-user-background_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-user-background_svg__b" fill="#fff">
        <use xlinkHref="#add-user-background_svg__a" />
      </mask>
      <use fill="#F4F5F7" xlinkHref="#add-user-background_svg__a" />
      <g mask="url(#add-user-background_svg__b)">
        <g transform="translate(13 16)">
          <mask id="add-user-background_svg__d" fill="#fff">
            <use xlinkHref="#add-user-background_svg__c" />
          </mask>
          <use
            fill="#000"
            fillRule="nonzero"
            xlinkHref="#add-user-background_svg__c"
          />
          <g mask="url(#add-user-background_svg__d)" fill="#091E42">
            <path d="M-1-4h24v24H-1z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgAddUserBackground;
