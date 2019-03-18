/**
* CapRadioCardDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapRadioCard, CapIcon } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "onChange",
    description: "Callback function executed on change",
    type: "Function(e => {})",
    default: "-",
  },
  {
    key: 2,
    property: "panes",
    description: "array of objects, that contain title,content,icon. More information is given in the table below.",
    type: "array",
    default: "-",
  },
  {
    key: 3,
    property: "selected",
    description: "selected value. Should be one of the key from array of panes.",
    type: "any",
    default: "-",
  },
];

const panesData = [
  {
    key: 1,
    property: "title",
    description: "Heading of the radio card",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 2,
    property: "content",
    description: "Content show below title",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 3,
    property: "icon",
    description: "CapIcon. On select of any radio card, the icon color will automaticaly become white.",
    type: "ReactNode",
    default: "-",
  },
  {
    key: 4,
    property: "cardHeight",
    description: "Fixed height of each radio card.",
    type: "string",
    default: "120px",
  },
];

export default class CapRadioCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { selectedValue: '' }

  onChange = (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
  }

  render() {
    const { selectedValue } = this.state;
    const panes = [
      {
        title: "Outbound",
        content: "Sending an outbound message is like blasting the message or broadcasting the message to a pre-defined set of users",
        icon: <CapIcon type="communication" />,
        value: 'outbound',
      },
      {
        title: "Dynamic  (I am disabled)",
        content: "for sending messages to users based on their actions in real time",
        value: 'dynamic',
        disabled: true,
      },
      {
        title: "Survey",
        content: "for taking survey or feedback from the audience",
        value: 'survey',
      },
      {
        title: "Referral",
        content: "for sending messages to acquire new users through existing customers",
        icon: <CapIcon type="view" />,
        value: 'referral',
      }];
    return (
      <div className="cap-radio-card-info">
        <div className="cap-radio-card-showcase">
          <CapRadioCard
            defaultValue="referral"
            panes={panes}
            onChange={this.onChange}
            selected={selectedValue}
          />
        </div>
        <PropertyTable data={infoData} />
        <PropertyTable title="Panes Object properties" data={panesData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          Each pane object supports all the props that antd radio button supports
          <a href="https://ant.design/components/radio/#header"> Radio </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
