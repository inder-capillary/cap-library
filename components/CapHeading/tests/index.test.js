import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount} from 'enzyme';
import CapHeading from '../index';

describe('<CapHeading />', () => {
  it('CapHeading renders correctly', () => {
    const tree = renderer.create(<CapHeading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check the props is defined', () => {
    const props = {
      type: 'h1',
    };
    const CapHeadingComponent = mount(<CapHeading {...props} />);
    expect(CapHeadingComponent.prop('type')).toBeDefined();
  });

  it('render type input correctly with h1 value', () => {
    const props = {
      type: 'h1',
    };
    const CapHeadingComponent = mount(<CapHeading {...props} />);
    expect(CapHeadingComponent.prop('type')).toEqual('h1');
  });
});
