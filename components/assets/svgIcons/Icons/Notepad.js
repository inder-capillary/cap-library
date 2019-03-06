import React from "react";

const SvgNotepad = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M16 4h2c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2H6.001A2.003 2.003 0 0 1 4 20V6c0-1.103.898-2 2.001-2H8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm0 2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H6.001L6 20h12V6h-2zm-6-2v2h4V4h-4zM9 15h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"
      id="notepad_svg__a"
    />
  </svg>
);

export default SvgNotepad;
