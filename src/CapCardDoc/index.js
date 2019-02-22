/**
* CapCardDoc
*/
import React, { Component } from "react";

import PropertyTable from '../../helpers/PropertyTable';
import CapCard from "../../components/CapCard/index";

// import CapIcon from "../../components/CapIcon";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "cardList",
    description: "Card List is array of Object which has property of title, content, viewIcon and moreIcon, hover (default as false), onClick(Hover on Click event)",
    type: "Array<object>",
    default: "-",
  },
  {
    key: 2,
    property: "type",
    description: "type of card [SMS ,EMAIL, WeChat, Mpush]",
    type: "string",
    default: "-",
  },
  // {
  //   key: 1,
  //   property: "actions",
  //   description: "The action list, shows at the bottom of the Card.",
  //   type: "Array<ReactNode>",
  //   default: "-",
  // },
  // {
  //   key: 2,
  //   property: "activeTabKey",
  //   description: "Current TabPane's key",
  //   type: "string",
  //   default: "-",
  // },
  // {
  //   key: 3,
  //   property: "headStyle",
  //   description: "Inline style to apply to the card head",
  //   type: "object",
  //   default: "-",
  // },
  // {
  //   key: 4,
  //   property: "bodyStyle",
  //   description: "Inline style to apply to the card content",
  //   type: "object",
  //   default: "-",
  // },
  // {
  //   key: 5,
  //   property: "bordered",
  //   description: "Toggles rendering of the border around the card",
  //   type: "boolean",
  //   default: "true",
  // },
  // {
  //   key: 6,
  //   property: "cover",
  //   description: "Card cover",
  //   type: "ReactNode",
  //   default: "-",
  // },
  // {
  //   key: 7,
  //   property: "defaultActiveTabKey",
  //   description: "Initial active TabPane's key, if activeTabKey is not set.",
  //   type: "string",
  //   default: "-",
  // },
  // {
  //   key: 8,
  //   property: "extra",
  //   description: "Content to render in the top-right corner of the card",
  //   type: "string|ReactNode",
  //   default: "-",
  // },
  // {
  //   key: 9,
  //   property: "hoverable",
  //   description: "Lift up when hovering card",
  //   type: "boolean",
  //   default: "false",
  // },
  // {
  //   key: 10,
  //   property: "loading",
  //   description: "Shows a loading indicator while the contents of the card are being fetched",
  //   type: "boolean",
  //   default: "false",
  // },
  // {
  //   key: 11,
  //   property: "tabList",
  //   description: "List of TabPane's head.",
  //   type: "Array<{key: string, tab: ReactNode}>",
  //   default: "-",
  // },
  // {
  //   key: 12,
  //   property: "size",
  //   description: "Size of card",
  //   type: "default | small",
  //   default: "default",
  // },
  // {
  //   key: 13,
  //   property: "title",
  //   description: "Card title",
  //   type: "string|ReactNode",
  //   default: "-",
  // },
  // {
  //   key: 14,
  //   property: "type",
  //   description: "Card style type, can be set to inner or not set",
  //   type: "string",
  //   default: "-",
  // },
  // {
  //   key: 15,
  //   property: "onTabChange",
  //   description: "Callback when tab is switched",
  //   type: "(key) => void",
  //   default: "-",
  // },
];

export default class CapCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const cardList = [{content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
      title: "20% off on footwear",
      hover: true,
      viewIcon: true}, {content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
      title: "20% off on footwear",
      viewIcon: true}, {content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
      title: "20% off on footwear",
      viewIcon: true}];
    return (
      <div className="cap-card-info">
        <div className="cap-card-showcase">

        SMS Card:

          <CapCard cardList={cardList} type="SMS" />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
