import React from 'react';
import { mount } from 'enzyme';
import CapInput from '../index';


describe('Test <CapInput />', () => {
  it('Should set default props', () => {
    const wrapper = mount(<CapInput />);
    expect(wrapper.find('.cap-input-label')).toHaveLength(0);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('labelPosition')).toEqual('top');
    expect(wrapper.prop('isRequired')).toEqual(false);
    expect(wrapper.prop('isVerified')).toEqual(false);
  });

  it('Should have proper child elements based on props passed', () => {
    const wrapper = mount(<CapInput
      label="Test label"
      isRequired
      inductiveText="Some inductive text for test case"
      disabled
    />);
    expect(wrapper.find('div.cap-input-label')).toHaveLength(1);
    expect(wrapper.find('sup.requied-indicator')).toHaveLength(1);
    expect(wrapper.find('span.cap-input-inductive-text')).toHaveLength(1);
    expect(wrapper.find('div.cap-input-label').prop('type')).toEqual('h3');
    expect(wrapper.find('div.cap-input-label').prop('disabled')).toEqual(true);

    wrapper.setProps({ labelPosition: 'left'});
    expect(wrapper.find('span.cap-input-inductive-text')).toHaveLength(0);
  });

  it("Should have prefix, suffix icons", () => {
    const wrapper = mount(<CapInput
      label=""
      prefix="test prefix"
      isVerified
    />);

    expect(wrapper.find('div.cap-input-label')).toHaveLength(0);
    expect(wrapper.find('span.ant-input-prefix')).toHaveLength(1);
    expect(wrapper.find('span.ant-input-suffix')).toHaveLength(1);
    expect(wrapper.find('i.anticon-check-circle')).toHaveLength(1);
  });

  it('Should find error message button', () => {
    const wrapper = mount(<CapInput
      errorMessage="Test error message"
    />);
    expect(wrapper.find('span.error-message')).toHaveLength(1);
    expect(wrapper.find('i.anticon-warning')).toHaveLength(1);
  });
});
