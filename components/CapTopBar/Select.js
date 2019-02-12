import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import WarningIcon from '../assets/icons/warning.svg';
import DropDownIcon from '../assets/icons/chevron-down.svg';
import CapillaryLogo from '../assets/icons/capillary_logo.svg';
import SearchIcon from '../assets/icons/search.svg';
import CloseIcon from '../assets/icons/close.svg';

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
    if (!visible) {
      this.setState({ visible: false, searchText: "" });
    }
  }

  handleChange = (item) => {
    const { handleItemChange } = this.props;
    this.setState({ visible: false });
    handleItemChange(item.value, item);
  }

  getItems = () => {
    const { items, selectedItem } = this.props;
    const { searchText } = this.state;
    return items.reduce((acc, item) => {
      if (searchText === "" || item.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        acc.push(
          <div
            key={item.value}
            onClick={() => this.handleChange(item)}
            className={classNames(`${clsPrefix}-select-item`, { selected: selectedItem === item.value })}
          >
            {item.label}
          </div>
        );
      }
      return acc;
    }, []);
  }

  clearSearch = () => {
    this.setState({ searchText: "" });
  }

  render() {
    const { items, selectedItem, showSearch, showHeader, selectPlaceholder, showCapillaryIcon } = this.props;
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
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        content={(
          <Fragment>
            {showHeader && <div className={classNames(`${clsPrefix}-header`)}>Select organisation</div>}
            {showSearch && (
              <div className={classNames(`${clsPrefix}-search`)}>
                <Input
                  placeholder="Organization"
                  onChange={this.handleSearch}
                  value={searchText}
                />
                <img className="icon-search" src={SearchIcon} alt="" />
                {searchText && <span onClick={this.clearSearch}><img className="icon-close" src={CloseIcon} alt="" /></span>}
              </div>
            )}
            {itemsHtml.length > 0 ? <div className={classNames(`${clsPrefix}-items-wrapper`)}>{itemsHtml}</div>
              : (
                <div className={classNames(`${clsPrefix}-no-results`)}>
                  <img src={WarningIcon} alt="no-results" />
                  <div className={classNames(`${clsPrefix}-no-results-text`)}>No results found</div>
                </div>
              )
            }
          </Fragment>
        )}
      >
        <div className={classNames(`${clsPrefix}-selection`, { open: !!visible })}>
          <div className={(`${clsPrefix}-selected-value`)}>
            {
              showCapillaryIcon ? <img src={CapillaryLogo} alt="" />
                : showSelectedIcon && (
                  <div className={(`${clsPrefix}-selected-icon`)}>
                    {selectedItemLabel[0]}
                  </div>
                )
            }
            <span className={(`${clsPrefix}-selected-value-label`)}>{selectedItemLabel}</span>
          </div>
          <img src={DropDownIcon} alt="down-icon" className={classNames(`${clsPrefix}-arrow`)} />
        </div>
      </Popover>
    );
  }
}

Select.defaultProps = {
  selectPlaceholder: 'Select',
};

Select.propTypes = {
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
};
