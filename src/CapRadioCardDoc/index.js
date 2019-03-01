/**
* CapRadioCardDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapRadioCard } from "../../components";
import "./info.scss";
import { Message, View } from '../../components/assets/icons/index';

const infoData = [
  {
    key: 1,
    property: "onChange",
    description: "OnChange will set color and selected state",
    type: "function",
    default: "-",
  },
  {
    key: 2,
    property: "panes",
    description: "array of objects, that contain title,content,renderIcon. More information is given in the table below.",
    type: "array",
    default: "-",
  },
  {
    key: 3,
    property: "selected",
    description: "-",
    type: "any",
    default: "none",
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
    property: "renderIcon",
    description: "Icon to be displayed on radio card (optional). Icon should be of like a render prop which will accept selected as props. Based on selected, icon should handle its change of color",
    type: "Function. Eg: ({ selected }) => <View selected={selected} />",
    default: "-",
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
        renderIcon: ({ selected }) => <Message selected={selected} />,
        value: 'outbound',
      },
      {
        title: "Dynamic",
        content: "for sending messages to users based on their actions in real time",
        value: 'dynamic',
      },
      {
        title: "Survey",
        content: "for taking survey or feedback from the audience",
        value: 'survey',
      },
      {
        title: "Referral",
        content: "for sending messages to acquire new users through existing customers",
        renderIcon: ({ selected }) => <View selected={selected} />,
        value: 'referral',
      }];
    return (
      <div className="cap-radio-card-info">
        <div className="cap-radio-card-showcase">
          <CapRadioCard panes={panes} onChange={this.onChange} selected={selectedValue} />
        </div>
        <PropertyTable data={infoData} />
        <PropertyTable title="Panes Object properties" data={panesData} />
      </div>
    );
  }
}
