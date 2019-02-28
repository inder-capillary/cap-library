/**
* CapRow
*/
import React from "react";
import PropTypes from 'prop-types';
import { Row } from "antd";
import "./_capRow.scss";
const classNames = require('classnames');

class CapRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Row {...rest} className={classNames("cap-row-v2", className)}>
        {React.Children.toArray(children)}
      </Row>
    );
  }
}

CapRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapRow;
