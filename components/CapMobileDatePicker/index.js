/**
 *
 * MobileDatePicker
 *
 */

import moment from "moment";
import React, { useState } from "react";
import PropTypes from "prop-types";
import CapCalendarDatePicker from "../CapCalendarDatePicker";
import CapModal from "../CapModal";
import CapInput from "../CapInput";
import CapIcon from "../CapIcon";
import "./_index.scss";
const INCEPTION_DATE = "2000-01-01";
const DATE_CALC_FORMAT = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = "DD MMMM YYYY";

function CapMobileDatePicker({onChange, value, lastSyncDate}) {
  const [visible, setVisible] = useState(false);

  const handleDateChange = (date) => {
    onChange(moment(date));
    setVisible(false);
  };
  return (
    <>
      <CapInput
        suffix={(
          <div>
            <CapIcon
              type="calendar"
              style={{ color: "rgb(9, 30, 66)" }}
              size="m"
            />
          </div>
        )}
        onClick={() => setVisible(true)}
        value={moment(value).format(DATE_DISPLAY_FORMAT)}
      />
      <CapModal
        visible={visible}
        centered
        onCancel={() => setVisible(false)}
        className="mobile-date-picker-modal"
        closable={false}
        footer={<></>}
      >
        <CapCalendarDatePicker
          inline
          minDate={moment(INCEPTION_DATE, DATE_CALC_FORMAT).toDate()}
          maxDate={lastSyncDate.toDate()}
          dropdownMode="select"
          showMonthDropdown
          showYearDropdown
          readOnly
          onChange={handleDateChange}
          selected={moment(value).toDate()}
          disabledDate={(currentDate) => currentDate.isAfter(lastSyncDate)
            || currentDate.isBefore(moment(INCEPTION_DATE))
          }
        />
      </CapModal>
    </>
  );
}

CapMobileDatePicker.propTypes = {
  value: PropTypes.object,
  lastSyncDate: PropTypes.object,
  onChange: PropTypes.func,
};

export default CapMobileDatePicker;
