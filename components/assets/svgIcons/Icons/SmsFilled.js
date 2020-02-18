import React from "react";

function SvgSmsFilled(props) {
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
          id="SMSFilled_svg__a"
          d="M42.397 42.396c-2.314 2.432-5.407 3.912-9.279 4.44-2.717.556-5.831.788-9.343.694-3.512.094-6.626-.138-9.343-.695-3.872-.527-6.965-2.007-9.278-4.439-2.432-2.314-3.911-5.406-4.44-9.278-.556-2.717-.787-5.831-.694-9.343-.093-3.512.138-6.626.695-9.343.528-3.872 2.007-6.965 4.439-9.278 2.313-2.432 5.406-3.912 9.278-4.44 2.717-.556 5.831-.787 9.343-.694 3.512-.093 6.626.138 9.343.695 3.872.527 6.965 2.007 9.279 4.439 2.43 2.313 3.91 5.406 4.438 9.278.557 2.717.789 5.831.695 9.343.094 3.512-.138 6.626-.695 9.343-.527 3.872-2.007 6.964-4.438 9.278z"
        />
        <path
          id="SMSFilled_svg__c"
          d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="SMSFilled_svg__b" fill="#fff">
          <use xlinkHref="#SMSFilled_svg__a" />
        </mask>
        <use fill="#BABABA" xlinkHref="#SMSFilled_svg__a" />
        <g fill="#EBECF0" mask="url(#SMSFilled_svg__b)">
          <path d="M0 0h48v48H0z" />
        </g>
        <g transform="translate(12 12)">
          <mask id="SMSFilled_svg__d" fill="#fff">
            <use xlinkHref="#SMSFilled_svg__c" />
          </mask>
          <use fill="#FFF" fillRule="nonzero" xlinkHref="#SMSFilled_svg__c" />
          <g fill="#091E42" mask="url(#SMSFilled_svg__d)">
            <path d="M0 0h24v24H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgSmsFilled;
