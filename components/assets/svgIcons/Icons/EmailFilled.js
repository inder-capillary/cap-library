import React from "react";

function SvgEmailFilled(props) {
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
          id="EMAILFilled_svg__a"
          d="M42.397 42.396c-2.314 2.432-5.407 3.912-9.279 4.44-2.717.556-5.831.788-9.343.694-3.512.094-6.626-.138-9.343-.695-3.872-.527-6.965-2.007-9.278-4.439-2.432-2.314-3.911-5.406-4.44-9.278-.556-2.717-.787-5.831-.694-9.343-.093-3.512.138-6.626.695-9.343.528-3.872 2.007-6.965 4.439-9.278 2.313-2.432 5.406-3.912 9.278-4.44 2.717-.556 5.831-.787 9.343-.694 3.512-.093 6.626.138 9.343.695 3.872.527 6.965 2.007 9.279 4.439 2.43 2.313 3.91 5.406 4.438 9.278.557 2.717.789 5.831.695 9.343.094 3.512-.138 6.626-.695 9.343-.527 3.872-2.007 6.964-4.438 9.278z"
        />
        <path
          id="EMAILFilled_svg__c"
          d="M3 2a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H3zm0-2h14a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9.907 4h2.828l-6 6-6-6h2.828l3.172 3.172L12.907 4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="EMAILFilled_svg__b" fill="#fff">
          <use xlinkHref="#EMAILFilled_svg__a" />
        </mask>
        <use fill="#BABABA" xlinkHref="#EMAILFilled_svg__a" />
        <g fill="#EBECF0" mask="url(#EMAILFilled_svg__b)">
          <path d="M0 0h48v48H0z" />
        </g>
        <g transform="translate(14 16)">
          <mask id="EMAILFilled_svg__d" fill="#fff">
            <use xlinkHref="#EMAILFilled_svg__c" />
          </mask>
          <use fill="#FFF" xlinkHref="#EMAILFilled_svg__c" />
          <g fill="#091E42" mask="url(#EMAILFilled_svg__d)">
            <path d="M-2-4h24v24H-2z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgEmailFilled;
