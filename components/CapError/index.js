/**
*
* CapLabel
*
*/

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FONT_SIZE_S, CAP_RED, CAP_ORANGE } from '../styled/variables';

const types = {
  error: {
    color: `${CAP_RED}`,
  },
  warning: {
    color: `${CAP_ORANGE}`,
  },
};
const CapError = styled.div`
  font-size: ${FONT_SIZE_S};
  font-weight: normal;
  color: ${[(props) => types[props.type].color]};
  line-height: 20px;
`;

const CapErrorInline = styled.span`
  font-size: ${FONT_SIZE_S};
  font-weight: normal;
  color: ${[(props) => types[props.type].color]};
  line-height: 20px;
`;

CapError.CapErrorInline = CapErrorInline;

CapError.propTypes = {
  type: PropTypes.string,
};

CapError.defaultProps = {
  type: 'error',
};

CapErrorInline.propTypes = {
  type: PropTypes.string,
};

CapErrorInline.defaultProps = {
  type: 'error',
};

export default CapError;
