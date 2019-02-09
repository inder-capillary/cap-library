
/**
 * CapCardDoc
 */
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapCard } from "../../components";
import "./info.scss";
import {Message as MessageIcon, View as ViewIcon} from '../../components/assets/icons';
const Card = CapCard.CapCard;
const CardGrid = CapCard.CapCardGrid;
const infoData = [
  {
    key: 0,
    property: "key",
    description: "-",
    type: "string",
    default: "-",
    required: "true",
  },
  {
    key: 1,
    property: "title",
    description: "-",
    type: "string | react node ",
    default: "-",
    required: "true",
  },
  {
    key: 2,
    property: "content",
    description: "-",
    type: "string | react node ",
    default: "-",
    required: "-",
  },
  {
    key: 3,
    property: "icon",
    description: "-",
    type: " react node ",
    default: "-",
    required: "-",
  },
  {
    key: 4,
    property: "options",
    description: "react component such as popover or preiview icon",
    type: " react node ",
    default: "-",
    required: "-",
  },
];
const infoDataGrid = [
  {
    key: 1,
    property: "cardDataList",
    description: "an array od CapGrid props",
    type: "array of objects ",
    default: "-",
    required: "true",
  },
];
export default class CapCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const cardProps = {
      icon: <MessageIcon />,
      title: "Title",
      content: "message content",
      options: <ViewIcon />,
      key: 'card',
    };
    const cardGridProps = [
      {
        icon: <MessageIcon />,
        title: "Title - 1",
        content: "message content 1",
        options: <ViewIcon />,
        key: 'prop - 1',
      },
      {
        icon: <MessageIcon />,
        title: "Title - 2",
        content: "message content 2",
        options: <ViewIcon />,
        key: 'prop - 2',
      },
      {
        icon: <MessageIcon />,
        title: "Title - 3",
        content: "message content 3",
        options: <ViewIcon />,
        key: 'prop - 3',
      },
    ];
    return (
      <div className="cap-card-info">
        <div className="cap-card-showcase">
          Card:
          <Card {...cardProps} />

          Card grid:
          <CardGrid cardDataList={cardGridProps} />
        </div>
        <PropertyTable data={infoData} title="Card Props" />
        <PropertyTable data={infoDataGrid} title="Card grid Props" />
      </div>
    );
  }
}
