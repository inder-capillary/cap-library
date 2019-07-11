/**
* CapSkeletonDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSkeleton } from "../../components";
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

export default class CapSkeletonDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-skeleton-info">
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/skeleton/#header"> Skeleton </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
        <div className="cap-skeleton-showcase">
          <CapSkeleton loading />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
