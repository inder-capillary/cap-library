/* eslint-disable react/default-props-match-prop-types */
/*
Date range picker implemented using airbnb's React dates
*/
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import 'react-dates/initialize';
import { DateRangePicker, DateRangePickerPhrases, DateRangePickerShape, HORIZONTAL_ORIENTATION, ANCHOR_LEFT, isInclusivelyAfterDay } from 'react-dates';
import classNames from 'classnames';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
import * as styledVars from "../styled/variables";
import CapIcon from '../CapIcon';
import CapSelect from '../CapSelect';
import 'react-dates/lib/css/_datepicker.css';
import './_capDateRangePicker.scss';
// import { isUndefined } from 'lodash';

const commonClsPrefix = 'cap-date-picker-common-v2';
const clsPrefix = 'cap-date-range-picker-v2';

const START_DATE = 'startDate';
const END_DATE = 'endDate';

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  showCalendarOnly: PropTypes.bool,
  allowYearNavigation: PropTypes.bool,
  rootClass: PropTypes.string,
  minDate: PropTypes.string,
  hideCalendar: PropTypes.bool,

  ...omit(DateRangePickerShape, [
    'startDate',
    'endDate',
    'onDatesChange',
    'focusedInput',
    'onFocusChange',
  ]),
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: true,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,
  inputIconPosition: 'after',
  readOnly: true,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  reopenPickerOnClearDates: false,
  isRTL: false,
  daySize: 32,
  hideKeyboardShortcutsPanel: true,
  firstDayOfWeek: 0,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: (day) => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
  weekDayFormat: "ddd",
  displayFormat: "DD MMM YYYY",

  stateDateWrapper: (date) => date,
  showCalendarOnly: false,
  allowYearNavigation: false,
  hideCalendar: false,
  minDate: '1970-01-01',
  rootClass: null,
};

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    // is autoFocus is set, then open up calendar by default when component is rendered
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper, onChange } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    }, () => {
      // eslint-disable-next-line no-unused-expressions
      onChange && onChange([startDate, endDate]);
    });
  }

  onFocusChange(focusedInput) {
    // if only calendar is shown then do not let it get closed on outside click
    if ((!this.props.showCalendarOnly || focusedInput)) {
      if ((this.props.allowYearNavigation && focusedInput) || !this.props.allowYearNavigation) {
        this.setState({ focusedInput });
      }
    }
    const { onFocusChange } = this.props;
    if (onFocusChange) {
      onFocusChange(focusedInput);
    }
  }

  returnYears = () => {
    const years = [];
    const minDateYear = moment(this.props.minDate).year();
    const currentYear = moment().year();
    const hundredYears = currentYear - 100;
    /*eslint-disable-next-line */
    const start = minDateYear > hundredYears ? minDateYear > currentYear ? currentYear : minDateYear : hundredYears;
    for (let i = start; i <= currentYear; i++) {
      years.push({
        key: i,
        value: i,
        label: i,
      });
    }
    return years;
  }

  findRootOfTrigger = (trigger) => {
    if (!isEmpty(this.props.rootClass)) {
      let elem = trigger;
      while (!elem.classList.contains(this.props.rootClass)) {
        elem = elem.parentNode;
      }
      return elem;
    }
    return trigger;
  }

  renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => ( //eslint-disable-line
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span className="month-name">
        {moment.months()[month.month()]}
      </span>
      <CapSelect
        className="year-selector"
        value={month.year()}
        onChange={(e) => onYearSelect(month, e)}
        options={this.returnYears()}
        getPopupContainer={(triggerNode) => this.findRootOfTrigger(triggerNode)}
      />
    </div>
  );

  renderDayContents(day) {
    const date = day.format('D');
    return (
      <div className="calendar-day-content"><span>{date}</span></div>
      /*
      *Uncomment this block if the last day of month or first day of month needs border-radius. Disabled this issue because of performance issues. Better way is to solve this using css selectors instead of adding conditions here
      *<div className={classNames("calendar-day-content", date === "1" && "first-day-of-month", date === day.daysInMonth().toString() && "last-day-of-month")}><span>{date}</span></div>
      */
    );
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
    // example wrapper but are not props on the SingleDatePicker itself and
    // thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
      'customArrowIcon',
      'customInputIcon',
      'navNext',
      'navPrev',
      'renderDayContents',
      'disabledDate',
      'isDayBlocked',
      'onChange',
      'small',
      'showCalendarOnly',
      'allowYearNavigation',
      'minDate',
      'hideCalendar',
      'rootClass',
    ]);

    const { customInputIcon, customArrowIcon, navNext, navPrev, renderDayContents, disabledDate, isDayBlocked, showCalendarOnly, allowYearNavigation, hideCalendar } = this.props;

    return (
      <div className={`${classNames(commonClsPrefix, clsPrefix)} ${showCalendarOnly ? 'show-calendar-only' : ''} ${hideCalendar ? 'hide-calendar' : ''} ${allowYearNavigation ? 'allow-year-navigation' : ''}`}>
        {
          allowYearNavigation
            ? (
              <DateRangePicker
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                customInputIcon={customInputIcon || <CapIcon type="calendar" style={{ color: styledVars.CAP_G01 }} size="m" onClick={() => this.setState({focusedInput: null})} />
                }
                customArrowIcon={customArrowIcon || <span style={{ color: styledVars.CAP_G01 }}>???</span>}
                navNext={
                  navNext || <div className="month-nav-btn next-month-nav-btn with-year-navigation" title="Next"><CapIcon type="chevron-right" style={{ color: styledVars.CAP_G01 }} /></div>
                }
                navPrev={
                  navPrev || <div className="month-nav-btn prev-month-nav-btn with-year-navigation" title="Previous"><CapIcon type="chevron-left" style={{ color: styledVars.CAP_G01 }} /></div>
                }
                renderMonthElement={this.renderMonthElement}
                renderDayContents={renderDayContents || this.renderDayContents}
                isDayBlocked={disabledDate || isDayBlocked}
                {...props}
              />
            )
            : (
              <DateRangePicker
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                customInputIcon={customInputIcon || <CapIcon type="calendar" style={{ color: styledVars.CAP_G01 }} size="m" />
                }
                customArrowIcon={customArrowIcon || <span style={{ color: styledVars.CAP_G01 }}>???</span>}
                navNext={
                  navNext || <div className="month-nav-btn next-month-nav-btn" title="Next"><CapIcon type="chevron-right" style={{ color: styledVars.CAP_G01 }} /></div>
                }
                navPrev={
                  navPrev || <div className="month-nav-btn prev-month-nav-btn" title="Previous"><CapIcon type="chevron-left" style={{ color: styledVars.CAP_G01 }} /></div>
                }
                renderDayContents={renderDayContents || this.renderDayContents}
                isDayBlocked={disabledDate || isDayBlocked}
                {...props}
              />
            )
        }
      </div>
    );
  }
}

DateRangePickerWrapper.propTypes = propTypes;
DateRangePickerWrapper.defaultProps = defaultProps;

export default ComponentWithLabelHOC(DateRangePickerWrapper);
