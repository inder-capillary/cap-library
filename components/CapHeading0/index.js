/**
*
* CapHeading0
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import './_capHeading0.scss';
// import styled from 'styled-components';
const classNames = require('classnames');

class CapHeading0 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children} = this.props;
    return (
      <h1 {...this.props} className={classNames("cap-heading", className)}>
        {children}
      </h1>
    );
  }
}

CapHeading0.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CapHeading0;
