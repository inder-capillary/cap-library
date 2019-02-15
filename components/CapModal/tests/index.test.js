
import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'antd';

import CapModal from '../index';

describe('<CapModal />', () => {
  const wrapper = shallow(<CapModal />);

  it('Should render antd modal', () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
