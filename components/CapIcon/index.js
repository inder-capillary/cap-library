/**
*
* CapIcon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';
import classNames from 'classnames';
import './_capIcon.scss';
import * as StyledVars from '../styled/variables';

import { getSvgComponentFromType } from '../assets/svgIcons/component';

const clsPrefix = 'cap-icon-v2';

const getFontSizeFromProps = (size) => {
  switch (size) {
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
  font-size: ${(props) => getFontSizeFromProps(props.size)}
`;

function CapIcon(props) {
  const { type, className, ...rest } = props;
  const customClassName = `${clsPrefix}-${type}`;
  const IconComponent = getSvgComponentFromType(type);
  return (
    <AntIcon
      className={classNames(clsPrefix, customClassName, className)}
      component={IconComponent}
      {...rest}
    />
  );
}

CapIcon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default CapIcon;