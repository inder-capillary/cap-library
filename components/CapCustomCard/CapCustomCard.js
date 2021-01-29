/**
*
* CapCard
*
*/

import React, { Fragment } from 'react';
import './_capCustomCard.scss';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Card, Avatar } from "antd";
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import CapHeader from "../CapHeader";
import CapLink from "../CapLink";
import CapSkeleton from '../CapSkeleton';
import CapHeading from '../CapHeading';
import { CAP_WHITE } from '../styled/variables';
import CapLabel from '../CapLabel';
const { Meta } = Card;

const clsPrefix = "cap-custom-card";
const channels = {
  sms: 'SMS',
  email: 'EMAIL',
  mpush: "MOBILEPUSH",
  call_task: 'CALL_TASK',
  wechat: 'WECHAT',
  facebook: 'FACEBOOK',
  line: 'LINE',
  viber: 'VIBER',
};

const getMpushContent = (templateData) => {
  const mpushData = get(templateData, 'versions.base', templateData);
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
};

const getWeChatContent = (content) => {
  if (typeof content === "object") {
    return getRichMediaPreview(content);
  }
  return <div className="map-template">{decodeURIComponent(content)}</div>;
};

const getRichMediaPreview = (contentDetails) => {
  const previewMsg = [];
  const content = JSON.parse(JSON.stringify(contentDetails));
  const mediaListLength = content.length;
  const contentData = content[0];
  previewMsg.push(
    <div className="richmedia-image-container">
      <img alt="default" width="100%" height="136px" src={contentData.image_url} />
      {mediaListLength !== 1
        && (
          <div className="name-container">
            <CapHeading type="h4" style={{color: CAP_WHITE}}>{contentData.title}</CapHeading>
          </div>
        )
      }
    </div>
  );
  if (mediaListLength === 1) {
    previewMsg.push(
      <div className="name-container-with-abstract">
        <CapHeading type="h4">{contentData.title}</CapHeading>
        <CapLabel type="label9">{contentData.digest}</CapLabel>
      </div>
    );
  }
  content.splice(1, 2).forEach((data) => {
    previewMsg.push(
      <div className="additional-richmedia-container">
        <div><CapLabel type="label9" style={{width: '170px', top: '12px', position: 'relative'}}>{data.title}</CapLabel></div>
        <img alt="default" width="40px" height="40px" src={data.image_url} />
      </div>
    );
  });
  return (
    <div className="richmedia-template">
      {previewMsg}
    </div>
  );
};

const getFacebookPreview = (FBDynamicComponent = () => <Fragment />) => (
  <div className="facebook-card-body">
    <Meta description={<CapSkeleton loading avatar paragraph={{ rows: 3, width: [36, 140, 80] }} />} />
    <div className="dynamic-content-section">
      <div className="centered-item">
        <FBDynamicComponent />
      </div>
    </div>
  </div>
);

const getCardContent = (props) => {
  const {
    content,
    url,
    width,
    height,
    FBDynamicComponent,
    buttonText,
    fbType,
  } = props;
  const type = (props.type || "").toUpperCase();
  switch (type) {
    case channels.sms:
    case channels.call_task:
      return <Meta description={content} />;
    case channels.email:
    case channels.line:
      return <Meta description={url ? <img width={width || 244} height={height || 279} src={url} alt={url} /> : content || <CapSkeleton loading />} />;
    case channels.viber:
      return <>
        <Meta
          className={ClassNames("truncate-text-viber", { "truncate-text-with-image": url, "truncate-text-with-button": buttonText })}
          description={content || <CapSkeleton loading />}
        />
        {url && <Meta style={{paddingTop: '14px'}} description={<img width={width || 215} height={height || 103} src={url} alt={url} />} />}
        {buttonText && <Meta style={{paddingTop: '14px'}} className={ClassNames({'button-content': buttonText})} description={<div>{buttonText}</div>} />}
        </>;
    case channels.mpush: {
      const contentPreview = getMpushContent(content);
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
    case channels.wechat: {
      const contentPreview = getWeChatContent(content);
      const previewWeChat = [
        <div className="wechat-card-body">
          {contentPreview}
        </div>,
      ];
      return previewWeChat;
    }
    case channels.facebook: {
      if (fbType === "list") {
        return <Meta description={url ? <img width={width || 244} height={height || 279} src={url} alt={url} /> : content || <CapSkeleton loading />} />;
      }
      return getFacebookPreview(FBDynamicComponent);
    }
    default:
      return content;
  }
};

function CapCustomCard(props) {
  const { className, type, content, hoverOption, url, width, height, cardTop, ...rest } = props;
  return (
    <Card
      className={ClassNames(clsPrefix, className, type, { 'has-hover-option': hoverOption, 'no-image': !url && content, 'remove-border-radius': cardTop})}
      {...rest}
    >
      {getCardContent(props)}
      {hoverOption && (
        <div className="hover-content">
          {hoverOption}
        </div>
      )}
    </Card>
  );
}

CapCustomCard.propTypes = {
  className: PropTypes.string,
  cardList: PropTypes.array,
  type: PropTypes.string,
  FBDynamicComponent: PropTypes.func,
  buttonText: PropTypes.string,
  fbType: PropTypes.string,
};

CapCustomCard.getRichMediaPreview = getRichMediaPreview;
export default CapCustomCard;
