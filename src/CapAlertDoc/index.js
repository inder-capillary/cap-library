/**
* CapAlertDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapAlert } from "../../components";
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

export default class CapAlertDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-alert-info">
        <div className="cap-alert-showcase">
          <CapAlert message="Success Text" type="success" />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
