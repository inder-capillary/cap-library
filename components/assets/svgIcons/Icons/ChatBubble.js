import React from "react";

const SvgChatBubble = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M12.6 2.5H3.4c-.77 0-1.4.63-1.4 1.4v10.6l2.8-2.8h7.8c.77 0 1.4-.63 1.4-1.4V3.9c0-.77-.63-1.4-1.4-1.4z" />
  </svg>
);

export default SvgChatBubble;
