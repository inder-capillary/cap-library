/**
* CapTopBarDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapTopBar, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "drawerListProps",
    description: "Props for the drawer and list components.",
    type: "Object{ productsList: Array[{ value: String, key: String, url: String }], selectedProduct: String, handleProductChange: () => {}, other props of drawer component. }",
    default: "-",
  },
  {
    key: 2,
    property: "selectProps",
    description: "Props for the select component.",
    type: "Object{ items: Array[{ label: String, value: String, key: String }], selectedItem: String, handleItemChange: () => {}, other props of select component. }",
    default: "-",
  },
  {
    key: 3,
    property: "menuProps",
    description: "Topbar menu Item props",
    type: "Object{ items: Array[Object{ label: String, link: String, key: String }], selectedItem: String, defaultSelectedKeys: String, onMenuItemClick: () => {} }",
    default: "-",
  },
  {
    key: 4,
    property: "userName",
    description: "to utilize the name of the user in topbar",
    type: "String",
    default: "-",
  },
  {
    key: 5,
    property: "dropdownMenuProps",
    description: "List to be shown in the user dropdown menu. Format: [{ label: String, key: String, onCLickHandler: () => {} }]",
    type: "array",
    default: "-",
  },
  {
    key: 6,
    property: "topbarIcons",
    description: "icons to be shown in the topbar. Format: [{ iconType: String, key: String, onCLickHandler: () => {} }] ",
    type: "array",
    default: "-",
  },
];

const orgsList = [
  { label: 'Purples', value: 'purples', key: 'purples' },
  { label: 'Buckle', value: 'buckle', key: 'buckle' },
  { label: 'Ski', value: 'ski', key: 'ski' },
  { label: 'Splash', value: 'splash', key: 'splash' },
  { label: 'Metro', value: 'metro', key: 'metro' },
];

const productsList = [
  { value: 'Dashboard', key: 'Dashboard' },
  { value: 'Campaign manager', key: 'Campaign manager' },
  { value: 'Membercare', key: 'Membercare' },
  { value: 'Loyalty manager', key: 'Loyalty manager' },
  { value: 'Essential insights', key: 'Essential insights' },
];

const menuItems = [
  { label: 'Campaigns', link: '/campaigns', key: "campaigns" },
  { label: 'Incentive', link: '/incentives', key: "incentive" },
  { label: 'Audience', link: '/Audience', key: "audience" },
];

const dropdownMenuProps = [
  { label: 'Profile Settings', key: 'Profile Settings' },
  { label: 'Brand Settings', key: 'Brand Settings' },
  { label: 'Logout', key: 'Logout' },
];

const topbarIcons = [
  { iconType: 'help', key: 'help' },
  { iconType: 'settings', key: 'settings' },
];

const MarginDiv = styled.div`
  margin-top: 32px;
`;

export default class NavigationBarDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrg: "buckle",
      selectedProduct: "Campaign manager",
    };
  }

  handleOrgChange = (value) => {
    this.setState({ selectedOrg: value });
  }

  handleProductChange = (product) => {
    this.setState({ selectedProduct: product.value });
  }

  render() {
    const { selectedOrg, selectedProduct } = this.state;
    return (
      <div className="navigation-bar-info">
        <div className="navigation-bar-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component uses CapDrawer, CapList, Select, CapInput.Search, CapMenu, CapIcons, CapDropdown components. Please refer their docs for detailed explanation and supported props.
          </div>
          <CapTopBar
            drawerListProps={{
              productsList,
              selectedProduct,
              handleProductChange: this.handleProductChange,
              title: <CapHeading type="h5" style={{ margin: "24px 0" }}>Select product</CapHeading>,
              closable: false,
              placement: 'left',
              width: 320,
            }}
            selectProps={{
              items: orgsList,
              selectedItem: selectedOrg,
              handleItemChange: this.handleOrgChange,
              showSearch: true,
              showHeader: true,
            }}
            menuProps={{
              items: menuItems,
              defaultSelectedKeys: ['campaigns'],
            }}
            dropdownMenuProps={dropdownMenuProps}
            topbarIcons={topbarIcons}
          />
          <MarginDiv />
          <CapTopBar
            selectProps={{
              items: orgsList,
              selectedItem: selectedOrg,
              handleItemChange: this.handleOrgChange,
              showSearch: true,
              showHeader: true,
            }}
            dropdownMenuProps={dropdownMenuProps}
          />
          <MarginDiv />
          <CapTopBar
            drawerListProps={{
              fixedProduct: true,
              productsList,
              selectedProduct,
              handleProductChange: this.handleProductChange,
              title: <CapHeading type="h5" style={{ margin: "24px 0" }}>Select product</CapHeading>,
              closable: false,
              placement: 'left',
              width: 320,
            }}
            selectProps={{
              fixedOrg: true,
              items: orgsList,
              selectedItem: selectedOrg,
              handleItemChange: this.handleOrgChange,
              showSearch: true,
              showHeader: true,
            }}
            menuProps={{
              items: menuItems,
              defaultSelectedKeys: ['campaigns'],
            }}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
