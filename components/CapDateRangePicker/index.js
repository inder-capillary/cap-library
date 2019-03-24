/**
*
* CapDateRangePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styledVars from "../styled/variables";
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
import CapIcon from '../CapIcon';

import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';

const { RangePicker } = DatePicker;

const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDateRangePicker(props) {
  const { size } = props;
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <RangePicker
        separator="-"
        allowClear={false}
        suffixIcon={<div><CapIcon type="calendar" style={{color: styledVars.CAP_G01}} size={size === 'large' ? 'm' : 's'} /></div>}
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
        {...props}
      />
    </div>
  );
}

CapDateRangePicker.defaultProps = {
  size: 'large',
};

CapDateRangePicker.propTypes = {
  size: PropTypes.string,
};

export default ComponentWithLabelHOC(CapDateRangePicker);
