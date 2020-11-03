/**
* CapNotificationDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
//import PropertyTable from '../../helpers/PropertyTable';
import { CapSnackBar, CapButton, CapHeading } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

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
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>API</b>
          {' '}
          <br></br>
          <Heading>CapSnackBar.success(config)</Heading>
          <Heading>CapSnackBar.error(config)</Heading>
          <Heading>CapSnackBar.info(config)</Heading>
          <Heading>CapSnackBar.warning(config)</Heading>

          <b>Props allowed: </b>
          <br />
          <b>content: </b>
HTML element to be displayed as message.
          <br />
          <b>duration: </b>
duration for which message is displayed. deafults to 1.5s for messages without close Button. A long time(1000s) for messages with close button.
          <br />
          <b>onClose: </b>
function called on close of message.
          <br />
          <b>showCloseIcon: </b>
Boolean, whether to display close button.
          <br />
        </div>
      </div>
    );
  }
}
