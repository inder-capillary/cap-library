import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';
import classNames from 'classnames';
import './_capIcon.scss';
import * as StyledVars from '../styled/variables';
import CapIconWithBackground from './CapIconWithBackground';
import CapIconAvatar from './CapIconAvatar';

import { getSvgComponentFromType } from '../assets/svgIcons/component';

const clsPrefix = 'cap-icon-v2';

const getFontSizeFromProps = (size) => {
  switch (size) {
    case 'xs':
      return StyledVars.ICON_SIZE_XS;
    case 's':
      return StyledVars.ICON_SIZE_S;
    case 'm':
      return StyledVars.ICON_SIZE_M;
    case 'l':
      return StyledVars.ICON_SIZE_L;
    default:
      return StyledVars.ICON_SIZE_M;
  }
};

const AntIcon = styled(Icon)`
  font-size: ${(props) => getFontSizeFromProps(props.size)};
`;

function CapIcon(props) {
  const { type, className, disabled, backgroundProps, withBackground, svgProps, allowSvg = true, textLabel = <></>, ...rest } = props;
  const customClassName = `${clsPrefix}-${type}`;
  const IconComponent = getSvgComponentFromType(type);
  const BaseIcon = IconComponent && allowSvg ? (
    <>
      <AntIcon
        className={classNames(clsPrefix, customClassName, className, { disabled })}
        component={() => <IconComponent {...svgProps} />}
        {...rest}>
      </AntIcon>
      {textLabel}
    </>
  ) : <Icon {...props} />;
  return (
    withBackground
      ? (
        <CapIconWithBackground className="cap-icon-background" {...backgroundProps}>
          {BaseIcon}
        </CapIconWithBackground>
      )
      : BaseIcon
  );
}

CapIcon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  withBackground: PropTypes.bool,
  allowSvg: PropTypes.bool,
};

CapIcon.AntIcon = Icon;
CapIcon.CapIconAvatar = CapIconAvatar;

export default CapIcon;
