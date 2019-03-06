
import React from 'react';
import { shallow } from 'enzyme';
import { CapTooltip } from "../../index";

import CapTooltipWithInfo from '../index';

describe('<CapTooltipWithInfo />', () => {
  const wrapper = shallow(<CapTooltipWithInfo title="prompt text" />);

  it('Should render cap tooltip', () => {
    expect(wrapper.find(CapTooltip)).toHaveLength(1);
  });
});
