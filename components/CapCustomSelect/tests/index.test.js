import React from 'react';
import { shallow } from 'enzyme';

import CapSelect from '../index';

const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
  { label: 'Ski', value: 'ski' },
  { label: 'Splash', value: 'splash' },
  { label: 'Metro', value: 'metro' },
];

describe('<CapSelect />', () => {
  const handleOrgChange = jest.fn();

  const defaultProps = {
    width: "250px",
    selectPlaceholder: "Select organizations",
    showSearch: true,
    options: orgsList,
    value: "Ski",
    onChange: handleOrgChange,
  };
  const wrapper = shallow(<CapSelect {...defaultProps} />);

  test('render capSelect', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should update search state when handleSearchFunction is called', () => {
    const event = { target: { value: "ski" } };
    wrapper.instance().handleSearch(event);
    expect(wrapper.state('searchText')).toEqual('ski');
  });

  it('Should Change popover visibility', () => {
    wrapper.setState({ visible: false });
    wrapper.instance().onVisibleChange(true);
    expect(wrapper.state('visible')).toEqual(true);
  });

  it('Should empty searchText if popover is closed', () => {
    wrapper.instance().onVisibleChange(false);
    expect(wrapper.state('visible')).toEqual(false);
    expect(wrapper.state('searchText')).toEqual("");
  });

  it('Should call handleOrgChange prop and close popover when an option is selected', () => {
    wrapper.setState({ visible: true });
    wrapper.instance().handleChange({ label: 'Purples', value: 'purples' });
    expect(wrapper.state('visible')).toEqual(false);
    expect(handleOrgChange).toHaveBeenCalled();
  });
});
