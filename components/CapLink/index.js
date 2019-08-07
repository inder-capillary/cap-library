/**
*
* CapLink
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import './_capLink.scss';
import { Anchor } from 'antd';
import styled from 'styled-components';
import { FONT_WEIGHT_MEDIUM, FONT_WEIGHT_REGULAR } from '../styled/variables';
const { Link } = Anchor;
const classNames = require('classnames');
const classPrefix = 'cap-link-v2';

const AntAnchor = styled(Anchor)`
  font-weight: ${(props) => props.fontWeight === 'm' ? FONT_WEIGHT_MEDIUM : FONT_WEIGHT_REGULAR};
`;
class CapLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClick=(e, link) => {
    e.preventDefault();
    this.props.onClick(e, link);
  }

  render() {
    const {className, children, suffix, prefix, style, fontWeight, onClick, ...rest} = this.props;
    return (
      <AntAnchor
        affix={false}
        style={style}
        className={classNames(`${classPrefix}`, className)}
        onClick={onClick ? this.handleClick : undefined}
        fontWeight={fontWeight}>
        <Link {...rest}>
          {prefix && <span className={classNames(`${classPrefix}-prefix`)}>{prefix}</span>}
          { children }
          {suffix && <span className={classNames(`${classPrefix}-suffix`)}>{suffix}</span>}
        </Link>
      </AntAnchor>
    );
  }
}

CapLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CapLink;
