/**
* CapTooltipWithInfoDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapTooltipWithInfo } from "../../components";
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

export default class CapTooltipWithInfoDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-tool-tip-with-info-info">
        <div className="cap-tool-tip-with-info-showcase">
          <CapTooltipWithInfo title="prompt text" />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
