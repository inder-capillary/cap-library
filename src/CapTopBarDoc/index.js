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
  { label: 'Purples',
    value: 123,
    key: 123,
    accessibleOus: [
      {label: "ExpressWay", value: 50007995, key: 50007995},
      {label: "Franchisee", value: 50007996, key: 50007996},
      {label: "supermarket", value: 50007994, key: 50007994},
      {label: "All", value: -1, key: -1},
    ],
  },
  { label: 'Buckle',
    value: 124,
    key: 124,
    accessibleOus: [
      {label: "dadq", value: 42342, key: 42342},
      {label: "daesfas", value: 43241, key: 43241},
      {label: "fasfa", value: 232324, key: 232324},
      {label: "All", value: -1, key: -1},
    ],
  },
  { label: 'Ski', value: 125, key: 125 },
  { label: 'Splash', value: 126, key: 126 },
  { label: 'Metro', value: 127, key: 127 },
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
      selectedOrg: 123,
      selectedProduct: "Campaign manager",
      selectedOu: '',
    };
  }

  handleOrgChange = (itemValue, item, ouValue) => {
    this.setState({ selectedOrg: itemValue, selectedOu: ouValue });
  }

  handleProductChange = (product) => {
    this.setState({ selectedProduct: product.value });
  }

  render() {
    const { selectedOrg, selectedProduct, selectedOu } = this.state;
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
              selectedOuItem: selectedOu,
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
              selectedOuItem: selectedOu,
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
              selectedOuItem: selectedOu,
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
