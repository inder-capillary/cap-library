/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/**
 *
 * CapCollapsibleNavbar
 *
 * Configuration driven collapsible navbar to navigate between routes of an app
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Collapse } from 'antd';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import CapRow from '../CapRow';
import CapColumn from '../CapColumn';
import CapButton from '../CapButton';
import CapDivider from '../CapDivider';
import CapMenu from '../CapMenu';
import CapPopover from '../CapPopover';
import CapTooltip from '../CapTooltip';

import './_index.scss';

const chevronLeft = require('./assets/chevron-left.svg');
const chevronLeftBlue = require('./assets/chevron-left-blue.svg');
const chevronDown = require('./assets/chevron-down.svg');
const chevronRight = require('./assets/chevron-right.svg');
const leftNavAddBlack = require('./assets/left-nav-add-black.svg');

const ChevronLeftIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const LeftNavAddIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const GenericNavIcon = styled.img`
  height: 22px;
  width: 22px;
`;

const { Panel } = Collapse;

const PANEL_HEIGHT_FACTOR = 3.64; // factor by which to divide screen height to get max height collapse panel

class CapCollapsibleNavbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      defaultIcon: 'report',
      height: 0,
      ...this.getDefaultState(props),
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillReceiveProps(nextProps) {
    const searchUrl = window.location.search;
    const [, newStateKey] = searchUrl.split('query=');
    if (newStateKey !== this.state.selectedKey) {
      const defaultActiveKey = this.getLastKey(newStateKey);
      this.setState({
        selectedKey: newStateKey || '',
        defaultActiveKey,
        activeKey: defaultActiveKey,
      });
      this.resetLowerLevelCollapse();
    }
    if (nextProps.displaySyncBanner !== this.props.displaySyncBanner) {
      this.triggerFillerResize();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  };

  handleCollapseChange = (key) => this.setState({ activeKey: key }, this.triggerFillerResize)

  setCollapsedValue = (cfg, item, key) => {
    key = `${key}${!isEmpty(key) ? '.' : ''}${item.value}`;
    if (!isEmpty(item.children)) {
      if (item.popover) {
        cfg[key] = true;
      }
      item.children.forEach((i) => this.setCollapsedValue(cfg, i, key));
    }
    return cfg;
  }

  resetLowerLevelCollapse = () => {
    const { lowerLevelMenuCollapsed } = this.state;
    Object.keys(lowerLevelMenuCollapsed).forEach((key) => {
      lowerLevelMenuCollapsed[key] = true;
    });
    return {
      lowerLevelMenuCollapsed,
    };
  }

  setMenuHovered = (value) => this.setState((prevState) => ({menuHovered: value, createNewClicked: value ? prevState.createNewClicked : false}), this.triggerFillerResize)

  toggleCreateNewClicked = () => this.setState((prevState) => ({createNewClicked: !prevState.createNewClicked}))

  toggleMenuCollapsed = () => this.setState((prevState) => ({menuCollapsed: prevState.menuHovered ? true : !prevState.menuCollapsed}), () => {
    const newState = { switcherClicked: !this.state.menuCollapsed, createNewClicked: false };
    if (this.state.menuHovered) {
      newState.menuHovered = false;
    }
    this.resetLowerLevelCollapse();
    this.setState(newState, () => {
      this.triggerFillerResize();
      this.props.switcherClicked(this.state.switcherClicked);
    });
  })

  setSwitcherHovered = (value) => this.setState({ switcherHovered: value })

  setCreateNewHovered = (value) => this.setState({createNewHovered: value})

  setHoveredState = (key, value) => this.setState((prevState) => {
    const { hoverConfig } = prevState;
    hoverConfig[`${key}Hovered`] = value;
    return { hoverConfig };
  })

  setPanelHoveredState = (key, value) => this.setState((prevState) => {
    const { panelHoverConfig } = prevState;
    panelHoverConfig[`${key}Hovered`] = value;
    return { panelHoverConfig };
  })

  toggleItemCollapsed = (item) => {
    const { key } = this.getClickedItemConfig(item);
    if (!isEmpty(key)) {
      const menuKey = this.reverseKey(key);
      this.setState((prevState) => {
        const { lowerLevelMenuCollapsed } = prevState;
        lowerLevelMenuCollapsed[menuKey] = !lowerLevelMenuCollapsed[menuKey];
        return { lowerLevelMenuCollapsed };
      });
    }
  }

  isMenuCollapsed = () => {
    const { menuCollapsed, menuHovered, switcherClicked } = this.state;
    if (switcherClicked) {
      return menuCollapsed;
    }
    return !menuHovered;
  }

  isNavItemSelected = (item) => {
    const { pathname } = window.location;
    return (pathname.indexOf(item.value) > -1);
  }

  isChildNavActive = (item, key = '') => {
    if (key.indexOf(item.value) > -1) {
      return true;
    }
    if (!isEmpty(item.children)) {
      return item.children.reduce((result, child) => (result || this.isChildNavActive(child, key)), false);
    }
    return false;
  }

  getDefaultState = (props = this.props) => {
    let hoverConfig;
    let panelHoverConfig;
    let lowerLevelMenuCollapsed;
    if (!isEmpty(props.config) && !isEmpty(props.config.states)) {
      hoverConfig = props.config.states.reduce((cfg, s) => {
        cfg[`${s.value}Hovered`] = false;
        return cfg;
      }, {});
      panelHoverConfig = props.config.states.reduce((cfg, s) => {
        cfg[`${s.value}Hovered`] = false;
        return cfg;
      }, {});
      lowerLevelMenuCollapsed = {};
      props.config.states.forEach((item) => this.setCollapsedValue(lowerLevelMenuCollapsed, item, ''));
    }
    const selectedKey = this.getSelectedKey();
    const defaultActiveKey = this.getLastKey(selectedKey);
    return {
      switcherHovered: false,
      menuHovered: false,
      switcherClicked: false,
      menuCollapsed: true,
      createNewHovered: false,
      createNewClicked: false,
      hoverConfig,
      panelHoverConfig,
      lowerLevelMenuCollapsed,
      selectedKey,
      defaultActiveKey,
      activeKey: defaultActiveKey,
      stateLastUpdated: (new Date()).getTime(),
    };
  }

  getLastKey = (key) => {
    const keyParts = !isEmpty(key) ? key.split('.') : [];
    return isEmpty(keyParts) ? '' : keyParts[keyParts.length - 1];
  }

  getSelectedKey = () => {
    const { search = '' } = window.location;
    const queryParts = search.split('query=');
    if (!isEmpty(queryParts) && queryParts.length > 1) {
      return queryParts[1];
    }
    return '';
  }

  getClickedItemConfig = (item, key = '', route = '') => {
    key = `${key}${!isEmpty(key) ? '.' : ''}${item.value}`;
    if (!isEmpty(item.parent)) {
      return this.getClickedItemConfig(item.parent, key, item.route);
    }
    if (!isEmpty(item.route)) {
      return {
        key,
        route: item.route,
      };
    }
    return {
      key,
      route,
    };
  }

  getFillerSize = () => {
    let fillerSize = 0;
    const isCollapsed = this.isMenuCollapsed();
    const navElement = document.getElementById('cap-collapsible-navbar');
    const bannerElement = document.getElementById('sync-details-banner');
    if (navElement) {
      const totalHeight = navElement.clientHeight;
      let contentHeight = 0;
      if (isCollapsed) {
        const typeHeightMap = {
          divider: 16,
          filler: 0,
          state: 48,
        };
        contentHeight = get(this.props, 'config.states', []).reduce((acc, state) => (acc + typeHeightMap[state.type]), 96);
      } else {
        const { children = [] } = navElement;
        for (let i = 0; i < children.length; i++) {
          if (children[i].classList[0] !== 'filler') {
            contentHeight += children[i].clientHeight;
          }
        }
      }
      fillerSize = totalHeight - contentHeight - 85;
      if (bannerElement && this.props.displaySyncBanner) {
        fillerSize -= 32;
      }
    }
    return fillerSize;
  }

  triggerFillerResize = () => {
    const isFillerPresent = get(this.props, 'config.states', []).some((item) => item.type === 'filler');
    if (isFillerPresent) {
      setTimeout(() => {
        this.setState({stateLastUpdated: (new Date()).getTime()});
      }, 175);
    }
  }

  reverseKey = (key = '') => {
    const parts = key.split('.');
    return parts.reverse().join('.');
  }

  leftNavClicked = (type, item) => {
    const cfg = this.getClickedItemConfig(item, '');
    this.setState(this.getDefaultState(), () => {
      const defaultActiveKey = this.getLastKey(cfg.key);
      this.setState({
        selectedKey: cfg.key,
        defaultActiveKey,
        activeKey: defaultActiveKey,
      });
      this.resetLowerLevelCollapse();
      if (!isEmpty(cfg.route)) {
        if (item.replace) {
          this.props.history.push('/');
          this.props.history.replace({ pathname: cfg.route, search: `?query=${cfg.key}&time=${moment().valueOf()}`});
        } else {
          this.props.history.push({ pathname: cfg.route, search: `?query=${cfg.key}`});
        }
      }
      this.props.navItemClicked({ type, ...cfg });
      this.props.switcherClicked(this.state.switcherClicked);
    });
  }

  renderCreateNewOptions = (newStates) => (
    <CapMenu className="new-state">
      {
        newStates.map((state) => (
          <CapMenu.Item className="new-state-item" key={state.value} onClick={() => this.leftNavClicked('createNew', state)}>
            {state.label}
          </CapMenu.Item>
        ))
      }
    </CapMenu>
  )

  renderLeafItem = (item, parent = {}, isSelected = false, firstLevel = false, level) => {
    const { key } = this.getClickedItemConfig(item);
    let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
    if (isEmpty(this.state.selectedKey)) {
      isKeySelected = window.location.pathname.indexOf(item.route) > -1;
    }
    const selected = ((firstLevel && isSelected) || (isSelected && isKeySelected)) && (level <= get(this.props, 'config.showSelectionTillLevel', Number.MAX_SAFE_INTEGER));
    return (
      <div data-level={level} className={`leaf-item${firstLevel ? ' first-level' : ''}${selected ? ' state-selected' : ''}`} key={item.value} onClick={() => this.leftNavClicked('state', {...item, parent})}>{item.label}</div>
    );
  }

  renderCollapseItem = (item, isSelected = false, level) => {
    if (item.popover) {
      const { key } = this.getClickedItemConfig(item);
      let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
      if (isEmpty(this.state.selectedKey)) {
        isKeySelected = window.location.pathname.indexOf(item.route) > -1;
      }
      const menuKey = !isEmpty(key) ? this.reverseKey(key) : '';
      return (
        <CapPopover
          overlayClassName="nav-popover low-level-menu"
          popupAlign={{ offset: [-0.25, 0] }}
          trigger="hover"
          visible={!this.state.lowerLevelMenuCollapsed[menuKey]}
          placement="rightTop"
          onVisibleChange={() => this.toggleItemCollapsed(item)}
          getPopupContainer={(trigger) => trigger.parentNode}
          content={
            <>
              {
                item.children.map((child) => {
                  const { key: childKey } = this.getClickedItemConfig({...child, parent: item});
                  const currentLevel = level + 1;
                  return (
                    <div data-level={currentLevel} className={`leaf-item${isSelected && (currentLevel <= get(this.props, 'config.showSelectionTillLevel', Number.MAX_SAFE_INTEGER)) && this.state.selectedKey.indexOf(childKey) > -1 ? ' state-selected' : ''}`} key={child.value} onClick={() => this.leftNavClicked('state', {...child, parent: item})}>{child.label}</div>
                  );
                })
              }
            </>
          }
        >
          <div data-level={level} className={`leaf-item popover-trigger${!this.state.lowerLevelMenuCollapsed[menuKey] ? ' expanded' : ''}${isSelected && (level <= get(this.props, 'config.showSelectionTillLevel', Number.MAX_SAFE_INTEGER)) && isKeySelected ? ' state-selected' : ''}`} key={item.value}>
            <span>{item.label}</span>
            <ChevronLeftIcon src={chevronRight} />
          </div>
        </CapPopover>
      );
    }
    const panelMaxHeight = (this.state.height / PANEL_HEIGHT_FACTOR).toFixed();
    const { key } = this.getClickedItemConfig(item);
    let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
    if (isEmpty(this.state.selectedKey)) {
      isKeySelected = window.location.pathname.indexOf(item.route) > -1;
    }
    const isTopLevel = isEmpty(item.parent) || level === 0;
    return (
      <Collapse
        data-level={level}
        defaultActiveKey={this.state.defaultActiveKey}
        activeKey={this.isChildNavActive(item, this.state.activeKey) ? item.value : null}
        className={`${(isSelected && (level <= get(this.props, 'config.showSelectionTillLevel', Number.MAX_SAFE_INTEGER)) && ((isTopLevel && isEmpty(this.state.selectedKey)) || isKeySelected)) ? 'state-selected' : ''}`}
        bordered={false}
        accordion
        onChange={(newActiveKey) => this.handleCollapseChange(!isEmpty(newActiveKey) ? newActiveKey : get(item, 'parent.value', undefined))}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <ChevronLeftIcon
            style={isActive ? {
              transform: 'rotate(180deg)',
              marginTop: '-12px',
            } : {}}
            src={chevronDown}
          />
        )}
      >
        <Panel
          header={(
            <div onMouseOver={() => isTopLevel && this.setPanelHoveredState(item.value, true)} onMouseOut={() => isTopLevel && this.setPanelHoveredState(item.value, false)}>
              {item.label}
            </div>
          )}
          key={item.value}
          style={isTopLevel ? {} : { maxHeight: `${panelMaxHeight}px`, overflowY: 'auto' }}
        >
          <div onMouseOver={() => isTopLevel && this.setPanelHoveredState(item.value, true)} onMouseOut={() => isTopLevel && this.setPanelHoveredState(item.value, false)}>
            {!isEmpty(item.children) && item.children.map((child) => !isEmpty(child.children) && child.children.length > 0 ? this.renderCollapseItem({...child, parent: item}, isSelected, level + 1) : this.renderLeafItem({...child, parent: item}, item, isSelected, false, level + 1))}
          </div>
        </Panel>
      </Collapse>
    );
  }

  renderNavItem = (item, level = 0) => {
    const { defaultIcon, hoverConfig, panelHoverConfig, stateLastUpdated } = this.state;
    const isCollapsed = this.isMenuCollapsed();
    if (item.type === 'filler') {
      return (
        <div className={`filler ${isCollapsed ? 'collapsed' : 'expanded'}`} key={stateLastUpdated} style={{ height: `${this.getFillerSize()}px` }}></div>
      );
    }
    if (item.type === 'divider') {
      return (
        <CapRow className="divider">
          <CapColumn span={isCollapsed ? 24 : 3} className="icon-column"></CapColumn>
          <CapColumn span={21} className={`menu-item ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <CapDivider />
          </CapColumn>
        </CapRow>
      );
    }
    const isSelected = this.isNavItemSelected(item);
    const customStyle = {};
    if (hoverConfig[`${item.value}Hovered`] && !isSelected) {
      customStyle.padding = '8px';
    }
    if (panelHoverConfig[`${item.value}Hovered`] && !isSelected) {
      customStyle.background = 'rgb(66, 82, 110)';
    }
    return (
      <CapRow span={24}>
        <CapColumn span={isCollapsed ? 24 : 3} className="icon-column" key={item.value}>
          <div
            className={`icon-container${isSelected ? ' state-selected' : ''}`}
            style={customStyle}
            onMouseOver={() => this.setHoveredState(item.value, true)}
            onMouseOut={() => this.setHoveredState(item.value, false)}
          >
            <GenericNavIcon style={hoverConfig[`${item.value}Hovered`] && !isSelected ? { height: '20px', width: '20px' } : {}} src={require(`./assets/${item.icon || defaultIcon}${hoverConfig[`${item.value}Hovered`] && !isSelected ? '-black' : ''}.svg`)}></GenericNavIcon>
          </div>
        </CapColumn>
        <CapColumn span={21} className={`menu-item ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          {!isEmpty(item.children) && item.children.length > 0 ? this.renderCollapseItem(item, isSelected, level) : this.renderLeafItem(item, {}, isSelected, true, level)}
        </CapColumn>
      </CapRow>
    );
  }

  render() {
    const { config, className, messages } = this.props;
    const { createNewStates, states } = config;
    const { createNewHovered, switcherClicked, createNewClicked, switcherHovered } = this.state;
    const isCollapsed = this.isMenuCollapsed();
    return (
      <div
        id="cap-collapsible-navbar"
        className={`cap-collapsible-nav${isCollapsed ? ' collapsed' : ' expanded'}${switcherClicked ? ' clicked' : ' hovered'}${className}`}
        onMouseOver={() => this.setMenuHovered(true)}
        onMouseLeave={() => this.setMenuHovered(false)}
      >
        <CapRow
          span={24}
          className="controls"
          key="controls"
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}
        >
          <CapColumn span={isCollapsed ? 24 : 3} className="icon-column">
            <CapTooltip placement="right" title={isCollapsed ? messages.switcherExpand : messages.switcherCollapse}>
              <div
                className="switcher"
                onClick={this.toggleMenuCollapsed}
                onMouseOver={() => this.setSwitcherHovered(true)}
                onMouseLeave={() => this.setSwitcherHovered(false)}
              >
                <ChevronLeftIcon src={switcherHovered ? chevronLeftBlue : chevronLeft}></ChevronLeftIcon>
              </div>
            </CapTooltip>
          </CapColumn>
          <CapColumn span={21} className={`menu-item ${isCollapsed ? 'collapsed' : 'expanded'}`}></CapColumn>
        </CapRow>
        {
          !isEmpty(createNewStates) && (
            <CapRow span={24} className="create-new" key="createNew">
              <CapColumn span={isCollapsed ? 24 : 3} className="icon-column">
                <div
                  className="icon-container"
                  onMouseOver={() => this.setCreateNewHovered(true)}
                  onMouseOut={() => this.setCreateNewHovered(false)}
                >
                  <LeftNavAddIcon src={require(`./assets/left-nav-add${createNewHovered ? '-black' : ''}.svg`)}></LeftNavAddIcon>
                </div>
              </CapColumn>
              <CapColumn span={21} className={`menu-item ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                <CapPopover
                  content={this.renderCreateNewOptions(createNewStates)}
                  trigger="hover"
                  placement="bottom"
                  overlayClassName="nav-popover new-state-popup"
                  onVisibleChange={this.toggleCreateNewClicked}
                  visible={createNewClicked}
                >
                  <CapButton type="secondary">
                    <LeftNavAddIcon src={leftNavAddBlack}></LeftNavAddIcon>
                    {messages.createNew}
                  </CapButton>
                </CapPopover>
              </CapColumn>
            </CapRow>
          )
        }
        {
          !isEmpty(states) && states.map((item) => this.renderNavItem(item, 0))
        }
      </div>
    );
  }
}

// setting default props
CapCollapsibleNavbar.defaultProps = {
  config: {
    createNewStates: [],
    states: [],
    showSelectionTillLevel: Number.MAX_SAFE_INTEGER,
  },
  className: '',
  displaySyncBanner: false,
  history: {},
  messages: {},
  navItemClicked: (() => {}),
  switcherClicked: (() => {}),
};

CapCollapsibleNavbar.propTypes = {
  config: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
  navItemClicked: PropTypes.func,
  switcherClicked: PropTypes.func,
  displaySyncBanner: PropTypes.bool,
  messages: PropTypes.object,
};

export default CapCollapsibleNavbar;
