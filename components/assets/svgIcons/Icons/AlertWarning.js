import * as React from "react";

const SvgAlertWarning = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M26.17 9.995 36.71 28.2a5.455 5.455 0 0 1-4.721 8.187H10.91A5.455 5.455 0 0 1 6.19 28.2L16.728 9.995a5.455 5.455 0 0 1 9.44 0zm-5.632 1.16a1.812 1.812 0 0 0-.662.662L9.336 30.022a1.818 1.818 0 0 0 1.574 2.729h21.079a1.818 1.818 0 0 0 1.573-2.73l-10.54-18.204a1.818 1.818 0 0 0-2.484-.662zm2.303 14.3c.69 0 1.25.56 1.25 1.25v2.045c0 .69-.56 1.25-1.25 1.25h-2.046c-.69 0-1.25-.56-1.25-1.25v-2.045c0-.69.56-1.25 1.25-1.25h2.046zm-.205-9.091a1 1 0 0 1 1 1v5.272a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1v-5.272a1 1 0 0 1 1-1h1.636z"
        id="alert-warning_svg__a"
      />
    </defs>
    <g transform="translate(.182 .182)" fill="none" fillRule="evenodd">
      <mask id="alert-warning_svg__b" fill="#fff">
        <use xlinkHref="#alert-warning_svg__a" />
      </mask>
      <use
        fill="#979797"
        fillRule="nonzero"
        xlinkHref="#alert-warning_svg__a"
      />
      <g mask="url(#alert-warning_svg__b)" fill="#FA7D02">
        <path d="M0 0h43.636v43.636H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAlertWarning;
