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

/*
  NOTE:

    While using a disabled button with tooltip, wrap the button with an element with className "button-disabled-tooltip-wrapper".

    <CapTooltip title="disabled button with tooltip">
      <span className="button-disabled-tooltip-wrapper">
        <CapButton disabled>Button</CapButton>
      </span>
    </CapTooltip>
*/

CapTooltip.propTypes = {

};

export default CapTooltip;
