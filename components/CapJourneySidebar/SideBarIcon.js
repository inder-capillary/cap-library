import React from 'react';
import { useDrag } from 'react-dnd';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import { CAP_YELLOW, CAP_BLUE, CAP_SECONDARY } from '../styled/variables';

const colorMap = {
  engagements: CAP_YELLOW,
  flowControl: CAP_BLUE,
  actions: CAP_SECONDARY.base,
};

const SideBarIcon = (childNode, color, key, isNodeDraggable) => {
  const { type, label } = childNode;
  let customProps; let
    drag;
  if (isNodeDraggable) {
    [customProps, drag] = useDrag({
      item: {
        id: type,
        type,
      },
    });
  }

  return (
    <div className="node-container" key={type}>
      <div className="node-container-inner">
        <CapAdvancedIcon
          type={type}
          backgroundColor={color || colorMap[key]}
          label1={
            <CapLabel className="node-label" type="label5">{label}</CapLabel>
          }
          svgProps={{
            height: '24px',
            width: '24px',
            viewBox: '0 0 24 24',
          }}
          dragRef={isNodeDraggable && drag}
        />
      </div>
    </div>
  );
};

export default SideBarIcon;
