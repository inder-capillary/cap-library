import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CapNavigation from '../index';

describe('< />', () => {
  const loadStorageItem = jest.fn();
  const changeOrgEntity = jest.fn();
  const defaultProps = {
    className: 'test-nav',
    changeOrgEntity,
    loadStorageItem,
  };

  const wrapper = shallow(<CapNavigation {...defaultProps} />);

  it('Should render properly', () => {
    expect(wrapper.find('.test-nav')).toHaveLength(1);
  });
});
