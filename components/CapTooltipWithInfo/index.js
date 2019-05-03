/**
*
* CapTooltipWithInfo
*
*/

import React from 'react';
import classNames from 'classnames';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import './_capTooltipWithInfo.scss';

const clsPrefix = 'cap-tooltip-with-info';

function CapTooltipWithInfo(props) {
  const { className, infoIconProps, ...rest } = props;
  return (
    <CapTooltip
      className={classNames(clsPrefix, className)}
      {...rest}
    >
      <CapIcon size="s" type="info" className="info-icon" {...infoIconProps} />
    </CapTooltip>
  );
}

CapTooltipWithInfo.propTypes = {

};

export default CapTooltipWithInfo;
