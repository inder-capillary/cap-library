/**
*
* CapProgress
*
*/

import React from 'react';
import './_capProgress.scss';
// import styled from 'styled-components';
import { Progress } from "antd";
import PropTypes from 'prop-types';
const classNames = require('classnames');

class CapProgress extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, ...rest} = this.props;
    return (
      <Progress {...rest} className={classNames("cap-progress-v2", className)} />
    );
  }
}

CapProgress.propTypes = {
  className: PropTypes.string,

};

export default CapProgress;
