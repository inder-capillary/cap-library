/**
* CapTooltipDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapTooltip, CapButton } from "../../components";
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

export default class CapTooltipDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-tooltip-info">
        <div className="cap-tooltip-showcase">
          <CapTooltip title="prompt text">
            <span>Tooltip will show when mouse enter.</span>
          </CapTooltip>
        </div>

        <div style={{marginTop: '48px'}}>
          <CapTooltip title="button with tooltip">
                <span>
                  <CapButton>Button</CapButton>
                </span>
          </CapTooltip>
        </div>


        <div style={{marginTop: '24px'}}>
          <CapTooltip title="disabled button with tooltip">
                <span>
                  <CapButton disabled>Button</CapButton>
                </span>
          </CapTooltip>
        </div>
        
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/tooltip/#header"> Tooltip </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}
