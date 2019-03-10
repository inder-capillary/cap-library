import React from "react";

const SvgLoveFilled = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M14.134 7.604a2.853 2.853 0 0 0-2.137.963s-.075-.086-.117-.128a2.857 2.857 0 1 0-3.916 4.155l3.53 3.53a.713.713 0 0 0 1.01 0l3.53-3.53c.043-.036.086-.075.13-.118a2.853 2.853 0 0 0-2.03-4.872z"
        id="love-filled_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle
        stroke="#FFF"
        strokeWidth={2}
        fill="#42B040"
        cx={12}
        cy={12}
        r={11}
      />
      <use fill="#FFF" xlinkHref="#love-filled_svg__a" />
    </g>
  </svg>
);

export default SvgLoveFilled;
