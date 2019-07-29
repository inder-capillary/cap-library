/**
* CapSideBarDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSideBar } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "sidebarItems",
    description: "Items to be rendered in the format [{title: (string), key: (string), children: []}]",
    type: "array",
    default: "-",
  },
  {
    key: 2,
    property: "defaultActiveKey",
    description: "Key of the initial active panel",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "selectedMenuItem",
    description: "Key of the selected menu item",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "searchData",
    description: "Optional search data will be in array. If no search data is provided, search bar will search of menu items. This is useful in case an search data comes from an api call.",
    type: "string",
    default: "-",
  },
  {
    key: 5,
    property: "handleSearch",
    description: "Callback function executed when search text is changed",
    type: "function",
    default: "-",
  },
  {
    key: 6,
    property: "searchSupportPortalUrl",
    description: "Url of search support portal",
    type: "string",
    default: "-",
  },
  {
    key: 7,
    property: "showSearchbar",
    description: "send true to show searchbar option in sidebar",
    type: "boolean",
    default: "false",
  },
  {
    key: 8,
    property: "pageHeading",
    description: "page title that can be shown in the sidebar",
    type: "string",
    default: "-",
  },
];

const sidebarItems = [
  {
    title: 'Favourite Reports',
    key: 'favourite_reports',
    children: [
      {
        title: 'Segments',
        key: 'segments',
        children: [
          {
            title: 'Campaigns Long Long Name Test',
            key: 'campaigns',
            link: '/campaigns',
          },
          {
            title: 'Incentive',
            key: 'incentive',
            link: '/incentive',
          },
        ],
      },
    ],
  },
  {
    title: 'Data Exports',
    key: 'data_exports',
    children: [
      {
        title: 'Exports',
        key: 'exports',
        link: '/exports',
      },
    ],
  },
  {
    title: 'Creatives',
    key: 'creatives',
    link: '/creatives',
  },
];

export default class CapSideBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-side-bar-info">
        <div className="cap-side-bar-showcase">
          <CapSideBar
            searchSupportPortalUrl="http://support.capillarytech.com/support/search/solutions?term={{searchText}}"
            sidebarItems={sidebarItems}
            selectedMenuItem="exports"
            defaultActiveKey="data_exports"
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
