/**
* CapLabelDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapLabel, CapHeading, CapDivider } from "../../components";
import "./info.scss";

const { CapLabelInline } = CapLabel;

const infoData = [
  {
    key: 1,
    property: "type",
    description: "Label type",
    type: "label1 | label2 | label3",
    default: "label1",
  },
];

export default class CapLabelDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-label-info">
        <div className="cap-label-showcase">
          <CapLabel type="label1">label 1</CapLabel>
          <br />
          <CapLabel type="label2">label 2</CapLabel>
          <br />
          <CapLabel type="label3">label 3</CapLabel>
          <br />
          <CapLabelInline type="label3">Inline label wrapped in span</CapLabelInline>
          <br />
          <CapDivider />
          <CapHeading style={{ marginTop: '24px' }}>
            {'Use label wrapped in span with : '}
            <CapHeading style={{ marginTop: '16px' }} type="h3">{`{ CapLabelInline } = CapLabel`}</CapHeading>
          </CapHeading>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
