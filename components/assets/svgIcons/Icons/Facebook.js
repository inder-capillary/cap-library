import * as React from "react";

function SvgFacebook(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="facebook_svg__a"
          d="M10.448 1H1.552A.552.552 0 001 1.552v8.896c0 .305.247.552.552.552h4.79V7.128H5.038v-1.51h1.304V4.505c0-1.291.788-1.995 1.94-1.995.553 0 1.027.042 1.165.06v1.35h-.799c-.626 0-.748.298-.748.735v.964h1.495L9.2 7.128H7.9V11h2.549a.552.552 0 00.551-.552V1.552A.552.552 0 0010.448 1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="facebook_svg__b" fill="#fff">
          <use xlinkHref="#facebook_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#facebook_svg__a" />
        <g fill="#B3BAC5" mask="url(#facebook_svg__b)">
          <path d="M0 0h12v12H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgFacebook;
