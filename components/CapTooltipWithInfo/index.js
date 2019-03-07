/**
*
* CapTooltipWithInfo
*
*/

import React from 'react';
import classNames from 'classnames';
import { CapTooltip, CapIcon } from '../index';
import './_capTooltipWithInfo.scss';

const clsPrefix = 'cap-tooltip-with-info';

function CapTooltipWithInfo(props) {
  const { className, ...rest } = props;
  return (
    <CapTooltip
      className={classNames(clsPrefix, className)}
      {...rest}
    >
      <CapIcon size="s" type="info" className="info-icon" />
    </CapTooltip>
  );
}

CapTooltipWithInfo.propTypes = {

};

export default CapTooltipWithInfo;
