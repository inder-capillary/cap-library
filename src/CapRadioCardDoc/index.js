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
    description: "array of objects, contain title,content,icon",
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

export default class CapRadioCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  state={ mColor: '', vColor: '', selected: 'none' }

  onChange=(e) => {
    if (e.target.value === 0) {
      this.setState({mColor: "white", vColor: '', selected: 0});
    } else if (e.target.value === 3) {
      this.setState({vColor: "white", mColor: '', selected: 3});
    } else {
      this.setState({vColor: '', mColor: '', selected: 'none'});
    }
  }

  render() {
    const panes = [{title: "Outbound", content: "Sending an outbound message is like blasting the message or broadcasting the message to a pre-defined set of users", icon: <Message color={this.state.mColor} />},
      {title: "Dynamic", content: "for sending messages to users based on their actions in real time"}, {title: "Survey", content: "for taking survey or feedback from the audience"}, {title: "Referal", content: "for sending messages to acquire new users through existing customers", icon: <View color={this.state.vColor} />}];
    return (
      <div className="cap-radio-card-info">
        <div className="cap-radio-card-showcase">
          <CapRadioCard panes={panes} onChange={this.onChange} selected={this.state.selected} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
