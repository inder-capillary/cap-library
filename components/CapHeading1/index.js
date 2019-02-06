/**
*
* CapHeading1
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading1.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h2 {...this.props} className={classNames("cap-heading1", className)}>
        {children}
      </h2>
    );
  }
}

CapHeading1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading1;
