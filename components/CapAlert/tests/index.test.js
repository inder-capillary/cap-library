
import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from 'antd';

import CapAlert from '../index';

describe('<CapAlert />', () => {
  const wrapper = shallow(<CapAlert />);

  it('Should render antd alert', () => {
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
});
