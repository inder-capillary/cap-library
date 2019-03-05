import React from "react";

const SvgNotepadMaterial = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M4 14h7v2H4v-2zm0-4h10v2H4v-2zm0-4h10v2H4V6zm12-4h-4.18C11.4.84 10.3 0 9 0 7.7 0 6.6.84 6.18 2H2c-.14 0-.27.01-.4.04A2.008 2.008 0 0 0 .16 3.23C.06 3.46 0 3.72 0 4v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM16 18H2V4h14v14z"
        id="notepad-material_svg__a"
      />
    </defs>
    <g transform="translate(3 2)" fill="none" fillRule="evenodd">
      <mask id="notepad-material_svg__b" fill="#fff">
        <use xlinkHref="#notepad-material_svg__a" />
      </mask>
      <use
        fill="#FFF"
        fillRule="nonzero"
        xlinkHref="#notepad-material_svg__a"
      />
      <g mask="url(#notepad-material_svg__b)" fill="#091E42">
        <path d="M-3-2h24v24H-3z" />
      </g>
    </g>
  </svg>
);

export default SvgNotepadMaterial;
