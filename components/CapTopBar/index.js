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
import CapList from '../CapList';
import CapHeading from '../CapHeading';
import { Select } from './Select';
import './_capTopBar.scss';
import { LogoBackground } from '../assets/icons';
import * as styledVars from "../styled/variables";

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
        style={{ lineHeight: styledVars.CAP_SPACE_72 }}
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
    const { primarySelectProps, primaryListProps, menuProps, userName, onSettingsClick, onLogoutClick, logoutText } = this.props;
    return (
      <Header className={classNames(`${clsPrefix}-header`)}>
        <div className={classNames(`${clsPrefix}-flexDisplay`)}>
          {/* part 1: product list */}
          <div className={classNames(`${clsPrefix}-dimensions`)} style={{ borderRight: `1px solid ${styledVars.CAP_G07}`, marginRight: styledVars.CAP_SPACE_16 }}>
            <div onClick={this.showSlideBox} className={classNames(`${clsPrefix}-flexDisplay`)} style={{ alignItems: 'center', cursor: 'pointer' }}>
              <CapIcon type="more-applications" className={classNames(`${clsPrefix}-more-app`)}></CapIcon>
              <CapHeading type="h5">{primaryListProps.selectedItem}</CapHeading>
            </div>
            {showSlideBox && (
              <CapSlideBox
                showShadow
                show={showSlideBox}
                size="size-s"
                header={(
                  <div className={classNames(`${clsPrefix}-flexDisplay`)}>
                    <CapIcon type="more-applications" className={classNames(`${clsPrefix}-more-app`)}></CapIcon>
                    <CapHeading type="h5" style={{margin: `${styledVars.CAP_SPACE_28} 0`}}>{primaryListProps.slideBoxHeading}</CapHeading>
                  </div>
                )}
                content={<CapList dataSource={primaryListProps.items} renderItem={(item) => (<CapList.Item>{item}</CapList.Item>)} />}
                className="custom-class-name"
                handleClose={this.closeSlideBox}
                position="left" />
            )}
          </div>
          {/* part 2: org selection */}
          <div className={classNames(`${clsPrefix}-dimensions`)}>
            {primarySelectProps && (
              <Select
                showSearch
                showHeader
                {...primarySelectProps}
              />
            )}
          </div>
        </div>
        {/* part 3: menu tabs */}
        {menuProps && this.renderTopMenu()}
        {/* part 4: topbar icons */}
        {
          onSettingsClick && <CapIcon onClick={onSettingsClick} className={classNames(`${clsPrefix}-setting`)} type="settings" />
        }
        {/* part 5: user menu */}
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
                <span className="text-label"><CapIcon type="person" size="s" className={(`${clsPrefix}-person`)}></CapIcon></span>
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
  primaryListProps: PropTypes.object,
  menuProps: PropTypes.object,
  onSettingsClick: PropTypes.func.isRequired,
  logoutText: PropTypes.string,
  onLogoutClick: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export default CapTopBar;
