import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'antd';
import CapIcon from '../index';

describe('<CapIcon />', () => {
  const wrapper = shallow(<CapIcon />);

  it('Should render antd datepicker', () => {
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
