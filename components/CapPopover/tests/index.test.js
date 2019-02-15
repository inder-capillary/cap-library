
import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from 'antd';

import CapPopover from '../index';

describe('<CapPopover />', () => {
  const wrapper = shallow(<CapPopover />);

  it('Should render antd popover', () => {
    expect(wrapper.find(Popover)).toHaveLength(1);
  });
});
