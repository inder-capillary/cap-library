import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import CapIcon from '../CapIcon';
import CapInput from '../CapInput';
import CapLabel from '../CapLabel';
import CapHeading from '../CapHeading';
import CapillaryLogo from '../assets/icons/capillary_logo.svg';
import { LogoBackground } from '../assets/icons';
import * as styledVars from "../styled/variables";

const clsPrefix = 'top-bar-select';

export class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  }

  onVisibleChange = (visible) => {
    this.setState({ visible });
    if (visible && this.state.searchText) {
      this.setState({ searchText: "" });
    }
  }

  handleChange = ( item, ou = {} ) => {
    const { handleItemChange } = this.props;
    this.onVisibleChange(false);
    handleItemChange(item.value, item, ou.value);
  }

  ouSearchCondition = (item) => {
    const { searchText } = this.state;
    return (item.accessibleOus || []).filter((ou) => ou.label.toLowerCase().includes((searchText || "").toLowerCase()));
  }

  orgSearchCondition = (item) => {
    const { searchText } = this.state;
    return (
      searchText === ""
      || (item.label || "").toLowerCase().indexOf((searchText || "").toLowerCase()) !== -1
    );
  }

  getOrgListItem = (item) => {
    const { selectedItem } = this.props;
    const itemLabel = item.accessibleOus
      ? (
        <div style={{display: "flex", alignItems: "center"}}>
          <CapIcon type="sitemap" size="s" style={{marginRight: styledVars.CAP_SPACE_04}} />
          <div className={(`${clsPrefix}-overflow-ellipsis`)}>{item.label}</div>
        </div>
      )
      : item.label;
    const customClassname = item.accessibleOus ? `${clsPrefix}-select-ou-org-item` : `${clsPrefix}-select-item`;
    return (
      <CapHeading
        type="h6"
        onClick={() => this.handleChange(item)}
        className={classNames(
          customClassname,
          { selected: selectedItem === item.value },
          `${clsPrefix}-overflow-ellipsis`
        )}
        title={item.label}
        key={`org-key-${item.key}`}
      >
        {itemLabel}
      </CapHeading>
    );
  }

  getOuListItem = (item, ou) => {
    const { selectedOuItem } = this.props;
    return (
      <div
        className={classNames(`${clsPrefix}-select-ou-item`, { selected: selectedOuItem === ou.value })}
        onClick={() => this.handleChange(item, ou)}
        key={`ou-key-${ou.key}`}
      >
        <CapHeading
          type="h6"
          style={{maxWidth: 125}}
          className={(`${clsPrefix}-overflow-ellipsis`)}
          title={ou.label}
        >
          {ou.label}
        </CapHeading>
        <CapLabel
          type="label3"
          style={{maxWidth: 70}}
          className={(`${clsPrefix}-overflow-ellipsis`)}
          title={item.label}
        >
          {item.label}
        </CapLabel>
      </div>
    );
  }

  getItems = () => {
    const { items } = this.props;
    const dropdownItems = [];
    items.forEach((item) => {
      if (this.orgSearchCondition(item)) {
        dropdownItems.push(
          this.getOrgListItem(item)
        );
      }
      if (item.accessibleOus) {
        const ouList = this.orgSearchCondition(item) ? item.accessibleOus : this.ouSearchCondition(item);
        ouList.forEach((ou) => {
          if (ou.key !== -1) {
            dropdownItems.push(
              this.getOuListItem(item, ou)
            );
          }
        });
      }
    });
    return dropdownItems;
  }

  clearSearch = () => {
    this.setState({ searchText: "" });
  }

  checkOnlyOrg = () => {
    const { items } = this.props;
    return (items.length === 1 && !items[0].accessibleOus);
  }

  render() {
    const { fixedOrg = false, items, selectedItem, selectedOuItem, showSearch, showHeader, selectPlaceholder, showCapillaryIcon, className, title, placeholder, noResultText } = this.props;
    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(items, (item) => item.value === selectedItem);
    const itemDetails = items[selectedItemIndex] || {};
    let selectedOuItemIndex = -1;
    if (selectedOuItem) {
      selectedOuItemIndex = findIndex(itemDetails.accessibleOus, (ou) => ou.value === selectedOuItem);
    }
    const showSelectedIcon = selectedItemIndex !== -1;
    let selectedItemLabel = selectPlaceholder;
    if (selectedItemIndex !== -1) {
      selectedItemLabel = itemDetails.label;
    }
    if (selectedOuItemIndex !== -1) {
      selectedItemLabel = itemDetails.accessibleOus[selectedOuItemIndex].label;
    }
    return (
      <Popover
        trigger="click"
        getPopupContainer={(trigger) => trigger.parentNode}
        placement="bottomLeft"
        overlayClassName={classNames(`${clsPrefix}-popover`)}
        visible={fixedOrg || this.checkOnlyOrg() ? false : visible}
        onVisibleChange={this.onVisibleChange}
        content={(
          <Fragment>
            {showHeader && <div className={classNames(`${clsPrefix}-header`)}>{title}</div>}
            {showSearch && (
              <CapInput.Search
                placeholder={placeholder}
                onChange={this.handleSearch}
                value={searchText}
                onClear={this.clearSearch}
                className={classNames(`${clsPrefix}-search`)}
              />
            )}
            {itemsHtml.length > 0 ? <div className={classNames(`${clsPrefix}-items-wrapper`)}>{itemsHtml}</div>
              : (
                <div className={classNames(`${clsPrefix}-no-results`)}>
                  <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
                  <div className={classNames(`${clsPrefix}-no-results-text`)}>{noResultText}</div>
                </div>
              )
            }
          </Fragment>
        )}
      >
        <div className={classNames(`${clsPrefix}-selection`, { open: !!visible }, className)}>
          <div className={(`${clsPrefix}-selected-value`)}>
            {
              showCapillaryIcon ? <img style={{ marginRight: "8px" }} src={CapillaryLogo} alt="" />
                : showSelectedIcon && (
                  <div className={(`${clsPrefix}-selected-icon`)}>
                    <LogoBackground />
                    <span className="text-label">
                      {selectedItemLabel[0]}
                    </span>
                  </div>
                )
            }
            {selectedOuItemIndex !== -1
              ? (
                <div className={(`${clsPrefix}-selected-ou-value-label`)}>
                  <CapHeading
                    type="h3"
                    style={{maxWidth: 100}}
                    className={(`${clsPrefix}-overflow-ellipsis`)}
                    title={selectedItemLabel}
                  >
                    {selectedItemLabel}
                  </CapHeading>
                  <CapLabel
                    type="label3"
                    style={{maxWidth: 48}}
                    className={(`${clsPrefix}-overflow-ellipsis`)}
                    title={items[selectedItemIndex].label}
                  >
                    {items[selectedItemIndex].label}
                  </CapLabel>
                </div>
              )
              : (
                <CapHeading
                  type="h3"
                  className={classNames(`${clsPrefix}-selected-value-label`, `${clsPrefix}-overflow-ellipsis`)}
                  title={selectedItemLabel}
                >
                  {selectedItemLabel}
                </CapHeading>
              )
            }
          </div>
          {!(fixedOrg || this.checkOnlyOrg()) && <CapIcon type="chevron-down" className={classNames(`${clsPrefix}-arrow`)} />}
        </div>
      </Popover>
    );
  }
}

Select.defaultProps = {
  selectPlaceholder: 'Select',
};

Select.propTypes = {
  fixedOrg: PropTypes.bool,
  handleItemChange: PropTypes.func,
  showSearch: PropTypes.bool,
  showHeader: PropTypes.bool,
  selectedItem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  selectedOuItem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  items: PropTypes.array,
  showCapillaryIcon: PropTypes.bool,
  selectPlaceholder: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  noResultText: PropTypes.string,
};
