import React from "react";

const SvgView = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
      <path
        id="eye_svg__a"
        d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 12 17.5 9.77 9.77 0 0 1 3.18 12 9.77 9.77 0 0 1 12 6.5zm0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
      />
  </svg>
);

export default SvgView;
