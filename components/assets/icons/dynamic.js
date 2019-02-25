import React from "react";

const SvgSurveyResponseDark = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="survey-response-dark_svg__a"
        d="M8.378 21.004l1.147-6.696-3.823-.026a1.7 1.7 0 0 1-1.527-.953 1.682 1.682 0 0 1 .195-1.802l7.753-9.875c.49-.62 1.333-.83 2.049-.49.706.337 1.107 1.124.945 1.862L14.024 8.88l3.329.025c.628 0 1.204.361 1.496.91.3.563.253 1.271-.109 1.757L11.443 22.24a1.687 1.687 0 0 1-2.04.637 1.668 1.668 0 0 1-1.025-1.873zm8.4-10.103l-3.964-.03-.975-1.184 1.086-5.818-6.608 8.417 4.4.03.978 1.17-1.107 6.462 6.19-9.047z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="survey-response-dark_svg__b" fill="#fff">
        <use xlinkHref="#survey-response-dark_svg__a" />
      </mask>
      <use
        fill="#7A869A"
        fillRule="nonzero"
        xlinkHref="#survey-response-dark_svg__a"
      />
      <g fill="#091E42" mask="url(#survey-response-dark_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgSurveyResponseDark;