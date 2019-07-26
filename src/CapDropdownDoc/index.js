/**
* CapDropdownDoc
*/
import React, { Component } from "react";
import { CapDropdown, CapMenu, CapButton } from "../../components";
import "./info.scss";

const menu = (
  <CapMenu>
    <CapMenu.Item>
      1st menu item
    </CapMenu.Item>
    <CapMenu.Item>
      2nd menu item
    </CapMenu.Item>
    <CapMenu.Item>
      3rd menu item
    </CapMenu.Item>
  </CapMenu>
);

export default class CapDropdownDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-dropdown-info">
        <div className="cap-dropdown-showcase">
          <div style={{ marginBottom: '24px' }}>
            <b>NOTE: </b>
            This component is the extended version of ant design
            <a href="https://ant.design/components/dropdown/#header"> Dropdown </a>
            component. Please refer their component for detailed explanation of component and supported props.
          </div>
          <CapDropdown
            overlay={menu}
            placement="bottomLeft">
            <CapButton>bottomLeft</CapButton>
          </CapDropdown>
        </div>
      </div>
    );
  }
}
