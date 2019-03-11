/**
*
* CapSelect
*
*/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import * as styledVars from "../styled/variables";
import { CapHeading, CapInput, CapIcon } from '../index';

import './_capSelect.scss';

const clsPrefix = 'cap-select-v2';

class CapSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    const { items, selectedItem, showSearch, searchPlaceholder, selectPlaceholder, width } = this.props;
    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(items, (item) => item.value === selectedItem);
    let selectedItemLabel = "";
    if (selectedItemIndex !== -1) {
      selectedItemLabel = items[selectedItemIndex].label;
    }
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    return (
      <Popover
        trigger="click"
        getPopupContainer={(trigger) => trigger.parentNode}
        placement="bottomLeft"
        overlayClassName={classNames(`${clsPrefix}-popover`)}
        overlayStyle={{ width: popwidth }}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        content={(
          <Fragment>
            {showSearch && (
              <CapInput.Search
                className={classNames(`${clsPrefix}-search`)}
                placeholder={searchPlaceholder}
                onChange={this.handleSearch}
                value={searchText}
                onClear={this.clearSearch}
              />
            )}
            {itemsHtml.length > 0 ? <div className={classNames(`${clsPrefix}-items-wrapper`)}>{itemsHtml}</div>
              : (
                <div className={classNames(`${clsPrefix}-no-results`)}>
                  <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
                  <div className={classNames(`${clsPrefix}-no-results-text`)}>No results found</div>
                </div>
              )
            }
          </Fragment>
        )}
      >
        <div ref={(node) => { this.node = node; }} style={{ width: width || "100%" }} className={classNames(`${clsPrefix}-selection`, { open: !!visible })}>
          <div className={(`${clsPrefix}-selected-value`)}>
            <CapHeading type={selectedItem ? 'h5' : 'h6'}>{selectedItemLabel || selectPlaceholder}</CapHeading>
          </div>
          <CapIcon type="chevron-down" className={classNames(`${clsPrefix}-arrow`)} />
        </div>
      </Popover>
    );
  }
}

CapSelect.defaultProps = {
  searchPlaceholder: 'Search',
  selectPlaceholder: 'Select Option',
};

CapSelect.propTypes = {
  selectedItem: PropTypes.string,
  items: PropTypes.array,
  handleItemChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  selectPlaceholder: PropTypes.string,
  width: PropTypes.string,
};

export default CapSelect;
