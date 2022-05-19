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
  const { overlayClassName, children, ...rest } = props;
  return (
    <Popover
      overlayClassName={classNames(`${clsPrefix}`, overlayClassName)}
      {...rest}
    >
      {children}
    </Popover>
  );
}

CapPopover.propTypes = {

};

export default CapPopover;
