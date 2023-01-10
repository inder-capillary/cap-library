import React from "react";
import PropTypes from 'prop-types';
import CapMenu from '../CapMenu';
import CapRow from '../CapRow';
import CapHeading from '../CapHeading';
import CapDivider from '../CapDivider';
import CapNotificationDefaultCard from "./CapNotificationDefaultCard";
import './index.scss';

const CapNotificationDropdown = (props) => {
  const { notifications, history, onClickNotification, title, markAsRead, handleMarkAllAsRead, notFound } = props;
  return (
    <CapMenu className="notification-dropdown">
      <CapMenu.Item className="notification-menu-class">
        <CapRow className="notification-header">
          <CapHeading className="notification-header-title" type="h3">{title}</CapHeading>
          {!!notifications.length && <CapHeading className="notification-mark-read" onClick={handleMarkAllAsRead}>{markAsRead}</CapHeading>}
        </CapRow>
        <CapDivider className="notification-divider-top" />
      </CapMenu.Item>
      {notifications.length ? notifications.map((notification, index) => (
        <CapMenu.Item className="notification-item-wrapper" key={index}>
          {notification.notificationType === 'custom' ? notification.notificationTemplate : <CapNotificationDefaultCard notification={notification} history={history} onClickNotification={onClickNotification} />}
          {index !== notifications.length - 1 && (
            <CapDivider className="notification-divider" />
          )}
        </CapMenu.Item>
      )): <CapMenu.Item className="no-notifications">{notFound}</CapMenu.Item>}
    </CapMenu>
  );
};

CapNotificationDropdown.propTypes = {
  history: PropTypes.object,
  notifications: PropTypes.array,
  onClickNotification: PropTypes.func,
  title: PropTypes.string,
  markAsRead: PropTypes.string,
  notFound: PropTypes.string,
  handleMarkAllAsRead: PropTypes.func,
};

export default CapNotificationDropdown;
