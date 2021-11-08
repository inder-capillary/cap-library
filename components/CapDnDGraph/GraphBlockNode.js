import React from 'react';
import PropTypes from 'prop-types';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import LocaleHoc from '../LocaleHoc';
import { DELETE, SETTINGS } from './constants';

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
    },
    // {
    //   type: COPY,
    //   position: 'bottom-right',
    //   onClick: onClickActionIcon,
    // },
  ];
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
};

GraphBlockNode.defaultProps = {
  onClickActionIcon: () => {},
};

export default LocaleHoc(GraphBlockNode, { key: 'GraphBlockNode' });
