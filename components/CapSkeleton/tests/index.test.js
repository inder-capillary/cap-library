import React from 'react';
import { shallow } from 'enzyme';

import CapSkeleton from '../index';
describe('<CapSkeleton />', () => {
  it('Skeleton has cap-skeleton className', () => {
    const component = shallow(<CapSkeleton loading />);
    expect(component.hasClass('cap-skeleton')).toEqual(true);
  });
  it('CapSkeleton has ant Skeleton inside', () => {
    const component = shallow(<CapSkeleton loading />);
    expect(component.find('Skeleton')).toHaveLength(1);
  });
});
