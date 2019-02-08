import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from 'antd';

import CapDatePicker from '../index';

describe('<CapDatePicker />', () => {
  const wrapper = shallow(<CapDatePicker />);

  it('Should render antd datepicker', () => {
    expect(wrapper.find(DatePicker)).toHaveLength(1);
  });
});
