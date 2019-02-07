import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount} from 'enzyme';

import CapSlider from '../index';
describe('<CapSlider />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CapSlider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render defaultValue input correctly with 40 value', () => {
    const props = {
      defaultValue: 40,
    };
    const sliderInputComponent = mount(<CapSlider {...props} />);
    expect(sliderInputComponent.prop('defaultValue')).toEqual(40);
  });

  it('check the value is defined', () => {
    const props = {
      defaultValue: 40,
    };
    const sliderInputComponent = mount(<CapSlider {...props} />);
    expect(sliderInputComponent.prop('defaultValue')).toBeDefined();
  });
});
