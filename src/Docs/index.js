import React from 'react';
import { Menu, Layout } from 'antd';
// import {CapPageHeader} from '../../../src/index';
import ComponentSwitcher from '../../helpers/ComponentSwitcher';
const logo = require('../../components/assets/images/CapillaryDark.png');
const { Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

export class Docs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: "capDnDGraph",
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
            <MenuItem key="capDnDGraph"><span className="nav-text">CapDnDGraph</span></MenuItem>
            <MenuItem key="capButton"><span className="nav-text">CapButton</span></MenuItem>
            <MenuItem key="capBlock"><span className="nav-text">CapBlock</span></MenuItem>
            <MenuItem key="capMultiplePath"><span>CapMultiplePath</span></MenuItem>
            <MenuItem key="capCondition"><span>CapCondition</span></MenuItem>
            <MenuItem key="capCardBox"><span>CapCardBox</span></MenuItem>
            <MenuItem key="capSlider"><span>CapSlider</span></MenuItem>
            <MenuItem key="capDrawer"><span>CapDrawer</span></MenuItem>
            <MenuItem key="capBanner"><span>CapBanner</span></MenuItem>
            <MenuItem key="capSideBar"><span>CapSideBar</span></MenuItem>
            <MenuItem key="capTopBar"><span>CapTopBar</span></MenuItem>
            <MenuItem key="capSecondaryTopBar"><span>CapSecondaryTopBar</span></MenuItem>
            <MenuItem key="capCheckbox"><span>CapCheckbox</span></MenuItem>
            <MenuItem key="capCarousel"><span>CapCarousel</span></MenuItem>
            <MenuItem key="capTab"><span>CapTab</span></MenuItem>
            <MenuItem key="capDivider"><span>CapDivider</span></MenuItem>
            <MenuItem key="capSlideBox"><span>CapSlideBox</span></MenuItem>
            <MenuItem key="capHeading"><span>CapHeading</span></MenuItem>
            <MenuItem key="capLabel"><span>CapLabel</span></MenuItem>
            <MenuItem key="capError"><span>CapError</span></MenuItem>
            <MenuItem key="capExpressionEditor"><span>CapExpressionEditor</span></MenuItem>
            <MenuItem key="capSwitch"><span>CapSwitch</span></MenuItem>
            <MenuItem key="capSelect"><span>CapSelect</span></MenuItem>
            <MenuItem key="capTreeSelect"><span>CapTreeSelect</span></MenuItem>
            <MenuItem key="capDatePicker"><span>CapDatePicker</span></MenuItem>
            <MenuItem key="capDateRangePicker"><span>CapDateRangePicker</span></MenuItem>
            <MenuItem key="capHeader"><span>CapHeader</span></MenuItem>
            <MenuItem key="capCustomCard"><span>CapCustomCard</span></MenuItem>
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
            <MenuItem key="capCard"><span>CapCard</span></MenuItem>
            <MenuItem key="capMultiSelect"><span>CapMultiSelect</span></MenuItem>
            <MenuItem key="capTooltip"><span>CapTooltip</span></MenuItem>
            <MenuItem key="capIcon"><span>CapIcon</span></MenuItem>
            <MenuItem key="capStepsAccordian"><span>CapStepsAccordian</span></MenuItem>
            <MenuItem key="capSteps"><span>CapSteps</span></MenuItem>
            <MenuItem key="capLink"><span>CapLink</span></MenuItem>
            <MenuItem key="capRadioCard"><span>CapRadioCard</span></MenuItem>
            <MenuItem key="capNotification"><span>CapNotification</span></MenuItem>
            <MenuItem key="capList"><span>CapList</span></MenuItem>
            <MenuItem key="capTooltipWithInfo"><span>CapTooltipWithInfo</span></MenuItem>
            <MenuItem key="capUploader"><span>CapUploader</span></MenuItem>
            <MenuItem key="capAlert"><span>CapAlert</span></MenuItem>
            <MenuItem key="capMenu"><span>CapMenu</span></MenuItem>
            <MenuItem key="capDropdown"><span>CapDropdown</span></MenuItem>
            <MenuItem key="capTag"><span>CapTag</span></MenuItem>
            <MenuItem key="capTimePicker"><span>CapTimePicker</span></MenuItem>
            <MenuItem key="capSkeleton"><span>CapSkeleton</span></MenuItem>
            <MenuItem key="capMultiSelectDatePicker"><span>CapMultiSelectDatePicker</span></MenuItem>
            <MenuItem key="capHierarchyComponent"><span>CapHierarchyComponent</span></MenuItem>
            <MenuItem key="capIllustration"><span>CapIllustration</span></MenuItem>
            <MenuItem key="capCustomCheckbox"><span>CapCustomCheckbox</span></MenuItem>
            <MenuItem key="capGraph"><span>CapGraph</span></MenuItem>
            <MenuItem key="capCustomList"><span>CapCustomList</span></MenuItem>
            <MenuItem key="capReorderComponent"><span>CapReorderComponent</span></MenuItem>
            <MenuItem key="capShape"><span>CapShape</span></MenuItem>
            <MenuItem key="capImage"><span>CapImage</span></MenuItem>
            <MenuItem key="capSnackBar"><span>CapSnackBar</span></MenuItem>
            <MenuItem key="capNavigation"><span>CapNavigation</span></MenuItem>
            <MenuItem key="capLogin"><span>CapLogin</span></MenuItem>
            <MenuItem key="capDndGraphSidebarDoc"><span>CapDndGraphSidebarDoc</span></MenuItem>
            <MenuItem key="capAdvancedIcon"><span>CapAdvancedIcon</span></MenuItem>
            <MenuItem key="capColorPicker"><span>CapColorPicker</span></MenuItem>
            <MenuItem key="capLevelGraphRenderer"><span>CapLevelGraphRenderer</span></MenuItem>
            <MenuItem key="capInfoNote"><span>CapInfoNote</span></MenuItem>
            <MenuItem key="capErrorStateIllustration"><span>CapErrorStateIllustration</span></MenuItem>
            <MenuItem key="capErrorBoundary"><span>CapErrorBoundary</span></MenuItem>
            <MenuItem key="capBorderedBox"><span>CapBorderedBox</span></MenuItem>
            <MenuItem key="capTree"><span>CapTree</span></MenuItem>
            <MenuItem key="capPopoverTree"><span>CapPopoverTree</span></MenuItem>
            <MenuItem key="CapSelectFilter"><span>CapSelectFilter</span></MenuItem>
            {/*Menu items for components*/}

          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: this.state.menuSelected === 'capDnDGraph' ? 0 : 24, background: '#fff' }}>
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
