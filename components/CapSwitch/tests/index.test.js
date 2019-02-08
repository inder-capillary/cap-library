import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CapSwitch from '../index';

configure({ adapter: new Adapter() });
describe('<CapSwitch />', () => {
  it('CapSwitch renders correctly', () => {
    const tree = renderer.create(<CapSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check the props is defined', () => {
    const props = {
      size: 'small',
    };
    const CapSwitchComponent = mount(<CapSwitch {...props} />);
    expect(CapSwitchComponent.prop('size')).toBeDefined();
  });

  it('render size input correctly with small value', () => {
    const props = {
      size: 'small',
    };
    const CapSwitchComponent = mount(<CapSwitch {...props} />);
    expect(CapSwitchComponent.prop('size')).toEqual('small');
  });
});
