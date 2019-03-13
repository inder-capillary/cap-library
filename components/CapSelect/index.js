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
      suffixIcon={<CapIcon type="chevron-down" />}
      dropdownClassName={classNames(`${clsPrefix}-dropdown`, dropdownClassName)}
      {...rest}
      className={classNames(clsPrefix, className)}>
      {items}
    </Select>
  );
}

CapSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
};

CapSelect.CapCustomSelect = CapCustomSelect;

export default CapSelect;
