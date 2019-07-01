
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

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
  it('Should render antd select', () => {
    const CapSelectComponent = mount(<CapSelect options={list} />);
    expect(CapSelectComponent.exists('.ant-select')).toEqual(true);
  });

  it('CapSelect renders correctly', () => {
    const tree = renderer.create(<CapSelect options={list} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check if label gets added when passed in props', () => {
    const props = {
      label: 'label',
    };
    const CapSelectComponent = shallow(<CapSelect {...props} />);
    expect(CapSelectComponent.exists('.component-with-label-label')).toEqual(true);
  });

  it('check if inductive text gets added when passed in props', () => {
    const props = {
      inductiveText: 'inductive text',
    };
    const CapSelectComponent = shallow(<CapSelect {...props} />);
    expect(CapSelectComponent.exists('.component-with-label-inductive-text')).toEqual(true);
  });

  it('verify the options count', () => {
    const CapSelectComponent = mount(<CapSelect options={list} />);
    CapSelectComponent.find('.ant-select').simulate('click');
    expect(CapSelectComponent.find('.ant-select-dropdown-menu-item')).toHaveLength(8);
  });
});
