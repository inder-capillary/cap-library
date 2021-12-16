import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';

const SideBarIcon = ({ childNode, color, isNodeDraggable, viewMode }) => {
  const { type, label, id, isMultiPath, isDisabled } = childNode;
  let drag;
  if (isNodeDraggable && !isDisabled) {
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
          backgroundProps={{
            backgroundColor: color,
            opacity: (viewMode || isDisabled) ? 0.5 : 1,
          }}
          label={
            <CapLabel className="node-label" type="label5">{label}</CapLabel>
          }
          svgProps={{
            height: '24px',
            width: '24px',
            viewBox: '0 0 24 24',
          }}
          dragRef={isNodeDraggable && drag}
          isDisabled={isDisabled || viewMode}
        />
      </div>
    </div>
  );
};

SideBarIcon.propTypes = {
  childNode: PropTypes.object,
  color: PropTypes.string,
  isNodeDraggable: PropTypes.bool,
  viewMode: PropTypes.bool,
};

SideBarIcon.defaultProps = {
  viewMode: false,
};

export default SideBarIcon;
