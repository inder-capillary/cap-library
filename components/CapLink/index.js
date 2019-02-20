/**
*
* CapLink
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import './_capLink.scss';
import { Anchor } from 'antd';
const { Link } = Anchor;
// import styled from 'styled-components';
const classNames = require('classnames');

class CapLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Anchor className={classNames("cap-link", className)}>
        <Link {...rest}>
          { children }
        </Link>
      </Anchor>
    );
  }
}

CapLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapLink;
