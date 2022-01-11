/**
 *
 * CapMobileDateRangePicker
 *
 */

import React from "react";
import "./_index.scss";
import PropTypes from "prop-types";
import moment from "moment";
import CapDateRangePicker from "../CapDateRangePicker";
import CapModal from "../CapModal";
import CapInput from "../CapInput";
import CapColumn from "../CapColumn";
import CapRow from "../CapRow";
import CapDivider from "../CapDivider";
import ReactMobileDatePicker from "./ReactMobileDatePicker";

const DATE_FORMAT = "YYYY-MM-DD";

/* eslint-disable react/prefer-stateless-function */
const monthMap = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const dateConfig = {
  date: {
    format: "DD",
    caption: "Day",
    step: 1,
  },
  month: {
    format: (value) => monthMap[value.getMonth() + 1],
    caption: "Mon",
    step: 1,
  },
  year: {
    format: "YYYY",
    caption: "Year",
    step: 1,
  },
};
class CapMobileDateRangePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: props.startDate,
      endDate: props.endDate,
      isModalOpen: false,
      focusedInput: "startDate",
      isDatePickerVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      !(
        this.checkIfSameDate(nextProps.startDate, this.props.startDate)
        && this.checkIfSameDate(nextProps.endDate, this.props.endDate)
      )
    ) {
      this.setState({
        startDate: nextProps.startDate,
        endDate: nextProps.endDate,
      });
    }
  }

  handleDatePickerVisible = (val) => this.setState(() => ({ isDatePickerVisible: val }));

  handleModalVisible = () => this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));

  checkIfSameDate = (d1, d2) => d1.format(DATE_FORMAT) === d2.format(DATE_FORMAT);

  toggleFocusedInput = (inputType = "", onClickHandler) => {
    if (inputType === "") {
      this.setState(
        (prevState) => ({
          focusedInput:
            prevState.focusedInput === "startDate" ? "endDate" : "startDate",
        }),
        () => onClickHandler && onClickHandler()
      );
    } else {
      this.setState(
        { focusedInput: inputType },
        () => onClickHandler && onClickHandler()
      );
    }
  };

  handleDateRangeChange = (date) => {
    const dateRange = {
      start: moment(this.state.startDate),
      end: moment(this.state.endDate),
    };
    let newRange = {
      start: date[0] || moment(dateRange.start),
      end: date[1] || moment(dateRange.end),
    };
    const prevRange = {
      start: moment(dateRange.start),
      end: moment(dateRange.end),
    };
    let dateIndexModified = 0;
    if (!this.checkIfSameDate(newRange.start, moment(dateRange.start))) {
      dateIndexModified = 0;
    } else if (!this.checkIfSameDate(newRange.end, moment(dateRange.end))) {
      dateIndexModified = 1;
    }
    const { focusedInput } = this.state;
    if (focusedInput === "startDate") {
      newRange.start = date[dateIndexModified];
      newRange.end = moment(dateRange.end);
    } else if (focusedInput === "endDate") {
      newRange.start = moment(dateRange.start);
      newRange.end = date[dateIndexModified];
    }
    if (date[0] && date[1]) {
      if (this.checkIfSameDate(date[0], date[1])) {
        newRange = {
          start: date[0],
          end: date[1],
        };
      } else if (
        this.checkIfSameDate(date[0], prevRange.start)
        && this.checkIfSameDate(date[1], prevRange.end)
      ) {
        newRange = {
          start: date[1],
          end: date[1],
        };
      }
    }
    if (newRange.start.diff(newRange.end, "days") <= 0) {
      this.setState({
        startDate: newRange.start,
        endDate: newRange.end,
        dateRange: newRange,
      });
      this.toggleFocusedInput();
    }
  };

  handleOnSelect = (date) => {
    const newDate = moment(date);
    const { focusedInput } = this.state;
    this.setState({ [focusedInput]: newDate });
  };

  checkIfDateDisabled = (current) => {
    const { focusedInput } = this.state;
    let isDisabled = false;
    const currentMoment = moment(current);
    const itd = moment(this.props.minDate, DATE_FORMAT);
    const { maxDate } = this.props;
    isDisabled = currentMoment.isAfter(moment(maxDate), "day")
      || currentMoment.isBefore(itd, "day");
    if (
      focusedInput === "startDate"
      && currentMoment.isAfter(moment(this.state.endDate), "day")
    ) {
      isDisabled = true;
    } else if (
      focusedInput === "endDate"
      && currentMoment.isBefore(moment(this.state.startDate), "day")
    ) {
      isDisabled = true;
    }
    return isDisabled;
  };

  formatDate = (date) => new Date(moment(date).format());

  checkMaxDateForScrollDatepicker = () => {
    const { endDate, focusedInput } = this.state;
    const { maxDate } = this.props;
    if (focusedInput === "startDate") {
      return this.formatDate(endDate);
    }
    return this.formatDate(maxDate);
  };

  checkMinDateForScrollDatepicker = () => {
    const { startDate, focusedInput } = this.state;
    const { minDate } = this.props;
    if (focusedInput === "startDate") {
      return this.formatDate(minDate);
    }
    return this.formatDate(startDate);
  };

  resetDate = () => {
    const { startDate, endDate } = this.props;
    this.setState({ startDate, endDate });
  };

  handleCancel = () => {
    this.resetDate();
    this.handleModalVisible();
  };

  handleDone = () => {
    const dateRange = {
      start: moment(this.state.startDate),
      end: moment(this.state.endDate),
    };
    this.props.onDone(dateRange);
    this.handleModalVisible();
  };

  getDaySize = () => {
    const screenWidth = window.screen.width;
    return 40 + Math.ceil((screenWidth - 360) / 10);
  };

  render() {
    const { dateDisplayFormat, type, minimumNights } = this.props;
    const { startDate, endDate, focusedInput } = this.state;
    const DateRangePickerInputs = ({ showPlaceholders = false, onClick }) => (
      <CapRow className="mobile-dateRange-picker-inputs">
        <CapColumn
          span={11}
          onClick={() => {
            this.toggleFocusedInput("startDate", onClick);
          }}
        >
          {showPlaceholders && (
            <span className="placeholder-text">Start Date</span>
          )}
          <CapInput
            className={`${focusedInput === "startDate" ? "focused" : ""}`}
            value={moment(startDate).format(dateDisplayFormat)}
            size="default"
            disabled
          />
        </CapColumn>
        <CapColumn
          span={2}
          className={`date-range-hyphen ${showPlaceholders
            && "vertical-align"}`}
        >
          -
        </CapColumn>
        <CapColumn
          span={11}
          onClick={() => {
            this.toggleFocusedInput("endDate", onClick);
          }}
        >
          {showPlaceholders && (
            <span className="placeholder-text">End Date</span>
          )}
          <CapInput
            className={`${focusedInput === "endDate" ? "focused" : ""}`}
            value={moment(endDate).format(dateDisplayFormat)}
            size="default"
            disabled
          />
        </CapColumn>
      </CapRow>
    );

    const { isModalOpen, isDatePickerVisible } = this.state;
    return (
      <>
        <CapModal
          title={this.props.title}
          visible={isModalOpen}
          centered
          okText={this.props.yesText}
          cancelText={this.props.noText}
          width="90%"
          onCancel={this.handleCancel}
          className="mobile-date-range-picker-modal"
          closable={false}
          footer={(
            <CapRow className="modal-footer">
              <span
                span={3}
                onClick={this.handleCancel}
                className="action-item"
              >
                {this.props.cancelText && this.props.cancelText}
              </span>
              <span
                span={3}
                style={{ marginLeft: "39px" }}
                className="action-item"
                onClick={this.handleDone}
              >
                {this.props.doneText}
              </span>
            </CapRow>
          )}
        >
          <CapRow type="flex" align="middle" className="control-section">
            <CapColumn span={21}>
              <DateRangePickerInputs
                context="inner"
                showPlaceholders
                onClick={() => this.handleDatePickerVisible(true)}
              />
            </CapColumn>
            <CapColumn
              title={this.props.resetText}
              onClick={this.resetDate}
              span={3}
              className="action-item"
            >
              {this.props.resetText}
            </CapColumn>
          </CapRow>
          <CapDivider />
          <CapRow span={24}>
            <CapColumn
              title={this.props.resetText}
              onClick={() => this.handleDatePickerVisible(!isDatePickerVisible)}
              span={24}
              className="action-item toggle-text"
            >
              {!isDatePickerVisible
                ? this.props.switchBackToScrollerText
                : this.props.switchBackToCalenderText}
            </CapColumn>
          </CapRow>
          {isDatePickerVisible ? (
            <div
              className={`${type === "compare"
                && "compare-mobile-date-picker"}`}
            >
              <ReactMobileDatePicker
                isPopup={false}
                className="date-picker-scroller"
                title="Date picker"
                onChange={this.handleOnSelect}
                value={this.formatDate(this.state[this.state.focusedInput])}
                min={this.checkMinDateForScrollDatepicker()}
                max={this.checkMaxDateForScrollDatepicker()}
                showHeader={false}
                showFooter={false}
                dateConfig={dateConfig}
              />
            </div>
          ) : (
            <div
              className={`calender-only ${type === "compare"
                && "compare-mobile-date-range-picker"}`}
            >
              <CapDateRangePicker
                numberOfMonths={1}
                showCalendarOnly
                autoFocus
                daySize={this.getDaySize()}
                startDate={startDate}
                endDate={endDate}
                onChange={this.handleDateRangeChange}
                isOutsideRange={(current) => this.checkIfDateDisabled(current)}
                minimumNights={minimumNights}
                allowYearNavigation
                minDate={moment(this.props.minDate)}
                rootClass="calender-only"
              />
            </div>
          )}
        </CapModal>
        <DateRangePickerInputs
          context="inner"
          onClick={this.handleModalVisible}
        />
      </>
    );
  }
}

CapMobileDateRangePicker.propTypes = {
  cancelText: PropTypes.string,
  resetText: PropTypes.string,
  dateDisplayFormat: PropTypes.string,
  yesText: PropTypes.string,
  noText: PropTypes.string,
  doneText: PropTypes.string,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  type: PropTypes.string,
  minimumNights: PropTypes.number,
  onDone: PropTypes.func,
  switchBackToScrollerText: PropTypes.string,
  switchBackToCalenderText: PropTypes.string,
  title: PropTypes.string,
};

export default CapMobileDateRangePicker;
