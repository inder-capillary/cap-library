import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'antd';
import CapDropdown from '../index';

describe('<CapDropdown />', () => {
  const wrapper = shallow(<CapDropdown />);

  it('Should render antd tooltip', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });
});
