import * as React from "react";

function SvgWaitEvent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <defs>
        <path
          id="wait-event_svg__a"
          d="M20 3.86L15.4 0l-1.29 1.53 4.6 3.86L20 3.86zM5.88 1.53L4.6 0 0 3.85l1.29 1.53 4.59-3.85zm4.62 4.61H9v6l4.003 2.403.84-1.096L10.5 11.39V6.14zm-.5-4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 000-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm.965 1.874v-2.012c.007.071.146.071.415 0a6.83 6.83 0 001.62-.53c1.278-.608 1.974-1.385 2.394-1.863.276-.304.642-.884.941-1.476a6.5 6.5 0 00.552-1.777c.093-.431.113-.977.114-1.596L17 10.712l1.977-.024c.03.533.03.907 0 1.121-.066.505-.066.7-.141 1.083-.07.392-.235.936-.458 1.544a7.559 7.559 0 01-.677 1.366c-.228.37-.474.738-.788 1.094-.304.38-.554.633-.826.875-.766.681-1.471 1.15-2.36 1.56a9.342 9.342 0 01-2.205.683c-.77.126-.557 0-.557 0z"
        />
        <path
          id="wait-event_svg__c"
          d="M1.89 8.638l.496-2.891-1.651-.012a.736.736 0 01-.66-.411.728.728 0 01.085-.778L3.508.28A.73.73 0 014.8.873l-.47 2.53 1.437.01c.271 0 .52.156.646.393.13.244.11.55-.047.76L3.214 9.171a.727.727 0 01-.881.275.72.72 0 01-.442-.809zm2.966-4.187l-1.2-.01-.295-.358.328-1.76-2 2.547 1.332.01.296.353-.335 1.956 1.874-2.738z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 1.25)">
          <mask id="wait-event_svg__b" fill="#fff">
            <use xlinkHref="#wait-event_svg__a" />
          </mask>
          <use fill="#FFF" fillRule="nonzero" xlinkHref="#wait-event_svg__a" />
          <g fill="#FFF" mask="url(#wait-event_svg__b)">
            <path d="M-2-2h24v24H-2z" />
          </g>
        </g>
        <g transform="translate(14.5 13.25)">
          <mask id="wait-event_svg__d" fill="#fff">
            <use xlinkHref="#wait-event_svg__c" />
          </mask>
          <use
            fill="#7A869A"
            fillRule="nonzero"
            xlinkHref="#wait-event_svg__c"
          />
          <g fill="#FFF" mask="url(#wait-event_svg__d)">
            <path d="M-1 0H9v10H-1z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgWaitEvent;
