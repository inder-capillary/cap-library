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
  handleClick=(e, link) => {
    e.preventDefault();
    this.props.onClick(e, link);
  }

  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Anchor affix={false} className={classNames("cap-link-v2", className)} onClick={this.handleClick}>
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
  onClick: PropTypes.func,
};

export default CapLink;
