import * as React from "react";

const CheckFilledPlus = ({ circleFill, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Loyalty"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Selected/-2-line/-optional-non-selected-grey-plus"
        transform="translate(-13.000000, -29.000000)"
      >
        <g id="Group" transform="translate(13.000000, 29.000000)">
          <rect id="Bounding-box" x="0" y="0" width="24" height="24"></rect>
          <circle
            id="Oval"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill={circleFill || "#B3BAC5"}
            cx="12"
            cy="12"
            r="11"
          >
          </circle>
          <path
            d="M12,7 C12.5522847,7 13,7.44771525 13,8 L13,11 L16,11 C16.5522847,11 17,11.4477153 17,12 C17,12.5522847 16.5522847,13 16,13 L12.999,13 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L10.999,13 L8,13 C7.44771525,13 7,12.5522847 7,12 C7,11.4477153 7.44771525,11 8,11 L11,11 L11,8 C11,7.44771525 11.4477153,7 12,7 Z"
            id="Combined-Shape"
            fill="#FFFFFF"
          >
          </path>
        </g>
      </g>
    </g>
  </svg>
);

export default CheckFilledPlus;
