/**
*
* CapTooltip
*
*/

import React from 'react';
import classNames from 'classnames';
import { Tooltip } from "antd";
import './_capTooltip.scss';

const clsPrefix = 'cap-tooltip-overlay-v2';

function CapTooltip(props) {
  const { overlayClassName, ...rest } = props;
  return (
    <Tooltip overlayClassName={classNames(clsPrefix, overlayClassName)} {...rest} />
  );
}

CapTooltip.propTypes = {

};

export default CapTooltip;
