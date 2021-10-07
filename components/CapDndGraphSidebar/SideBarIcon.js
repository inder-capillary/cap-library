import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';

const SideBarIcon = ({ childNode, color, isNodeDraggable }) => {
  const { type, label, id, isMultiPath } = childNode;
  let drag;
  if (isNodeDraggable) {
    [, drag] = useDrag({
      item: {
        id,
        type: 'draggableNode',
        iconType: type,
        color,
        isMultiPath,
      },
    });
  }

  return (
    <div className="node-container" key={type}>
      <div className="node-container-inner">
        <CapAdvancedIcon
          type={type}
          backgroundColor={color}
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

SideBarIcon.propTypes = {
  childNode: PropTypes.object,
  color: PropTypes.string,
  isNodeDraggable: PropTypes.bool,
};

export default SideBarIcon;
