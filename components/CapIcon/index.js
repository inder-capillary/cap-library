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

import getSvgComponentFromType from '../svgIcons/component';

const clsPrefix = 'cap-icon-v2';

const AntIcon = styled(Icon)`
  font-size: 24px;
`;

function CapIcon(props) {
  const { type, className, ...rest } = props;
  const customClassName = `${clsPrefix}-${type}`;
  return (
    <AntIcon className={classNames(clsPrefix, customClassName, className)} component={getSvgComponentFromType(type)} {...rest} />
  );
}

CapIcon.propTypes = {
  type: PropTypes.string,
};

export default CapIcon;
