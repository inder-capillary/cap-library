/**
* CapIllustrationDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapIllustration } from "../../components";
import messageIllustration from '../../components/assets/images/messageIllustration.svg';
import "./info.scss";
const infoData = [
  {
    key: 1,
    property: "buttonLabel",
    description: "name of the button",
    type: "string",
    default: "none",
  },
  {
    key: 2,
    property: "onClick",
    description: "button click event",
    type: "function",
    default: "none",
  },
  {
    key: 3,
    property: "illustrationImage",
    description: "image need to pass",
    type: "string",
    default: "",
  },
  {
    key: 4,
    property: "description",
    description: "description of illustration",
    type: "string",
    default: "none",
  },
  {
    key: 4,
    property: "title",
    description: "title of illustration",
    type: "string",
    default: "none",
  },
];

export default class CapIllustrationDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  getIllustrationProps = {
    buttonLabel: "New message",
    onClick: () => { },
    illustrationImage: messageIllustration,
    title: "Create your first message",
    description: "There are no messages in this campaign",
  };

  render() {
    return (
      <div className="cap-illustration-info">
        <div className="cap-illustration-showcase">
          <CapIllustration {...this.getIllustrationProps} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
