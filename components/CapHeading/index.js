/**
*
* CapHeading0
*
*/

import styled from 'styled-components';
import PropTypes from 'prop-types';

const headings = {
  h1: {
    'font-size': '24px',
    'font-weight': '500',
    'color': '#091e42',
  },
  h2: {
    'font-size': '20px',
    'font-weight': '500',
    'color': '#091e42',
  },
  h3: {
    'font-size': '16px',
    'font-weight': '500',
    'color': '#091e42',
  },
  h4: {
    'font-size': '14px',
    'font-weight': '500',
    'color': '#091e42',
  },
  h5: {
    'font-size': '14px',
    'font-weight': 'normal',
    'color': '#091e42',
  },
  h6: {
    'color': '#5e6c84',
    'font-size': '14px',
    'font-weight': 'normal',
  },
  label1: {
    'color': '#5e6c84',
    'font-size': '12px',
    'font-weight': 'normal',
  },
  label2: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': 'normal',
  },
  label3: {
    'color': '#97a0af',
    'font-size': '12px',
    'font-weight': 'normal',
  },
};

const CapHeading = styled.div`
    font-size: ${[(props) => headings[props.type]["font-size"]]};
    font-weight: ${[(props) => headings[props.type]["font-weight"]]};
    color: ${[(props) => headings[props.type].color]};
    `;

const CapHeadingSpan = styled.span`
font-size: ${[(props) => headings[props.type]["font-size"]]};
font-weight: ${[(props) => headings[props.type]["font-weight"]]};
color: ${[(props) => headings[props.type].color]};
`;

CapHeading.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};

CapHeading.CapHeadingSpan = CapHeadingSpan;

CapHeading.defaultProps = {
  type: 'h5',
};
export default CapHeading;
