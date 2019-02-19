/**
*
* CapTopBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Divider, Popover } from 'antd';
import classNames from 'classnames';
import { Select } from './Select';
import './_capTopBar.scss';

import SettingsIcon from '../assets/icons/settings.svg';
import LogoutIcon from '../assets/icons/logout.svg';

const { Header } = Layout;

const clsPrefix = 'cap-navbar';

class CapTopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showUserPopover: false,
    };
  }

  showUserPopover = () => {
    this.setState({ showUserPopover: true });
  }

  onUserPopoverVisibleChange = (visible) => {
    this.setState({ showUserPopover: visible });
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

  render() {
    const { primarySelectProps, secondarySelectProps, menuProps, userName, onSettingsClick, onLogoutClick, logoutText } = this.props;
    const { showUserPopover } = this.state;
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
                <Popover
                  trigger="click"
                  getPopupContainer={(trigger) => trigger.parentNode}
                  placement="bottomLeft"
                  visible={showUserPopover}
                  overlayClassName={classNames(`${clsPrefix}-user-popover`)}
                  onVisibleChange={this.onUserPopoverVisibleChange}
                  content={(
                    <div onClick={onLogoutClick} className={classNames(`${clsPrefix}-user-popover-item`)}>
                      <div>{logoutText}</div>
                      <img src={LogoutIcon} alt="" />
                    </div>
                  )}>
                  <div onClick={this.showUserPopover} className={classNames(`${clsPrefix}-user`)}>
                    {userName[0]}
                  </div>
                </Popover>
              )
        }
        {onSettingsClick
              && <div onClick={onSettingsClick} className={classNames(`${clsPrefix}-setting`)}><img src={SettingsIcon} alt="" /></div>
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
