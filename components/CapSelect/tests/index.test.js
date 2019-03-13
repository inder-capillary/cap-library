
import React from 'react';
import { shallow } from 'enzyme';
import { Select } from 'antd';

import CapSelect from '../index';

const list = [
  { label: 'option1', value: 'option1', key: '0' },
  { label: 'option2', value: 'option2', key: '1' },
  { label: 'option3', value: 'option3', key: '2' },
  { label: 'option4', value: 'option4', key: '3' },
  { label: 'option5', value: 'option5', key: '4' },
  { label: 'option6', value: 'option6', key: '5' },
  { label: 'option7', value: 'option7', key: '6' },
  { label: 'option8', value: 'option8', key: '7' },
];


describe('<CapSelect />', () => {
  const wrapper = shallow(<CapSelect options={list} />);

  it('Should render antd select', () => {
    expect(wrapper.find(Select)).toHaveLength(1);
  });
});
