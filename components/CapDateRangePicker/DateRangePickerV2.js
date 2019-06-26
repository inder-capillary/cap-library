/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import 'react-dates/initialize';
import { DateRangePickerPhrases } from 'react-dates/src/defaultPhrases';
import { DateRangePicker } from 'react-dates';
import DateRangePickerShape from 'react-dates/src/shapes/DateRangePickerShape';
import classNames from 'classnames';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
import * as styledVars from "../styled/variables";
import CapIcon from '../CapIcon';
import 'react-dates/lib/css/_datepicker.css';
import './_capDateRangePickerV2.scss';
import '../styles/datePickerCommonV2.scss';

const commonClsPrefix = 'cap-date-picker-common-v2';
const clsPrefix = 'cap-date-range-picker-v2';

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

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
  keepOpenOnDateSelect: false,
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
  displayFormat: "YYYY-MM-DD",

  stateDateWrapper: (date) => date,
};

class DateRangePickerV2 extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
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
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
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
    ]);

    const { customInputIcon, customArrowIcon } = this.props;

    return (
      <div className={classNames(commonClsPrefix, clsPrefix)}>
        <DateRangePicker
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          customInputIcon={customInputIcon || <CapIcon type="calendar" style={{color: styledVars.CAP_G01}} size="m" />
          }
          customArrowIcon={customArrowIcon || <span style={{color: styledVars.CAP_G01}}>~</span>}
          {...props}
        />
      </div>
    );
  }
}

DateRangePickerV2.propTypes = propTypes;
DateRangePickerV2.defaultProps = defaultProps;

export default ComponentWithLabelHOC(DateRangePickerV2);
