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
    'line-height': 'normal',
  },
  label2: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label3: {
    'color': '#97a0af',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label4: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label5: {
    'color': '#091e42',
    'font-size': '10px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label6: {
    'color': '#b3bac5',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label7: {
    'color': '#5e6c84',
    'font-size': '14px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label8: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label9: {
    'color': '#091e42',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '16px',
  },
  label10: {
    'color': '#ffffff',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '16px',
  },
  label11: {
    'color': '#5e6c84',
    'font-size': '10px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label12: {
    'color': '#ffffff',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label13: {
    'color': '#97a0af',
    'font-size': '10px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label14: {
    'color': '#676e7c',
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label15: {
    'color': '#091e42',
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label16: {
    'color': '#091e42',
    'font-size': '14px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label17: {
    'color': '#091e42',
    'font-size': '16px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label18: {
    'color': '#5e6c84',
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label19: {
    'color': 'rgba(0, 0, 0, 0.87)',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': '16px',
  },
  label20: {
    'color': '#2466ea',
    'font-size': '14px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  label21: {
    'color': '#2466ea',
    'font-size': '12px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label22: {
    'color': '#5f6d85',
    'font-size': '24px',
    'font-weight': 'normal',
    'line-height': '28px',
  },
  label23: {
    'color': '#ffffff',
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': 'normal',
  },
  label24: {
    'font-size': '14px',
    'font-weight': '400',
    'color': '#5e6c84',
    'line-height': '20px',
  },
  label25: {
    'font-size': '14px',
    'font-weight': '500',
    'color': '#5e6c84',
    'line-height': '20px',
  },
  label26: {
    'font-size': '10px',
    'font-weight': '400',
    'color': '#091E42',
    'line-height': '12px',
  },
  label27: {
    'font-size': '12px',
    'font-weight': '500',
    'color': '#2466EA',
    'line-height': '16px',
  },
  label28: {
    'font-size': '12px',
    'font-weight': '500',
    'color': '#FFF',
    'line-height': '16px',
  },
  label29: {
    'font-size': '10px',
    'font-weight': '400',
    'color': '#FFF',
    'line-height': '12px',
  },
  label30: {
    'font-size': '10px',
    'font-weight': '400',
    'color': '#FFF',
    'line-height': '12px',
  },
  label31: {
    'color': '#091E42',
    'font-size': '12px',
    'font-weight': '400',
    'line-height': '16px',
  },
};

const CapLabel = styled.div`
    font-size: ${[(props) => labels[props.type]["font-size"]]};
    font-weight: ${[(props) => props.fontWeight || labels[props.type]["font-weight"]]};
    color: ${[(props) => labels[props.type].color]};
    line-height: ${[(props) => props.lineHeight || labels[props.type]["line-height"] || 'initial']};
    `;

const CapLabelInline = styled.span`
font-size: ${[(props) => labels[props.type]["font-size"]]};
font-weight: ${[(props) => props.fontWeight || labels[props.type]["font-weight"]]};
color: ${[(props) => labels[props.type].color]};
line-height: ${[(props) => props.lineHeight || labels[props.type]["line-height"] || 'initial']};
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
