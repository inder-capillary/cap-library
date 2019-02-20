/**
*
* CapDatePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import { Calender } from '../assets/icons';

import './_capDatePicker.scss';
import '../styles/datePickerCommon.scss';

const clsPrefix = 'cap-date-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDatePicker(props) {
  const { size } = props;
  const calenderWidth = size === 'large' ? 24 : 16;
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <DatePicker
        allowClear={false}
        suffixIcon={<div><Calender width={calenderWidth} height={calenderWidth} /></div>}
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
        {...props}
      />
    </div>
  );
}

CapDatePicker.defaultProps = {

};

export default CapDatePicker;
