/**
*
* CapPopover
*
*/

import React from 'react';
import classNames from 'classnames';
import { Popover } from 'antd';
import './_capPopover.scss';
const clsPrefix = 'cap-popover-v2';

function CapPopover(props) {
  const { overlayClassName, ...rest } = props;
  return (
    <Popover
      overlayClassName={classNames(`${clsPrefix}`, overlayClassName)}
      {...rest}
    />
  );
}

CapPopover.propTypes = {

};

export default CapPopover;
