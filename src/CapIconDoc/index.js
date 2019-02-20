/**
* CapIconDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapIcon } from "../../components";
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

export default class CapIconDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-icon-info">
        <div className="cap-icon-showcase">
          <div>Backward Icon</div>
          <CapIcon type="step-backward" />
          <div>Forward Icon</div>
          <CapIcon type="step-forward" />
          <div>Up circle Icon</div>
          <CapIcon type="up-circle" theme="filled" />
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/icon/"> Icons </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
