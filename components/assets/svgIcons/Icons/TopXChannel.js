import * as React from "react";

function SvgTopXChannel(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M12.84 9.78l-1.42-1.42c.69-.68 1.58-1.34 2.94-1.79l.49 1.94c-.89.32-1.5.77-2.01 1.27zM18 7v-.98c-.81.02-1.54.08-2.17.19l.49 1.94c.48-.07 1.05-.12 1.68-.13V7zm0 10v-1.01c-3.68-.1-4.75-1.28-5.88-2.54-.44-.5-.92-1.01-1.55-1.45.49-.34.88-.73 1.24-1.13L10.4 9.46C9.55 10.39 8.86 11 7 11H2v2h5c2.02 0 2.66.71 3.63 1.79 1.24 1.38 2.78 3.08 7.37 3.2V17z"
        />
        <circle cx={20} cy={17} r={2} stroke="#FFF" strokeWidth={2} />
        <circle cx={20} cy={7} r={2} stroke="#FFF" strokeWidth={2} />
      </g>
    </svg>
  );
}

export default SvgTopXChannel;
