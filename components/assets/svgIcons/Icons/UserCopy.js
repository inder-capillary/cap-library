import * as React from "react";

function SvgUserCopy(props) {
  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          d="M3.75 5.73c-.975 0-2.917.487-2.917 1.457v.73h5.834v-.73c0-.97-1.942-1.458-2.917-1.458zM1.808 7.082c.35-.241 1.196-.52 1.942-.52s1.592.279 1.942.52H1.808zM3.75 5a1.46 1.46 0 001.458-1.458A1.46 1.46 0 003.75 2.083a1.46 1.46 0 00-1.458 1.459A1.46 1.46 0 003.75 5zm0-2.083a.624.624 0 11.002 1.248.624.624 0 01-.002-1.248zm2.933 2.837c.484.35.817.817.817 1.434v.729h1.667v-.73c0-.841-1.459-1.32-2.484-1.433zM6.25 5a1.46 1.46 0 001.458-1.458A1.46 1.46 0 006.25 2.083c-.225 0-.433.054-.625.146.263.371.417.825.417 1.313 0 .487-.154.941-.417 1.312.192.092.4.146.625.146z"
          id="user-copy_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M-2-2h24v24H-2z" />
        <path
          d="M11 3.08A7 7 0 0116.92 9h3.03C19.48 4.28 15.72.52 11 .05v3.03zM16.92 11A7 7 0 0111 16.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM9 16.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V.05C3.95.55 0 4.81 0 10c0 5.19 3.95 9.45 9 9.95v-3.03z"
          fill="#091E42"
        />
        <g transform="translate(5 5)">
          <mask id="user-copy_svg__b" fill="#fff">
            <use xlinkHref="#user-copy_svg__a" />
          </mask>
          <use fill="#000" fillRule="nonzero" xlinkHref="#user-copy_svg__a" />
          <g mask="url(#user-copy_svg__b)" fill="#091E42">
            <path d="M0 0h10v10H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgUserCopy;
