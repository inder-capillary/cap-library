/**
*
* CapModal
*
*/

import React from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CapButton } from '../index';
import './_capModal.scss';

const { info, success, error, warning, confirm } = Modal;

const clsPrefix = 'cap-modal-v2';

const CapModal = (props) => {
  const { className, wrapClassName, okText, closeText, ...rest } = props;
  return (
    <Modal
      className={classNames(clsPrefix, className)}
      wrapClassName={classNames(`${clsPrefix}-wrap`, className)}
      footer={(
        <div className="default-footer">
          <CapButton onClick={rest.onOk} type="primary">
            {okText}
          </CapButton>
          <CapButton onClick={rest.onCancel} type="flat">
            {closeText}
          </CapButton>
        </div>
      )}
      {...rest} />
  );
};

CapModal.info = info;
CapModal.confirm = confirm;
CapModal.success = success;
CapModal.error = error;
CapModal.warning = warning;

CapModal.defaultProps = {
  okText: 'Yes',
  closeText: 'No',
};

CapModal.propTypes = {
  okText: PropTypes.string,
  closeText: PropTypes.string,
};

export default CapModal;
