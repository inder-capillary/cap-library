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
const classPrefix = 'cap-link-v2';
class CapLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClick=(e, link) => {
    e.preventDefault();
    this.props.onClick(e, link);
  }

  render() {
    const {className, children, suffix, prefix, style, ...rest} = this.props;
    return (
      <Anchor affix={false} style={style} className={classNames(`${classPrefix}`, className)} onClick={this.handleClick}>
        <Link {...rest}>
          {prefix && <span className={classNames(`${classPrefix}-prefix`)}>{prefix}</span>}
          { children }
          {suffix && <span className={classNames(`${classPrefix}-suffix`)}>{suffix}</span>}
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
