/*
  Hamburger menu for mobile view of app

  Move this to cap-ui-library once hamburger menu and other needed components are prepared and tested
  Also move hamburger.svg and cap-logo-mobile.svg images to ui library assets/images and use from there.
*/

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import forOwn from "lodash/forOwn";
import isEqual from "lodash/isEqual";
import findIndex from "lodash/findIndex";
import get from "lodash/get";
import { List } from "semantic-ui-react";
import * as Virtualized from "react-virtualized";
import CapDrawer from "../CapDrawer";
import CapRow from "../CapRow";
import CapColumn from "../CapColumn";
import CapHeading from "../CapHeading";
import CapLabel from "../CapLabel";
import CapIcon from "../CapIcon";
import CapSlideBox from "../CapSlideBox";
import CapInput from "../CapInput";
// import { LogoBackground } from '../assets/icons';
import { LogoBackground } from "../assets/icons";
import * as styledVars from "../styled/variables";
import "./_index.scss";
const clsPrefix = "org-select";
const hamburgerIcon = require("../assets/icons/hamburger.svg");
const capLogo = require("../assets/icons/cap-logo-mobile.svg");
const moreApplications = require("../assets/icons/moreApplications.svg");
const PRODUCT_MASTERS = "masters";

const HamburgerIcon = styled.img`
  height: 28px;
  width: 28px;
`;

const CapLogo = styled.img`
  height: 26px;
  width: 26px;
`;

const MoreApplicationsIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-bottom: 1px;
  margin-right: 9px !important;
`;
class CapHamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    const menuItems = [];
    if (!isEmpty(props.sidebarContent)) {
      props.sidebarContent.forEach((item, i) => {
        if (!isEmpty(item.children)) {
          menuItems.push({
            label: item.label,
            hasChildren: true,
            expanded: i === 0,
            children: item.children,
          });
        } else {
          menuItems.push(item);
        }
      });
    }
    this.state = {
      isOpen: false,
      orgList: this.getProxyOrgList(props),
      menuItems,
      orgSearchText: "",
      orgSelectionBoxOpen: false,
      productListOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      !isEmpty(get(nextProps, "userData.user"))
      && !isEqual(
        get(nextProps, "userData.user"),
        get(this.props, "userData.user")
      )
    ) {
      this.setState({
        orgList: this.getProxyOrgList(nextProps),
      });
    }
  }

  capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  setOrgSelectionBoxOpen = (val) => this.setState({ orgSelectionBoxOpen: val });

  toggleIsOpen = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

  toggleMenuItemExpanded = (i) => this.setState((prevState) => {
    const { menuItems = [] } = prevState;
    menuItems[i].expanded = !menuItems[i].expanded;
    return { menuItems };
  });

  getOuList = (orgItem) => {
    const { ouList = [] } = orgItem;
    const accessibleOus = [];
    if (ouList.length) {
      ouList.forEach((item) => {
        accessibleOus.push({
          label: item.ouName,
          value: item.ouID,
          key: item.ouID,
        });
      });
    }
    return accessibleOus;
  };

  getProxyOrgList = (props = this.props) => {
    const { userData = {} } = props;
    const proxyOrgList = [];
    if (userData && userData.user && userData.user !== "") {
      const { orgDetails = {}, user = {} } = userData;
      const { name: selectedOrgName } = orgDetails;
      let { org_id: selectedOrgId } = orgDetails;
      const { proxyOrgList: orgList = [], accessibleOUList } = user;
      // fetching current selected org details and adding to org list dropdown
      if (!isEmpty(selectedOrgId)) {
        selectedOrgId = parseInt(selectedOrgId, 10);
        const selectedOrg = {
          label: selectedOrgName,
          value: selectedOrgId,
          key: selectedOrgId,
        };
        // add ou list for selected org if available
        if (!isEmpty(accessibleOUList)) {
          selectedOrg.accessibleOus = [];
          forOwn(accessibleOUList, (ouId, ouName) => {
            selectedOrg.accessibleOus.push({
              label: ouName,
              value: ouId,
              key: ouId,
            });
          });
        }
        proxyOrgList.push(selectedOrg);
      }
      if (orgList && orgList.length) {
        orgList.forEach((item) => {
          if (parseInt(item.orgID, 10) !== parseInt(selectedOrgId, 10)) {
            const id = parseInt(item.orgID, 10);
            const name = item.orgName;
            const orgObj = { label: name, value: id, key: id };
            if (item.ouList) {
              orgObj.accessibleOus = this.getOuList(item);
            }
            proxyOrgList.push(orgObj);
          }
        });
      }
    }
    return proxyOrgList;
  };

  getProductList = () => {
    const { currentOrgDetails = {} } = this.props.userData;
    const { module_details: moduleDetails = [] } = currentOrgDetails;
    const productsList = [];
    if (Object.keys(currentOrgDetails).length !== 0) {
      moduleDetails.forEach((module) => {
        if (module.name.toLowerCase() !== PRODUCT_MASTERS) {
          const productName = module.namespace;
          const intlProductName = this.props[productName];
          const moduleName = intlProductName || module.name.toLowerCase();
          productsList.push({
            value: moduleName,
            url: module.url,
            key: module.code,
          });
        }
      });
      // below change is temporary and should be fixed once we get correct modules list
      // adding insights+ to module list
      // if (Auth.hasAccess(CAMP_REPORT_VIEW)) {
      productsList.push({
        value: this.props.insights,
        url: "analytics/v2/",
        key: "insights",
      });
      // }
    }
    return productsList;
  };

  handleProductChange = (product) => {
    if (product.url !== window.location.pathname) {
      window.location.pathname = product.url;
    }
  };

  // eslint-disable-next-line no-unused-vars
  rowRenderer = ({ index, isScrolling, key, style }, itemsList) => (
    <div key={key} style={style}>
      <>{itemsList[index]}</>
    </div>
  );

  orgSearchCondition = (item) => {
    const { orgSearchText } = this.state;
    return (
      orgSearchText === ""
      || (item.label || "")
        .toLowerCase()
        .indexOf((orgSearchText || "").toLowerCase()) !== -1
    );
  };

  ouSearchCondition = (item) => {
    const { orgSearchText } = this.state;
    return (item.accessibleOus || []).filter((ou) => ou.label.toLowerCase().includes((orgSearchText || "").toLowerCase()));
  };

  getOrgListItem = (item) => {
    const selectedItem = this.props.loadStorageItem("orgID");
    const selectedOuItem = this.props.loadStorageItem("ouId");
    const isOuPresent = selectedOuItem !== null
      && selectedOuItem !== undefined
      && selectedOuItem !== -1;
    const itemLabel = item.accessibleOus ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <CapIcon
          type="sitemap"
          size="s"
          style={{ marginRight: styledVars.CAP_SPACE_08 }}
        />
        <div className={`${clsPrefix}-overflow-ellipsis`}>{item.label}</div>
      </div>
    ) : (
      item.label
    );
    const customClassname = item.accessibleOus
      ? `${clsPrefix}-select-ou-org-item`
      : `${clsPrefix}-select-item`;
    return (
      <CapHeading
        type="h6"
        onClick={() => this.handleChange(item)}
        className={classNames(
          customClassname,
          { selected: selectedItem === item.value && !isOuPresent },
          `${clsPrefix}-overflow-ellipsis`
        )}
        title={item.label}
        key={`org-key-${item.key}`}
      >
        {itemLabel}
      </CapHeading>
    );
  };

  getOuListItem = (item, ou) => {
    const selectedOuItem = this.props.loadStorageItem("ouId");
    return (
      <div
        className={classNames(`${clsPrefix}-select-ou-item`, {
          selected: selectedOuItem === ou.value,
        })}
        onClick={() => this.handleChange(item, ou)}
        key={`ou-key-${ou.key}`}
      >
        <CapHeading
          type="h6"
          style={{ maxWidth: 125 }}
          className={`${clsPrefix}-overflow-ellipsis`}
          title={ou.label}
        >
          {ou.label}
        </CapHeading>
        <CapLabel
          type="label3"
          style={{ maxWidth: 70 }}
          className={`${clsPrefix}-overflow-ellipsis`}
          title={item.label}
        >
          {item.label}
        </CapLabel>
      </div>
    );
  };

  getOrgItems = () => {
    const { orgList = [] } = this.state;
    const dropdownItems = [];
    orgList.forEach((item) => {
      if (this.orgSearchCondition(item)) {
        dropdownItems.push(this.getOrgListItem(item));
      }
      if (item.accessibleOus) {
        const ouList = this.orgSearchCondition(item)
          ? item.accessibleOus
          : this.ouSearchCondition(item);
        ouList.forEach((ou) => {
          if (ou.key !== -1) {
            dropdownItems.push(this.getOuListItem(item, ou));
          }
        });
      }
    });
    return dropdownItems;
  };

  handleSearch = (e) => this.setState({ orgSearchText: e.target.value });

  clearSearch = () => this.setState({ orgSearchText: "" });

  handleChange = (item, ou = {}) => {
    const selectedItem = this.props.loadStorageItem("orgID");
    const selectedOuItem = this.props.loadStorageItem("ouId");
    this.hideOrgSlidebox();
    if (selectedItem !== item.value || selectedOuItem !== ou.value) {
      this.props.changeOrgEntity(item.value, ou.value);
    }
  };

  hideOrgSlidebox = () => this.setState({
    orgSelectionBoxOpen: false,
    orgSearchText: "",
  });

  renderOrgList = () => {
    const {
      selectOrganization,
      noResultsText,
      screenHeight,
      screenWidth,
    } = this.props;
    const { orgSearchText = "" } = this.state;
    const itemsHtml = this.getOrgItems();
    return (
      <>
        <CapInput.Search
          placeholder={selectOrganization}
          onChange={this.handleSearch}
          value={orgSearchText}
          onClear={this.clearSearch}
          className={classNames(`${clsPrefix}-search`)}
        />
        {itemsHtml.length > 0 ? (
          <div
            className={classNames(`${clsPrefix}-items-wrapper`)}
            style={{
              height: screenHeight - 112,
              maxHeight: screenHeight - 112,
              overflowY: "auto",
            }}
          >
            {
              <Virtualized.List
                rowCount={(itemsHtml || []).length}
                width={screenWidth - 30}
                height={screenHeight - 60}
                rowHeight={36}
                rowRenderer={(value) => this.rowRenderer(value, itemsHtml)}
                overscanRowCount={5}
              />
            }
          </div>
        ) : (
          <div
            className={classNames(`${clsPrefix}-no-results`)}
            style={{ height: screenHeight - 175 }}
          >
            <div className={classNames(`${clsPrefix}-no-results-wrapper`)}>
              <div className={classNames(`${clsPrefix}-no-results-image`)}>
                <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
              </div>
            </div>
            <div className={classNames(`${clsPrefix}-no-results-text`)}>
              {noResultsText}
            </div>
          </div>
        )}
      </>
    );
  };

  renderOrgSelectionBox = () => {
    const { selectOrganization } = this.props;
    return (
      <CapSlideBox
        header={
          <>
            <i
              className="material-icons back-icon"
              onClick={() => this.hideOrgSlidebox()}
            >
              arrow_back
            </i>
            <span>{selectOrganization}</span>
          </>
        }
        show={this.state.orgSelectionBoxOpen}
        size="size-l"
        className={`${clsPrefix}-slidebox`}
        content={this.renderOrgList()}
        handleClose={() => this.hideOrgSlidebox()}
      />
    );
  };

  renderProductList = () => {
    const { selectProduct, defaultSelectedProduct } = this.props;
    const productList = this.getProductList();
    return (
      <CapSlideBox
        header={
          <>
            <i
              className="material-icons back-icon"
              onClick={() => this.setState({ productListOpen: false })}
            >
              arrow_back
            </i>
            <span>{selectProduct}</span>
          </>
        }
        show={this.state.productListOpen}
        size="size-l"
        className={`${clsPrefix}-slidebox`}
        content={
          <>
            {productList.map((product) => (
              <div
                onClick={() => this.handleProductChange(product)}
                className={`${clsPrefix}-product${
                  product.value === defaultSelectedProduct ? " selected" : ""
                }`}
              >
                {this.capitalize(product.value)}
              </div>
            ))}
          </>
        }
        handleClose={() => this.setState({ productListOpen: false })}
      />
    );
  };

  renderSelectedOrg = () => {
    const { loadStorageItem, selectOrganization } = this.props;
    const { orgList = [] } = this.state;
    const selectedOrg = loadStorageItem("orgID");
    const selectedOu = loadStorageItem("ouId");
    const selectedItemIndex = findIndex(
      orgList,
      (item) => item.value === selectedOrg
    );
    const itemDetails = orgList[selectedItemIndex] || {};
    let selectedOuItemIndex = -1;
    if (selectedOu && selectedOu !== -1) {
      selectedOuItemIndex = findIndex(
        itemDetails.accessibleOus,
        (ou) => ou.value === selectedOu
      );
    }
    let selectedItemLabel = selectOrganization;
    if (selectedItemIndex !== -1) {
      selectedItemLabel = itemDetails.label;
    }
    if (selectedOuItemIndex !== -1) {
      selectedItemLabel = itemDetails.accessibleOus[selectedOuItemIndex].label;
    }
    return (
      <div
        className={classNames(`${clsPrefix}-selection`)}
        onClick={() => this.setOrgSelectionBoxOpen(true)}
      >
        <div className={`${clsPrefix}-selected-value`}>
          <div className={`${clsPrefix}-selected-icon`}>
            <LogoBackground />
            <span className="text-label">{selectedItemLabel[0]}</span>
          </div>
          {selectedOuItemIndex !== -1 ? (
            <div className={`${clsPrefix}-selected-ou-value-label`}>
              <CapHeading
                type="h4"
                style={{ maxWidth: 110 }}
                className={`${clsPrefix}-overflow-ellipsis`}
                title={selectedItemLabel}
              >
                {selectedItemLabel}
              </CapHeading>
              <CapLabel
                type="label3"
                style={{ maxWidth: 70 }}
                className={`${clsPrefix}-overflow-ellipsis`}
                title={itemDetails.label}
              >
                {itemDetails.label}
              </CapLabel>
            </div>
          ) : (
            <CapHeading
              type="h4"
              className={classNames(
                `${clsPrefix}-selected-value-label`,
                `${clsPrefix}-overflow-ellipsis`
              )}
              title={selectedItemLabel}
            >
              {selectedItemLabel}
            </CapHeading>
          )}
        </div>
        <CapIcon
          type="chevron-right"
          className={classNames(`${clsPrefix}-arrow`)}
        />
      </div>
    );
  };

  renderSidebarContent = () => {
    const {
      sidebarContent = [],
      selectedSidebarItem,
      onSidebarClick,
      footer = "",
    } = this.props;
    if (!isEmpty(sidebarContent)) {
      return (
        <>
          <List>
            {this.state.menuItems.map((item, i) => (
              <>
                <List.Item
                  onClick={() => item.hasChildren ? this.toggleMenuItemExpanded(i) : ""
                  }
                >
                  <CapRow span={24}>
                    <CapColumn className="item-label" span={22}>
                      {item.label}
                    </CapColumn>
                    <CapColumn span={2}>
                      {item.hasChildren && item.expanded && (
                        <CapIcon
                          type="chevron-up"
                          className={classNames(`${clsPrefix}-arrow`)}
                        />
                      )}
                      {item.hasChildren && !item.expanded && (
                        <CapIcon
                          type="chevron-down"
                          className={classNames(`${clsPrefix}-arrow`)}
                        />
                      )}
                    </CapColumn>
                  </CapRow>
                </List.Item>
                {item.expanded ? (
                  <>
                    {item.children.map((childItem) => (
                      <List.Item
                        className={`nested${
                          childItem.value === selectedSidebarItem
                            ? " selected"
                            : ""
                        }`}
                        onClick={() => childItem.value !== selectedSidebarItem
                          && onSidebarClick(childItem)
                        }
                      >
                        <CapRow span={24}>
                          <CapColumn className="item-label" span={24}>
                            {childItem.label}
                          </CapColumn>
                        </CapRow>
                      </List.Item>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
          </List>
          {this.state.isOpen && (
            <div className="ant-drawer-footer">{footer}</div>
          )}
          {this.state.isOpen && this.renderOrgSelectionBox()}
          {this.state.isOpen && this.renderProductList()}
        </>
      );
    }
    return "";
  };

  render() {
    const {
      placement = "left",
      productName,
      userData = {},
      goToHome,
    } = this.props;
    const { user = {} } = userData;
    return (
      <div className="side-menu">
        <HamburgerIcon
          onClick={this.toggleIsOpen}
          className="trigger"
          src={hamburgerIcon}
          alt="hamburger"
        />
        <CapDrawer
          title={
            <>
              <MoreApplicationsIcon
                src={moreApplications}
                alte="moreApplications"
                onClick={() => this.setState({ productListOpen: true })}
              />
              <span
                onClick={() => {
                  this.toggleIsOpen();
                  goToHome();
                }}
              >
                <CapLogo src={capLogo} alt="cap-logo-mobile" />
                <span className="name">{productName}</span>
              </span>
              {!isEmpty(user.loginName) && (
                <div className="user-name">{user.loginName}</div>
              )}
              {this.renderSelectedOrg()}
            </>
          }
          className="cap-hamburger-menu"
          placement={placement}
          closable={false}
          onClose={this.toggleIsOpen}
          visible={this.state.isOpen}
          key="cap-hamburger-left"
          content={this.renderSidebarContent()}
        >
        </CapDrawer>
      </div>
    );
  }
}

CapHamburgerMenu.propTypes = {
  goToHome: PropTypes.func,
  placement: PropTypes.string,
  productName: PropTypes.string,
  userData: PropTypes.object,
  loadStorageItem: PropTypes.func,
  changeOrgEntity: PropTypes.func,
  selectOrganization: PropTypes.string,
  sidebarContent: PropTypes.array,
  selectedSidebarItem: PropTypes.string,
  onSidebarClick: PropTypes.func,
  noResultsText: PropTypes.string,
  footer: PropTypes.element,
  screenHeight: PropTypes.number,
  screenWidth: PropTypes.number,
  insights: PropTypes.string,
  selectProduct: PropTypes.string,
  defaultSelectedProduct: PropTypes.string,
};

export default CapHamburgerMenu;
