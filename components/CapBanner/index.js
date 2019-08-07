/**
*
* CapBanner
*
*/

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CapIcon from '../CapIcon';
import './_capBanner.scss';
const clsPrefix = 'cap-banner';

const renderIcon = (iconProps) => (
  <div className={classNames(`${clsPrefix}-logo`)}>
    <span className="text-label">
      <CapIcon {...iconProps} />
    </span>
  </div>
);

const CapBanner = (props) => {
  const { iconProps, bannerContent, actionContent } = props;
  return (
    <div className={classNames(`${clsPrefix}`)}>
      <div className={classNames(`${clsPrefix}-flexDisplay`)}>
        {iconProps && renderIcon(iconProps)}
        <div>
          {bannerContent || null}
        </div>
      </div>
      <div>
        {actionContent || null}
      </div>
    </div>
  );
};

CapBanner.propTypes = {
  iconProps: PropTypes.object,
  bannerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  actionContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default CapBanner;
