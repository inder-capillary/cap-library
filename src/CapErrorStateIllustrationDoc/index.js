/**
 *
 * CapErrorStateIllustrationDoc
 *
 */

import React, { Component } from "react";
import PropertyTable from "../../helpers/PropertyTable";
import CapErrorStateIllustration from "../../components/CapErrorStateIllustration";

const infoData = [
  {
    key: 1,
    property: "className",
    description: "classname for outer container",
    type: "string",
    default: "''",
  },
  {
    key: 2,
    property: "refreshText",
    description: "refresh button text",
    type: "string",
    default: "''",
  },
  {
    key: 3,
    property: "expiryTitle",
    description: "expiry title text",
    type: "string",
    default: "''",
  },
  {
    key: 4,
    property: "refreshTitle",
    description: "refresh title text",
    type: "string",
    default: "''",
  },
  {
    key: 5,
    property: "expiryDescription",
    description: "expiry description text",
    type: "string",
    default: "''",
  },
  {
    key: 6,
    property: "onRefreshClick",
    description: "handle on refresh button click action",
    type: "function",
    default: "()=>{}",
  },
  {
    key: 7,
    property: "isRefreshExpired",
    description: "is refresh expired",
    type: "boolean",
    default: "false",
  },
];
export default class CapErrorStateIllustrationDoc extends Component {
  render() {
    return (
      <div>
        <div>Error state illustration if not expired</div>
        <CapErrorStateIllustration
          className="error-state-class"
          refreshText="Refresh"
          refreshTitle="There was an issue loading this section"
        />
        <div>Error state illustration if expired</div>
        <CapErrorStateIllustration
          className="error-state-class"
          expiryTitle="This doesn’t seem to be working."
          expiryDescription="Please contact Capillary support to resolve this."
          isRefreshExpired
        />
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
