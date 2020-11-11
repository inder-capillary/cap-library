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

const CallFunction = (props, type) => {
  const { content, showCloseIcon, duration, onClose } = props;
  const updatedContent = showCloseIcon ? AddCloseIcon(content) : content;
  const updatedDuration = showCloseIcon ? 1000 : duration || 1.5;
  message[type](updatedContent, updatedDuration, onClose);
};
const InfoSnackBar = (props) => {
  CallFunction(props, 'info');
};

const SuccessSnackBar = (props) => {
  CallFunction(props, 'success');
};

const ErrorSnackBar = (props) => {
  CallFunction(props, 'error');
};

const WarningSnackBar = (props) => {
  CallFunction(props, 'warning');
};

const AddCloseIcon = (content) => (
  <div>
    {content}
    <CapIcon type="close" onClick={CloseSnackBar} style={{ color: styledVars.FONT_COLOR_02 }} />
  </div>
);

const CloseSnackBar = () => {
  message.destroy();
};

const CapSnackBar = {};

CapSnackBar.info = InfoSnackBar;
CapSnackBar.success = SuccessSnackBar;
CapSnackBar.error = ErrorSnackBar;
CapSnackBar.warning = WarningSnackBar;

export default CapSnackBar;
