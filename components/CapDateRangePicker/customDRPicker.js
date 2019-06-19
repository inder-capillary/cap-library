/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */

import 'rc-calendar/assets/index.css';
import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import classNames from 'classnames';
import DatePicker from 'rc-calendar/lib/Picker';
import moment from 'moment';
import * as styledVars from "../styled/variables";
import CapIcon from '../CapIcon';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import './_capDateRangePicker.scss';
import '../styles/datePickerCommon.scss';

const format = 'YYYY-MM-DD';

const clsPrefix = 'cap-date-range-picker-v2';
const commonClsPrefix = 'cap-date-picker-common-v2';

const now = moment();

class Picker extends React.Component {
  state = {
    hoverValue: [],
  };

  onHoverChange = (hoverValue) => {
    console.log(hoverValue);
    this.setState({ hoverValue });
  }

  render() {
    const { showValue, onChange, disabledDate, value } = this.props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        defaultValue={now}
        format={format}
        onChange={onChange}
        disabledDate={disabledDate}
        prefixCls="ant-calendar"
        dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
      />);
    return (
      <DatePicker
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
        calendar={calendar}
        value={value}
      >
        {
          () => (
            <input
              placeholder={this.props.placeholder}
              style={{ width: 250 }}
              readOnly
              // eslint-disable-next-line no-mixed-operators
              value={showValue && showValue.format(format) || ''}
              className={this.props.inputClassName}
            />
          )
        }
      </DatePicker>);
  }
}

export default class CustomDRPicker extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    startOpen: false,
    endOpen: false,
  };

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
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true,
    });
  }

  onEndChange = (value) => {
    this.setState({
      endValue: value[1],
    });
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
    return (
      <div className={classNames(commonClsPrefix, clsPrefix)}>
        <span className="ant-calendar-picker-input ant-input ant-input-lg">
          <Picker
            onOpenChange={this.onStartOpenChange}
            type="start"
            showValue={startValue}
            open={startOpen}
            value={[startValue, endValue]}
            onChange={this.onStartChange}
            prefixCls="ant-calendar"
            dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
            placeholder="Start date"
            inputClassName="ant-calendar-range-picker-input"
          />
          <span className="ant-calendar-range-picker-separator">~</span>
          <Picker
            onOpenChange={this.onEndOpenChange}
            open={endOpen}
            type="end"
            showValue={endValue}
            disabledDate={this.disabledStartDate}
            value={[startValue, endValue]}
            onChange={this.onEndChange}
            prefixCls="ant-calendar"
            dropdownClassName={classNames(`${commonClsPrefix}-dropdown`, `${clsPrefix}-dropdown`)}
            placeholder="End date"
            inputClassName="ant-calendar-range-picker-input"
          />
          <CapIcon type="calendar" style={{color: styledVars.CAP_G01}} size="m" />
        </span>
      </div>);
  }
}
