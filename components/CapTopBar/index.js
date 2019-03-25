/**
*
* CapTopBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Divider } from 'antd';
import classNames from 'classnames';
import CapDropdown from '../CapDropdown';
import CapMenu from '../CapMenu';
import CapIcon from '../CapIcon';
import { Select } from './Select';
import './_capTopBar.scss';
import { LogoBackground } from '../assets/icons';

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class CapTopBar extends React.Component {
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

  render() {
    const { primarySelectProps, secondarySelectProps, menuProps, userName, onSettingsClick, onLogoutClick, logoutText } = this.props;
    return (
      <Header className={classNames(`${clsPrefix}-header`)}>
        <div style={{ display: "flex", flexGrow: '1' }}>
          {primarySelectProps && (
            <Select
              showSearch
              showHeader
              {...primarySelectProps}
            />
          )}
          {secondarySelectProps && <Divider type="vertical" className={classNames(`${clsPrefix}-divider`)} />}
          {secondarySelectProps
            && (
              <Select
                className="secondary-select"
                showCapillaryIcon
                {...secondarySelectProps} />
            )}
        </div>
        {menuProps && this.renderTopMenu()}
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
                <LogoBackground />
                <span className="text-label">{userName[0]}</span>
              </div>
            </CapDropdown>
          )
        }
        {
          onSettingsClick && <CapIcon onClick={onSettingsClick} className={classNames(`${clsPrefix}-setting`)} type="settings" />
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
