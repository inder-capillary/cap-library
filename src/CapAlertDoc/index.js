/**
* CapAlertDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapAlert } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

export default class CapAlertDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-alert-info">
        <div className="cap-alert-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/alert/#header"> Alert </a>
            component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <CapAlert style={{ maxWidth: '300px' }} message="Success Text" type="success" />
        </div>
        {/* <PropertyTable data={infoData} /> */}
      </div>
    );
  }
}
