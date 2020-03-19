import * as React from "react";

function SvgErrorIndicator(props) {
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
          id="ErrorIndicator_svg__a"
          d="M42.397 42.396c-2.314 2.432-5.407 3.912-9.279 4.44-2.717.556-5.831.788-9.343.694-3.512.094-6.626-.138-9.343-.695-3.872-.527-6.965-2.007-9.278-4.439-2.432-2.314-3.911-5.406-4.44-9.278-.556-2.717-.787-5.831-.694-9.343-.093-3.512.138-6.626.695-9.343.528-3.872 2.007-6.965 4.439-9.278 2.313-2.432 5.406-3.912 9.278-4.44 2.717-.556 5.831-.787 9.343-.694 3.512-.093 6.626.138 9.343.695 3.872.527 6.965 2.007 9.279 4.439 2.43 2.313 3.91 5.406 4.438 9.278.557 2.717.789 5.831.695 9.343.094 3.512-.138 6.626-.695 9.343-.527 3.872-2.007 6.964-4.438 9.278z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g opacity={0.1}>
          <mask id="ErrorIndicator_svg__b" fill="#fff">
            <use xlinkHref="#ErrorIndicator_svg__a" />
          </mask>
          <use fill="#BABABA" xlinkHref="#ErrorIndicator_svg__a" />
          <g fill="#E83135" mask="url(#ErrorIndicator_svg__b)">
            <path d="M0 0h48v48H0z" />
          </g>
        </g>
        <g transform="translate(12 12)">
          <circle cx={12} cy={12} r={10} fill="#EA213A" />
          <path
            fill="#F4F5F7"
            d="M13.411 11.997l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414-1.414 1.414a1 1 0 01-1.415-1.414l1.415-1.414-1.415-1.414a1.002 1.002 0 010-1.415 1.002 1.002 0 011.415 0l1.414 1.415 1.414-1.415a1 1 0 011.414 1.415l-1.414 1.414z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgErrorIndicator;
