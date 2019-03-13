import React from "react";

const SvgLab = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="lab_svg__a"
        d="M5.044 18.995c.059-.095.099-.169.147-.237 1.8-2.521 3.604-5.04 5.4-7.565.11-.155.219-.219.412-.216.687.012 1.374-.001 2.062.011.096.001.229.056.284.132 1.867 2.602 3.727 5.209 5.588 7.817.005.007.006.016.022.058H5.044zm5.963-10.021h1.98V4.992h-1.98v3.982zm9.49 8.679c.513.712.687 1.452.272 2.255-.38.734-1.015 1.079-1.831 1.088-.786.008-1.572.002-2.357.002l-11.434-.001c-1.043 0-1.772-.518-2.06-1.462-.18-.596-.077-1.157.276-1.657.906-1.284 1.824-2.559 2.739-3.836.92-1.285 1.842-2.568 2.757-3.856a.667.667 0 0 0 .137-.358c.009-1.555.006-3.109.006-4.664 0-.051-.008-.104-.015-.191H8.01V3h7.986v1.963h-.978c-.007.113-.016.198-.016.283-.001 1.501-.005 3.001.006 4.502a.857.857 0 0 0 .153.46 1572.12 1572.12 0 0 0 5.335 7.445zm-9.993-2.657c-.801-.002-1.488.678-1.5 1.478a1.524 1.524 0 0 0 1.483 1.52A1.523 1.523 0 0 0 12 16.503a1.521 1.521 0 0 0-1.496-1.508zm2.505-1.993a.993.993 0 0 0-1.006.996c.003.53.462.99.99.994a.993.993 0 0 0 .998-1.005.966.966 0 0 0-.982-.985z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="lab_svg__b" fill="#fff">
        <use xlinkHref="#lab_svg__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#lab_svg__a" />
      <g fill="#091E42" mask="url(#lab_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgLab;
