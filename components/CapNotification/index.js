/**
*
* CapNotification
*
*/

import { notification } from 'antd';

const { open, error, info, warning, warn, success, close, destroy } = notification;

const CapNotification = {};

CapNotification.open = open;
CapNotification.success = success;
CapNotification.error = error;
CapNotification.info = info;
CapNotification.warning = warning;
CapNotification.warn = warn;
CapNotification.open = open;
CapNotification.close = close;
CapNotification.destroy = destroy;

export default CapNotification;
