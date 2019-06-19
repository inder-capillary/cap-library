/**
*
* CapDateRangePicker
*
*/

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateRangePicker from './DateRangePicker';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';


const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

function CapDateRangePicker(props) {
  return (
    <div className={classNames(commonClsPrefix, clsPrefix)}>
      <DateRangePicker
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
