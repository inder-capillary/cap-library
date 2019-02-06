/**
*
* CapHeading2
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading2.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h3 {...this.props} className={classNames("cap-heading2", className)}>
        {children}
      </h3>
    );
  }
}

CapHeading2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading2;
