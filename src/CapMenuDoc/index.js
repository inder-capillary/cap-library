/**
* CapMenuDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapMenu } from "../../components";
import "./info.scss";

const { SubMenu } = CapMenu;

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

export default class CapMenuDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-menu-info">
        <div className="cap-menu-showcase">
          <div style={{ width: 256 }}>
            <CapMenu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <CapMenu.Item key="1">
                <span>Option 1</span>
              </CapMenu.Item>
              <CapMenu.Item key="2">
                <span>Option 2</span>
              </CapMenu.Item>
              <CapMenu.Item key="3">
                <span>Option 3</span>
              </CapMenu.Item>
              <SubMenu
                key="sub1"
                title={(
                  <span>
                    <span>Navigation One</span>
                  </span>
                )}>
                <CapMenu.Item key="5">Option 5</CapMenu.Item>
                <CapMenu.Item key="6">Option 6</CapMenu.Item>
                <CapMenu.Item key="7">Option 7</CapMenu.Item>
                <CapMenu.Item key="8">Option 8</CapMenu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={(
                  <span>
                    <span>Navigation Two</span>
                  </span>
                )}>
                <CapMenu.Item key="9">Option 9</CapMenu.Item>
                <CapMenu.Item key="10">Option 10</CapMenu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <CapMenu.Item key="11">Option 11</CapMenu.Item>
                  <CapMenu.Item key="12">Option 12</CapMenu.Item>
                </SubMenu>
              </SubMenu>
            </CapMenu>
          </div>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
