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
    property: "-",
    description: "-",
    type: "-",
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
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
