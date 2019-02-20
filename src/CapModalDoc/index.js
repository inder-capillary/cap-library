/**
* CapModalDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapModal, CapHeading, CapButton } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

function info() {
  CapModal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() { },
  });
}

function success() {
  CapModal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  CapModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  CapModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}


export default class CapModalDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className="cap-modal-info">
        <div className="cap-modal-showcase">
          <CapHeading type="h5">This component takes all the props that antd modal allows.</CapHeading>
          <a href="https://ant.design/components/modal/#header">https://ant.design/components/modal/#header</a>
          <div style={{ marginTop: "24px" }}>
            <CapButton type="primary" onClick={this.showModal}>
              Open Modal
            </CapButton>
            <CapModal
              title="Modal title"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Reference site about Lorem Ipsum, giving information on its origins.</p>
            </CapModal>
            <div style={{ marginTop: "24px" }}>
              <div>
                <CapButton onClick={info}>Info</CapButton>
                <span style={{ marginRight: "8px" }}></span>
                <CapButton onClick={success}>Success</CapButton>
                <span style={{ marginRight: "8px" }}></span>
                <CapButton onClick={error}>Error</CapButton>
                <span style={{ marginRight: "8px" }}></span>
                <CapButton onClick={warning}>Warning</CapButton>
              </div>
            </div>
          </div>
        </div>
        {/* <PropertyTable data={infoData} /> */}
      </div>
    );
  }
}
