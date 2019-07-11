import React from "react";

const SvgBox = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    fill="currentColor"
    {...props}
  >
    <path
      fill="#091E42"
      fillRule="evenodd"
      d="M17.49 5.52a.19.19 0 0 1 0-.08.17.17 0 0 1 0-.07v-.09l-.06-.15a.48.48 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49L9.54.15A.85.85 0 0 0 9.25 0h-.08a.82.82 0 0 0-.27 0h-.1a1.13 1.13 0 0 0-.33.13L1 4.78l-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.69.69 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06L17 15.21a1 1 0 0 0 .47-.85V5.63s.02-.07.02-.11zM9 2.17l1.78 1.1-5.59 3.46-1.79-1.1L9 2.17zm-1 15l-5.5-3.36V7.42l5.5 3.4v6.35zm1-8.11L7.09 7.91l5.59-3.47 1.92 1.19L9 9.06zm6.5 4.72L10 17.2v-6.38l5.5-3.4v6.36z"
    />
  </svg>
);

export default SvgBox;
