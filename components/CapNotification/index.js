/**
*
* CapNotification
*
*/
import React from 'react';
import { notification } from 'antd';
import classNames from 'classnames';
import { CapHeading, CapIcon } from '../index';

import './_capNotification.scss';

const { info, warning, warn, close, destroy } = notification;

const clsPrefix = 'cap-notification-v2';

const openNotification = (props, type) => {
  const { className, message, description, ...rest } = props;
  const notificationProps = {
    message: <CapHeading type="h4">{message}</CapHeading>,
    description: <CapHeading type="h6">{description}</CapHeading>,
    ...rest,
    className: classNames(clsPrefix, className, type),
  };
  if (type === 'error') {
    notificationProps.icon = <CapIcon className="error" type="alert" />;
  } else if (type === 'success') {
    notificationProps.icon = <CapIcon className="success" type="check-filled" />;
  }
  notification.open(notificationProps);
};

const errorNotification = (props) => {
  openNotification(props, 'error');
};

const successNotification = (props) => {
  openNotification(props, 'success');
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

export default CapNotification;
