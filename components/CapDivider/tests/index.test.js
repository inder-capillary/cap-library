import React from 'react';
import { shallow } from 'enzyme';
import { Divider } from 'antd';

import CapDivider from '../index';

describe('<CapDivider />', () => {
  const wrapper = shallow(<CapDivider />);

  it('Should render antd divider', () => {
    expect(wrapper.find(Divider)).toHaveLength(1);
  });
});
