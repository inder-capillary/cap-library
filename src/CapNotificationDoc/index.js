/**
* CapNotificationDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
//import PropertyTable from '../../helpers/PropertyTable';
import { CapNotification, CapButton, CapHeading } from "../../components";
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

const openNotification = (type) => {
  if (type === 'error') {
    CapNotification.error({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
      },
      duration: 0,
    });
  } else {
    CapNotification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
      },
      duration: 0,
    });
  }
};

export default class CapNotificationDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-notification-info">
        <div className="cap-notification-showcase">
          <CapButton type="primary" onClick={() => openNotification()}>default notification box</CapButton>
          <br />
          <br />
          <CapButton type="primary" onClick={() => openNotification('error')}>Error Notification box</CapButton>
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>API</b>
          {' '}
          <br></br>
          <Heading>CapNotification.success(config)</Heading>
          <Heading>CapNotification.error(config)</Heading>
          <Heading>CapNotification.info(config)</Heading>
          <Heading>CapNotification.warning(config)</Heading>
          <Heading>CapNotification.warn(config)</Heading>
          <Heading>CapNotification.open(config)</Heading>
          <Heading>CapNotification.close(key: string)</Heading>
          <Heading>CapNotification.destroy()</Heading>
        </div>
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/notification/#header"> Notification </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
