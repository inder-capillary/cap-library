/**
*
* CapLabel
*
*/

import styled from 'styled-components';
import PropTypes from 'prop-types';

const labels = {
  label1: {
    'color': '#5e6c84',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '18px',
  },
  label2: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '18px',
  },
  label3: {
    'color': '#97a0af',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '18px',
  },
  label4: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': '500',
    'line-height': '18px',
  },
  label5: {
    'color': '#091e42',
    'font-size': '10px',
    'font-weight': 'normal',
    'line-height': '18px',
  },
};

const CapLabel = styled.div`
    font-size: ${[(props) => labels[props.type]["font-size"]]};
    font-weight: ${[(props) => labels[props.type]["font-weight"]]};
    color: ${[(props) => labels[props.type].color]};
    line-height: ${[(props) => labels[props.type]["line-height"] || 'initial']};
    `;

const CapLabelInline = styled.span`
font-size: ${[(props) => labels[props.type]["font-size"]]};
font-weight: ${[(props) => labels[props.type]["font-weight"]]};
color: ${[(props) => labels[props.type].color]};
line-height: ${[(props) => labels[props.type]["line-height"] || 'initial']};
`;

CapLabel.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};

CapLabel.CapLabelInline = CapLabelInline;

CapLabel.defaultProps = {
  type: 'label1',
};
export default CapLabel;
