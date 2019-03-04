import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'antd';

import CapCard from '../index';

describe('<CapCard />', () => {
  const wrapper = shallow(<CapCard />);

  it('Should render antd datepicker', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
