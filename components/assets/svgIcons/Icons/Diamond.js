import * as React from "react";

function Diamond(props) {
  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      {...props}
    >
      <path
        d="M5.49 0c.55-.007 1.078.22 1.458.628l3.75 4.949h-.039c.44.66.455 1.527.04 2.204l-3.725 4.908a1.96 1.96 0 01-1.466.668 1.92 1.92 0 01-1.427-.628L.357 7.781l-.04-.047A2.107 2.107 0 010 6.679a2.08 2.08 0 01.318-1.102L4.048.668A1.96 1.96 0 015.49 0z"
        fill="#FEC52E"
      />
    </svg>
  );
}

export default Diamond;
