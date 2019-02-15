/**
*
* CapSpin
*
*/

import React from 'react';
import { Spin } from "antd";
import './_capSpin.scss';


const CapSpin = (props) => (
  <Spin {...props} />
);

CapSpin.propTypes = {

};

export default CapSpin;
