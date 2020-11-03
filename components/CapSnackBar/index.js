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

const infoSnackBar = (props) => {
  const { content, ...rest } = props;
  const updatedContent = rest.showCloseIcon ? addCloseIcon(content) : content;
  const updatedDuration = function () {
    if (rest.duration) {
      return rest.duration;
    }

    if (rest.showCloseIcon) {
      return 1000;
    }

    return 1.5;
  };
  message.info(updatedContent, updatedDuration, rest.onClose);
};

const successSnackBar = (props) => {
  const { content, ...rest } = props;
  const updatedContent = rest.showCloseIcon ? addCloseIcon(content) : content;
  const updatedDuration = function () {
    if (rest.duration) {
      return rest.duration;
    }

    if (rest.showCloseIcon) {
      return 1000;
    }

    return 1.5;
  };
  message.success(updatedContent, updatedDuration, rest.onClose);
};

const errorSnackBar = (props) => {
  const { content, ...rest } = props;
  const updatedContent = rest.showCloseIcon ? addCloseIcon(content) : content;
  const updatedDuration = function () {
    if (rest.duration) {
      return rest.duration;
    }

    if (rest.showCloseIcon) {
      return 1000;
    }

    return 1.5;
  };
  message.error(updatedContent, updatedDuration, rest.onClose);
};

const warningSnackBar = (props) => {
  const { content, ...rest } = props;
  const updatedContent = rest.showCloseIcon ? addCloseIcon(content) : content;
  const updatedDuration = function () {
    if (rest.duration) {
      return rest.duration;
    }

    if (rest.showCloseIcon) {
      return 1000;
    }

    return 1.5;
  };
  message.warning(updatedContent, updatedDuration, rest.onClose);
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
