/**
* CapLabelDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapError, CapHeading, CapDivider } from "../../components";
import "./info.scss";

const { CapErrorInline } = CapError;

const infoData = [
  {
    key: 1,
    property: "type",
    description: "Specify whether it is error or warning",
    type: "error | warning",
    default: "error",
  },
];

export default class CapErrorDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="cap-error-showcase">
          <CapError type="error">Error text</CapError>
          <br />
          <CapError type="warning">Warning text</CapError>
          <br />
          <CapErrorInline type="error">Error text inline</CapErrorInline>
          <br />
          <CapErrorInline type="warning">Warning text inline</CapErrorInline>
          <br />
          <CapDivider />
          <CapHeading style={{ marginTop: '24px' }}>
            {'Use Inline error wrapped in span with : '}
            <CapHeading style={{ marginTop: '16px' }} type="h3">{`{ CapErrorInline } = CapError`}</CapHeading>
          </CapHeading>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
