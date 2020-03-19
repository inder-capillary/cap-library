import * as React from "react";

function SvgPremiumColored(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#FF8C00" d="M16 3l10 17H6z" />
        <path fill="#EEA501" d="M28 7L10 20h16z" />
        <path fill="#FEC400" d="M4 7l18 13H6z" />
        <path fill="#FF8C00" d="M6 22h20v4H6z" />
      </g>
    </svg>
  );
}

export default SvgPremiumColored;
