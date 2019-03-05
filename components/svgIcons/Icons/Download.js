import React from "react";

const SvgDownload = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M12.155 16.282l-7.183 7.183c-.423.423-1.083.45-1.473.059-.39-.39-.365-1.05.058-1.473l7.183-7.183H7.155a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586zm-.222-8.365c-.362-.363-.34-.973.051-1.364.39-.39 1.001-.413 1.363-.05l7.173 7.172c.363.363.34.973-.05 1.363-.391.391-1.002.414-1.364.051l-7.173-7.172z"
        id="download_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="download_svg__b" fill="#fff">
        <use xlinkHref="#download_svg__a" />
      </mask>
      <use
        fill="#FFF"
        fillRule="nonzero"
        transform="rotate(135 12 15.023)"
        xlinkHref="#download_svg__a"
      />
      <g mask="url(#download_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDownload;
