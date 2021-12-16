import React from 'react';
import PropTypes from 'prop-types';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import LocaleHoc from '../LocaleHoc';
import { DELETE, SETTINGS, VIEW } from './constants';
import { CAP_COLOR_05 } from '../styled/variables';

const GraphBlockNode = (props) => {
  const {
    configureText,
    id,
    iconType,
    color,
    onClickActionIcon,
    isConfigured,
    nodePreview,
    nodeTitle,
    viewMode,
    userHistoryProps,
  } = props;

  let preview = nodePreview;

  if (!isConfigured && !nodePreview) {
    preview = (
      <>
        <CapLabel type="label1" className="margin-t-10">{configureText}</CapLabel>
        <CapLabel type="label2">{nodeTitle}</CapLabel>
      </>
    );
  }

  const actionNodes = [
    {
      type: SETTINGS,
      position: 'top-right',
      onClick: onClickActionIcon,
    },
    {
      type: DELETE,
      position: 'top-left',
      onClick: onClickActionIcon,
      backgroundColor: CAP_COLOR_05,
    },
    // {
    //   type: COPY,
    //   position: 'bottom-right',
    //   onClick: onClickActionIcon,
    // },
  ];

  const viewNodes = [
    {
      type: VIEW,
      position: 'top-right',
      onClick: onClickActionIcon,
    },
  ];
  return (
    <CapAdvancedIcon
      type={iconType}
      userHistoryProps={viewMode && userHistoryProps}
      backgroundProps={{
        backgroundColor: color,
        opacity: isConfigured ? 1 : 0.5,
      }}
      svgProps={{
        height: '24px',
        width: '24px',
        viewBox: '0 0 24 24',
      }}
      actionNodes={viewMode ? viewNodes : actionNodes}
      id={id}
      positionLabel
      preview={preview}
      onClick={() => onClickActionIcon({blockId: id, actionType: SETTINGS})}
    />
  );
};

GraphBlockNode.propTypes = {
  id: PropTypes.string,
  iconType: PropTypes.string,
  onClickActionIcon: PropTypes.func,
  isConfigured: PropTypes.bool,
  nodePreview: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
  color: PropTypes.string,
  nodeTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  configureText: PropTypes.string,
  viewMode: PropTypes.bool,
  userHistoryProps: PropTypes.object,
};

GraphBlockNode.defaultProps = {
  onClickActionIcon: () => {},
  viewMode: false,
  userHistoryProps: {},
};

export default LocaleHoc(GraphBlockNode, { key: 'GraphBlockNode' });
