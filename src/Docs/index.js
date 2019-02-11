import React from 'react';
import { Menu, Layout } from 'antd';
// import {CapPageHeader} from '../../../src/index';
import ComponentSwitcher from '../../helpers/ComponentSwitcher';
const logo = require('../../components/assets/images/capillary_dark.png');
const { Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

export class Docs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: "capButton",
    };
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onMenuItemClick(e) {
    this.setState({ menuSelected: e.key });
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}>
          <div className="cap-logo-container">
            <img className="cap-logo" style={{ width: "180px", margin: "10px" }} src={logo} alt="Capillary Technologies" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.menuSelected]} onClick={this.onMenuItemClick}>
            <MenuItem key="capButton"><span className="nav-text">CapButton</span></MenuItem>
            <MenuItem key="capSlider"><span>CapSlider</span></MenuItem>
            <MenuItem key="capSideBar"><span>CapSideBar</span></MenuItem>
            <MenuItem key="capTopBar"><span>CapTopBar</span></MenuItem>
            <MenuItem key="capCheckbox"><span>CapCheckbox</span></MenuItem>
            <MenuItem key="capTab"><span>CapTab</span></MenuItem>
            <MenuItem key="capSlideBox"><span>CapSlideBox</span></MenuItem>
            <MenuItem key="capHeading"><span>CapHeading</span></MenuItem>
            <MenuItem key="capSwitch"><span>CapSwitch</span></MenuItem>
            <MenuItem key="capSelect"><span>CapSelect</span></MenuItem>
            <MenuItem key="capDatePicker"><span>CapDatePicker</span></MenuItem>
            <MenuItem key="capDateRangePicker"><span>CapDateRangePicker</span></MenuItem>
            <MenuItem key="capHeader"><span>CapHeader</span></MenuItem>
            <MenuItem key="capCard"><span>CapCard</span></MenuItem>
            {/*Menu items for components*/}


          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              {/*<CapPageHeader pageHeading={this.state.menuSelected.toUpperCase()} />*/}
              <ComponentSwitcher type={this.state.menuSelected} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Capillary React UI Library | Created by
            {' '}
            <a href="mailto:ui-devs@capillarytech.com">UI Devs</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Docs;
