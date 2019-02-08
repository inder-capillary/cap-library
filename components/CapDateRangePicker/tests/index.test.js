import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from 'antd';

import CapDateRangePicker from '../index';

describe('<CapDateRangePicker />', () => {
  const wrapper = shallow(<CapDateRangePicker />);

  it('Should render antd rangepicker', () => {
    expect(wrapper.find(DatePicker.RangePicker)).toHaveLength(1);
  });
});
