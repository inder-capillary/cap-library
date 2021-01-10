/**
* CapNavigationDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapNavigation } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "userData",
    description: "Props for user details.",
    type: "Object{ userData: Object }",
    default: "-",
  },
  {
    key: 2,
    property: "topbarMenuData",
    description: "Topbar menu Item props to create tabs",
    type: "Object{ items: Array[Object{ label: String, link: String, key: String }], selectedItem: String, defaultSelectedKeys: String, onMenuItemClick: () => {} }",
    default: "-",
  },
  {
    key: 3,
    property: "dropdownMenuProps",
    description: "List to be shown in the user dropdown menu. Format: [{ label: String, key: String, onCLickHandler: () => {} }]",
    type: "Array",
    default: "-",
  },
  {
    key: 4,
    property: "topbarIcons",
    description: "icons to be shown in the topbar. Format: [{ iconType: String, key: String, onCLickHandler: () => {} }] ",
    type: "Array",
    default: "-",
  },
  {
    key: 5,
    property: "loadStorageItem",
    description: "function to load local storage item",
    type: "Function",
    default: "-",
  },
  {
    key: 6,
    property: "changeOrgEntity",
    description: "function to handle org/ou change",
    type: "Function",
    default: "-",
  },
  {
    key: 7,
    property: "showContent",
    description: "flag to show wrapper contents",
    type: "Boolean",
    default: "-",
  },
  {
    key: 8,
    property: "sidebarMenuData",
    description: "List of item to show on sidebar Format: [{title: (string), key: (string), link: (string)}]",
    type: "Array",
    default: "-",
  },
  {
    key: 9,
    property: "sidebarMenuItemsPosition",
    description: "Sidebar position string",
    type: "String",
    default: "-",
  },
  {
    key: 10,
    property: "sidebarMenuItemClick",
    description: "function to handle sidebar menu item click",
    type: "Function",
    default: "-",
  },
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

const menuItems = [
  { label: 'Campaigns', link: '/campaigns', key: "campaigns" },
  { label: 'Incentive', link: '/incentives', key: "incentive" },
  { label: 'Audience', link: '/Audience', key: "audience" },
];

const globalData = {
  currentOrgDetails: {
    module_details: [{code: "businessProcesses", display_order: 10, id: 26, name: "WORKBENCH", namespace: "businessProcesses", url: "/businessProcesses/index", version: "1.0.0.1"}],
  },
  user: {
    proxyOrgList: [{orgID: 50221, orgName: "REON_BIUI", ouList: [{ouID: 50011536, ouName: "supermarket"}, {ouID: 50011537, ouName: "Brand"}]}, {orgID: 50401, orgName: "REON_BIUI_Automation"}, {orgID: 50146, orgName: "REON_DATA", ouList: [{ouID: 50007994, ouName: "supermarket"}, {ouID: 50007995, ouName: "ExpressWay"}, {ouID: 50007996, ouName: "Franchisee"}]}],
  },
};

export default class CapNavigationDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  loadStorageItem = () => 0

  changeOrgEntity = () => true

  render() {
    return (
      <div className="cap-navigation-info">
        <div className="cap-navigation-showcase">
          <CapNavigation
            className="cap-nav-doc"
            userData={globalData}
            topbarMenuData={menuItems}
            dropdownMenuProps={dropdownMenuProps}
            topbarIcons={topbarIcons}
            loadStorageItem={this.loadStorageItem}
            changeOrgEntity={this.changeOrgEntity}
            showContent={false}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
