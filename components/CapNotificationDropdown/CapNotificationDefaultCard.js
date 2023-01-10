/**
*
* CapNotificationDefaultCard
*
*/

import React from 'react';
import moment from 'moment';
import compileMessage from '@capillarytech/cap-ui-utils/utils/compileHandlebars';
import PropTypes from 'prop-types';
import CapIcon from '../CapIcon';
import CapColumn from '../CapColumn';
import CapRow from '../CapRow';
import CapHeading from '../CapHeading';
import CapLabel from '../CapLabel';
import CapButton from '../CapButton';
import CapLink from '../CapLink';
import { DATE_FORMAT } from './constants';

import { CAP_COLOR_02, CAP_GREEN02 } from '../styled/variables';

const iconBackgroundColorMap = {
  alert: CAP_COLOR_02,
  warning: '#FCE8F5',
  notification: CAP_GREEN02,
};
const iconTypeMap = {
  alert: 'warning-circle',
  warning: 'critical-warning',
  notification: 'tick-outlined',
};

const CapNotificationDefaultCard = (props) => {
  const {notification, history, onClickNotification, ...rest} = props;
  const {title = '', message = '', cta, isRead = false, updatedAt = '', viewUrl = '', severity, messageContext, _id, iconProps} = notification;

  const handleClick = () => {
    onClickNotification(!isRead ? _id : null)();
    if (viewUrl) {
      history.push(viewUrl);
    }
  };

  const getCTA = (touchpoint) => {
    if (!touchpoint) return null;
    const {label, type, extendValidityUrl} = touchpoint;
    const handleButtonClick = (event) => {
      event.stopPropagation();
      onClickNotification(!isRead ? _id : null)();
      if (extendValidityUrl) {
        history.push(extendValidityUrl);
      }
    };
    if (type === 'button') {
      return <CapButton onClick={handleButtonClick}>{label}</CapButton>;
    } if (type === 'link') {
      return <CapLink href={extendValidityUrl} onClick={handleButtonClick} className="notification-cta-link" title={label} />;
    }
    return null;
  };

  return (
    <div className="notification-item" onClick={handleClick} {...rest}>
      <CapRow className="notification-post-container">
        <CapColumn span={2} className="notification-icon">
          <CapIcon
            withBackground
            backgroundProps={{
              backgroundColor: iconBackgroundColorMap[severity],
            }}
            svgProps={{
              width: 24,
              height: 24,
            }}
            type={iconTypeMap[severity]}
            {...iconProps}
          />
        </CapColumn>
        <CapColumn span={22} className="notification-title-content-space">
          <CapRow className="notification-title-row">
            <CapHeading type={isRead ? "h5" : "h4"} className="notification-title" dangerouslySetInnerHTML={{__html: compileMessage(title, messageContext)}} />
          </CapRow>
          <CapRow className="notification-content-row">
            <CapHeading type="h6" className="notification-content" dangerouslySetInnerHTML={{__html: compileMessage(message, messageContext)}} />
          </CapRow>
          <CapRow>
            <CapColumn span={18}>
              <CapHeading>
                {cta.map((touchpoint) => getCTA(touchpoint))}
              </CapHeading>
            </CapColumn>
            <CapColumn span={6}>
              <CapLabel className="notification-date">
                {moment(updatedAt).format(DATE_FORMAT)}
              </CapLabel>
            </CapColumn>
          </CapRow>
        </CapColumn>
      </CapRow>
      {
        !isRead && <div className="is-read-dot" />
      }
    </div>
  );
};

CapNotificationDefaultCard.propTypes = {
  history: PropTypes.object,
  notification: PropTypes.object,
  onClickNotification: PropTypes.func,
};

export default CapNotificationDefaultCard;
