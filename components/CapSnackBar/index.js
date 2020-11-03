/**
*
* CapNotification
*
*/
import React from 'react';
import { message } from 'antd';
import CapIcon from '../CapIcon';
import * as styledVars from '../styled/variables';
import './_capSnackBar.scss';

const callFunction = (props, type) => {
  const { content, showCloseIcon, duration, onClose } = props;
  const updatedContent = showCloseIcon ? addCloseIcon(content) : content;
  const updatedDuration = showCloseIcon ? 1000 : duration || 1.5;
  message[type](updatedContent, updatedDuration, onClose);
};
const infoSnackBar = (props) => {
  callFunction(props, 'info');
};

const successSnackBar = (props) => {
  callFunction(props, 'success');
};

const errorSnackBar = (props) => {
  callFunction(props, 'error');
};

const warningSnackBar = (props) => {
  callFunction(props, 'warning');
};

const addCloseIcon = (content) => (
  <div>
    {content}
    <CapIcon type="close" onClick={closeSnackBar} style={{ color: styledVars.FONT_COLOR_02 }} />
  </div>
);

const closeSnackBar = () => {
  message.destroy();
};

const CapSnackBar = {};

CapSnackBar.info = infoSnackBar;
CapSnackBar.success = successSnackBar;
CapSnackBar.error = errorSnackBar;
CapSnackBar.warning = warningSnackBar;

export default CapSnackBar;
