/**
*
* CapSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Select } from 'antd';
import CapCustomSelect from '../CapCustomSelect';
import CapIcon from '../CapIcon';
import './_capSelect.scss';


const clsPrefix = 'cap-select-v2';
const { Option } = Select;

function CapSelect(props) {
  const { className, dropdownClassName, options, ...rest } = props;
  const items = options.map((op) => <Option {...op}>{op.label}</Option>);
  return (
    <Select
      removeIcon={<CapIcon type="close" size="s" />}
      suffixIcon={<CapIcon type="chevron-down" />}
      menuItemSelectedIcon={<CapIcon type="tick" />}
      dropdownClassName={classNames(`${clsPrefix}-dropdown`, dropdownClassName)}
      {...rest}
      className={classNames(clsPrefix, className)}>
      {items}
    </Select>
  );
}

CapSelect.defaultProps = {
  size: 'large',
};

CapSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  size: PropTypes.string,
};

CapSelect.CapCustomSelect = CapCustomSelect;

export default CapSelect;
