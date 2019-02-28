/**
*
* CapSwitch
*
*/

import React from "react";
import PropTypes from 'prop-types';
import { Switch } from "antd";
import "./_capSwitch.scss";
const classNames = require('classnames');
// import styled from 'styled-components';


class CapSwitch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {className, children, ...rest} = this.props;
    return (
      <Switch {...rest} className={classNames("cap-switch-v2", className)}>
        {React.Children.toArray(children)}
      </Switch>
    );
  }
}

CapSwitch.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CapSwitch;
