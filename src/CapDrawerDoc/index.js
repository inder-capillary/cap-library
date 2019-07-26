/**
* CapDrawerDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapDrawer, CapButton } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "content",
    description: "The content that is to be displayed in the drawer component",
    type: "string | element",
    default: "",
  },
  {
    key: 2,
    property: "size",
    description: "if you want to specify the size of the drawer component, either you can use these values: s, r, l or use width prop of the component",
    type: "string",
    default: "",
  },
];

const content = <p>Some content..</p>;

export default class CapDrawerDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
      showDrawer1: false,
      showDrawer2: false,
      showDrawer3: false,
      showDrawer4: false,
    };
  }

  openDrawer = () => {
    this.setState({ showDrawer: true });
  }

  closeDrawer = () => {
    this.setState({ showDrawer: false });
  }

  openDrawer1 = () => {
    this.setState({ showDrawer1: true });
  }

  closeDrawer1 = () => {
    this.setState({ showDrawer1: false });
  }

  openDrawer2 = () => {
    this.setState({ showDrawer2: true });
  }

  closeDrawer2 = () => {
    this.setState({ showDrawer2: false });
  }

  openDrawer3 = () => {
    this.setState({ showDrawer3: true });
  }

  closeDrawer3 = () => {
    this.setState({ showDrawer3: false });
  }

  openDrawer4 = () => {
    this.setState({ showDrawer4: true });
  }

  closeDrawer4 = () => {
    this.setState({ showDrawer4: false });
  }

  render() {
    const { showDrawer, showDrawer1, showDrawer2, showDrawer3, showDrawer4 } = this.state;
    return (
      <div className="cap-drawer-info">
        <div className="cap-drawer-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/drawer/"> Drawer </a>
            component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <CapButton onClick={this.openDrawer}>Show Drawer with default width</CapButton>
          {showDrawer
            && (
              <CapDrawer
                visible={this.state.showDrawer}
                onClose={this.closeDrawer}
                title="Basic Drawer"
                content={content}
                closable={false}
                keyboard />
            )}
          <div style={{ marginTop: '16px' }}></div>
          <CapButton onClick={this.openDrawer1}>Show Drawer with placement left</CapButton>
          {showDrawer1
            && (
              <CapDrawer
                visible={this.state.showDrawer1}
                onClose={this.closeDrawer1}
                title="Basic Drawer"
                content={content}
                placement="left"
                closable={false}
                keyboard />
            )}
          <div style={{ marginTop: '16px' }}></div>
          <CapButton onClick={this.openDrawer2}>Show Drawer of size-s</CapButton>
          {showDrawer2
            && (
              <CapDrawer
                visible={this.state.showDrawer2}
                onClose={this.closeDrawer2}
                title="Basic Drawer"
                content={content}
                closable={false}
                keyboard
                size="s" />
            )}
          <div style={{ marginTop: '16px' }}></div>
          <CapButton onClick={this.openDrawer3}>Show Drawer of size-r</CapButton>
          {showDrawer3
            && (
              <CapDrawer
                visible={this.state.showDrawer3}
                onClose={this.closeDrawer3}
                title="Basic Drawer"
                content={content}
                closable={false}
                keyboard
                size="r" />
            )}
          <div style={{ marginTop: '16px' }}></div>
          <CapButton onClick={this.openDrawer4}>Show Drawer of size-l</CapButton>
          {showDrawer4
          && (
            <CapDrawer
              visible={this.state.showDrawer4}
              onClose={this.closeDrawer4}
              title="Basic Drawer"
              content={content}
              closable={false}
              keyboard
              size="l" />
          )}
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
