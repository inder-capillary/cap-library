const SvgBack = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M20 12a1 1 0 0 1-1 1H8l4.79 4.79a1.004 1.004 0 1 1-1.42 1.42l-6.503-6.503a1 1 0 0 1 0-1.414L11.37 4.79a1.004 1.004 0 1 1 1.42 1.42L8 11h11a1 1 0 0 1 1 1z"
        id="back_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="back_svg__b" fill="#fff">
        <use xlinkHref="#back_svg__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#back_svg__a" />
      <g mask="url(#back_svg__b)" fill="#091E42">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgBack;