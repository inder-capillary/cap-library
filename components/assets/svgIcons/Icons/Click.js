import * as React from "react";

function SvgClick(props) {
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
          id="click_svg__a"
          d="M9.87 5.174c-.37-.758-1.248-1.061-1.97-.687-.335-.69-1.102-1.015-1.8-.762V1.568C6.1.727 5.454.023 4.66.001c-.832-.025-1.52.673-1.52 1.546v4.441l-.579-.634a1.45 1.45 0 00-2.072-.095 1.596 1.596 0 00-.08 2.214l3.324 3.713A2.422 2.422 0 005.529 12h4.01C10.896 12 12 10.844 12 9.422V6.561c0-1.142-1.15-1.894-2.13-1.387zm1.145 4.248c0 .853-.663 1.547-1.477 1.547h-4.01c-.406 0-.8-.178-1.077-.489L1.12 6.763a.535.535 0 01.027-.74.492.492 0 01.7.043l1.427 1.565c.306.335.848.108.848-.356V1.547c0-.29.23-.524.51-.516.266.008.483.249.483.537 0 5.673-.01 2.101-.01 5.165 0 .285.222.518.497.515a.504.504 0 00.497-.515V5.088a.5.5 0 01.484-.417c.271 0 .492.231.492.515v1.547c0 .285.22.515.492.515s.493-.23.493-.515v-.86c0-.284.22-.515.492-.515s.493.231.493.516v.859c0 .285.22.515.492.515s.492-.23.492-.515V6.56c0-.284.221-.515.493-.515.271 0 .492.23.492.515v2.861z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="click_svg__b" fill="#fff">
          <use xlinkHref="#click_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#click_svg__a" />
        <g fill="#091E42" mask="url(#click_svg__b)">
          <path d="M0 0h12v12H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgClick;