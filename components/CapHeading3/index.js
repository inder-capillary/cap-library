/**
*
* CapHeading3
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading3.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading3 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h4 {...this.props} className={classNames("cap-heading3", className)}>
        {children}
      </h4>
    );
  }
}

CapHeading3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading3;
