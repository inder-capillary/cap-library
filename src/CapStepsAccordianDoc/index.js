/**
* CapStepsAccordianDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapStepsAccordian, CapHeader, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "activeKey",
    description: "Key of the active panel",
    type: "string[]|string",
    default: "No default value. In accordion mode, it's the key of the first panel.",
  },
  {
    key: 2,
    property: "items",
    description: "Items is array of objects. Each object contains panel props. The props accepted are described under Items Info table",
    type: "[Object{}]",
    default: "-",
  },
  {
    key: 3,
    property: "defaultActiveKey",
    description: "Key of the initial active panel",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "bordered",
    description: "Toggles rendering of the border around the collapse block",
    type: "boolean",
    default: "true",
  },
  {
    key: 5,
    property: "accordion",
    description: "If true, Collapse renders as Accordion",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "onChange",
    description: "Callback function executed when active panel is changed",
    type: "Function",
    default: "-",
  },
  {
    key: 7,
    property: "expandIcon",
    description: "allow to customize collapse icon",
    type: "(panelProps) => ReactNode",
    default: "-",
  },
  {
    key: 8,
    property: "destroyInactivePanel",
    description: "Destroy Inactive Panel",
    type: "boolean",
    default: "false",
  },
  {
    key: 9,
    property: "showNumberSteps",
    description: "Show numbers as icon insted of caret",
    type: "boolean",
    default: "true",
  },
];

const itemsInfo = [
  {
    key: 1,
    property: "header",
    description: "Title of the panel",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 2,
    property: "key",
    description: "Unique key of the panel",
    type: "string|number",
    default: "-",
  },
  {
    key: 3,
    property: "content",
    description: "Content of the panel.",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 4,
    property: "completed",
    description: "Shows completed tick icon before header. It is used to represent if a step is completed",
    type: "boolean",
    default: "-",
  },
  {
    key: 5,
    property: "disabled",
    description: "If true, panel cannot be opened or closed",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "forceRender",
    description: "Forced render of content on panel, instead of lazy rending after clicking on header",
    type: "boolean",
    default: "false",
  },
  {
    key: 7,
    property: "key",
    description: "Unique key identifying the panel from among its siblings",
    type: "string",
    default: "-",
  },
  {
    key: 8,
    property: "showArrow",
    description: "If false, panel will not show arrow icon",
    type: "boolean",
    default: "true",
  },
];

export default class CapStepsAccordianDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-steps-accordian-info">
        <div className="cap-steps-accordian-showcase">
          <CapHeading type="h3">Default accordian with prop showNumberSteps as true </CapHeading>
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
                completed: true,
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
          />
          <div style={{ marginTop: '24px' }}>
            <CapHeading type="h3">Accordian with prop showNumberSteps as false </CapHeading>
          </div>
          <CapStepsAccordian
            showNumberSteps={false}
            items={[
              {
                header: <CapHeader
                  size="regular"
                  description="Selcting the right audience goes a long way in attributing the ROI"
                  title="Audience"
                />,
                content: <div>My content</div>,
                key: 1,
                completed: true,
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
          />
        </div>
        <PropertyTable data={infoData} />
        <PropertyTable title="Items Info" data={itemsInfo} />
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
