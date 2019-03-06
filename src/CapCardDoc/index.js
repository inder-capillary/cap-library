/**
* CapCardDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapCard } from "../../components";
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

export default class CapCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-card-info">
        <div className="cap-card-showcase">
          <CapCard
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </CapCard>
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/card/#header"> Card </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
