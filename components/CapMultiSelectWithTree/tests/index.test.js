import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from 'antd';

import CapMultiSelectWithTree from '../index';

describe('<CapMultiSelectWithTree />', () => {
  const defaultProps = {
    treeData: [],
  };

  const wrapper = shallow(<CapMultiSelectWithTree {...defaultProps} />);

  it('Expect antd popover to render', () => {
    expect(wrapper.find(Popover)).toHaveLength(1);
  });
});
