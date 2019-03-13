import React from "react";

const SvgChart = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      id="chart_svg__a"
      d="M13 8v1a6 6 0 1 1-6-6h1v5h5zM3 9a4 4 0 0 0 7.874 1H6V5.126C4.275 5.57 3 7.136 3 9zm13-3.167V7H9V0h1.167A5.833 5.833 0 0 1 16 5.833zm-4.667-3.3v2.134h2.135a3.51 3.51 0 0 0-2.135-2.135z"
    />
  </svg>
);

export default SvgChart;
