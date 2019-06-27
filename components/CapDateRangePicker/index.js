/**
*
* CapDateRangePicker
*
*/

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateRangePickerV2 from './DateRangePickerV2';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';


const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDateRangePicker(props) {
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <DateRangePickerV2
        {...props}
      />
    </div>
  );
}

CapDateRangePicker.propTypes = {
  size: PropTypes.string,
};

export default ComponentWithLabelHOC(CapDateRangePicker);
