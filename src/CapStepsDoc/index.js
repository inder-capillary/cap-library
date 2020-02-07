/**
* CapStepsDoc
*/
import React, { Component } from "react";
import CapSteps from "../../components/CapSteps";
import CapLink from "../../components/CapLink";
import CapDivider from "../../components/CapDivider";

export default class CapStepsDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <CapSteps>
          <CapSteps.CapStep title="Step 1" description="This is a description." />
          <CapSteps.CapStep title="Step 2" description="This is a description." />
          <CapSteps.CapStep title="Step 3" description="This is a description." />
        </CapSteps>
        <CapDivider />
        <CapSteps size="small">
          <CapSteps.CapStep title="Step 1" description="This is a description." />
          <CapSteps.CapStep title="Step 2" description="This is a description." />
          <CapSteps.CapStep title="Step 3" description="This is a description." />
        </CapSteps>
        <CapDivider />
        <div>
          All the props related to CapSteps and CapStep can be found
          <CapLink title="here" href="https://ant.design/components/steps/#API" />
        </div>
      </div>
    );
  }
}
