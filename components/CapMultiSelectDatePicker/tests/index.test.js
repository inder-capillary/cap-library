import React from 'react';
import { shallow } from 'enzyme';

import CapMultiSelectDatePicker from '../index';

describe('<CapMultiSelectDatePicker />', () => {
  const wrapper = shallow(<CapMultiSelectDatePicker />);

  it('Should render CapMultiSelectDatePicker correctly', () => {
    expect(wrapper.find('.multi-select-date-container')).toHaveLength(1);
  });
  it('Should render last day of month when showLastDay prop is set true', () => {
    wrapper.setProps({ showLastDay: true });
    expect(wrapper.find('.custom-txt')).toHaveLength(1);
  });
});
