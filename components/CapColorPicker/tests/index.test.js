import React from 'react';
import {shallow} from 'enzyme';
import CapColorPicker from '../index';

describe('<CapColorPicker />', () => {
  it('CapColorPicker renders correctly', () => {
    const tree = shallow(<CapColorPicker />);
    expect(tree).toMatchSnapshot();
  });

  it('render size input correctly with small value', () => {
    const fn = () => {};
    const props = {
      className: 'test',
      color: '#d42024',
      setColor: fn,
      hexSelector: false,
    };
    const CapColorPickerComponent = shallow(<CapColorPicker {...props} />);
    expect(CapColorPickerComponent.instance().props.className).toEqual("test");
    expect(CapColorPickerComponent.instance().props.color).toEqual('#d42024');
    expect(CapColorPickerComponent.instance().props.setColor).toEqual(fn);
    expect(CapColorPickerComponent.instance().props.hexSelector).toEqual(false);
  });
});
