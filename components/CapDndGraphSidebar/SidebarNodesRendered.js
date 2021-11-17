import React from 'react';
import CapHeading from '../CapHeading';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import CapRow from '../CapRow';
import SideBarIcon from './SideBarIcon';

const { CapHeadingSpan } = CapHeading;
const SidebarNodesRendered = ({ nodes = [], isNodeDraggable, endDrag }) => nodes.map((node) => {
  const { title, tooltipText, children, color, key } = node;
  return (
    <CapRow className="category-container" key={key}>
      <CapRow className="align-items-center">
        <CapHeadingSpan type="h4">
          {title}
        </CapHeadingSpan>
        {tooltipText && (
          <CapTooltip title={tooltipText} className="margin-l-4">
            <CapIcon type="info" className="info-icon" size="xs" />
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
          />
        ))}
      </CapRow>
    </CapRow>
  );
});

export default SidebarNodesRendered;