
import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from 'antd';

import CapTag from '../index';

describe('<CapTag />', () => {
  const wrapper = shallow(<CapTag />);

  it('Should render antd tag', () => {
    expect(wrapper.find(Tag)).toHaveLength(1);
  });
});
