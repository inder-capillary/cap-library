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
            <img className="cap-logo" style={{ width: "150px", margin: "10px" }} src={logo} alt="Capillary Technologies" />
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
            <MenuItem key="capTable"><span>CapTable</span></MenuItem>
            <MenuItem key="capInput"><span>CapInput</span></MenuItem>
            <MenuItem key="capRow"><span>CapRow</span></MenuItem>
            <MenuItem key="capColumn"><span>CapColumn</span></MenuItem>
            <MenuItem key="capRadio"><span>CapRadio</span></MenuItem>
            <MenuItem key="capRadioGroup"><span>CapRadioGroup</span></MenuItem>
            <MenuItem key="capProgress"><span>CapProgress</span></MenuItem>
            <MenuItem key="capForm"><span>CapForm</span></MenuItem>
            <MenuItem key="capFormItem"><span>CapFormItem</span></MenuItem>
            <MenuItem key="capMultiSelectWithTree"><span>CapMultiSelectWithTree</span></MenuItem>
            <MenuItem key="capModal"><span>CapModal</span></MenuItem>
            <MenuItem key="capSpin"><span>CapSpin</span></MenuItem>
            <MenuItem key="capPopover"><span>CapPopover</span></MenuItem>
            <MenuItem key="capMultiSelect"><span>CapMultiSelect</span></MenuItem>
            <MenuItem key="capTooltip"><span>CapTooltip</span></MenuItem>
            <MenuItem key="capIcon"><span>CapIcon</span></MenuItem>
            <MenuItem key="capStepsAccordian"><span>CapStepsAccordian</span></MenuItem>
            <MenuItem key="capLink"><span>CapLink</span></MenuItem>
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
