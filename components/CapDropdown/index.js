/**
*
* CapDropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import './_capDropdown.scss';

const { Button } = Dropdown;

const clsPrefix = 'cap-dropdown-v2';

function CapDropdown(props) {
  const { className, overlayClassName, ...rest } = props;
  return (
    <Dropdown
      className={classNames(clsPrefix, className)}
      overlayClassName={classNames(`${clsPrefix}-overlay`, overlayClassName)}
      {...rest} />
  );
}

CapDropdown.defaultProps = {
  getPopupContainer: (triggerNode) => triggerNode?.parentNode || document.body,
};

CapDropdown.propTypes = {
  getPopupContainer: PropTypes.func,
};

CapDropdown.Button = Button;

export default CapDropdown;
