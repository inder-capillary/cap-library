import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import CapAdvancedIcon from '../CapAdvancedIcon';
import CapLabel from '../CapLabel';
import CapTooltip from '../CapTooltip';

const SideBarIcon = ({ childNode, color, isNodeDraggable, viewMode, onDropOutsideCanvas }) => {
  const { type, label, id, isMultiPath, isDisabled, tooltipText } = childNode;
  let drag;
  if (isNodeDraggable && !isDisabled) {
    [, drag] = useDrag({
      end: (item, monitor) => {
        if (!monitor.didDrop()) {
          onDropOutsideCanvas(item);
        }
      },
      item: {
        id,
        type: 'draggableNode',
        iconType: type,
        color,
        isMultiPath,
      },
    });
  }

  const Icon = (
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
      }}
      dragRef={isNodeDraggable && drag}
      isDisabled={isDisabled || viewMode}
    />
  );

  return (
    <div className="node-container" key={type}>
      <div className="node-container-inner">
        {isDisabled ? (<CapTooltip title={tooltipText}>{Icon}</CapTooltip>) : (<>{Icon}</>)}
      </div>
    </div>
  );
};

SideBarIcon.propTypes = {
  childNode: PropTypes.object,
  color: PropTypes.string,
  isNodeDraggable: PropTypes.bool,
  viewMode: PropTypes.bool,
  onDropOutsideCanvas: PropTypes.func,
};

SideBarIcon.defaultProps = {
  viewMode: false,
  onDropOutsideCanvas: () => {},
};

export default SideBarIcon;
