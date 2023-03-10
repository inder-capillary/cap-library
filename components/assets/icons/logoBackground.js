import React from 'react';
import PropTypes from 'prop-types';
import { CAP_G07, CAP_SPACE_32 } from '../../styled/variables';

const LogoBackground = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 32 32">
    <defs>
      <path id="a" d="M1515.532 844.532c-1.557 1.636-3.638 2.632-6.244 2.987-1.829.375-3.925.53-6.288.467-2.363.064-4.46-.092-6.288-.467-2.605-.355-4.687-1.35-6.244-2.987-1.636-1.557-2.632-3.639-2.987-6.244-.374-1.829-.53-3.925-.467-6.288-.063-2.363.093-4.46.467-6.288.355-2.605 1.35-4.687 2.987-6.244 1.557-1.636 3.639-2.632 6.244-2.987 1.829-.375 3.925-.53 6.288-.467 2.363-.063 4.46.092 6.288.467 2.606.355 4.687 1.35 6.244 2.987 1.636 1.557 2.632 3.639 2.987 6.244.375 1.829.53 3.925.467 6.288.063 2.363-.092 4.46-.467 6.288-.355 2.605-1.35 4.687-2.987 6.244z" />
    </defs>
    <use fill={props.fill} fillRule="evenodd" transform="translate(-1487 -816)" xlinkHref="#a" />
  </svg>
);

LogoBackground.defaultProps = {
  width: CAP_SPACE_32,
  height: CAP_SPACE_32,
  fill: CAP_G07,
};

LogoBackground.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
};

export default LogoBackground;
