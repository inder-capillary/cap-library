/**
*
* CapCard
*
*/

import React from 'react';
import './_capCustomCard.scss';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Card, Avatar } from "antd";
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import CapHeader from "../CapHeader";
import CapLink from "../CapLink";
import CapSkeleton from '../CapSkeleton';
const { Meta } = Card;

const clsPrefix = "cap-custom-card";
const channels = {
  sms: 'SMS',
  email: 'EMAIL',
  mpush: "MOBILEPUSH",
  call_task: 'CALL_TASK',
};
class CapCustomCard extends React.Component {
    getMpushContent = (templateData) => {
      const mpushData = get(templateData, 'versions.base') || templateData;
      const androidData = get(mpushData, 'ANDROID') || get(mpushData, 'androidContent');
      const iosData = get(mpushData, 'IOS') || get(mpushData, 'iosContent');
      let title = get(androidData, 'title');
      let description = get(androidData, 'message');
      let actionText1 = get(androidData, 'expandableDetails.ctas[0].actionText');
      let actionText2 = get(androidData, 'expandableDetails.ctas[1].actionText');

      let hasImage = get(androidData, 'expandableDetails.style') === "BIG_PICTURE";
      let image;
      if (hasImage) {
        image = get(androidData, 'expandableDetails.image');
      }
      if (isEmpty(androidData)) {
        title = get(iosData, 'title');
        description = get(iosData, 'message');
        actionText1 = get(iosData, 'expandableDetails.ctas[0].actionLabel');
        actionText2 = get(iosData, 'expandableDetails.ctas[0].actionLabel2');
        hasImage = get(iosData, 'expandableDetails.style') === "BIG_PICTURE";
        if (hasImage) {
          image = get(iosData, 'expandableDetails.image');
        }
      }
      const preview = {};
      preview.content = (
        <div>
          <CapHeader size="small" title={title} description={description} />
          {hasImage && <img src={image} alt="mpush" />}
          {!isEmpty(androidData)
          && (
            <div style={{marginTop: '8px'}}>
              {actionText1 && <CapLink title={actionText1} style={{display: 'inline-block'}} />}
              {actionText2 && <CapLink title={actionText2} style={{display: 'inline-block', marginLeft: '24px'}} />}
            </div>
          )}
        </div>
      );
      if (isEmpty(androidData)) {
        preview.iosButtons = (
          (
            <div className="ios-action-buttons">
              <div className="ios-action-label">
                <CapLink title={actionText1} />
              </div>
              <div className="ios-action-label">
                <CapLink title={actionText2} />
              </div>
            </div>
          )
        );
      }
      return preview;
    }

    getCardContent = () => {
      const { content, url, width, height } = this.props;
      const type = this.props.type.toUpperCase();
      switch (type) {
        case channels.sms:
        case channels.call_task:
          return <Meta description={content} />;
        case channels.email:
          return <Meta description={url ? <img width={width || 244} height={height || 279} src={url} alt={url} /> : content || <CapSkeleton loading />} />;
        case channels.mpush: {
          const contentPreview = this.getMpushContent(content);
          const previewMpush = [
            <div className="app-name">
              <CapHeader size="small" title={<span style={{marginLeft: '4px'}}>App name</span>} prefix={<img src="./favicon.ico" alt="" />} />
            </div>,
            <Meta description={contentPreview.content} avatar={<Avatar icon="user" />} />,
          ];
          if (contentPreview.iosButtons) {
            previewMpush.push(contentPreview.iosButtons);
          }
          return previewMpush;
        }
        default:
          return null;
      }
    }

    render() {
      const { className, type, content, hoverOption, url, width, height, prefix, ...rest } = this.props;
      return (
        <Card
          className={ClassNames(clsPrefix, className, type, { 'has-hover-option': hoverOption, 'no-image': !url && content, 'remove-border-radius': prefix})}
          {...rest}
        >
          {this.getCardContent()}
          {hoverOption && (
            <div className="hover-content">
              {hoverOption}
            </div>
          )}
        </Card>
      );
    }
}

CapCustomCard.propTypes = {
  className: PropTypes.string,
  cardList: PropTypes.array,
  type: PropTypes.string,
};

export default CapCustomCard;
