/**
* CapStepsAccordianDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapStepsAccordian, CapHeader } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "items",
    description: "Items to render in panel",
    type: `Array[Object{header: React.node, content: React.node, key: String}]`,
    default: "-",
  },
];

export default class CapStepsAccordianDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-steps-accordian-info">
        <div className="cap-steps-accordian-showcase">
          <CapStepsAccordian
            items={[
              {
                header: <CapHeader
                  size="regular"
                  description="Selcting the right audience goes a long way in attributing the ROI"
                  title="Audience"
                />,
                content: <div>My content</div>,
                key: 1,
                completed: 'true',
              },
              {
                header: <CapHeader
                  size="regular"
                  description="Choose the time when message is sent"
                  title="Schedule"
                />,
                content: <div>My content 2</div>,
                key: 2,
              },
            ]}
            showNumberSteps
          />
        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/collapse/#header"> Collapse </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
