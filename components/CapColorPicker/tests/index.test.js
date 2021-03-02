import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import CapColorPicker from '../index';

describe('<CapColorPicker />', () => {
  it('CapColorPicker renders correctly', () => {
    const tree = renderer.create(<CapColorPicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check the props is defined', () => {
    const props = {
      className: 'test',
      color: '#d42024',
      setColor: () => {},
      hexSelector: false,
    };
    const CapColorPickerComponent = mount(<CapColorPicker {...props} />);
    expect(CapColorPickerComponent.prop('className')).toBeDefined();
    expect(CapColorPickerComponent.prop('color')).toBeDefined();
    expect(CapColorPickerComponent.prop('setColor')).toBeDefined();
    expect(CapColorPickerComponent.prop('hexSelector')).toBeDefined();
  });

  it('render size input correctly with small value', () => {
    const fn = () => {};
    const props = {
      className: 'test',
      color: '#d42024',
      setColor: fn,
      hexSelector: false,
    };
    const CapColorPickerComponent = mount(<CapColorPicker {...props} />);
    expect(CapColorPickerComponent.prop('className')).toEqual('test');
    expect(CapColorPickerComponent.prop('color')).toEqual('#d42024');
    expect(CapColorPickerComponent.prop('setColor')).toEqual(fn);
    expect(CapColorPickerComponent.prop('hexSelector')).toEqual(false);
  });
});
