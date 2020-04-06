/**
*
* CapCardBox
*
*/
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { CAP_G10, CAP_G06, CAP_G07, FONT_COLOR_01 } from '../styled/variables';
const clsPrefix = 'cap-card-box-v2';
const CardBoxWrapper = styled.div`
  width: ${(props) => (props.width || '100%')};
  position: relative;
  .ant-card {
    border: ${(props) => (props.borderStyle === 'DASHED' ? `1px dashed ${CAP_G06}` : `1px solid ${CAP_G06}`)};
    background-color: ${CAP_G10};
    height: ${(props) => (props.height || '100%')};
    .ant-card-body {
      height: 100%;
      padding: 0;
    }
  }
  .ant-avatar {
    background-color: ${CAP_G07};
    position: absolute;
    top: -16%;
    left: 42%;
    color: ${FONT_COLOR_01};
    cursor: default;
  }
`;
const showAvatar = (avatarText) => (<Avatar>{avatarText}</Avatar>);

const getContent = (content, topLeftIcon) => (
  <div style={{height: '100%'}}>
    {topLeftIcon}
    {content}
  </div>
);
function CapCardBox(props) {
  const { className, avatarText, content = {}, width, height, borderStyle, topLeftIcon = {}, ...rest } = props;
  return (
    <CardBoxWrapper width={width} borderStyle={borderStyle} height={height}>
      <Card className={classNames(clsPrefix, className)} {...rest}>{isEmpty(topLeftIcon) ? content : getContent(content, topLeftIcon)}</Card>
      {avatarText && showAvatar(avatarText)}
    </CardBoxWrapper>
  );
}

CapCardBox.propTypes = {
  avatarText: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  width: PropTypes.string,
  height: PropTypes.string,
  borderStyle: PropTypes.string,
  topLeftIcon: PropTypes.element,
};


export default CapCardBox;
