/**
 *
 * CapDropdown
 *
 */

import React from "react";
import { Dropdown } from "antd";
import classNames from "classnames";
import "./_capDropdown.scss";

const { Button } = Dropdown;

const clsPrefix = "cap-dropdown-v2";

function CapDropdown(props) {
  const { className, overlayClassName, ...rest } = props;
  return (
    <Dropdown
      className={classNames(clsPrefix, className)}
      overlayClassName={classNames(`${clsPrefix}-overlay`, overlayClassName)}
      {...rest}
    />
  );
}

CapDropdown.propTypes = {};

CapDropdown.Button = Button;

export default CapDropdown;
