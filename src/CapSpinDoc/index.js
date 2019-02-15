/**
* CapSpinDoc
*/
import React, { Component } from "react";
import { Alert } from 'antd';
//import PropertyTable from '../../helpers/PropertyTable';
import { CapSpin, CapHeading } from "../../components";
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

export default class CapSpinDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-spin-info">
        <CapHeading type="h5">This component takes all the props that antd spin allows.</CapHeading>
        <a href="https://ant.design/components/spin/#header">https://ant.design/components/spin/#header</a>
        <div className="cap-spin-showcase" style={{ display: 'flex', marginTop: "24px" }}>
          <div>
            <CapHeading type="h4">Different Size</CapHeading>
            <div style={{ display: 'flex', marginTop: "10px" }}>
              <CapSpin size="small" />
              <span style={{ marginRight: "30px" }}></span>
              <CapSpin />
              <span style={{ marginRight: "30px" }}></span>
              <CapSpin size="large" />
            </div>
          </div>
          <div style={{ width: "300px", marginLeft: '30px' }}>
            <CapHeading type="h4">
              Embedded mode
            </CapHeading>
            <CapSpin spinning delay={500}>
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
            </CapSpin>
          </div>
        </div>
        {/* <PropertyTable data={infoData} /> */}
      </div>
    );
  }
}
