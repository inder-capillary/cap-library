/**
*
* CapDatePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classaNames from 'classnames';

import './_capDatePicker.scss';

const clsPrefix = 'cap-date-picker-v2';

function CapDatePicker(props) {
  return (
    <div className={clsPrefix}>
      <DatePicker
        dropdownClassName={classaNames(`${clsPrefix}-dropdown`)}
        {...props} />
    </div>
  );
}

export default CapDatePicker;
