import React from "react";

const SvgSiren = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="siren_svg__a"
        d="M16 17h.079a1 1 0 110 2l-8.119.079a1 1 0 010-2H8V14.09C8 11.83 9.79 10 12 10s4 1.832 4 4.09V17zm-2 0v-2.857C14 12.959 13.105 12 12 12s-2 .96-2 2.143V17h4zM12 3a1 1 0 011 1v2a1 1 0 01-2 0V4a1 1 0 011-1zM1 14a1 1 0 011-1h2a1 1 0 010 2H2a1 1 0 01-1-1zm3.232-7.268a1 1 0 011.414 0l1.415 1.414a1 1 0 01-1.415 1.415L4.232 8.146a1 1 0 010-1.414zm15.182-.146a1 1 0 010 1.414L18 9.414A1 1 0 0116.586 8L18 6.586a1 1 0 011.414 0zM19 14a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="siren_svg__b" fill="#fff">
        <use xlinkHref="#siren_svg__a" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#siren_svg__a" />
      <g fill="#091E42" mask="url(#siren_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgSiren;
