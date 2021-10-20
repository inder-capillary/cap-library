import React from 'react';
import PropTypes from 'prop-types';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import CapTooltipWithInfo from '../CapTooltipWithInfo';

const iconTextMap = {
  SMS: 'SMS',
  EMAIL: 'Email',
  MPUSH: 'Push notification',
  LINE: 'Line',
  WECHAT: 'WeChat',
  TOP_X_CHANNEL: 'Top X Channel',
  CHANNEL_PRIORITY: 'Channel priority',
  AB_TESTING: 'A/B Testing',
  WAIT: 'Time based wait',
  WAIT_TILL_EVENT: 'Wait unitl event',
  JOIN: 'Join',
  ENGAGEMENT_SPLIT: 'Engagement split',
  SPLIT: 'Desicition split',
  userAttributeChange: 'User attribute change',
  api: 'API call',
};

const GraphBlockNode = (props) => {
  const { id, iconType, color, onClickActionIcon, isConfigured, blockType, meta } = props;
  const label1 = isConfigured ? (
    null
  ) : 'Configure:';
  const label2 = isConfigured ? (
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
      <CapLabel type="label2" style={{marginRight: '4px'}}>{iconTextMap[blockType]}</CapLabel>
      <CapTooltipWithInfo title={meta.content} />
    </div>
  ) : iconTextMap[blockType];

  const actionNodes = [{
    type: 'settings',
    position: 'top-right',
    onClick: onClickActionIcon,
  }, {
    type: 'delete',
    position: 'top-left',
    onClick: onClickActionIcon,
  }, {
    type: 'copy',
    position: 'bottom-right',
    onClick: onClickActionIcon,
  }];
  return (
    <CapAdvancedIcon
      type={iconType}
      backgroundProps={{
        backgroundColor: color,
        opacity: isConfigured ? 1 : 0.5,
      }}
      svgProps={{
        height: '24px',
        width: '24px',
        viewBox: '0 0 24 24',
      }}
      actionNodes={actionNodes}
      id={id}
      positionLabel
      label1={<CapLabel type="label1" className="margin-t-10">{label1}</CapLabel>}
      label2={<CapLabel type="label2">{label2}</CapLabel>}
    />
  );
};

GraphBlockNode.propTypes = {
  id: PropTypes.string,
  iconType: PropTypes.string,
  onClickActionIcon: PropTypes.func,
  isConfigured: PropTypes.bool,
  meta: PropTypes.object,
  blockType: PropTypes.string,
  color: PropTypes.string,
};

export default GraphBlockNode;
