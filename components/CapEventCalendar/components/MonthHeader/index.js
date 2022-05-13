import React from "react";
import PropTypes from 'prop-types';

const MonthHeader = ({displayMonths}) => (
  <div className="event-calendar__month-header">
    {
      displayMonths && displayMonths.length
                && displayMonths.map((month, index) => (
                  <div
                    className="event-calendar__month-header__label"
                    key={index + month}>
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
