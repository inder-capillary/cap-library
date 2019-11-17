/**
* CapCardDoc
*/
import React, { Component } from "react";

import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapCustomCard, CapButton, CapHeading, CapIcon, CapLink} from "../../components";
import "./info.scss";

const { CapCustomCardList } = CapCustomCard;

const infoData = [
  {
    key: 1,
    property: "cardList",
    description: "Card List is array of Object which has property of title, content, hoverOption: <CapButton>Select</CapButton>(default as false), onClick(Hover on Click event)",
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
];


const cardInfoData = [
  {
    key: 1,
    property: "actions",
    description: "The action list, shows at the bottom of the Card.",
    type: "Array<ReactNode>",
    default: "-",
  },
  {
    key: 2,
    property: "activeTabKey",
    description: "Current TabPane's key",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "headStyle",
    description: "Inline style to apply to the card head",
    type: "object",
    default: "-",
  },
  {
    key: 4,
    property: "bodyStyle",
    description: "Inline style to apply to the card content",
    type: "object",
    default: "-",
  },
  {
    key: 5,
    property: "bordered",
    description: "Toggles rendering of the border around the card",
    type: "boolean",
    default: "true",
  },
  {
    key: 6,
    property: "cover",
    description: "Card cover",
    type: "ReactNode",
    default: "-",
  },
  {
    key: 7,
    property: "defaultActiveTabKey",
    description: "Initial active TabPane's key, if activeTabKey is not set.",
    type: "string",
    default: "-",
  },
  {
    key: 8,
    property: "extra",
    description: "Content to render in the top-right corner of the card",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 9,
    property: "hoverable",
    description: "Lift up when hovering card",
    type: "boolean",
    default: "false",
  },
  {
    key: 10,
    property: "loading",
    description: "Shows a loading indicator while the contents of the card are being fetched",
    type: "boolean",
    default: "false",
  },
  {
    key: 11,
    property: "tabList",
    description: "List of TabPane's head.",
    type: "Array<{key: string, tab: ReactNode}>",
    default: "-",
  },
  {
    key: 12,
    property: "size",
    description: "Size of card",
    type: "default | small",
    default: "default",
  },
  {
    key: 13,
    property: "title",
    description: "Card title",
    type: "string|ReactNode",
    default: "-",
  },
  {
    key: 14,
    property: "type",
    description: "Card style type, can be set to inner or not set",
    type: "string",
    default: "-",
  },
  {
    key: 15,
    property: "onTabChange",
    description: "Callback when tab is switched",
    type: "(key) => void",
    default: "-",
  },
  {
    key: 16,
    property: "type",
    description: "type of card [SMS ,EMAIL, WeChat, Mpush]",
    type: "string",
    default: "-",
  },
];

const cardListSms = [
  {
    content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8 Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8 Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8 Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
    title: "20% off on footwear with extra test long log text",
    hoverOption: <CapButton>Show Preview</CapButton>,
    extra: [<CapIcon type="eye" />],
  },
  {
    content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
    title: "20% off on footwear",
  },
  {
    content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
    title: "20% off on footwear",
    hoverOption: <CapButton>Select</CapButton>,
  },
  {
    content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
    title: "20% off on footwear",
  },
  {
    content: 'Hi Sakshi Shop and Share! “FAMILY & FRIENDS” offer is back. 30% off on Clothings, 50% off on shoes. BOGO on accesories. Show the voucher at the time of purchase to avail benefits until 8t Show the voucher at the time of purchase to avail benefits until 8 Show the voucher at the time of purchase to avail benefits until 8',
    title: "20% off on footwear",
    hoverOption: <CapButton>Select</CapButton>,
  },
];

const cardListEmail = [
  {
    url: "https://s3.amazonaws.com/test_files_cache_bkp/intouch_creative_assets/dfa5c1e2fd001b1fed8a.png",
    actions: [
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CapButton isAddBtn type="flat">Add Incentive</CapButton>
          {' '}
          <CapIcon size="s" type="eye" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CapButton isAddBtn type="flat">Add Incentive</CapButton>
          {' '}
          <CapIcon size="s" type="eye" />
        </div>
      </div>,
    ],
    hoverOption: <CapButton> Select </CapButton>,
    title: "20% off on footwear test long log text",
    extra: [<CapIcon type="eye" />],
    cardTop: (
      <CapHeading
        type="h5"
        style={{ padding: '24px 16px',
          width: '276px',
          height: '112px',
          border: 'solid 1px #dfe2e7',
          borderBottom: 'solid 0px' }}>
            Customers who visit
        {<CapLink title="select store" style={{display: 'inline-block'}} />}
            & will buy 24 products will receive below content
      </CapHeading>),
  },
  {
    url: "https://s3.amazonaws.com/test_files_cache_bkp/intouch_creative_assets/dfa5c1e2fd001b1fed8a.png",
    hoverOption: <CapButton>Select</CapButton>,
    title: "20% off on footwear",
    extra: [<CapIcon type="eye" />],
  },
  {
    hoverOption: <CapButton>Select</CapButton>,
    title: "40% off on footwear",
    extra: [<CapIcon type="eye" />],
  },
];

const CustomDiv = styled.div`
margin-top: 24px;
margin-left: 16px;
`;

export default class CapCustomCardDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-card-info">
        <div className="cap-card-showcase">
          <CapHeading type="h3">Single Email Card</CapHeading>
          <CapCustomCard {...cardListEmail[0]} type="Email" />
          <CustomDiv>
            <CapHeading type="h3">Sms Card  List</CapHeading>
          </CustomDiv>
          <CapCustomCardList cardList={cardListSms} type="SMS" />
          <CustomDiv>
            <CapHeading type="h3">Email Card  List</CapHeading>
          </CustomDiv>
          <CustomDiv>
            <CapCustomCardList cardList={cardListEmail} type="Email" />
          </CustomDiv>
          <CustomDiv>
            when there is no url image given
            <CapCustomCard {...cardListEmail[2]} type="Email" />
          </CustomDiv>
        </div>
        <PropertyTable data={infoData} title="CapCustomCard.CapCustomCardList" />
        <PropertyTable data={cardInfoData} title="Card Props" />
      </div>
    );
  }
}
