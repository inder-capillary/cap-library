import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import WarningIcon from '../assets/icons/warning.svg';
import DropDownIcon from '../assets/icons/chevron-down.svg';

const clsPrefix = 'cap-select';

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

    handleChange = (value) => {
      const { handleItemChange } = this.props;
      this.setState({ visible: false });
      handleItemChange(value);
    }

    getItems = () => {
      const { items, selectedItem } = this.props;
      const { searchText } = this.state;
      return items.reduce((acc, item) => {
        if (searchText === "" || item.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          acc.push(
            <div
              key={item.value}
              onClick={() => this.handleChange(item.value)}
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
      const {
        items, selectedItem, showSearch, showHeader,
      } = this.props;
      const { visible, searchText } = this.state;
      const itemsHtml = this.getItems();
      const selectedItemIndex = findIndex(items, (item) => item.value === selectedItem);
      const showSelectedIcon = selectedItemIndex !== -1;
      let selectedItemLabel = "Select Organizations";
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
                  <Icon type="search" />
                  <Icon onClick={this.clearSearch} type="close" />
                </div>
              )}
              {itemsHtml.length > 0 ? itemsHtml
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
              {showSelectedIcon && (
                <div className={(`${clsPrefix}-selected-icon`)}>
                  {selectedItemLabel[0]}
                </div>
              )}
              <span className={(`${clsPrefix}-selected-value-label`)}>{selectedItemLabel}</span>
            </div>
            <img src={DropDownIcon} alt="down-icon" className={classNames(`${clsPrefix}-arrow`)} />
            {/* <Icon className={classNames(`${clsPrefix}-arrow`)} type="down" /> */}
          </div>
        </Popover>
      );
    }
}

Select.propTypes = {
  handleItemChange: PropTypes.func,
  showSearch: PropTypes.bool,
  showHeader: PropTypes.bool,
  selectedItem: PropTypes.string,
  items: PropTypes.array,
};
