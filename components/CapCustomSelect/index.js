/* eslint-disable no-unused-expressions */
/**
 *
 * CapCustomSelect
 *
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";
import classNames from "classnames";
import findIndex from "lodash/findIndex";
import styled from "styled-components";
import { List, AutoSizer } from "react-virtualized";
import * as styledVars from "../styled/variables";
import CapHeading from "../CapHeading";
import CapIcon from "../CapIcon";
import CapInput from "../CapInput";
import LocaleHoc from "../LocaleHoc";
import CapTag from "../CapTag";

import "./_capCustomSelect.scss";

const clsPrefix = "cap-custom-select";
const TAG = "tag";

const StyledCapHeading = styled(CapHeading)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

class CapCustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  onVisibleChange = (visible) => {
    this.setState({ visible });
    if (!visible) {
      this.setState({ visible: false, searchText: "" });
    }
  };

  handleChange = (item) => {
    const { onChange, type, closeOnSelect = true, value } = this.props;
    closeOnSelect && this.setState({ visible: false });
    const selectValue = type === TAG ? [...value, item.value] : item.value;
    onChange(selectValue, item);
  };

  onRemoveTag = (event, removedValue) => {
    const { onChange, value } = this.props;
    onChange([...value.filter((selectValue) => selectValue !== removedValue)]);
    event.stopPropagation();
  };

  searchTerm = (searchText, item, useValueForSearch) => {
    if (searchText === "") return true;
    if (useValueForSearch && typeof item.value !== 'object') {
      return item?.value?.toLowerCase()?.indexOf(searchText?.toLowerCase()) !== -1;
    }
    return (item?.label?.toLowerCase()?.indexOf(searchText?.toLowerCase()) !== -1);
  }

  getItems = () => {
    const { options, value, type, useValueForSearch } = this.props;
    const { searchText } = this.state;
    return options.reduce((acc, item) => {
      if (
        this.searchTerm(searchText, item, useValueForSearch)
        && !(type === TAG && value.includes(item.value))
      ) {
        acc.push(
          <StyledCapHeading
            type="h6"
            key={item.value}
            onClick={() => this.handleChange(item)}
            className={classNames(`${clsPrefix}-select-item`, {
              selected: value === item.value,
            })}
            title={typeof item.label === 'string' && item.label}
          >
            {item.label}
          </StyledCapHeading>
        );
      }
      return acc;
    }, []);
  };

  getTagItems = () => {
    const { options, value } = this.props;
    const optionsKeyMap = options.reduce((acc, item) => {
      acc[item.value] = item;
      return acc;
    }, {});
    return value.map((selectValue) => optionsKeyMap[selectValue]);
  };

  clearSearch = () => {
    this.setState({ searchText: "" });
  };

  rowRenderer = ({ index, key, style }, itemsList) => (
    <div key={key} style={style}>
      {itemsList[index]}
    </div>
  );

  render() {
    const {
      options,
      value,
      showSearch,
      searchPlaceholder,
      selectPlaceholder,
      width,
      className,
      popoverClassName,
      disabled,
      type,
      virtual = false,
      virtualScrollWidth = '100%',
      virtualScrollHeight = 200,
      rowHeight = 40,
      virtualContainerStyle = {},
      placement = "bottomLeft",
      getPopupContainer,
      useValueForSearch = false,
    } = this.props;

    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(options, (item) => item.value === value);
    let selectedItemLabel = "";
    if (selectedItemIndex !== -1) {
      selectedItemLabel = options[selectedItemIndex].label;
    }
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    const showTags = (type === TAG && Array.isArray(value) && value.length > 0);
    return (
      <Popover
        trigger="click"
        placement={placement}
        getPopupContainer={getPopupContainer}
        useValueForSearch={useValueForSearch}
        overlayClassName={classNames(`${clsPrefix}-popover`, popoverClassName)}
        overlayStyle={{ width: popwidth }}
        visible={visible}
        onVisibleChange={() => {
          if (!disabled || disabled !== true) {
            this.onVisibleChange(!this.state.visible);
          }
        }}
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
            {itemsHtml.length > 0 ? (
              <div className={classNames(`${clsPrefix}-items-wrapper`)}>
                {virtual ? (
                  <div style={{width: virtualScrollWidth, height: virtualScrollHeight, ...virtualContainerStyle}}>
                    <AutoSizer>
                      {({width: autowidth, height: autoHeight}) => (
                        <List
                          rowCount={itemsHtml.length}
                          width={autowidth}
                          height={autoHeight}
                          rowHeight={rowHeight}
                          rowRenderer={(optValue) => this.rowRenderer(optValue, itemsHtml)}
                          overscanRowCount={5}
                        />
                      )}
                    </AutoSizer>
                  </div>
                ) : (
                  itemsHtml
                )}
              </div>
            ) : (
              <div className={classNames(`${clsPrefix}-no-results`)}>
                <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
                <div className={classNames(`${clsPrefix}-no-results-text`)}>
                  No results found
                </div>
              </div>
            )}
          </Fragment>
        )}
      >
        <div
          ref={(node) => {
            this.node = node;
          }}
          style={{ width: width || "100%" }}
          className={classNames(
            `${clsPrefix}-selection`,
            { open: !!visible },
            { "type-tag": showTags },
            className,
            { "selection-disabled": disabled }
          )}
        >
          <div className={`${clsPrefix}-selected-value`}>
            {!showTags ? (
              <StyledCapHeading
                type={value ? "h5" : "h6"}
                className={classNames({
                  "selected-value-label-disabled": disabled,
                })}
                title={selectedItemLabel}
              >
                {selectedItemLabel || selectPlaceholder}
              </StyledCapHeading>
            ) : (
              this.getTagItems().map(({ label, value: selectValue }) => (
                <CapTag
                  onClose={(event) => this.onRemoveTag(event, selectValue)}
                  className={`${clsPrefix}-selected-tag`}
                  key={selectValue}
                  closable
                >
                  <StyledCapHeading type="label2" title={label}>
                    {label}
                  </StyledCapHeading>
                </CapTag>
              ))
            )}
          </div>
          <CapIcon
            type="chevron-down"
            className={classNames(`${clsPrefix}-arrow`)}
          />
        </div>
      </Popover>
    );
  }
}

CapCustomSelect.defaultProps = {
  getPopupContainer: () => document.body,
};

CapCustomSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  selectPlaceholder: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  popoverClassName: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  virtual: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
  placement: PropTypes.string,
  virtualContainerStyle: PropTypes.object,
  virtualScrollHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  virtualScrollWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getPopupContainer: PropTypes.func,
  useValueForSearch: PropTypes.bool,
};

export default LocaleHoc(CapCustomSelect, { key: "CapCustomSelect" });
