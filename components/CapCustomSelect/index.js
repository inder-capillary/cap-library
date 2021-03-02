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
import { List } from "react-virtualized";
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
  // eslint-disable-line react/prefer-stateless-function
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

  getItems = () => {
    const { options, value, type } = this.props;
    const { searchText } = this.state;
    return options.reduce((acc, item) => {
      if (
        (searchText === ""
        || item.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
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

  // eslint-disable-next-line no-unused-vars
  rowRenderer = ({ index, isScrolling, key, style }, itemsList) => (
    <div key={key} style={style}>
      <>{itemsList[index]}</>
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
      virtualScrollHeight = 200,
      virtualScrollWidth = 250,
      rowHeight = 40,
    } = this.props;

    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(options, (item) => item.value === value);
    let selectedItemLabel = "";
    if (selectedItemIndex !== -1) {
      selectedItemLabel = options[selectedItemIndex].label;
    }
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    return (
      <Popover
        trigger="click"
        // removing it for testing purpose, if styling issue occurs, uncomment it and check
        // getPopupContainer={(trigger) => trigger.parentNode}
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
                  <List
                    rowCount={itemsHtml.length}
                    width={virtualScrollWidth}
                    height={virtualScrollHeight}
                    rowHeight={rowHeight}
                    rowRenderer={(optValue) => this.rowRenderer(optValue, itemsHtml)}
                    overscanRowCount={5}
                  />
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
            { "type-tag": type === TAG },
            className,
            { "selection-disabled": disabled }
          )}
        >
          <div className={`${clsPrefix}-selected-value`}>
            {type !== TAG ? (
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
  virtualScrollHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  virtualScrollWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LocaleHoc(CapCustomSelect, { key: "CapCustomSelect" });
