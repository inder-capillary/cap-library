/**
*
* CapHeading5
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading5.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading5 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h6 {...this.props} className={classNames("cap-heading5", className)}>
        {children}
      </h6>
    );
  }
}

CapHeading5.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading5;
