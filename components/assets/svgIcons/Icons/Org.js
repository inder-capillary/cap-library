import * as React from "react";

function SvgOrg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path
          fill="#091E42"
          fillRule="nonzero"
          d="M13.455 9.636h-1.091V8a.546.546 0 00-.546-.545H8.545V6.364h1.091a.546.546 0 00.546-.546V2.545c0-.3-.244-.545-.546-.545H6.364a.545.545 0 00-.546.545v3.273c0 .301.244.546.546.546h1.09v1.09H4.183A.547.547 0 003.637 8v1.636h-1.09a.546.546 0 00-.546.546v3.273c0 .3.244.545.545.545h3.273a.546.546 0 00.546-.545v-3.273a.547.547 0 00-.546-.546h-1.09v-1.09h6.545v1.09h-1.091a.547.547 0 00-.546.546v3.273c0 .3.245.545.546.545h3.273c.3 0 .545-.244.545-.545v-3.273a.546.546 0 00-.545-.546zm-8.182 1.091v2.182H3.09v-2.182h2.182zm1.636-5.454V3.09h2.182v2.182H6.909zm6 7.636h-2.182v-2.182h2.182v2.182z"
        />
      </g>
    </svg>
  );
}

export default SvgOrg;
