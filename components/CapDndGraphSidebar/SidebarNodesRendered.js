import React from 'react';
import CapHeading from '../CapHeading';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import CapRow from '../CapRow';
import SideBarIcon from './SideBarIcon';

const { CapHeadingSpan } = CapHeading;
const SidebarNodesRendered = ({ nodes = [], isNodeDraggable, endDrag, viewMode }) => nodes.map((node) => {
  const { title, tooltipText, children, color, key } = node;
  return (
    <CapRow className="category-container" key={key}>
      <CapRow className="align-items-center">
        <CapHeadingSpan type="h4">
          {title}
        </CapHeadingSpan>
        {tooltipText && (
          <CapTooltip title={tooltipText} overlayClassName="hide-tooltip-pointer">
            <CapIcon type="info" className="info-icon margin-l-4" size="xs" />
          </CapTooltip>
        )}
      </CapRow>
      <CapRow className="icons-container">
        {children.map((childNode) => (
          <SideBarIcon
            childNode={childNode}
            color={color}
            key={childNode.type}
            isNodeDraggable={isNodeDraggable}
            endDrag={endDrag}
            viewMode={viewMode}
          />
        ))}
      </CapRow>
    </CapRow>
  );
});

export default SidebarNodesRendered;
