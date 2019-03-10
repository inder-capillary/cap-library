
import React from 'react';
import { shallow } from 'enzyme';
import { Radio } from 'antd';

import CapRadioButton from '../index';

const RadioButton = Radio.Button;

describe('<CapRadioButton />', () => {
  const wrapper = shallow(<CapRadioButton />);

  it('Should render antd radio button', () => {
    expect(wrapper.find(RadioButton)).toHaveLength(1);
  });
});
