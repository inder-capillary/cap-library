import React from 'react';
import { shallow } from 'enzyme';

import CapHeader from '../index';

describe('<CapHeader />', () => {
  const defaultProps = {
    description: "Description",
    title: "Title",
    inline: true,
  };

  const wrapper = shallow(<CapHeader {...defaultProps} />);

  it('Should render title', () => {
    expect(wrapper.find('.cap-header-v2-title')).toHaveLength(1);
  });

  it('Should render description', () => {
    expect(wrapper.find('.cap-header-v2-description')).toHaveLength(1);
  });

  it('Should render regular size description', () => {
    wrapper.setProps({ size: "regular" });
    expect(wrapper.find('.regular')).toHaveLength(1);
  });
});
