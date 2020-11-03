/**
* CapNotificationDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapSnackBar, CapButton, CapHeading } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "content",
    description: "content to be displayed in the snackbar",
    type: "element | string",
    default: "-",
  },
  {
    key: 2,
    property: "duration",
    description: "duration for which message is displayed.",
    type: "number",
    default: "1.5s for messages without close button. 1000s for messages with close button",
  },
  {
    key: 3,
    property: "showCloseIcon",
    description: "whether close button is to be displayed",
    type: "boolean",
    default: "false",
  },
  {
    key: 4,
    property: "onClose",
    description: "function to be called on message close",
    type: "function",
    default: "-",
  },
];

const Heading = styled(CapHeading)`
  padding-bottom: 8px;
`;

const infoSnackBar = () => {
  CapSnackBar.info({
    content: (
      <div>
        Task
        <b> info.</b>
      </div>
    ),
    onClose: () => {
      console.log("snack bar closed");
    },
  });
};

const successSnackBar = () => {
  CapSnackBar.success({
    content: (
      <div>
        Task
        <b> success.</b>
      </div>
    ),
    onClose: () => {
      console.log("snack bar closed");
    },
    showCloseIcon: true,
    duration: 5,
  });
};

const errorSnackBar = () => {
  CapSnackBar.error({
    content: (
      <div>
        Task
        <b> error.</b>
      </div>
    ),
    onClose: () => {
      console.log("snack bar closed");
    },
    showCloseIcon: true,
  });
};


const warningSnackBar = () => {
  CapSnackBar.warning({
    content: (
      <div>
        Task
        <b> warning.</b>
      </div>
    ),
    onClose: () => {
      console.log("snack bar closed");
    },
    showCloseIcon: true,
  });
};
/*
Props allowed:
  content: HTML element to be displayed as message.
  duration: duration for which message is displayed. deafults to 1.5s for messages without close Button. A long times(1000s) for messages with close button.
  onClose: function called on close of message.
  showCloseIcon: Boolean, whether to display close button. */

export default class CapSnackBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-notification-info">
        <div className="cap-notification-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/message"> Message </a>
            component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <CapButton type="primary" onClick={infoSnackBar}>default snack bar</CapButton>
          <br />
          <br />
          <CapButton type="primary" onClick={successSnackBar}>success snack box</CapButton>
          <br />
          <br />
          <CapButton type="primary" onClick={errorSnackBar}>error snack box</CapButton>
          <br />
          <br />
          <CapButton type="primary" onClick={warningSnackBar}>warning snack box</CapButton>
          <br />
          <br />
        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>API</b>
          {' '}
          <br></br>
          <Heading>CapSnackBar.success(config)</Heading>
          <Heading>CapSnackBar.error(config)</Heading>
          <Heading>CapSnackBar.info(config)</Heading>
          <Heading>CapSnackBar.warning(config)</Heading>
        </div>
      </div>
    );
  }
}
