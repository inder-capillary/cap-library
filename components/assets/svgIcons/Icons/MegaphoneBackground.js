import * as React from "react";

const SvgMegaphoneBackground = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M42.798 42.797c-2.336 2.455-5.458 3.949-9.366 4.481-2.743.562-5.887.796-9.432.702-3.545.094-6.69-.14-9.432-.702-3.908-.532-7.03-2.026-9.366-4.48-2.454-2.336-3.948-5.458-4.48-9.366C.16 30.689-.075 27.545.02 24c-.094-3.545.14-6.69.701-9.432.533-3.908 2.027-7.03 4.481-9.366 2.336-2.454 5.458-3.948 9.366-4.48C17.311.158 20.455-.075 24 .02c3.545-.094 6.689.14 9.432.701 3.908.533 7.03 2.027 9.366 4.481 2.454 2.336 3.948 5.458 4.48 9.366.562 2.743.796 5.887.702 9.432.094 3.545-.14 6.689-.702 9.432-.532 3.908-2.026 7.03-4.48 9.365z"
        id="megaphone-background_svg__a"
      />
      <path
        d="M4.545 10.652H2.88a1.73 1.73 0 0 1-.214-.017 1.005 1.005 0 0 1-.824-.775 4.274 4.274 0 0 1-.024-.13V7.558l.014-.07c.019-.102.027-.136.033-.153.16-.432.417-.64.874-.71.016 0 .046-.003.123-.003h1.683v4.031zm.91-5.854H4.56l-.857-.001H2.86c-.166 0-.264.004-.395.025C1.36 4.988.55 5.644.161 6.7c-.053.14-.076.242-.116.444v.002a1.508 1.508 0 0 1-.022.11L0 7.359v2.454l.015.165.012.07.034.182a2.826 2.826 0 0 0 2.357 2.213c.15.02.303.032.455.033.262.001-.044.001.839.001h.833l.001 3.025c0 .503.407.91.909.911h.001a.909.909 0 0 0 .908-.91V5.71a.91.91 0 0 0-.91-.911zM18.182 8.64a.603.603 0 0 0-.008.062.982.982 0 0 1-.476.785c-.302.2-.482.513-.48.891.002 1.53.002 1.846.002 4.602v.47h-.442l-.08-.161-.6-1.2a1.086 1.086 0 0 0-.537-.508 777.44 777.44 0 0 0-1.333-.574l-.569-.245c-.379-.162-.379-.162-.757-.326H12.9l-.648-.28-2.783-1.194c.002-2.157.002-2.493 0-4.65l2.098-.901.73-.314c1.63-.7 2.354-1.012 3.26-1.403.231-.101.428-.284.542-.513.207-.41.41-.817.68-1.357h.441v2.542c0 1.32 0 1.496-.002 2.54 0 .367.177.677.47.87.254.162.395.36.46.634.007.029.013.063.027.152l.007.047v.03zm1.804-.258-.014-.096a3.38 3.38 0 0 0-.056-.302 2.776 2.776 0 0 0-.879-1.468l.001-2.15V.912A.91.91 0 0 0 18.13 0h-1.923a.91.91 0 0 0-.86.62c-.312.627-.536 1.076-.751 1.504-.8.344-1.532.66-3.014 1.296l-.73.315c-1.225.526-1.838.79-2.555 1.095a1.035 1.035 0 0 0-.645.98c.002 2.495.002 3.165 0 5.66 0 .438.239.798.636.968l3.248 1.395.651.28.758.326.568.244 1.083.467.477.954.273.549.006.016a.909.909 0 0 0 .855.604h1.923a.91.91 0 0 0 .91-.912v-1.38c0-2.53 0-2.86-.002-4.229a2.77 2.77 0 0 0 .938-1.804L20 8.849v-.313l-.014-.154z"
        id="megaphone-background_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="megaphone-background_svg__b" fill="#fff">
        <use xlinkHref="#megaphone-background_svg__a" />
      </mask>
      <use fill="#F4F5F7" xlinkHref="#megaphone-background_svg__a" />
      <g mask="url(#megaphone-background_svg__b)">
        <g transform="translate(14 15)">
          <mask id="megaphone-background_svg__d" fill="#fff">
            <use xlinkHref="#megaphone-background_svg__c" />
          </mask>
          <use fill="#979797" xlinkHref="#megaphone-background_svg__c" />
          <g mask="url(#megaphone-background_svg__d)" fill="#091E42">
            <path d="M-.91-2.273h21.82v21.818H-.91z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgMegaphoneBackground;
