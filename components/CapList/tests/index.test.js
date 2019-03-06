
import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'antd';

import CapList from '../index';

describe('<CapList />', () => {
  const wrapper = shallow(<CapList />);

  it('Should render antd list', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });
});
