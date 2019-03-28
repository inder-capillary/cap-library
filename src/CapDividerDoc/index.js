/**
* CapDividerDoc
*/
import React, { Component } from "react";
import { CapDivider, CapHeading } from "../../components";
import "./info.scss";

export default class CapDividerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-divider-info">
        <div className="cap-divider-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/divider/#header"> Divider </a>
            component. Please refer their component for detailed explaination of component and supported props.
          </div>
          <CapHeading style={{ marginBottom: '24px' }} type="h2">Divider Component Examples</CapHeading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <CapDivider />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <CapDivider orientation="left">Left Text</CapDivider>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <CapDivider orientation="right">Right Text</CapDivider>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <div>
            Vertical Divider
            <CapDivider type="vertical" />
            <a href="#">Link</a>
            <CapDivider type="vertical" />
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    );
  }
}
