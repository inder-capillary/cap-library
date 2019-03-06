/**
*
* CapTooltipWithInfo
*
*/

import React from 'react';
import classNames from 'classnames';
import { CapTooltip } from '../index';
import './_capTooltipWithInfo.scss';
import { InfoIcon } from '../assets/icons';

const clsPrefix = 'cap-tooltip-with-info';

function CapTooltipWithInfo(props) {
  const { className, ...rest } = props;
  return (
    <CapTooltip
      className={classNames(clsPrefix, className)}
      {...rest}
    >
      <InfoIcon className="info-icon" />
    </CapTooltip>
  );
}

CapTooltipWithInfo.propTypes = {

};

export default CapTooltipWithInfo;
