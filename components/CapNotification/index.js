/**
*
* CapNotification
*
*/
import React from 'react';
import { notification } from 'antd';
import classNames from 'classnames';
import styled from 'styled-components';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';


import './_capNotification.scss';

const { info, warning, warn, close, destroy } = notification;

const clsPrefix = 'cap-notification-v2';

const BreakWordHeading = styled(CapHeading)`
  word-break: break-word
`;

const openNotification = (props, type) => {
  const { className, message, description, icon, bgColor, ...rest } = props;
  const notificationProps = {
    message: <BreakWordHeading type="h4">{message}</BreakWordHeading>,
    description: <BreakWordHeading type="h6">{description}</BreakWordHeading>,
    ...rest,
    className: classNames(clsPrefix, className, type),
  };

  if (type === 'error') {
    notificationProps.icon = <CapIcon className="error" type="alert" />;
  } else if (type === 'success') {
    notificationProps.icon = <CapIcon className="success" type="check-filled" />;
  } else if (type === 'custom') {
    notificationProps.icon = icon;
    notificationProps.style = {
      borderLeft: `4px solid ${bgColor}`,
    };
  }
  notification.open(notificationProps);
};

const errorNotification = (props) => {
  openNotification(props, 'error');
};

const successNotification = (props) => {
  openNotification(props, 'success');
};

const custom = (props) => {
  openNotification(props, 'custom');
};

const CapNotification = {};

CapNotification.open = openNotification;
CapNotification.success = successNotification;
CapNotification.error = errorNotification;
CapNotification.info = info;
CapNotification.warning = warning;
CapNotification.warn = warn;
CapNotification.close = close;
CapNotification.destroy = destroy;
CapNotification.custom = custom;

export default CapNotification;
