/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-multi-assign */
/* eslint-disable radix */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
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

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { Collapse } from "antd";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import CapRow from "../CapRow";
import CapColumn from "../CapColumn";
import CapButton from "../CapButton";
import CapDivider from "../CapDivider";
import CapMenu from "../CapMenu";
import CapPopover from "../CapPopover";
import CapTooltip from "../CapTooltip";

import "./_index.scss";

import {
  COLLAPSE,
  COLLAPSED,
  EXPAND,
  EXPANDED,
  FILLER,
  DIVIDER,
  CONFIG_DEFAULT_SELECTED_KEY,
  PARENT,
  CHILD,
  CLICKED,
  HOVERED,
  STATE,
  SCROLL,
  STATE_SELECTED,
  RESIZE,
  REPORT,
  NOT_FOUND,
  PARENT_VALUE,
  CREATE_NEW,
} from "./constants";

const chevronLeft = require("./assets/chevron-left.svg");
const chevronLeftBlue = require("./assets/chevron-left-blue.svg");
const chevronDown = require("./assets/chevron-down.svg");
const chevronRight = require("./assets/chevron-right.svg");
const leftNavAddBlack = require("./assets/left-nav-add-black.svg");

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

// const PANEL_HEIGHT_FACTOR = 3.64; // factor by which to divide screen height to get max height collapse panel

class CapCollapsibleNavbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      defaultIcon: REPORT,
      height: 0,
      expansionLevel: 1,
      ...this.getDefaultState(props)
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener(RESIZE, this.updateWindowDimensions);
    this.props.switcherClicked(this.props.navExpandedDefault);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.displaySyncBanner !== this.props.displaySyncBanner) {
      this.triggerFillerResize();
    }
    const { search = "" } = window.location;
    const queryParts = search.split("query=");
    if (
      nextProps.displaySyncBanner !== this.props.displaySyncBanner &&
      queryParts.length <= 1
    ) {
      this.setState(this.getDefaultState(nextProps, true));
    }
    const selectedKey = this.getSelectedKey();
    const defaultActiveKey = this.getLastKey(selectedKey);
    if (queryParts.length > 1) {
      this.setState(this.getDefaultState(nextProps, true), () =>
        this.getInit(this.state.defaultActiveKeys, defaultActiveKey, nextProps)
      );
    } else if (queryParts.length === 1) {
      const res = {};
      const { defaultActiveKeysObj = {} } = this.state;
      if (!isEmpty(this.props.config) && !isEmpty(this.props.config.sections)) {
        let defaultSection;
        const defaultKey = get(this.props, CONFIG_DEFAULT_SELECTED_KEY);
        if (!isEmpty(defaultKey)) {
          this.props.config.sections.every((eachSection, i) => {
            eachSection.states.every(eachState => {
              if (defaultKey.indexOf(eachState.value) > -1) {
                defaultSection = eachState.value;
              }
              return isEmpty(defaultSection);
            });
            return isEmpty(defaultSection);
          });
        }
        this.props.config.sections.every((eachSection, sectionNo) => {
          defaultActiveKeysObj[sectionNo] = defaultSection;
          eachSection.states.every(eachState => {
            const returnObj = this.getKeyAndSectionId(
              eachState,
              selectedKey,
              sectionNo
            );
            if (typeof returnObj === "object" && returnObj.key !== NOT_FOUND) {
              defaultActiveKeysObj[sectionNo] = returnObj.key;
              res.key = returnObj.key;
              res.cfgKey = returnObj.cfgKey;
              res.sectionId = returnObj.sectionId;
              return false;
            }
            return true;
          });
          return isEmpty(res);
        });
      }
      if (!isEmpty(res)) {
        this.setState(
          {
            activeKey: [res.key],
            defaultActiveKeys: defaultActiveKeysObj,
            selectedKey: res.cfgKey,
            defaultActiveKey: res.key
          },
          () => {
            this.getInit(this.state.defaultActiveKeys, res.key, nextProps);
          }
        );
      }
    }
  }

  getKeyAndSectionId = (eachState, selectedKey, sectionId) => {
    const cfg = this.getClickedItemConfig(eachState);
    let response = { key: NOT_FOUND, sectionId: NOT_FOUND };
    if (!isEmpty(cfg.route)) {
      if (selectedKey.indexOf(cfg.route) > -1) {
        response.key = eachState.value;
        response.cfgKey = cfg.key;
        response.sectionId = sectionId;
      } else if (!isEmpty(eachState.children)) {
        eachState.children.every(eachChild => {
          const returnObj = this.getKeyAndSectionId(
            { ...eachChild, parent: eachState },
            selectedKey,
            sectionId
          );
          if (typeof returnObj === "object" && returnObj.key !== NOT_FOUND) {
            response = returnObj;
            return false;
          }
          return true;
        });
      } else {
        response = { key: NOT_FOUND, sectionId: NOT_FOUND };
      }
    } else if (!isEmpty(eachState.children)) {
      eachState.children.every(eachChild => {
        const returnObj = this.getKeyAndSectionId(
          { ...eachChild, parent: eachState },
          selectedKey,
          sectionId
        );
        if (typeof returnObj === "object" && returnObj.key !== NOT_FOUND) {
          response = returnObj;
          return false;
        }
        return true;
      });
    } else {
      response = { key: NOT_FOUND, sectionId: NOT_FOUND };
    }
    return response;
  };

  getActiveKeys(defaultActiveKeys) {
    return Object.values(defaultActiveKeys || {}).filter(e => !isEmpty(e));
  }

  componentWillUnmount() {
    window.removeEventListener(RESIZE, this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  };

  handleCollapseChange = (
    key,
    sectionId,
    defaultActiveKeys,
    expansionType,
    newActiveKey,
    level,
    expansionLevelProp,
    hasChildren,
    childrenLength
  ) => {
    this.props.handleCollapseChange({
      key: !isEmpty(newActiveKey) ? key : defaultActiveKeys[sectionId],
      type: !isEmpty(newActiveKey) ? EXPAND : COLLAPSE,
      level
    });

    const screenAddOnHeight = Math.round((window.innerHeight - 768) / 100);
    let variableMaxHeight = this.state.defaultEnabledHeight;
    let { expansionLevel } = this.state;
    const defaultKeys = { ...defaultActiveKeys };
    defaultKeys[sectionId] = key;
    if (expansionType === PARENT && sectionId !== 0) {
      switch (expansionLevelProp) {
        case 1:
        case 2:
        case 3:
        case 4:
          key === undefined
            ? ((variableMaxHeight = this.state.defaultEnabledHeight),
              (expansionLevel = 1))
            : ((variableMaxHeight = (
                parseInt(variableMaxHeight) +
                (childrenLength <= 3 ? Math.round(41.6 * childrenLength) : 125)
              ).toString()),
              (expansionLevel = 2));
          break;
        default:
          break;
      }
    }
    if (expansionType === CHILD && sectionId !== 0) {
      switch (expansionLevelProp) {
        case 1:
        case 2:
        case 3:
        case 4:
          if (newActiveKey === undefined && level === 1) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + 125
            ).toString();
            expansionLevel = 2;
          } else if (level === 1 && !hasChildren) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + 125
            ).toString();
            expansionLevel = 2;
          } else if (level === 1 && hasChildren && childrenLength > 3) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + 260
            ).toString();
            expansionLevel = 3;
          } else if (level === 1 && hasChildren && childrenLength <= 3) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + +Math.round(60 * childrenLength)
            ).toString();
            expansionLevel = 3;
          } else if (newActiveKey === undefined && level === 2) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + 210
            ).toString();
            expansionLevel = 3;
          } else if (level === 2 && !hasChildren) {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) + 210
            ).toString();
            expansionLevel = 4;
          } else {
            variableMaxHeight = variableMaxHeight = (
              parseInt(variableMaxHeight) +
              280 +
              (38 * screenAddOnHeight)
            ).toString();
            expansionLevel = 4;
          }
          break;
        default:
          break;
      }
    }
    if (sectionId === 0 && expansionType === PARENT) {
      switch (expansionLevelProp) {
        case 1:
          expansionLevel = 1;
          variableMaxHeight = this.state.defaultEnabledHeight;
          break;
        case 2:
          expansionLevel = 2;
          variableMaxHeight = variableMaxHeight = (
            parseInt(variableMaxHeight) + 125
          ).toString();
          break;
        case 3:
          expansionLevel = 3;
          variableMaxHeight = variableMaxHeight = (
            parseInt(variableMaxHeight) + 210
          ).toString();
          break;
        case 4:
          expansionLevel = 4;
          variableMaxHeight = variableMaxHeight = (
            parseInt(variableMaxHeight) +
            280 +
            (38 * screenAddOnHeight)
          ).toString();
          break;
        default:
          break;
      }
    }
    if (sectionId === 0 && expansionType === CHILD) {
      Object.keys(defaultKeys).forEach(eachKey => {
        if (parseInt(eachKey) !== sectionId) {
          defaultKeys[eachKey] = null;
        }
      });
      switch (expansionLevelProp) {
        case 1:
        case 2:
        case 3:
        case 4:
          expansionLevel = 1;
          variableMaxHeight = this.state.defaultEnabledHeight;
          break;
        default:
          break;
      }
    }
    this.setState(
      {
        defaultActiveKeys: defaultKeys,
        activeKey: this.getActiveKeys(defaultKeys),
        isPristine: false,
        expansionLevel,
        defaultMaxHeight: variableMaxHeight
      },
      this.triggerFillerResize
    );
  };

  setCollapsedValue = (cfg, item, key) => {
    key = `${key}${!isEmpty(key) ? "." : ""}${item.value}`;
    if (!isEmpty(item.children)) {
      if (item.popover) {
        cfg[key] = true;
      }
      item.children.forEach(i => this.setCollapsedValue(cfg, i, key));
    }
    return cfg;
  };

  resetLowerLevelCollapse = () => {
    const { lowerLevelMenuCollapsed = {} } = this.state;
    Object.keys(lowerLevelMenuCollapsed).forEach(key => {
      lowerLevelMenuCollapsed[key] = true;
    });
    return {
      lowerLevelMenuCollapsed
    };
  };

  setMenuHovered = value =>
    this.setState(
      prevState => ({
        menuHovered: value,
        createNewClicked: value ? prevState.createNewClicked : false
      }),
      this.triggerFillerResize
    );

  toggleCreateNewClicked = () =>
    this.setState(prevState => ({
      createNewClicked: !prevState.createNewClicked
    }));

  toggleMenuCollapsed = () =>
    this.setState(
      prevState => {
        const newState = {
          createNewClicked: false
        };
        if (!prevState.switcherClicked && prevState.menuHovered) {
          newState.switcherClicked = true;
          newState.menuCollapsed = false;
        } else {
          newState.switcherClicked = !prevState.switcherClicked;
          newState.menuHovered = false;
          newState.menuCollapsed = prevState.switcherClicked
            ? true
            : !prevState.menuCollapsed;
        }
        return newState;
      },
      () => {
        this.resetLowerLevelCollapse();
        this.triggerFillerResize();
        this.props.switcherClicked(this.state.switcherClicked);
      }
    );

  setSwitcherHovered = value => this.setState({ switcherHovered: value });

  setCreateNewHovered = value => this.setState({ createNewHovered: value });

  setHoveredState = (key, value) =>
    this.setState(prevState => {
      const { hoverConfig } = prevState;
      hoverConfig[`${key}Hovered`] = value;
      return { hoverConfig };
    });

  setPanelHoveredState = (key, sectionId, value) =>
    this.setState(prevState => {
      const { panelHoverConfig } = prevState;
      panelHoverConfig[`${sectionId}`][`${key}Hovered`] = value;
      return { panelHoverConfig };
    });

  toggleItemCollapsed = item => {
    const { key } = this.getClickedItemConfig(item);
    if (!isEmpty(key)) {
      const menuKey = this.reverseKey(key);
      this.setState(prevState => {
        const { lowerLevelMenuCollapsed } = prevState;
        lowerLevelMenuCollapsed[menuKey] = !lowerLevelMenuCollapsed[menuKey];
        return { lowerLevelMenuCollapsed };
      });
    }
  };

  isMenuCollapsed = () => {
    const { menuCollapsed, menuHovered, switcherClicked } = this.state;
    if (switcherClicked) {
      return menuCollapsed;
    }
    return !menuHovered;
  };

  isNavItemSelected = item => {
    const { pathname } = window.location;
    return pathname.indexOf(item.value) > -1;
  };

  isChildNavActive = (item, key = "") => {
    if (this.state.isPristine && item.defaultExpanded) {
      return true;
    }
    if (key.indexOf(item.value) > -1) {
      return true;
    }
    const { key: itemKey } = this.getClickedItemConfig(item);
    if (this.state.isPristine && itemKey === this.state.selectedKey) {
      return true;
    }
    if (!isEmpty(item.children)) {
      return item.children.reduce(
        (result, child) =>
          result || this.isChildNavActive({ ...child, parent: item }, key),
        false
      );
    }
    return false;
  };

  getDefaultState = (props = this.props, skipNavStatus = false) => {
    let hoverConfig;
    let panelHoverConfig;
    let lowerLevelMenuCollapsed;
    let defaultActiveKeys;
    if (!isEmpty(props.config) && !isEmpty(props.config.sections)) {
      hoverConfig = {};
      panelHoverConfig = {};
      lowerLevelMenuCollapsed = {};
      defaultActiveKeys = {};
      props.config.sections.forEach((section, i) => {
        defaultActiveKeys[`${i}`] = null;
        hoverConfig[`${i}`] = section.states.reduce((cfg, s) => {
          cfg[`${s.value}Hovered`] = false;
          return cfg;
        }, {});
        panelHoverConfig[`${i}`] = section.states.reduce((cfg, s) => {
          cfg[`${s.value}Hovered`] = false;
          return cfg;
        }, {});
        lowerLevelMenuCollapsed[`${i}`] = {};
        section.states.forEach(item =>
          this.setCollapsedValue(lowerLevelMenuCollapsed[`${i}`], item, "")
        );
      });
    }

    const selectedKey =
      (!skipNavStatus && get(this.props, CONFIG_DEFAULT_SELECTED_KEY)) ||
      this.getSelectedKey();
    const defaultActiveKey = this.getLastKey(selectedKey);
    let noOfStates = 0;
    if (!isEmpty(props.config) && !isEmpty(props.config.sections)) {
      props.config.sections.forEach((section, i) => {
        section.states.forEach(each => {
          if (each.defaultExpanded === true) {
            defaultActiveKeys[`${i}`] = each.value;
          }
          if (each.value === defaultActiveKey) {
            defaultActiveKeys[`${i}`] = defaultActiveKey;
          }
          if (skipNavStatus) {
            each.children &&
              each.children.forEach(eachChildren => {
                if (eachChildren.value === defaultActiveKey) {
                  defaultActiveKeys[`${i}`] = defaultActiveKey;
                }
                eachChildren.children &&
                  eachChildren.children.forEach(eachSubState => {
                    if (eachSubState.value === defaultActiveKey) {
                      defaultActiveKeys[`${i}`] = defaultActiveKey;
                    }
                  });
              });
          }
          noOfStates += 1;
        });
      });
    }
    const newState = {
      switcherHovered: false,
      menuHovered: false,
      switcherClicked: props.navExpandedDefault,
      menuCollapsed: !props.navExpandedDefault,
      createNewHovered: false,
      createNewClicked: false,
      hoverConfig,
      panelHoverConfig,
      lowerLevelMenuCollapsed,
      selectedKey,
      defaultActiveKey,
      defaultActiveKeys,
      defaultMaxHeight: (
        140 +
        (noOfStates - 1) * 50 +
        (props.displaySyncBanner === true ? 40 : 0)
      ).toString(),
      stateMaxheight: "36vh",
      defaultEnabledHeight: (
        140 +
        (noOfStates - 1) * 50 +
        (props.displaySyncBanner === true ? 40 : 0)
      ).toString(),
      expansionLevel: 1,
      activeKey: this.getActiveKeys(defaultActiveKeys)
    };
    if (skipNavStatus) {
      delete newState.switcherClicked;
      delete newState.menuCollapsed;
      delete newState.lowerLevelMenuCollapsed;
    }
    return newState;
  };

  getInit(defaultActiveKeys = {}, defaultActiveKey, props) {
    if (
      Object.values(defaultActiveKeys).filter(e => !isEmpty(e)).length !== 0
    ) {
      props.config.sections.forEach((eachSection, sectionId) => {
        eachSection.states.forEach(eachState => {
          if (eachState.value === defaultActiveKey) {
            this.handleCollapseChange(
              !isEmpty(defaultActiveKey)
                ? defaultActiveKey
                : get(eachState, PARENT_VALUE, undefined),
              sectionId,
              defaultActiveKeys,
              eachState.type === STATE ? PARENT : CHILD,
              defaultActiveKey,
              0,
              1,
              !isEmpty(eachState.children),
              !isEmpty(eachState.children) ? eachState.children.length : 0
            );
          } else {
            eachState.children &&
              eachState.children.forEach(eachChild => {
                if (eachChild.value === defaultActiveKey) {
                  this.handleCollapseChange(
                    !isEmpty(defaultActiveKey)
                      ? defaultActiveKey
                      : get(eachChild, PARENT_VALUE, undefined),
                    sectionId,
                    defaultActiveKeys,
                    eachChild.type === STATE ? PARENT : CHILD,
                    defaultActiveKey,
                    1,
                    2,
                    !isEmpty(eachChild.children),
                    !isEmpty(eachChild.children) ? eachChild.children.length : 0
                  );
                } else {
                  eachChild.children &&
                    eachChild.children.forEach(eachLeaf => {
                      if (eachLeaf.value === defaultActiveKey) {
                        this.handleCollapseChange(
                          !isEmpty(defaultActiveKey)
                            ? defaultActiveKey
                            : get(eachLeaf, PARENT_VALUE, undefined),
                          sectionId,
                          defaultActiveKeys,
                          eachLeaf.type === STATE ? PARENT : CHILD,
                          defaultActiveKey,
                          2,
                          3,
                          !isEmpty(eachLeaf.children),
                          !isEmpty(eachLeaf.children)
                            ? eachLeaf.children.length
                            : 0
                        );
                      } else {
                        eachLeaf.children &&
                          eachLeaf.children.forEach(lowerMenuLeaf => {
                            if (lowerMenuLeaf.value === defaultActiveKey) {
                              this.handleCollapseChange(
                                !isEmpty(defaultActiveKey)
                                  ? defaultActiveKey
                                  : get(
                                      lowerMenuLeaf,
                                      PARENT_VALUE,
                                      undefined
                                    ),
                                sectionId,
                                defaultActiveKeys,
                                lowerMenuLeaf.type === STATE
                                  ? PARENT
                                  : CHILD,
                                defaultActiveKey,
                                3,
                                4,
                                !isEmpty(lowerMenuLeaf.children),
                                !isEmpty(lowerMenuLeaf.children)
                                  ? lowerMenuLeaf.children.length
                                  : 0
                              );
                            }
                          });
                      }
                    });
                }
              });
          }
        });
      });
    }
  }

  getLastKey = key => {
    const keyParts = !isEmpty(key) ? key.split(".") : [];
    return isEmpty(keyParts)
      ? ""
      : keyParts.length === 3
      ? keyParts[keyParts.length - 2]
      : keyParts.length === 2
      ? keyParts[keyParts.length - 2]
      : keyParts[1];
  };

  getSelectedKey = () => {
    const { search = "", pathname = "" } = window.location;
    const queryParts = search.split("query=");
    if (!isEmpty(queryParts) && queryParts.length > 1) {
      return queryParts[1];
    }

    const locationPaths = pathname.split("/");
    return `/${locationPaths.slice(3).join("/")}`;
  };

  getSelectedRouteKey = (route, value) => {
    if (Array.isArray(route)) {
      if (route.some(r => window.location.pathname.indexOf(r) > -1)) {
        return true;
      }
      return false;
    }
    return (
      window.location.pathname.indexOf(route) > -1 ||
      window.location.pathname.indexOf(value) > -1
    );
  };

  getClickedItemConfig = (item, key = "", route = "") => {
    key = `${key}${!isEmpty(key) ? "." : ""}${item.value}`;
    if (!isEmpty(item.parent)) {
      return this.getClickedItemConfig(
        item.parent,
        key,
        isEmpty(route) ? item.route : route
      );
    }
    if (isEmpty(route) && !isEmpty(item.route)) {
      return {
        key,
        route: item.route
      };
    }
    return {
      key,
      route
    };
  };

  getFillerSize = () => {
    let fillerSize = 0;
    const isCollapsed = this.isMenuCollapsed();
    const navElement = document.getElementById("cap-collapsible-navbar");
    const bannerElement = document.getElementById("sync-details-banner");
    if (navElement) {
      const totalHeight = navElement.clientHeight;
      let contentHeight = 0;
      if (isCollapsed) {
        const typeHeightMap = {
          divider: 16,
          filler: 0,
          state: 48
        };
        contentHeight = get(this.props, "config.sections", []).reduce(
          (acc, state) => acc + typeHeightMap[state.type],
          96
        );
      } else {
        const { children = [] } = navElement;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < children.length; i++) {
          if (children[i].classList[0] !== FILLER) {
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
  };

  triggerFillerResize = () => {
    const isFillerPresent = get(this.props, "config.states", []).some(
      item => item.type === FILLER
    );
    if (isFillerPresent) {
      setTimeout(() => {
        this.setState({ stateLastUpdated: new Date().getTime() });
      }, 175);
    }
  };

  reverseKey = (key = "") => {
    const parts = key.split(".");
    return parts.reverse().join(".");
  };

  leftNavClicked = (type, item) => {
    const cfg = this.getClickedItemConfig(item, "");
    this.setState(this.getDefaultState(this.props, true), () => {
      const defaultActiveKey = this.getLastKey(cfg.key);
      this.setState({
        selectedKey: cfg.key,
        defaultActiveKey,
        activeKey: this.getActiveKeys(this.state.defaultActiveKeys)
      });
      this.resetLowerLevelCollapse();
      if (!isEmpty(cfg.route)) {
        if (item.replace) {
          this.props.history.push("/");
          this.props.history.replace({
            pathname: Array.isArray(cfg.route) ? "" : cfg.route,
            search: `?query=${cfg.key}&time=${moment().valueOf()}`
          });
        } else {
          this.props.history.push({
            pathname: Array.isArray(cfg.route) ? "" : cfg.route,
            search: `?query=${cfg.key}`
          });
        }
      }
      this.props.navItemClicked({ type, ...cfg });
      this.props.switcherClicked(this.state.switcherClicked);
    });
  };

  renderCreateNewOptions = newStates => (
    <CapMenu className="new-state">
      {newStates.map(state => (
        <CapMenu.Item
          className="new-state-item"
          key={state.value}
          onClick={() => this.leftNavClicked(CREATE_NEW, state)}
        >
          {state.label}
        </CapMenu.Item>
      ))}
    </CapMenu>
  );

  renderLeafItem = (
    item,
    parent = {},
    isSelected = false,
    firstLevel = false,
    level
  ) => {
    const { key } = this.getClickedItemConfig(item);
    let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
    if (isEmpty(this.state.selectedKey)) {
      isKeySelected = this.getSelectedRouteKey(item.route, item.value);
    }
    const selected =
      (firstLevel && isSelected) || (isSelected && isKeySelected);
    return (
      <div
        data-level={level}
        className={`leaf-item data-level-${level} ${
          firstLevel ? "first-level" : ""
        }${selected ? STATE_SELECTED : ""}`}
        key={item.value}
        onClick={() => this.leftNavClicked(STATE, { ...item, parent })}
      >
        <span className="text" title={item.label}>
          {item.label}
        </span>
      </div>
    );
  };

  renderCollapseItem = (item, sectionId, isSelected = false, level) => {
    if (item.popover) {
      const { key } = this.getClickedItemConfig(item);
      let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
      if (isEmpty(this.state.selectedKey)) {
        isKeySelected = this.getSelectedRouteKey(item.route);
      }
      const menuKey = !isEmpty(key) ? this.reverseKey(key) : "";
      return (
        <CapPopover
          overlayClassName="nav-popover low-level-menu"
          popupAlign={{ offset: [-0.25, 0] }}
          trigger="hover"
          visible={!this.state.lowerLevelMenuCollapsed[menuKey]}
          placement="rightTop"
          onVisibleChange={() => this.toggleItemCollapsed(item)}
          getPopupContainer={trigger => trigger.parentNode}
          content={
            <>
              {item.children.map(child => {
                const { key: childKey } = this.getClickedItemConfig({
                  ...child,
                  parent: item
                });
                const currentLevel = level + 1;
                return (
                  <div
                    data-level={currentLevel}
                    className={`leaf-item data-level-${currentLevel} ${
                      isSelected &&
                      this.state.selectedKey.indexOf(childKey) > -1
                        ? STATE_SELECTED
                        : ""
                    }`}
                    key={child.value}
                    onClick={() =>
                      this.leftNavClicked(STATE, { ...child, parent: item })
                    }
                  >
                    <span className="text" title={child.label}>
                      {child.label}
                    </span>
                  </div>
                );
              })}
            </>
          }
        >
          <div
            data-level={level}
            className={`leaf-item popover-trigger data-level-${level} ${
              !this.state.lowerLevelMenuCollapsed[menuKey] ? EXPANDED : ""
            }${isSelected && isKeySelected ? STATE_SELECTED : ""}`}
            key={item.value}
          >
            <span className="text" title={item.label}>
              {item.label}
            </span>
            <ChevronLeftIcon src={chevronRight} />
          </div>
        </CapPopover>
      );
    }
    const { key } = this.getClickedItemConfig(item);
    let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
    if (isEmpty(this.state.selectedKey)) {
      isKeySelected = this.getSelectedRouteKey(item.route);
    }
    const isTopLevel = isEmpty(item.parent) || level === 0;
    return (
      <Collapse
        data-level={level}
        defaultActiveKey={[this.state.defaultActiveKey]}
        activeKey={
          this.isChildNavActive(item, this.state.activeKey) ? item.value : null
        }
        className={`data-level-${level} ${
          isSelected &&
          ((isTopLevel && isEmpty(this.state.selectedKey)) || isKeySelected)
            ? STATE_SELECTED
            : ""
        }`}
        bordered={false}
        accordion
        onChange={newActiveKey => {
          this.handleCollapseChange(
            !isEmpty(newActiveKey)
              ? newActiveKey
              : get(item, PARENT_VALUE, undefined),
            sectionId,
            this.state.defaultActiveKeys,
            item.type === STATE ? PARENT : CHILD,
            newActiveKey,
            level,
            this.state.expansionLevel,
            !isEmpty(item.children),
            !isEmpty(item.children) ? item.children.length : 0
          );
        }}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <ChevronLeftIcon
            style={
              isActive
                ? {
                    transform: "rotate(180deg)",
                    marginTop: "-12px"
                  }
                : {}
            }
            src={chevronDown}
          />
        )}
      >
        <Panel
          header={
            <div
              onMouseOver={() =>
                isTopLevel &&
                this.setPanelHoveredState(item.value, sectionId, true)
              }
              onMouseOut={() =>
                isTopLevel &&
                this.setPanelHoveredState(item.value, sectionId, false)
              }
              title={item.title}
            >
              {item.label}
            </div>
          }
          key={item.value}
        >
          <div
            style={
              // eslint-disable-next-line no-nested-ternary
              sectionId === 0 && item.type === STATE
                ? {
                    maxHeight: `calc(100vh - ${`${this.state.defaultMaxHeight}px`})`,
                    height: `calc(100vh - ${`${this.state.defaultMaxHeight}px`})`,
                    overflowY: SCROLL
                  }
                : item.type === STATE && level <= 2
                ? {
                    maxHeight: `${this.state.stateMaxheight}`,
                    overflowY: SCROLL
                  }
                : {}
            }
            onMouseOver={() =>
              isTopLevel &&
              this.setPanelHoveredState(item.value, sectionId, true)
            }
            onMouseOut={() =>
              isTopLevel &&
              this.setPanelHoveredState(item.value, sectionId, false)
            }
          >
            {!isEmpty(item.children) &&
              item.children.map(child =>
                !isEmpty(child.children) && child.children.length > 0
                  ? this.renderCollapseItem(
                      { ...child, parent: item },
                      sectionId,
                      isSelected,
                      level + 1
                    )
                  : this.renderLeafItem(
                      { ...child, parent: item },
                      item,
                      isSelected,
                      false,
                      level + 1
                    )
              )}
          </div>
        </Panel>
      </Collapse>
    );
  };

  renderNavItem = (item, sectionId, level = 0) => {
    const { defaultIcon, stateLastUpdated } = this.state;
    const isCollapsed = this.isMenuCollapsed();
    if (item.type === FILLER) {
      return (
        <div
          className={`filler ${isCollapsed ? COLLAPSED : EXPANDED}`}
          key={stateLastUpdated}
          style={{ height: `${this.getFillerSize()}px` }}
        />
      );
    }
    if (item.type === DIVIDER) {
      return (
        <CapRow className="divider">
          <CapColumn span={isCollapsed ? 24 : 3} className="icon-column" />
          <CapColumn
            span={21}
            className={`menu-item ${isCollapsed ? COLLAPSED : EXPANDED}`}
          >
            <CapDivider />
          </CapColumn>
        </CapRow>
      );
    }
    const isSelected =
      this.isNavItemSelected(item) ||
      this.isChildNavActive(item, this.state.activeKey);
    const { key } = this.getClickedItemConfig(item);
    let isKeySelected = this.state.selectedKey.indexOf(key) > -1;
    if (isEmpty(this.state.selectedKey)) {
      isKeySelected = this.getSelectedRouteKey(item.route);
    }
    const isTopLevel = isEmpty(item.parent) || level === 0;
    const itemSelected =
      isSelected &&
      ((isTopLevel && isEmpty(this.state.selectedKey)) || isKeySelected);
    return (
      <CapRow span={24}>
        <CapColumn
          span={isCollapsed ? 24 : 3}
          className="icon-column"
          key={item.value}
          style={
            sectionId === 0 && item.type === STATE
              ? this.state.menuCollapsed === true &&
                this.state.menuHovered === false
                ? {
                    maxHeight: `calc(100vh - ${`${this.state
                      .defaultEnabledHeight - 50}px`})`,
                    height: `calc(100vh - ${`${this.state.defaultEnabledHeight -
                      50}px`})`
                  }
                : {
                    maxHeight: `calc(100vh - ${`${this.state.defaultMaxHeight -
                      50}px`})`,
                    height: `calc(100vh - ${`${this.state.defaultMaxHeight -
                      50}px`})`
                  }
              : {}
          }
        >
          <div
            className={`icon-container ${itemSelected ? STATE_SELECTED : ""}`}>
             <GenericNavIcon
              style={{ height: "20px", width: "20px" }}
              src={require(`./assets/${item.icon || defaultIcon}-black.svg`)}
              alt={`${item.icon || defaultIcon}-black`}
            />
          </div>
          {sectionId === level && <div className="line" />}
        </CapColumn>
        <CapColumn
          span={21}
          className={`menu-item ${isCollapsed ? COLLAPSED : EXPANDED}`}
        >
          {!isEmpty(item.children) && item.children.length > 0
            ? this.renderCollapseItem(item, sectionId, isSelected, level)
            : this.renderLeafItem(item, {}, isSelected, true, level)}
          {sectionId === level && <div className="line" />}
        </CapColumn>
      </CapRow>
    );
  };

  renderSection = (section, i) => {
    const { states = [] } = section;
    return (
      <>
        {!isEmpty(states) && states.map(item => this.renderNavItem(item, i, 0))}
      </>
    );
  };

  render() {
    const { config, className, messages } = this.props;
    const { createNewStates, sections } = config;
    const {
      switcherClicked,
      createNewClicked,
      switcherHovered,
      menuHovered
    } = this.state;
    const isCollapsed = this.isMenuCollapsed();
    return (
      <div
        id="cap-collapsible-navbar"
        className={`cap-collapsible-nav ${
          isCollapsed ? COLLAPSED : EXPANDED
        }${switcherClicked ? CLICKED : HOVERED}${
          menuHovered ? "menu-hovered" : ""
        }${className}`}
        onMouseOver={() => this.setMenuHovered(true)}
        onMouseLeave={() => this.setMenuHovered(false)}
        style={{ height: "100%" }}
      >
        <CapRow
          span={24}
          className="controls"
          key="controls"
          onMouseOver={() => this.setMenuHovered(true)}
          onMouseLeave={() => this.setMenuHovered(false)}
        >
          <CapColumn span={isCollapsed ? 24 : 3} className="icon-column">
            <CapTooltip
              placement="right"
              title={
                !switcherClicked
                  ? messages.switcherExpand
                  : messages.switcherCollapse
              }
            >
              <div
                className="switcher"
                onClick={this.toggleMenuCollapsed}
                onMouseOver={() => this.setSwitcherHovered(true)}
                onMouseLeave={() => this.setSwitcherHovered(false)}
              >
                <ChevronLeftIcon
                  src={switcherHovered ? chevronLeftBlue : chevronLeft}
                />
              </div>
            </CapTooltip>
          </CapColumn>
          <CapColumn
            span={21}
            className={`menu-item ${isCollapsed ? COLLAPSED : EXPANDED}`}
          />
        </CapRow>
        {!isEmpty(createNewStates) && (
          <CapRow span={24} className="create-new" key="create-new">
            <CapColumn span={isCollapsed ? 24 : 3} className="icon-column">
              <div
                className="icon-container">
                <LeftNavAddIcon
                  src={require(`./assets/left-nav-add-black.svg`)}
                />
              </div>
            </CapColumn>
            <CapColumn
              span={21}
              className={`menu-item ${isCollapsed ? COLLAPSED : EXPANDED}`}
            >
              <CapPopover
                content={this.renderCreateNewOptions(createNewStates)}
                trigger="hover"
                placement="bottom"
                overlayClassName="nav-popover new-state-popup"
                onVisibleChange={this.toggleCreateNewClicked}
                visible={createNewClicked}
              >
                <CapButton type="secondary">
                  <LeftNavAddIcon src={leftNavAddBlack} />
                  {messages.createNew}
                </CapButton>
              </CapPopover>
            </CapColumn>
          </CapRow>
        )}
        {!isEmpty(sections) && sections.map(this.renderSection)}
      </div>
    );
  }
}

CapCollapsibleNavbar.defaultProps = {
  config: {
    createNewStates: [],
    sections: []
  },
  className: "",
  displaySyncBanner: false,
  history: {},
  messages: {},
  navItemClicked: () => {},
  handleCollapseChange: () => {},
  switcherClicked: () => {},
  navExpandedDefault: false
};

CapCollapsibleNavbar.propTypes = {
  config: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
  navItemClicked: PropTypes.func,
  switcherClicked: PropTypes.func,
  handleCollapseChange: PropTypes.func,
  displaySyncBanner: PropTypes.bool,
  navExpandedDefault: PropTypes.bool,
  messages: PropTypes.object
};

export default CapCollapsibleNavbar;
