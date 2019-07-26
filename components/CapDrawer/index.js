/**
*
* CapDrawer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

const CapDrawer = (props) => {
  const {content, size, width, ...rest} = props;
  let widthMapping = width || 256;
  if (size === "r") {
    widthMapping = "50vw";
  } else if (size === "l") {
    widthMapping = "75vw";
  } else if (size === "s") {
    widthMapping = "25vw";
  }
  return (
    <Drawer
      width={widthMapping}
      {...rest}
    >
      {content}
    </Drawer>
  );
};

CapDrawer.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  size: PropTypes.string,
};

export default CapDrawer;
