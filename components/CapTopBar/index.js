/**
*
* CapTopBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import classNames from 'classnames';
import CapDropdown from '../CapDropdown';
import CapMenu from '../CapMenu';
import CapIcon from '../CapIcon';
import CapSlideBox from '../CapSlideBox';
import CapButton from '../CapButton';
import CapList from '../CapList';
import { Select } from './Select';
import './_capTopBar.scss';

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class CapTopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlideBox: false,
    };
  }

  renderTopMenu = () => {
    const { menuProps } = this.props;
    const { onMenuItemClick, items, ...restMenuProps } = menuProps;
    return (
      <Menu
        className={classNames(`${clsPrefix}-menu`)}
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        {...restMenuProps}
      >
        {
          items && items.map((item) => (
            <Menu.Item
              className={classNames(`${clsPrefix}-menu-item`)}
              onClick={onMenuItemClick ? () => { onMenuItemClick(item); } : null}
              key={item.key}>
              {item.label}
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }

  showSlideBox = () => {
    this.setState({ showSlideBox: true });
  }

  closeSlideBox = () => {
    this.setState({ showSlideBox: false });
  }

  render() {
    const { showSlideBox } = this.state;
    const { primarySelectProps, secondarySelectProps, menuProps, userName, onSettingsClick, onLogoutClick, logoutText } = this.props;
    return (
      <Header className={classNames(`${clsPrefix}-header`)}>
        <div style={{ display: "flex", flexGrow: '1' }}>
          <div style={{ width: 240 }}>
            {secondarySelectProps && (
              <CapSlideBox
                className="secondary-select"
                {...secondarySelectProps}
                position="left" />
            )}
            <CapButton onClick={this.showSlideBox} type="flat" prefix={<CapIcon type="more-applications" height={24} width={24}></CapIcon>}>
              {secondarySelectProps.selectedItem}
            </CapButton>
            {showSlideBox && (
              <CapSlideBox
                showShadow
                show={showSlideBox}
                size="size-s"
                header={(
                  <div style={{ display: "flex", flexGrow: '1' }}>
                    <CapIcon type="more-applications" height={24} width={24}></CapIcon>
                    {secondarySelectProps.slideBoxHeading}
                  </div>
                )}
                content={<CapList dataSource={secondarySelectProps.items} renderItem={(item) => (<CapList.Item>{item}</CapList.Item>)} />}
                className="custom-class-name"
                handleClose={this.closeSlideBox}
                position="left" />
            )}
          </div>
          <div>
            {primarySelectProps && (
              <Select
                showSearch
                showHeader
                {...primarySelectProps}
              />
            )}
          </div>
        </div>
        {menuProps && this.renderTopMenu()}
        {
          onSettingsClick && <CapIcon onClick={onSettingsClick} className={classNames(`${clsPrefix}-setting`)} type="settings" />
        }
        {
          userName
          && (
            <CapDropdown
              trigger={["click"]}
              overlay={(
                <CapMenu>
                  <CapMenu.Item>
                    <div onClick={onLogoutClick} className={classNames(`${clsPrefix}-user-popover-item`)}>
                      <div>{logoutText}</div>
                      <CapIcon type="logout" size="s" />
                    </div>
                  </CapMenu.Item>
                </CapMenu>
              )}
              placement="bottomLeft">
              <div onClick={this.showUserPopover} className={(`${clsPrefix}-user`)}>
                {/* <LogoBackground /> */}
                <span className="text-label oval"></span>
                <CapIcon type="person" size="s" className={(`${clsPrefix}-person`)}></CapIcon>
              </div>
            </CapDropdown>
          )
        }
        {
          this.props.children
        }
      </Header>
    );
  }
}

CapTopBar.defaultProps = {
  logoutText: "Logout",
};

CapTopBar.propTypes = {
  primarySelectProps: PropTypes.object,
  secondarySelectProps: PropTypes.object,
  menuProps: PropTypes.object,
  onSettingsClick: PropTypes.func,
  logoutText: PropTypes.string,
  onLogoutClick: PropTypes.func,
};

export default CapTopBar;
