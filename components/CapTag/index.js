/**
*
* CapTag
*
*/

import React from 'react';
import { Tag } from 'antd';
import classNames from 'classnames';
import './_capTag.scss';
// import styled from 'styled-components';

const clsPrefix = 'cap-tag-v2';

function CapTag(props) {
  const { className, disabled, type, ...rest } = props;
  return (
    <Tag className={classNames(clsPrefix, className, type, { disabled })} {...rest} />
  );
}

CapTag.propTypes = {

};

export default CapTag;
