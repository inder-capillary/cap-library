/**
*
* CapSwitch
*
*/

import React from "react";
import PropTypes from 'prop-types';
import { Switch } from "antd";
import "./_capSwitch.scss";
// import styled from 'styled-components';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
const classNames = require('classnames');


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

const CapSwitchFinal = ComponentWithLabelHOC(CapSwitch);
export default CapSwitchFinal;
