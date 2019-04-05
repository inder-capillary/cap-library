import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import {TimePicker} from 'antd';
import CapTimePicker from '../index';

describe('<CapTimePicker />', () => {
  it('expect CapTimePicker to contain ant TimePicker', () => {
    const wrapper = shallow((<CapTimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />));

    expect(wrapper.find(TimePicker)).toHaveLength(1);
  });
  it('expet CapTImePicker to have .cap-timpicker-v2 class', () => {
    const wrapper = shallow(<CapTimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />);

    expect(wrapper.find('.cap-timepicker-v2')).toHaveLength(1);
  });
  // it('expet CapTImePicker to have .cap-timpicker-v2-popup for popupClassName prop', () => {
  //   const wrapper = shallow(<CapTimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />);

  //   expect(wrapper.find('.cap-timepicker-v2-popup')).toHaveLength(1);
  // });
});
