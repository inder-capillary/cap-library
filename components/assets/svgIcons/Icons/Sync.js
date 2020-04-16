import * as React from "react";

function SvgSync(props) {
  return (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="sync_svg__a"
          d="M2.406 5.528A3.493 3.493 0 005.856 8.5a3.48 3.48 0 002.733-1.322l.78.623A4.476 4.476 0 015.857 9.5a4.491 4.491 0 01-4.455-3.954L.035 5.57 2 3.535 4.034 5.5l-1.365.024h.008l-.271.004zM9.597 4.5a3.494 3.494 0 00-3.455-3A3.479 3.479 0 003.41 2.822l-.78-.623A4.476 4.476 0 016.142.5c2.31 0 4.213 1.75 4.46 4H12l-2 2-2-2h1.365-.007.24z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(0 1)">
        <mask id="sync_svg__b" fill="#fff">
          <use xlinkHref="#sync_svg__a" />
        </mask>
        <use fill="#000" xlinkHref="#sync_svg__a" />
        <g fill="#7A869A" mask="url(#sync_svg__b)">
          <path d="M0-1h12v12H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSync;
