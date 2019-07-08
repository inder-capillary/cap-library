/**
*
* CapMultiSelectDatePicker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './_capMultiSelectDatePicker.scss';
const classNames = require('classnames');

class CapMultiSelectDatePicker extends React.Component {
  getNumberOfDays = () => {
    const noOfDays = [];
    for (let i = 1; i <= 31; i++) {
      noOfDays.push(i);
    }
    return noOfDays;
  }

  getNumberOfWeeks = () => {
    const noOfWeeks = [];
    for (let i = 1; i <= 5; i++) {
      noOfWeeks.push(i);
    }
    return noOfWeeks;
  }

  renderLastDayOption = (selectedDays) => {
    const { lastDayText = '', onClick } = this.props;
    const lastDayValue = -1;
    return (
      <th
        key={lastDayValue}
        colSpan="4"
        className={classNames({ "custom-selected": selectedDays.indexOf(lastDayValue) !== -1}, "custom-txt")}
        onClick={() => onClick(lastDayValue)}
      >
        {lastDayText || 'Last day of month'}
      </th>);
  }

  render() {
    const noOfDays = this.getNumberOfDays();
    const noOfWeeks = this.getNumberOfWeeks();
    const { showLastDay, onClick, selected, defaultValue } = this.props;
    const selectedDays = selected || defaultValue;
    return (
      <div className="multi-select-date-container">
        <table className="date-content">
          {
            noOfWeeks.map((_w, index) => (
              <tr key={`week-${index}`}>
                {noOfDays.splice(0, 7).map((day) => (
                  <th
                    key={day}
                    className={classNames({ selected: selectedDays.indexOf(day) !== -1})}
                    onClick={() => onClick(day)}
                  >
                    {day}
                  </th>
                ))}
                {(index === noOfWeeks.length - 1) && showLastDay ? this.renderLastDayOption(selectedDays) : null}
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
}

CapMultiSelectDatePicker.propTypes = {
  selected: PropTypes.array,
  defaultValue: PropTypes.array,
  showLastDay: PropTypes.bool,
  lastDayText: PropTypes.string,
  onClick: PropTypes.func,
};

CapMultiSelectDatePicker.defaultProps = {
  selected: [],
};

export default CapMultiSelectDatePicker;
