/**
*
* CapCard
*
*/

import React from 'react';
import './_capCard.scss';
import PropTypes from 'prop-types';
import { Card} from "antd";
// import styled from 'styled-components';
const classNames = require('classnames');

class CapCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, className, ...rest} = this.props;
    return (
      <Card {...rest} className={classNames("cap-card", className)}>
        {React.Children.toArray(children)}
      </Card>
    );
  }
}

CapCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapCard;
