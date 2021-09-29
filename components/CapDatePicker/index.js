/**
*
* CapDatePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import CapIcon from '../CapIcon';
import * as styledVars from "../styled/variables";
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

import './_capDatePicker.scss';
import '../styles/datePickerCommon.scss';

const clsPrefix = 'cap-date-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDatePicker(props) {
  const { size } = props;
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <DatePicker
        allowClear={false}
        suffixIcon={<div><CapIcon type="calendar" style={{color: styledVars.CAP_G01}} size={size === 'large' ? 'm' : 's'} /></div>}
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
        {...props}
      />
    </div>
  );
}

CapDatePicker.defaultProps = {
  size: 'large',
  getCalendarContainer: (triggerNode) => triggerNode?.parentNode || document.body,
};

export default ComponentWithLabelHOC(CapDatePicker);
