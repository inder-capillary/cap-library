/**
*
* CapHeading4
*
*/

import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading4.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading4 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h5 {...this.props} className={classNames("cap-heading4", className)}>
        {children}
      </h5>
    );
  }
}

CapHeading4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading4;
