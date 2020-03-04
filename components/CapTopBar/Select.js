import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import CapIcon from '../CapIcon';
import CapInput from '../CapInput';
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

  handleChange = (item) => {
    const { handleItemChange } = this.props;
    this.onVisibleChange(false);
    handleItemChange(item.value, item);
  }

  getItems = () => {
    const { items, selectedItem } = this.props;
    const { searchText } = this.state;
    return items.reduce((acc, item) => {
      if (searchText === "" || item.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        acc.push(
          <CapHeading
            type="h6"
            key={item.value}
            onClick={() => this.handleChange(item)}
            className={classNames(`${clsPrefix}-select-item`, { selected: selectedItem === item.value })}
          >
            {item.label}
          </CapHeading>
        );
      }
      return acc;
    }, []);
  }

  clearSearch = () => {
    this.setState({ searchText: "" });
  }

  render() {
    const { fixedOrg = false, items, selectedItem, showSearch, showHeader, selectPlaceholder, showCapillaryIcon, className, title, placeholder, noResultText } = this.props;
    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(items, (item) => item.value === selectedItem);
    const showSelectedIcon = selectedItemIndex !== -1;
    let selectedItemLabel = selectPlaceholder;
    if (selectedItemIndex !== -1) {
      selectedItemLabel = items[selectedItemIndex].label;
    }
    return (
      <Popover
        trigger="click"
        getPopupContainer={(trigger) => trigger.parentNode}
        placement="bottomLeft"
        overlayClassName={classNames(`${clsPrefix}-popover`)}
        visible={fixedOrg ? false : visible}
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
                    <span className="text-label">{selectedItemLabel[0]}</span>
                  </div>
                )
            }
            <span className={(`${clsPrefix}-selected-value-label`)} title={selectedItemLabel}>{selectedItemLabel}</span>
          </div>
          {!fixedOrg && <CapIcon type="chevron-down" className={classNames(`${clsPrefix}-arrow`)} />}
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
  items: PropTypes.array,
  showCapillaryIcon: PropTypes.bool,
  selectPlaceholder: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  noResultText: PropTypes.string,
};
