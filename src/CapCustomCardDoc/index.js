
/**
 * CapCustomCardDoc
 */
import React, { Component } from "react";
import { Icon } from 'antd';
import PropertyTable from '../../helpers/PropertyTable';
import { CapCustomCard, CapButton } from "../../components";
import "./info.scss";

import {Message as MessageIcon, View as ViewIcon} from '../../components/assets/icons';
const Card = CapCustomCard.CapCustomCard;
const CardGrid = CapCustomCard.CapCustomCardGrid;
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
export default class CapCustomCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const actions = [<Icon type="setting" />];
    const cardProps = {
      icon: <MessageIcon />,
      title: "Title",
      content: "message content",
      options: <ViewIcon />,
      key: 'card',
      actions,
    };
    const cardGridProps = [
      {
        icon: <MessageIcon />,
        title: "Title - 1",
        content: "Get YLG's Beauty Secrets Card & avail 2x beauty services for half the price across YLG Salon. Visit Nearest YLG Salon to know more. t {{optout}}",
        options: <ViewIcon />,
        key: 'prop - 1',
        hoverOption: <CapButton>Edit</CapButton>,

      },
      {
        icon: <MessageIcon />,
        title: "Title - 2",
        content: "Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British Design. Up to 75%OFF at the F&F Summer Sale. Don't miss out on the best styles. Better quality, Better Price , British ",
        options: <ViewIcon />,
        key: 'prop - 2',
        hoverOption: <CapButton>Edit</CapButton>,
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
