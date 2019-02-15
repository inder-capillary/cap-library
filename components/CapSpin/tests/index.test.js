
import React from 'react';
import { shallow } from 'enzyme';
import { Spin } from 'antd';

import CapSpin from '../index';

describe('<CapSpin />', () => {
  const wrapper = shallow(<CapSpin />);

  it('Should render antd spin', () => {
    expect(wrapper.find(Spin)).toHaveLength(1);
  });
});
