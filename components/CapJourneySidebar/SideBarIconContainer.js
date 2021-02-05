import React from 'react';
import CapHeading from '../CapHeading';
import CapTooltip from '../CapTooltip';
import CapIcon from '../CapIcon';
import SideBarIcon from './SideBarIcon';

const SideBarIconContainer = (nodes, drag) => Object.entries(nodes).map(([key, value]) => {
  const { title, description, children, color } = value;
  return (
    <div className="category-container" key={title}>
      <div className="title-row">
        <CapHeading type="h4">
          {title}
        </CapHeading>
        <CapTooltip title={description}>
          <CapIcon type="info" className="info-icon" size="xs" />
        </CapTooltip>
      </div>
      <div className="icons-container">
        {children.map((childNode) => SideBarIcon(childNode, color, key, drag))}
      </div>
    </div>
  );
});

export default SideBarIconContainer;
