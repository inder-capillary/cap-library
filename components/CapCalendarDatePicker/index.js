/**
*
* CapCalendarDatePicker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import './_capCalendarDatePicker.scss';

const clsPrefix = 'calendar-date-picker';

function CapCalendarDatePicker(props) {
  return (
    <div className={`${clsPrefix}${props.className ? ` ${props.className}` : ''}`}>
      <DatePicker
        inline
        {...props}
      />
    </div>
  );
}

CapCalendarDatePicker.propTypes = {
  className: PropTypes.string,
};

export default CapCalendarDatePicker;
