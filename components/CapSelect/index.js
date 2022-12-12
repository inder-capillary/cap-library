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
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

const clsPrefix = 'cap-select-v2';

function CapSelect(props) {
  const { componentClassName, dropdownClassName, options, propToBeMadeLabel, getMenuOptionsProps, ...rest } = props;
  const items = options.map((op) => <Select.Option {...op} label={op[propToBeMadeLabel] || op.label} {...getMenuOptionsProps(op)}>{op.label}</Select.Option>);
  return (
    <Select
      removeIcon={<CapIcon type="close" size="s" />}
      suffixIcon={<CapIcon type="chevron-down" />}
      menuItemSelectedIcon={<CapIcon type="tick" />}
      dropdownClassName={classNames(`${clsPrefix}-dropdown`, dropdownClassName)}
      {...rest}
      className={classNames(clsPrefix, componentClassName)}>
      {items}
    </Select>
  );
}

CapSelect.defaultProps = {
  size: 'large',
  getMenuOptionsProps: () => ({}),
};

CapSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelPosition: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  inductiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  options: PropTypes.array.isRequired,
  size: PropTypes.string,
  getMenuOptionsProps: PropTypes.func,
};

const CapSelectFinal = ComponentWithLabelHOC(CapSelect);
CapSelectFinal.CapCustomSelect = ComponentWithLabelHOC(CapCustomSelect);
export default CapSelectFinal;
