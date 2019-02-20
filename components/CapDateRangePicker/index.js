/**
*
* CapDateRangePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Calender } from '../assets/icons';

import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';

const { RangePicker } = DatePicker;

const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDateRangePicker(props) {
  const { size } = props;
  const calenderWidth = size === 'large' ? 24 : 16;
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <RangePicker
        allowClear={false}
        suffixIcon={<div><Calender width={calenderWidth} height={calenderWidth} /></div>}
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
        {...props}
      />
    </div>
  );
}

CapDateRangePicker.defaultProps = {

};

CapDateRangePicker.propTypes = {
  size: PropTypes.string,
};

export default CapDateRangePicker;
