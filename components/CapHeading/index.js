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
};

const Heading = styled.div`
    font-size: ${[(props) => headings[props.type]["font-size"]]};
    font-weight: ${[(props) => headings[props.type]["font-weight"]]};
    color: ${[(props) => headings[props.type].color]};
    `;

class CapHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { type, children, ...rest } = this.props;
    return (
      <Heading type={type} {...rest}>
        {' '}
        { children }
      </Heading>
    );
  }
}

CapHeading.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};

CapHeading.defaultProps = {
  type: 'h5',
};
export default CapHeading;
