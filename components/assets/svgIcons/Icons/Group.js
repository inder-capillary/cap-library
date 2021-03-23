import * as React from "react";

function SvgGroup(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 22 19"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="Group_svg__a"
          d="M21 6.98h-4.79L11.83.42A.993.993 0 0011 0c-.32 0-.64.14-.83.43L5.79 6.98H1c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27.03-.27c0-.55-.45-1-1-1zm-10-4.2l2.8 4.2H8.2l2.8-4.2zm6.5 14.2l-12.99.01-2.2-8.01H19.7l-2.2 8zm-6.5-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="Group_svg__b" fill="#fff">
          <use xlinkHref="#Group_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#Group_svg__a" />
        <g fill="#091E42" mask="url(#Group_svg__b)">
          <path d="M-1-2h24v24H-1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgGroup;
