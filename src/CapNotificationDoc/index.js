/**
* CapNotificationDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapNotification } from "../../components";
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

export default class CapNotificationDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-notification-info">
        <div className="cap-notification-showcase">
          <CapNotification />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
