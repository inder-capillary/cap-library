import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import LocaleHoc from '../LocaleHoc';
import { DELETE, SETTINGS, VIEW } from './constants';
import { CAP_COLOR_03, CAP_COLOR_05 } from '../styled/variables';

const StyledLabel = styled(CapLabel)`
  color: ${(props) => props.notConfiguredError ? CAP_COLOR_03 : ""};
`;

const GraphBlockNode = (props) => {
  const {
    id,
    iconType,
    color,
    onClickActionIcon,
    isConfigured,
    nodePreview,
    nodeTitle,
    viewMode,
    userHistoryProps,
    error, // To hightlight block with error Icon.
    configureText,
    joinBlockNameArray = [],
  } = props;

  let preview = nodePreview;

  if (!isConfigured && !nodePreview) {
    preview = (
      <>
        <StyledLabel type="label1" className="margin-t-10" notConfiguredError={error?.notConfiguredError}>{configureText}</StyledLabel>
        <StyledLabel type="label2">{nodeTitle}</StyledLabel>
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
      joinBlockNameArray={joinBlockNameArray}
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
      hasError={!!error}
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
  joinBlockNameArray: PropTypes.array,
  error: PropTypes.object,
};

GraphBlockNode.defaultProps = {
  onClickActionIcon: () => {},
  viewMode: false,
  userHistoryProps: {},
};

export default LocaleHoc(GraphBlockNode, { key: 'CapGraphBlockNode' });
