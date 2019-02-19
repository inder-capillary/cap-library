/**
*
* CapDateRangePicker
*
*/

import React from 'react';
import { DatePicker } from 'antd';
import classaNames from 'classnames';

import './_capDateRangePicker.scss';

const { RangePicker } = DatePicker;

const clsPrefix = 'cap-date-range-picker-v2';

class CapDateRangePicker extends React.Component {
  render() {
    return (
      <div className={classaNames(clsPrefix)}>
        <RangePicker
          dropdownClassName={classaNames(`${clsPrefix}-dropdown`)}
          {...this.props}
        />
      </div>
    );
  }
}

CapDateRangePicker.propTypes = {

};

export default CapDateRangePicker;
