import React from "react";
import PropTypes from 'prop-types';

const MonthHeader = ({displayMonths}) => (
  <div className="event-calendar__month-header">
    {
      displayMonths?.length
        && displayMonths.map((month, index) => (
          <div
            className="event-calendar__month-header__label"
            key={index + month}>
            {' '}
            {/**Adding index + month as key to make it more unique, prevents the console warning that duplicates exist */}
            {month.name}
          </div>
        ))
    }
  </div>
);


MonthHeader.propTypes = {
  displayMonths: PropTypes.array,
};

export default MonthHeader;
