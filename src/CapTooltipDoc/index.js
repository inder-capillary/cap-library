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
            <span className="button-disabled-tooltip-wrapper">
              <CapButton disabled>Button</CapButton>
            </span>
          </CapTooltip>
        </div>

        <div style={{marginTop: '24px'}}>
          <b>NOTE: </b>
                While using a disabled button with tooltip, wrap the button with an element with className: &quot;button-disabled-tooltip-wrapper&quot;.
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
