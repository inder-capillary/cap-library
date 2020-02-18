import React from "react";

function SvgMpushFilled(props) {
  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="MPUSHFilled_svg__a"
          d="M42.397 42.396c-2.314 2.432-5.407 3.912-9.279 4.44-2.717.556-5.831.788-9.343.694-3.512.094-6.626-.138-9.343-.695-3.872-.527-6.965-2.007-9.278-4.439-2.432-2.314-3.911-5.406-4.44-9.278-.556-2.717-.787-5.831-.694-9.343-.093-3.512.138-6.626.695-9.343.528-3.872 2.007-6.965 4.439-9.278 2.313-2.432 5.406-3.912 9.278-4.44 2.717-.556 5.831-.787 9.343-.694 3.512-.093 6.626.138 9.343.695 3.872.527 6.965 2.007 9.279 4.439 2.43 2.313 3.91 5.406 4.438 9.278.557 2.717.789 5.831.695 9.343.094 3.512-.138 6.626-.695 9.343-.527 3.872-2.007 6.964-4.438 9.278z"
        />
        <path
          id="MPUSHFilled_svg__c"
          d="M10.01 21.51c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6.5c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zM12 2c-.83 0-1.5.67-1.5 1.5v1.17C7.36 5.35 5 8.15 5 11.5v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3.5c0-.83-.67-1.5-1.5-1.5z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="MPUSHFilled_svg__b" fill="#fff">
          <use xlinkHref="#MPUSHFilled_svg__a" />
        </mask>
        <use fill="#BABABA" xlinkHref="#MPUSHFilled_svg__a" />
        <g fill="#EBECF0" mask="url(#MPUSHFilled_svg__b)">
          <path d="M0 0h48v48H0z" />
        </g>
        <g transform="translate(12 12)">
          <mask id="MPUSHFilled_svg__d" fill="#fff">
            <use xlinkHref="#MPUSHFilled_svg__c" />
          </mask>
          <use fill="#FFF" xlinkHref="#MPUSHFilled_svg__c" />
          <g fill="#091E42" mask="url(#MPUSHFilled_svg__d)">
            <path d="M0 0h24v24H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgMpushFilled;
