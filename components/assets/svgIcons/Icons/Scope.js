import * as React from "react";

function SvgScope(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          d="M8 0a.8.8 0 01.8.8v.85a6.402 6.402 0 015.588 5.95h.812a.8.8 0 110 1.6h-.912A6.405 6.405 0 018.8 14.35l-.001.85c-.085.673-.618.8-.8.8a.8.8 0 01-.8-.8v-.85A6.405 6.405 0 011.711 9.2H.8c-.673-.085-.8-.618-.8-.8a.8.8 0 01.8-.8h.812A6.402 6.402 0 017.2 1.65L7.2.8A.8.8 0 018 0zm.8 3.266V4.8c-.085.673-.618.8-.8.8a.8.8 0 01-.8-.8V3.266a4.802 4.802 0 00-3.984 4.335L4.8 7.6a.8.8 0 110 1.6H3.351A4.806 4.806 0 007.2 12.734V11.2a.8.8 0 111.6 0v1.534A4.806 4.806 0 0012.65 9.2H11.2c-.673-.085-.8-.618-.8-.8a.8.8 0 01.8-.8h1.584A4.802 4.802 0 008.8 3.267z"
          id="scope_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="scope_svg__b" fill="#fff">
          <use xlinkHref="#scope_svg__a" />
        </mask>
        <use fill="#979797" fillRule="nonzero" xlinkHref="#scope_svg__a" />
        <g mask="url(#scope_svg__b)" fill="currentColor">
          <path d="M-1.6-1.6h19v19h-19z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgScope;
