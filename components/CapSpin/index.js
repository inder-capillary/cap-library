/**
*
* CapSpin
*
*/

import React from 'react';
import { Spin } from "antd";
import './_capSpin.scss';
// import styled from 'styled-components';


class CapSpin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div>
        <Spin {...this.props}>
          {children}
        </Spin>
      </div>
    );
  }
}

CapSpin.propTypes = {

};

export default CapSpin;
