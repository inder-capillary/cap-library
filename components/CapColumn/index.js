/**
* CapColumn
*/
import React from "react";
import PropTypes from 'prop-types';
import { Col } from "antd";
import "./_capColumn.scss";
const classNames = require('classnames');

export default class CapColumn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Col {...rest} className={classNames("cap-column-v2", className)}>
        {React.Children.toArray(children)}
      </Col>
    );
  }
}

CapColumn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
