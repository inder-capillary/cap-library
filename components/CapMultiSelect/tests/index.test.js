import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from 'antd';

import CapMultiSelect from '../index';

describe('<CapMultiSelect />', () => {
  const defaultProps = {
    treeData: [],
  };

  const wrapper = shallow(<CapMultiSelect {...defaultProps} />);

  it('Expect antd popover to render', () => {
    expect(wrapper.find(Popover)).toHaveLength(1);
  });
});
