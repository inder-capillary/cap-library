/**
*
* CapHeading0
*
*/

import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const headings = {
  h1: {
    'font-size': '24px',
    'font-weight': '500',
    'line-height': '1.17',
    'color': '#091e42',
    'height': '26px',
  },
  h2: {
    'font-size': '20px',
    'font-weight': '500',
    'line-height': '1.5',
    'color': '#091e42',
    'height': '26px',
  },
  h3: {
    'font-size': '16px',
    'font-weight': '500',
    'line-height': '1.5',
    'color': '#091e42',
    'height': '20px',
  },
  h4: {
    'font-size': '14px',
    'font-weight': '500',
    'line-height': '1.43',
    'color': '#091e42',
    'height': '16px',
  },
  h5: {
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': '1.43',
    'color': '#091e42',
    'height': '20px',
  },
  h6: {
    'height': '24px',
    'color': '#5e6c84',
    'font-size': '14px',
    'font-weight': 'normal',
    'line-height': '1.43',
  },
};

const Heading = styled.div`
    font-size: ${[(props) => headings[props.type]["font-size"]]};
    font-weight: ${[(props) => headings[props.type]["font-weight"]]};
    color: ${[(props) => headings[props.type].color]};
    height: ${[(props) => headings[props.type].height]};
    line-height: ${[(props) => headings[props.type]["line-height"]]};

    `;

class CapHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { type, data, ...rest } = this.props;
    return (
      <Heading type={type} {...rest}>{data}</Heading>
    );
  }
}

CapHeading.propTypes = {
  type: PropTypes.string,
};

CapHeading.defaultProps = {
  type: 'h5',
};
export default CapHeading;
