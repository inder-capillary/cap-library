/**
*
* CapDivider
*
*/

import React from 'react';
import { Divider } from 'antd';
import classNames from 'classnames';
import './_capDivider.scss';

const clsPrefix = "cap-divider-v2";

function CapDivider(props) {
  const { className, ...rest } = props;
  return (
    <Divider className={classNames(clsPrefix, className)} {...rest} />
  );
}

CapDivider.propTypes = {

};

export default CapDivider;
