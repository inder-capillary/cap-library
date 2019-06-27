import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount, configure, shallow} from 'enzyme';
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

  it('verify the checked prop', () => {
    const CapSwitchComponent = mount(<CapSwitch />);
    CapSwitchComponent.find('.ant-switch').simulate('click');
    expect(CapSwitchComponent.find('.ant-switch-checked')).toHaveLength(1);
  });

  it('check if label gets added when passed in props', () => {
    const props = {
      label: 'label',
    };
    const CapSwitchComponent = shallow(<CapSwitch {...props} />);
    expect(CapSwitchComponent.exists('.component-with-label-label')).toEqual(true);
  });

  it('check if inductive text gets added when passed in props', () => {
    const props = {
      inductiveText: 'inductive text',
    };
    const CapSwitchComponent = shallow(<CapSwitch {...props} />);
    expect(CapSwitchComponent.exists('.component-with-label-inductive-text')).toEqual(true);
  });
});
