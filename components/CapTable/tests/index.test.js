import React from 'react';
import { mount } from 'enzyme';

import CapTable from '../index';

describe('<CapTable />', () => {
  it('Should test basic CapTable skeleton', () => {
    const wrapper = mount(<CapTable />);


    expect(wrapper.find('div.cap-table-v2')).toHaveLength(1);

    wrapper.setProps({ dataSource: []});
    wrapper.setProps({ columns: [] });

    expect(wrapper.prop('dataSource')).toEqual([]);
    expect(wrapper.prop('columns')).toEqual([]);
  });
});
