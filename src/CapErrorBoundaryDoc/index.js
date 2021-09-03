/**
 *
 * CapErrorBoundaryDoc
 *
 */

import React, { Component } from "react";
import PropertyTable from "../../helpers/PropertyTable";
import CapErrorBoundary from "../../components/CapErrorBoundary";

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
    property: "errorHandler",
    description: "handle on error",
    type: "function",
    default: "()=>{}",
  },
  {
    key: 8,
    property: "refreshThreshold",
    description: "Threshold count for refresh click",
    type: "number",
    default: "3",
  },
  {
    key: 9,
    property: "isApiErrorBoundary",
    description:
      "To make act as api error boundary. In api error boundary onRefreshClick should be handled to recall failed api",
    type: "boolean",
    default: "false",
  },
  {
    key: 10,
    property: "isApiError",
    description:
      "if isApiErrorBoundary as true and it make show illustration on api error",
    type: "boolean",
    default: "false",
  },
];

const ErrorScreen = () => <div></div>;

export default class CapErrorStateIllustrationDoc extends Component {
  render() {
    return (
      <div>
        <CapErrorBoundary
          className="error-boundary-class"
          refreshText="Refresh"
          refreshTitle="There was an issue loading this section"
          expiryTitle="This doesn’t seem to be working."
          expiryDescription="Please contact Capillary support to resolve this."
          isApiErrorBoundary
          isApiError
        >
          <ErrorScreen />
        </CapErrorBoundary>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
