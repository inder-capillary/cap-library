/**
*
* CapModal
*
*/

import React from 'react';
import { Modal } from 'antd';
import './_capModal.scss';
// import styled from 'styled-components';


class CapModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div>
        <Modal {...this.props}>
          {children}
        </Modal>
      </div>
    );
  }
}

CapModal.propTypes = {

};

export default CapModal;
