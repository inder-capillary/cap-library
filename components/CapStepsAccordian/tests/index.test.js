
import React from 'react';
import { shallow } from 'enzyme';
import { Collapse } from 'antd';

import CapStepsAccordian from '../index';

describe('<CapStepsAccordian />', () => {
  const wrapper = shallow(<CapStepsAccordian items={[]} />);

  it('Should render antd collapse', () => {
    expect(wrapper.find(Collapse)).toHaveLength(1);
  });
});
