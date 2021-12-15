/**
*
* CapColoredTag
*
*/

import React from 'react';
import { Tag } from 'antd';
import classNames from 'classnames';
import {StyledColoredTag} from './styles';

const clsPrefix = 'cap-colored-tag-v2';
const { CheckableTag } = Tag;

function CapColoredTag(props) {
  const { className, disabled, type, styleProps, ...rest } = props;
  return (
    <StyledColoredTag className={classNames(clsPrefix, className, type, { disabled })} {...rest} />
  );
}

CapColoredTag.propTypes = {

};

CapColoredTag.CheckableTag = CheckableTag;

export default CapColoredTag;
