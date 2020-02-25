import * as React from "react";

function SvgChannelPriority(props) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="channel-priority_svg__a"
          d="M42.397 42.396c-2.314 2.432-5.407 3.912-9.279 4.44-2.717.556-5.831.788-9.343.694-3.512.094-6.626-.138-9.343-.695-3.872-.527-6.965-2.007-9.278-4.439-2.432-2.314-3.911-5.406-4.44-9.278-.556-2.717-.787-5.831-.694-9.343-.093-3.512.138-6.626.695-9.343.528-3.872 2.007-6.965 4.439-9.278 2.313-2.432 5.406-3.912 9.278-4.44 2.717-.556 5.831-.787 9.343-.694 3.512-.093 6.626.138 9.343.695 3.872.527 6.965 2.007 9.279 4.439 2.43 2.313 3.91 5.406 4.438 9.278.557 2.717.789 5.831.695 9.343.094 3.512-.138 6.626-.695 9.343-.527 3.872-2.007 6.964-4.438 9.278z"
        />
        <path
          id="channel-priority_svg__c"
          d="M14 18H0v-8a1 1 0 011-1h5V1.059C6 .474 6.448 0 7 0h6c.552 0 1 .474 1 1.059V5h5c.552 0 1 .485 1 1.083V18h-6zm0-2h4V7h-4v9zm-2 0V2H8v14h4zm-6-5H2v5h4v-5z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 2)">
          <mask id="channel-priority_svg__d" fill="#fff">
            <use xlinkHref="#channel-priority_svg__c" />
          </mask>
          <use
            fill="currentColor"
            fillRule="nonzero"
            xlinkHref="#channel-priority_svg__c"
          />
          <g fill="currentColor" mask="url(#channel-priority_svg__d)">
            <path d="M-2-3h24v24H-2z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgChannelPriority;
