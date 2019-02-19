
import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from 'antd';

import CapTooltip from '../index';

describe('<CapTooltip />', () => {
  const wrapper = shallow(<CapTooltip />);

  it('Should render antd tooltip', () => {
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });
});
