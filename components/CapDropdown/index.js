/**
*
* CapDropdown
*
*/

import React from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';

const { Button } = Dropdown;

const clsPrefix = 'cap-dropdown-v2';

function CapDropdown(props) {
  const { className, ...rest } = props;
  return (
    <Dropdown className={classNames(clsPrefix, className)} {...rest} />
  );
}

CapDropdown.propTypes = {

};

CapDropdown.Button = Button;

export default CapDropdown;
