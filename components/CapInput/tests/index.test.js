import React from 'react';
import { mount } from 'enzyme';
import CapInput from '../index';


describe('<CapInput />', () => {
  const wrapper = mount(<CapInput labelPosition="left" label="Input field" />);
  it('Should render label', () => {
    expect(wrapper.find('.cap-input-v2-label')).toHaveLength(3);
  });

  it('Should find error message button', () => {
    wrapper.setProps({ errorMessage: "Test error message" });
    expect(wrapper.find('.error-message')).toHaveLength(3);
  });

  it("Should have prefix, suffix icons", () => {
    wrapper.setProps({ label: '', prefix: 'test prefix', isVerified: true, errorMessage: ''});
    expect(wrapper.find('.cap-input-v2-label')).toHaveLength(0);
    expect(wrapper.find('span.ant-input-prefix')).toHaveLength(1);
    expect(wrapper.find('span.ant-input-suffix')).toHaveLength(1);
    expect(wrapper.find('i.anticon-check-circle')).toHaveLength(1);
  });

  it('Should have proper child elements based on props passed', () => {
    wrapper.setProps({
      label: "Test label",
      isRequired: true,
      inductiveText: "Some inductive text for test case",
      disabled: true,
      isVerified: false,
    });
    expect(wrapper.find('.requied-indicator')).toHaveLength(3);
    wrapper.setProps({ inductiveText: 'left' });
    expect(wrapper.find('span.cap-input-inductive-text')).toHaveLength(0);
  });
});
