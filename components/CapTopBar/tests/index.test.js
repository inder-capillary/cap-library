
import { shallow } from 'enzyme';
import React from 'react'; // eslint-disable-line no-unused-vars
import CapTopBar from '../index';


const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
];

const productsList = [
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Campaign manager', value: 'Campaign manager' },
];

const menuItems = [
  { label: 'Campaigns', link: '/campaigns', key: "campaigns" },
];

describe('< />', () => {
  const mockOnSettingsClick = jest.fn();
  const mockHandleOrgChange = jest.fn();
  const mockHandleItemChange = jest.fn();
  const defaultProps = {
    primarySelectProps: {
      items: orgsList,
      selectedItem: "buckle",
      handleItemChange: mockHandleOrgChange,
    },
    secondarySelectProps: {
      items: productsList,
      selectedItem: "Campaign manager",
      handleItemChange: mockHandleItemChange,
    },
    menuProps: {
      items: menuItems,
      selectedItem: 'campaigns',
    },
    userName: "Test",
    onSettingsClick: mockOnSettingsClick,
  };

  const wrapper = shallow(<CapTopBar {...defaultProps} />);

  it('Should render settings if settingsClick props is passed', () => {
    expect(wrapper.find('.cap-navbar-setting')).toHaveLength(1);
  });

  it('Should render user div if username is passed in props', () => {
    expect(wrapper.find('.cap-navbar-user')).toHaveLength(1);
  });
});
