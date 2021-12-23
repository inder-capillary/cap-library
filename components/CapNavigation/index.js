/**
*
* CapNavigation
*
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Auth } from '@capillarytech/cap-ui-utils';
import isEmpty from 'lodash/isEmpty';
import forOwn from 'lodash/forOwn';
import CapTopBar from '../CapTopBar';
import CapHeading from '../CapHeading';
import CapSideBar from "../CapSideBar";
import CapSecondaryTopBar from "../CapSecondaryTopBar";
import LocaleHoc from '../LocaleHoc';
import { CAP_SPACE_24 } from '../styled/variables';
import './_capNavigation.scss';

const DEFAULT_MODULE = 'campaign';
const PRODUCT_MASTERS = 'masters';
// const CAMP_REPORT_VIEW = 'CAMP_REPORT_VIEW';

const CapNavigation = (props) => {
  const {
    className,
    userData = {},
    topbarMenuData,
    topbarSelectedMenuData,
    dropdownMenuProps,
    topbarIcons,
    sidebarMenuData = [],
    sidebarMenuItemsPosition,
    loadStorageItem,
    showContent,
    selectProduct,
    selectOrganization,
    organization,
    noResultText,
    settingsLabel,
    defaultSelectedProduct,
    showSecondaryTopBar = false,
    secondaryTopBarActionHandler,
    skipStateForStorage = false,
    fixedOrg = false,
  } = props;

  const handleProductChange = (product) => {
    updateSelectedProduct(product.value);
    if (product.url !== window.location.pathname) {
      window.location.pathname = product.url;
    }
  };

  const handleOrgEntityChange = (orgID, entityItem, ouId) => {
    props.changeOrgEntity(orgID, ouId);
    // updateSelectedOrg(orgID);
    // updateSelectedOu(ouId);
  };

  const handleTopbarMenuChange = (option) => {
    if (option && option.onClickHandler) {
      option.onClickHandler(option);
    } else {
      window.location.pathname = option.link;
    }
  };

  const handleSideBarLinkClick = (item) => {
    const { sidebarMenuItemClick } = props;
    updateSelectedSidebarMenuItem(item.key);
    if (sidebarMenuItemClick) {
      sidebarMenuItemClick(item);
    }
  };

  const getDefaultSidebarMenuItem = () => {
    const { pathname } = window.location;
    let selectedMenuItem = '';
    sidebarMenuData.forEach((obj) => {
      if (obj.link === pathname) {
        selectedMenuItem = obj.key;
      }
    });
    return selectedMenuItem;
  };

  const getProxyOrgList = () => {
    const proxyOrgList = [];
    if (userData && userData.user && userData.user !== '') {
      const { orgDetails = {}, user = {} } = userData;
      let { name: selectedOrgName, org_id: selectedOrgId } = orgDetails; //eslint-disable-line
      const { proxyOrgList: orgList = [], accessibleOUList } = user;
      // fetching current selected org details and adding to org list dropdown
      if (!isEmpty(selectedOrgId)) {
        selectedOrgId = Number(selectedOrgId);
        const selectedOrg = {
          label: selectedOrgName,
          value: selectedOrgId,
          key: selectedOrgId,
        };
        // add ou list for selected org if available
        if (!isEmpty(accessibleOUList)) {
          selectedOrg.accessibleOus = [];
          forOwn(accessibleOUList, (ouId, ouName) => {
            selectedOrg.accessibleOus.push({ label: ouName, value: ouId, key: ouId });
          });
        }
        proxyOrgList.push(selectedOrg);
      }
      if (orgList && orgList.length) {
        orgList.forEach((item) => {
          if (parseInt(item.orgID, 10) !== parseInt(selectedOrgId, 10)) {
            const id = item.orgID;
            const name = item.orgName;
            const orgObj = { label: name, value: id, key: id };
            if (item.ouList) {
              orgObj.accessibleOus = getOuList(item);
            }
            proxyOrgList.push(orgObj);
          }
        });
      }
    }
    return proxyOrgList;
  };

  const getOuList = (orgItem) => {
    const { ouList = [] } = orgItem;
    const accessibleOus = [];
    if (ouList.length) {
      ouList.forEach((item) => {
        accessibleOus.push({ label: item.ouName, value: item.ouID, key: item.ouID });
      });
    }
    return accessibleOus;
  };

  const getProductList = () => {
    const { currentOrgDetails = {}} = userData;
    const { module_details: moduleDetails = [] } = currentOrgDetails;
    const productsList = [];
    if (Object.keys(currentOrgDetails).length !== 0) {
      moduleDetails.forEach((module) => {
        if (module.name.toLowerCase() !== PRODUCT_MASTERS) {
          const productName = module.namespace;
          const intlProductName = props[productName];
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
        value: props.insights,
        url: 'analytics/v2/',
        key: 'insights',
      });
      // }
    }
    return productsList;
  };

  const renderSecondaryTopbar = (proxyOrgList) => {
    const selectedOrg = loadStorageItem('orgID');
    const selectedOrgObj = proxyOrgList.find((o) => o.value === selectedOrg);
    const CapSecondaryTopBarProps = {
      primaryMenuItem: {
        key: 'primaryMenu',
        label: selectedProduct,
      },
      secondaryMenuItem: {
        key: 'secondaryMenu',
        label: (selectedOrgObj || {}).label || '',
      },
      menuActions: [{ key: 'close-icon', iconType: 'close' }],
      menuActionHandler: secondaryTopBarActionHandler,
    };
    return <CapSecondaryTopBar {...CapSecondaryTopBarProps} />;
  };

  const proxyOrgList = getProxyOrgList();
  const productsList = getProductList();
  const [selectedProduct, updateSelectedProduct] = useState(defaultSelectedProduct || '');
  const [selectedOrg] = !skipStateForStorage ? useState(loadStorageItem('orgID')) : [loadStorageItem('orgID')];
  const [selectedOu] = !skipStateForStorage ? useState(loadStorageItem('ouId')) : [loadStorageItem('ouId')];
  const [selectedSidebarMenuItem, updateSelectedSidebarMenuItem] = useState(getDefaultSidebarMenuItem());
  const showSidebar = sidebarMenuData.length > 0 && sidebarMenuItemsPosition === 'left';
  return (
    <div className={className}>
      {showSecondaryTopBar ? (
        renderSecondaryTopbar(proxyOrgList)
      ) : (
        <CapTopBar
          drawerListProps={{
            productsList,
            selectedProduct,
            handleProductChange,
            title: (
              <CapHeading type="h5" style={{ margin: `${CAP_SPACE_24} 0` }}>
                {selectProduct}
              </CapHeading>
            ),
            closable: false,
            placement: 'left',
            width: 320,
          }}
          selectProps={{
            items: proxyOrgList,
            selectedItem: selectedOrg,
            selectedOuItem: selectedOu,
            handleItemChange: handleOrgEntityChange,
            selectPlaceholder: selectOrganization,
            showSearch: true,
            showHeader: true,
            title: selectOrganization,
            placeholder: organization,
            noResultText,
            fixedOrg: fixedOrg || !proxyOrgList.length,
          }}
          menuProps={{
            items: topbarMenuData,
            defaultSelectedKeys: topbarSelectedMenuData || [DEFAULT_MODULE],
            onMenuItemClick: handleTopbarMenuChange,
          }}
          dropdownMenuProps={dropdownMenuProps}
          topbarIcons={topbarIcons}
        />
      )}
      {showContent && (
        <div className="cap-content-wrapper" style={{ display: showSidebar ? 'flex' : 'block' }}>
          {showSidebar ? (
            <CapSideBar
              sidebarItems={sidebarMenuData}
              onLinkClick={handleSideBarLinkClick}
              selectedMenuItem={selectedSidebarMenuItem}
              defaultActiveKey=""
              pageHeading={settingsLabel}
            />
          ) : null}
          <div className="cap-component-wrapper" style={{ width: showSidebar ? 'calc(100% - 240px)' : '100%'}}>
            {React.Children.toArray(props.children)}
          </div>
        </div>
      )}
    </div>
  );
};

CapNavigation.propTypes = {
  className: PropTypes.string,
  showContent: PropTypes.bool,
  userData: PropTypes.object,
  loadStorageItem: PropTypes.func,
  changeOrgEntity: PropTypes.func,
  topbarMenuData: PropTypes.array,
  dropdownMenuProps: PropTypes.array,
  topbarIcons: PropTypes.array,
  topbarSelectedMenuData: PropTypes.array,
  sidebarMenuData: PropTypes.array,
  sidebarMenuItemsPosition: PropTypes.string,
  sidebarMenuItemClick: PropTypes.func,
  secondaryTopBarActionHandler: PropTypes.func,
  children: PropTypes.node,
  selectProduct: PropTypes.string,
  defaultSelectedProduct: PropTypes.string,
  showSecondaryTopBar: PropTypes.bool,
  selectOrganization: PropTypes.string,
  organization: PropTypes.string,
  noResultText: PropTypes.string,
  settingsLabel: PropTypes.string,
  insights: PropTypes.string,
  skipStateForStorage: PropTypes.bool,
  fixedOrg: PropTypes.bool,
};

export default LocaleHoc(CapNavigation, { key: 'CapNavigation' });
