import React from 'react';
import { mount } from 'enzyme';
import CapButton from '../index';

describe('Test <CapButton />', () => {
  it('Should find primary button', () => {
    const wrapper = mount(<CapButton>Primary</CapButton>);
    expect(wrapper.prop('type')).toEqual('primary');
    expect(wrapper.find('.ant-btn-primary')).toHaveLength(1);

    wrapper.setProps({ disabled: true});
    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('Should find secondary button', () => {
    const wrapper = mount(<CapButton type="secondary">secondary</CapButton>);
    expect(wrapper.prop('type')).toEqual('secondary');
    expect(wrapper.find('.ant-btn-secondary')).toHaveLength(1);
  });

  it('Should find flat button', () => {
    const wrapper = mount(<CapButton type="flat">Flat</CapButton>);
    expect(wrapper.prop('type')).toEqual('flat');
    expect(wrapper.prop('isAddBtn')).toEqual(false);
    expect(wrapper.find('.ant-btn-flat')).toHaveLength(1);

    wrapper.setProps({ isAddBtn: true });
    expect(wrapper.prop('isAddBtn')).toEqual(true);

    wrapper.setProps({ suffix: "Test prefix", isAddBtn: false });
    expect(wrapper.find('.cap-button-suffix')).toHaveLength(1);
  });

  it('Should find dashed button', () => {
    const wrapper = mount(<CapButton type="dashed" prefix="Test prefix">Dashed</CapButton>);
    expect(wrapper.prop('type')).toEqual('dashed');
    expect(wrapper.find('.ant-btn-dashed')).toHaveLength(1);
    expect(wrapper.find('.cap-button-prefix')).toHaveLength(1);
  });
});
