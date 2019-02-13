/**
* CapTopBarDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapTopBar } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "primarySelectProps",
    description: "Select props for first select component.",
    type: "Object{ items: Array[{ label: String, value: String }], selectedItem: String, handleItemChange: (value) => {} }",
    default: "-",
  },
  {
    key: 2,
    property: "secondarySelectProps",
    description: "Select props for second select component.",
    type: "Object{ items: Array[{ label: String, value: String }], selectedItem: String, handleItemChange: (value) => {} }",
    default: "-",
  },
  {
    key: 3,
    property: "menuProps",
    description: "Topbar menu Item props",
    type: "Object{ items: Array[Object{ label: String, link: String, key: String }], selectedItem: String}",
    default: "-",
  },
  {
    key: 4,
    property: "userName",
    description: "First character of username will show at the topbar",
    type: "String",
    default: "-",
  },
  {
    key: 5,
    property: "onSettingsClick",
    description: "Callback function executed when settings icon on topbar is clicked",
    type: "Object{ items: Array[Object{ label: String, link: String, key: String }], selectedItem: String}",
    default: "-",
  },
];

const orgsList = [
  { label: 'Purples', value: 'purples' },
  { label: 'Buckle', value: 'buckle' },
  { label: 'Ski', value: 'ski' },
  { label: 'Splash', value: 'splash' },
  { label: 'Metro', value: 'metro' },
];

const productsList = [
  { label: 'Dashboard', value: 'Dashboard' },
  { label: 'Campaign manager', value: 'Campaign manager' },
  { label: 'Membercare', value: 'Membercare' },
  { label: 'Loyalty manager', value: 'Loyalty manager' },
  { label: 'Essential insights', value: 'Essential insights' },
];

const menuItems = [
  { label: 'Campaigns', link: '/campaigns', key: "campaigns" },
  { label: 'Incentive', link: '/incentives', key: "incentive" },
  { label: 'Audience', link: '/Audience', key: "audience" },
];

export default class NavigationBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedOrg: "buckle",
      selectedProduct: "Campaign manager",
      selectedMenuItem: 'incentive',
    };
  }

  handleOrgChange = (value) => {
    this.setState({ selectedOrg: value });
  }

  handleProductChange = (value) => {
    this.setState({ selectedProduct: value });
  }

  onSettingsClick = () => {
  }

  onLogoutClick = () => {
  }

  onMenuItemClick = (key) => {
    this.setState({ selectedMenuItem: key });
  }

  render() {
    const { selectedOrg, selectedProduct, selectedMenuItem } = this.state;
    return (
      <div className="navigation-bar-info">
        <div className="navigation-bar-showcase">
          <CapTopBar
            primarySelectProps={{
              items: orgsList,
              selectedItem: selectedOrg,
              handleItemChange: this.handleOrgChange,
            }}
            secondarySelectProps={{
              items: productsList,
              selectedItem: selectedProduct,
              handleItemChange: this.handleProductChange,
              showCapillaryIcon: true,
            }}
            menuProps={{
              items: menuItems,
              selectedItem: selectedMenuItem,
            }}
            userName="Jagrati"
            onSettingsClick={this.onSettingsClick}
            onLogoutClick={this.onLogoutClick}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
