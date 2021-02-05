import * as React from "react";

function SvgUserAudienceAttributechange(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="user-audience-attributechange_svg__a"
          d="M22 13v3.306h-3.306l1.144-1.112c-.6-.595-1.177-.754-2.088-.754-1.823 0-2.81.987-2.81 2.81s.987 2.81 2.81 2.81 2.81-.987 2.81-2.81H22A4.25 4.25 0 1117.75 13c1.176 0 2.238.477 3.003 1.247L22 13zm-10 0c.58 0 1.285.063 2.033.19a5.502 5.502 0 00-1.174 1.851A9.227 9.227 0 0012 15c-2.618 0-5.612 1.213-5.974 1.943L6 17.01V18h6.59c.134.727.41 1.404.8 2H4v-3c0-2.66 5.33-4 8-4zm0-9c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="user-audience-attributechange_svg__b" fill="#fff">
          <use xlinkHref="#user-audience-attributechange_svg__a" />
        </mask>
        <use
          fill="#3B3939"
          fillRule="nonzero"
          xlinkHref="#user-audience-attributechange_svg__a"
        />
        <g fill="#FFF" mask="url(#user-audience-attributechange_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgUserAudienceAttributechange;
