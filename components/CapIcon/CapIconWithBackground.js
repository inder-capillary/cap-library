import React from 'react';
import classNames from 'classnames';

function CapIconWithBackground(props) {
  const { icon, className, ...rest } = props;
  return (
    <div {...rest} className={classNames('cap-icon-container', className)}>
      <div className="div-icon">
        {icon}
      </div>
    </div>
  );
}

export default CapIconWithBackground;
