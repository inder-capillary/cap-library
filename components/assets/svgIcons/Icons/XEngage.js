import * as React from "react";

function XEngage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="2_svg__c"
          d="M17.991 7.006h1v1a1 1 0 101.999 0v-1h.999a1 1 0 100-1.999h-1v-1a1 1 0 10-1.999.001v1h-.999a1 1 0 100 1.999zm1.999 8.997a2.997 2.997 0 00-1.73.56l-2.448-1.45c.116-.359.176-.733.18-1.11a3.999 3.999 0 00-2.998-3.858V7.826a2.998 2.998 0 10-1.999 0v2.319a4 4 0 00-2.999 3.858c.004.377.065.751.18 1.11l-2.448 1.45a2.994 2.994 0 00-1.73-.56 2.997 2.997 0 100 5.997 3 3 0 002.999-2.999 3.015 3.015 0 00-.12-.8l2.299-1.369a3.998 3.998 0 005.637 0l2.299 1.37a3 3 0 102.878-2.199zM3.998 20a1 1 0 110-2 1 1 0 010 2zm7.996-15.993a1 1 0 110 2.001 1 1 0 010-2.002zm0 11.995a2 2 0 11.002-4 2 2 0 01-.002 4zM19.99 20a1 1 0 110-2 1 1 0 010 2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g opacity={0.1}>
          <mask id="2_svg__b" fill="currentColor">
            <use xlinkHref="#2_svg__a" />
          </mask>
          <use fill="currentColor" xlinkHref="#2_svg__a" />
          <g fill="currentColor" mask="url(#2_svg__b)">
            <path d="M0 0h48v48H0z" />
          </g>
        </g>
        <g transform="translate(12 12)">
          <mask id="2_svg__d" fill="currentColor">
            <use xlinkHref="#2_svg__c" />
          </mask>
          <use fill="currentColor" fillRule="nonzero" xlinkHref="#2_svg__c" />
          <g fill="currentColor" mask="url(#2_svg__d)">
            <path d="M0 0h24v24H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default XEngage;
