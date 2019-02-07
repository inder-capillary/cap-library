// import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount} from 'enzyme';
import CapCheckbox from '../index';

describe('<CapCheckbox />', () => {
  it('CapCheckbox renders correctly', () => {
    const tree = renderer.create(<CapCheckbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check the props is defined', () => {
    const props = {
      defaultChecked: true,
    };
    const CapCheckboxComponent = mount(<CapCheckbox {...props} />);
    expect(CapCheckboxComponent.prop('defaultChecked')).toBeDefined();
  });

  it('render size input correctly with small value', () => {
    const props = {
      defaultChecked: true,
    };
    const CapCheckboxComponent = mount(<CapCheckbox {...props} />);
    expect(CapCheckboxComponent.prop('defaultChecked')).toEqual(true);
  });
});
