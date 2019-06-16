/**
*
* CapAlert
*
*/

import React from 'react';
import { Alert } from 'antd';
import classNames from 'classnames';
import './_capAlert.scss';
const clsPrefix = 'cap-alert-v2';

const CapAlert = (props) => {
  const { className, ...rest } = props;
  return (
    <Alert className={classNames(clsPrefix, className)} {...rest} />
  );
};

CapAlert.propTypes = {

};

export default CapAlert;
