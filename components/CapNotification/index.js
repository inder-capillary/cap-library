/**
*
* CapNotification
*
*/
import React from 'react';
import { notification } from 'antd';
import classNames from 'classnames';
import { CapHeading } from '../index';

const { info, warning, warn, success, close, destroy } = notification;

const clsPrefix = 'cap-notification-v2';

const openNotification = (props, type) => {
  const { className, message, description, ...rest } = props;
  notification.open({
    message: <CapHeading type="h4">{message}</CapHeading>,
    description: <CapHeading type="h6">{description}</CapHeading>,
    ...rest,
    className: classNames(clsPrefix, className, type),
  });
};

const errorNotification = (props) => {
  openNotification(props, 'error');
};


const CapNotification = {};

CapNotification.open = openNotification;
CapNotification.success = success;
CapNotification.error = errorNotification;
CapNotification.info = info;
CapNotification.warning = warning;
CapNotification.warn = warn;
CapNotification.close = close;
CapNotification.destroy = destroy;

export default CapNotification;
