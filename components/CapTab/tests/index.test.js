import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount} from 'enzyme';
import CapTab from '../index';

describe('<CapTab />', () => {
  it('CapTab renders correctly', () => {
    const tree = renderer.create(<CapTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check the props is defined', () => {
    const props = {
      panes: [{content: 'conatiner 1', title: 'tab 1'}],
    };
    const CapTabComponent = mount(<CapTab {...props} />);
    expect(CapTabComponent.prop('panes')).toBeDefined();
  });

  it('render pane input correctly with object', () => {
    const props = {
      panes: [{content: 'conatiner 1', title: 'tab 1'}],
    };
    const CapTabComponent = mount(<CapTab {...props} />);
    expect(CapTabComponent.prop('panes')).toEqual([{content: 'conatiner 1', title: 'tab 1'}]);
  });
});
