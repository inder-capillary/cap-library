import React from 'react';
import PropTypes from 'prop-types';
import SidebarNodesRendered from './SidebarNodesRendered';
import CapHeading from '../CapHeading';
import CapLabel from '../CapLabel';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import CapRow from '../CapRow';
import LocaleHoc from '../LocaleHoc';
import './_capDndGraphSidebar.scss';

const { CapHeadingSpan } = CapHeading;

export const CapDndGraphSidebar = (props) => {
  const { nodes = [], sidebarTitle, sidebarDescription, sidebarTitleInfo, isNodeDraggable, endDrag, viewMode } = props;

  return (
    <CapRow className="dnd-graph-sidebar-container">
      {sidebarTitle && (
        <CapRow className="align-items-center">
          <CapHeadingSpan type="h3">
            {sidebarTitle}
          </CapHeadingSpan>
          {sidebarTitleInfo && (
            <CapTooltip title={sidebarTitleInfo} overlayClassName="hide-tooltip-pointer">
              <CapIcon type="info" className="info-icon margin-l-4" size="xs" />
            </CapTooltip>
          )}
        </CapRow>
      )}
      {sidebarDescription && (
        <CapLabel type="label3" className="margin-t-4">
          {sidebarDescription}
        </CapLabel>
      )}
      <SidebarNodesRendered
        nodes={nodes}
        isNodeDraggable={isNodeDraggable}
        endDrag={endDrag}
        viewMode={viewMode}
      />
    </CapRow>
  );
};

CapDndGraphSidebar.propTypes = {
  nodes: PropTypes.object,
  sidebarTitle: PropTypes.string,
  sidebarDescription: PropTypes.string,
  sidebarTitleInfo: PropTypes.string,
  isNodeDraggable: PropTypes.bool,
  endDrag: PropTypes.object,
  viewMode: PropTypes.bool,
};

CapDndGraphSidebar.defaultProps = {
  viewMode: false,
};

export default LocaleHoc(CapDndGraphSidebar, { key: 'CapDndGraphSidebar' });
