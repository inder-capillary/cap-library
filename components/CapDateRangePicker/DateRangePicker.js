/* eslint-disable no-unused-expressions */
/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */

import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import classNames from 'classnames';
import DatePicker from 'rc-calendar/lib/Picker';
import moment from 'moment';
import * as styledVars from "../styled/variables";
import CapIcon from '../CapIcon';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';
import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';

const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';
const prefixCls = 'ant-calendar';

const now = moment();

class Picker extends React.Component {
  state = {
    hoverValue: [],
  };

  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  }

  render() {
    const { showValue, onChange, disabledDate, value, dateInputPlaceholder, format, type, open, onOpenChange, placeholder, inputClassName } = this.props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={type}
        defaultValue={now}
        format={format}
        onChange={onChange}
        disabledDate={disabledDate}
        prefixCls={prefixCls}
        dateInputPlaceholder={dateInputPlaceholder}
        showToday={false}
      />);
    return (
      <DatePicker
        open={open}
        onOpenChange={onOpenChange}
        calendar={calendar}
        value={value}
        prefixCls={`${prefixCls}-picker-container`}
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
      >
        {
          () => (
            <input
              placeholder={placeholder}
              readOnly
              // eslint-disable-next-line no-mixed-operators
              value={showValue && showValue.format(format) || ''}
              className={inputClassName}
            />
          )
        }
      </DatePicker>);
  }
}

class DateRangePicker extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    startOpen: false,
    endOpen: false,
  };

  static getDerivedStateFromProps(nextProps) {
    let state = null;
    if ('value' in nextProps) {
      const value = nextProps.value || [];
      state = {
        startValue: value[0],
        endValue: value[1],
      };
    }
    return state;
  }

  onStartOpenChange = (startOpen) => {
    this.setState({
      startOpen,
    });
  }

  onEndOpenChange = (endOpen) => {
    this.setState({
      endOpen,
    });
  }

  onStartChange = (value) => {
    const { onChange } = this.props;
    this.setState({
      startValue: value[0],
      endValue: undefined,
      startOpen: false,
      endOpen: true,
    });
    onChange && onChange(value, this.getValueStrings(value));
  }

  getValueStrings = (value) => value.map((date) => date.format(this.props.format))

  onEndChange = (value) => {
    const { onChange } = this.props;
    this.setState({
      endValue: value[1],
    });
    onChange && onChange(value, this.getValueStrings(value));
  }

  disabledStartDate = (endValue) => {
    if (!endValue) {
      return false;
    }
    const { startValue } = this.state;
    if (!startValue) {
      return false;
    }
    return endValue.diff(startValue, 'days') < 0;
  }

  render() {
    const { endOpen, endValue, startValue, startOpen } = this.state;
    const { size, seperator, placeholder, format } = this.props;
    const sizeInputMapping = {
      large: 'lg',
      small: 'sm',
      medium: '',
    };
    return (
      <div className={classNames(commonClsPrefix, clsPrefix)}>
        <span className={`ant-calendar-picker ant-calendar-picker-${size}`}>
          <span className={`ant-calendar-picker-input ant-input ant-input-${sizeInputMapping[size]}`}>
            <Picker
              onOpenChange={this.onStartOpenChange}
              type="start"
              showValue={startValue}
              open={startOpen}
              value={[startValue, endValue]}
              onChange={this.onStartChange}
              prefixCls={prefixCls}
              dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
              placeholder={placeholder[0]}
              inputClassName={`${prefixCls}-range-picker-input`}
              dateInputPlaceholder={placeholder}
              format={format}
            />
            <span className={`${prefixCls}-range-picker-separator`}>{seperator}</span>
            <Picker
              onOpenChange={this.onEndOpenChange}
              open={endOpen}
              type="end"
              showValue={endValue}
              disabledDate={this.disabledStartDate}
              value={[startValue, endValue]}
              onChange={this.onEndChange}
              prefixCls={prefixCls}
              dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
              placeholder={placeholder[1]}
              inputClassName={`${prefixCls}-range-picker-input`}
              dateInputPlaceholder={placeholder}
              format={format}
            />
            <CapIcon type="calendar" style={{color: styledVars.CAP_G01}} size={size === 'large' ? 'm' : 's'} />
          </span>
        </span>

      </div>);
  }
}

DateRangePicker.defaultProps = {
  size: 'large',
  seperator: '~',
  placeholder: ['Start date', 'End date'],
  format: 'YYYY-MM-DD',
};

export default ComponentWithLabelHOC(DateRangePicker);
