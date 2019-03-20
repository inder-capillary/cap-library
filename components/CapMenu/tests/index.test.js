import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'antd';
import CapMenu from '../index';

describe('<CapMenu />', () => {
  const wrapper = shallow(<CapMenu />);

  it('Should render antd tooltip', () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
  });
});
