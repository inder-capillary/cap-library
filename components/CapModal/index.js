/**
*
* CapModal
*
*/

import React from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import './_capModal.scss';

const { info, success, error, warning, confirm } = Modal;

const clsPrefix = 'cap-modal';

const CapModal = (props) => {
  const { className, wrapClassName, ...rest } = props;
  return (
    <Modal
      className={classNames(clsPrefix, className)}
      wrapClassName={classNames(`${clsPrefix}-wrap`, className)}
      {...rest} />
  );
};

CapModal.info = info;
CapModal.confirm = confirm;
CapModal.success = success;
CapModal.error = error;
CapModal.warning = warning;

CapModal.propTypes = {

};

export default CapModal;
