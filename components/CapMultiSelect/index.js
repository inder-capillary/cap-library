import React from "react";
import PropTypes from 'prop-types';
import { Tree, Icon, Popover, Tooltip } from "antd";
import without from 'lodash/without';
import union from 'lodash/union';
import difference from 'lodash/difference';
import omit from 'lodash/omit';
import classNames from 'classnames';
import * as styledVars from "../styled/variables";
import CapButton from '../CapButton';
import CapInput from '../CapInput';
import CapIcon from '../CapIcon';
import LocaleHoc from '../LocaleHoc';

import './_capMultiSelect.scss';

const { Search } = CapInput;

const clsPrefix = 'cap-multi-select-v2';


function getObject(array, key, value) {
  let o;
  array.some(function iter(a) {
    if (String(a[key]) === String(value)) {
      o = a;
      return true;
    }
    return Array.isArray(a.children) && a.children.some(iter);
  });
  return o;
}

const renderTreeNodes = (data, searchValue, searchKey) => {
  const nodes = data.reduce((acc, item) => {
    if (item.children) {
      const temp = renderTreeNodes(item.children, searchValue, searchKey);
      if (temp.length > 0) {
        acc.push(
          <Tree.TreeNode title={item.title} key={item.key} dataRef={item} className={item.className}>
            {temp}
          </Tree.TreeNode>
        );
      }
      return acc;
    }
    if (!searchValue || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
      acc.push(
        <Tree.TreeNode
          {...item}
          className={classNames(item.className, { 'with-info-icon': item.info, 'no-info-icon': !item.info })}
          title={(
            <div className="multi-select-title">
              <div className="multi-select-main-title" title={item.title}>{item.title}</div>
              {item.info && (
                <span className="info-tooltip">
                  <Tooltip placement="right" title={item.info}>
                    <Icon className="info-icon" type="info-circle-o" />
                  </Tooltip>
                </span>
              )}
            </div>
          )}
        />
      );
    }
    return acc;
  }, []);
  return nodes;
};

const getDataValuesInTree = (data, searchValue, searchKey) => (
  data.reduce((acc, item) => {
    if (!item.children) {
      if (!searchValue || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        acc.push(item.key);
      }
      return acc;
    }
    return acc;
  }, []));

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i += 1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => (item.key === key))) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class CapMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchValue: '',
      selectedKeys: props.appliedKeys && props.appliedKeys.length > 0 ? props.appliedKeys : [],
      appliedKeys: props.appliedKeys && props.appliedKeys.length > 0 ? props.appliedKeys : [],
    };
    [
      "hide",
      "togglePopoverVisibility",
      "onSearch",
      "onCheck",
      "clearSearch",
      "applySelect",
      "onPopoverClick",
    ].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  componentWillReceiveProps(nextProps) {
    const { appliedKeys } = this.props;
    if ((!appliedKeys && nextProps.appliedKeys)
      || (appliedKeys && !nextProps.appliedKeys)
      || (appliedKeys && nextProps.appliedKeys && (appliedKeys.length !== nextProps.appliedKeys.length || difference(nextProps.appliedKeys, appliedKeys).length))) {
      this.setState({
        selectedKeys: (nextProps.appliedKeys || []),
        appliedKeys: (nextProps.appliedKeys || []),
      });
    }
  }

  onSearch(e) {
    const { value } = e.target;
    this.setState((prevState) => ({
      searchValue: value,
      autoExpandParent: true,
      selectedKeys: without(prevState.selectedKeys, "select-all-common"),
    }));
  }

  onPopoverClick() {
    if (this.state.searchValue) {
      this.clearSearch();
    }
  }

  onCheck(selectedKeys, info) {
    let currentSelectedKeys = [...this.state.selectedKeys];
    const key = info.node.props.eventKey;
    if (!info.checked) {
      currentSelectedKeys = without(currentSelectedKeys, key);
    }
    let finalSelectedKeys = union(currentSelectedKeys, selectedKeys);
    if (key === "select-all-common" && !info.checked) {
      if (this.state.searchValue) {
        const allValuesInCurrentTreee = getDataValuesInTree(this.props.treeData, this.state.searchValue, this.props.searchKey);
        finalSelectedKeys = difference(finalSelectedKeys, allValuesInCurrentTreee);
      } else {
        finalSelectedKeys = [];
      }
    }
    if (finalSelectedKeys.length === 1 && finalSelectedKeys[0] === "select-all-common") {
      finalSelectedKeys = [];
    }
    this.setState({ selectedKeys: without(finalSelectedKeys, "select-all-common") });
    //collapse the dropdown based on collapseOnCheck prop, behaviour used in custom field
    if (this.props.collapseOnSelect){
      this.setState({visible : false});
      this.applySelect();
    }
  }

  getSaveButton = () => {
    let selectButton = null;
    const { appliedKeys, maxValuesToSelect, selectText, selectTooltipText = '', showSelectButtonToolTip = false, selectTooltipPlacement } = this.props;
    const { selectedKeys } = this.state;
    if (
      ((selectedKeys && selectedKeys.length > 0)
        || (appliedKeys && appliedKeys.length > 0))
      && (maxValuesToSelect ? selectedKeys.length <= maxValuesToSelect : true)) {
      selectButton = <CapButton type="primary" onClick={this.applySelect}>{selectText}</CapButton>;
    } else if (showSelectButtonToolTip) {
      selectButton = (
        <Tooltip placement={selectTooltipPlacement} title={selectTooltipText}>
          <div className="button-disabled-tooltip-wrapper">
            <CapButton disabled>{selectText}</CapButton>
          </div>
        </Tooltip>
      );
    } else {
      selectButton = <CapButton disabled>{selectText}</CapButton>;
    }

    return selectButton;
  }


  // Handle to get ref for a wrapper component.
  handleWrapperRef = (node) => {
    this.node = node;
  };

  togglePopoverVisibility(visible) {
    this.setState({ visible });
  }

  hide() {
    this.setState((prevState) => ({ visible: false, selectedKeys: prevState.appliedKeys }));
  }

  applySelect() {
    this.setState((prevState) => ({
      visible: false,
      appliedKeys: without(prevState.selectedKeys, "select-all-common"),
    }), () => {
      this.props.onSelect(without(this.state.selectedKeys, "select-all-common"));
    });
  }

  clearSearch() {
    this.setState((prevState) => ({ searchValue: "", selectedKeys: without(prevState.selectedKeys, "select-all-common") }));
  }

  render() {
    const { placeholder, searchPlaceholder, triggerClassName, disabled, width, closeText, noResultsFoundText, selectedText, disableSelectAll, popoverClassName, selectAllText, selectAllSearchResultsText, getPopupContainer, moreText, searchKey, showFooter, searchFocusOnMount, alwaysShowFocusOnSearch, showSelectAllText, target } = this.props;
    const { visible, searchValue, selectedKeys, appliedKeys } = this.state;
    const { treeData, ...rest } = this.props;
    const newProps = omit(rest, ['onSelect', 'treeData']);
    const treeDataWithSelectAll = [{ title: searchValue ? selectAllSearchResultsText : selectAllText, key: "select-all-common", className: "select-all-tree", children: treeData }];
    const treeNodes = renderTreeNodes(treeDataWithSelectAll, searchValue, searchKey);
    let triggerLeftContent = "";
    let triggerRightContent = "";
    if (appliedKeys && appliedKeys.length > 0) {
      if (appliedKeys.length === this.props.treeData.length && showSelectAllText) {
        triggerLeftContent = "All selected";
      } else {
        const obj = getObject(treeData, 'key', appliedKeys[0]);
        triggerLeftContent = obj ? obj.title : '';
        if (appliedKeys.length > 1) {
          triggerRightContent = `+ ${appliedKeys.length - 1} ${moreText}`;
        }
      }
    }
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    const wrapperCommonProps = {
      ref: this.handleWrapperRef,
      style: { width: width || "100%" },
    };
    return (
      <div className="cap-multi-select">
        <Popover
          visible={!disabled && visible}
          onVisibleChange={this.togglePopoverVisibility}
          trigger="click"
          overlayClassName={classNames(`${clsPrefix}-popover`, popoverClassName, { 'select-all-disabled': disableSelectAll })}
          overlayStyle={{ width: popwidth, minWidth: '285px' }}
          placement="bottom"
          onClick={this.onPopoverClick}
          getPopupContainer={getPopupContainer}
          content={(
            <div>
              <div className="search-input">
                <Search
                  focusOnMount={searchFocusOnMount}
                  alwaysShowFocus={alwaysShowFocusOnSearch}
                  value={searchValue}
                  onClear={this.clearSearch}
                  placeholder={searchPlaceholder}
                  onChange={this.onSearch} />
              </div>
              {treeNodes && treeNodes.length > 0 && (
                <Tree
                  defaultExpandAll
                  checkable
                  onCheck={this.onCheck}
                  checkedKeys={selectedKeys}
                  selectedKeys={selectedKeys}
                  multiple
                  {...newProps}
                >
                  {treeNodes}
                </Tree>
              )}
              {showFooter && treeNodes && treeNodes.length > 0 && (
                <div className="options">
                  <div>
                    {this.getSaveButton()}
                    <CapButton className="cancel-button" type="flat" onClick={this.hide}>{closeText}</CapButton>
                  </div>
                  <div style={{ display: "flex", alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#333333"' }}>{`${without(selectedKeys, "select-all-common").length} ${selectedText || "selected"}`}</span>
                  </div>
                </div>
              )
              }
              {
                (!treeNodes || treeNodes.length === 0) && (
                  <div className={classNames(`${clsPrefix}-no-results`)}>
                    <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
                    <div className={classNames(`${clsPrefix}-no-results-text`)}>{noResultsFoundText}</div>
                  </div>
                )
              }
            </div>
          )}
        >
          {/*Target will be any valid node, Popover content to show on target element instead of default select element*/}
          {target ? (
            <div {...wrapperCommonProps}>{target}</div>
          ) : (
            <div
              {...wrapperCommonProps}
              className={classNames(`${clsPrefix}-selection`, { selected: triggerLeftContent, open: visible && !disabled, triggerClassName, disabled })}>
              <span className={classNames(`${clsPrefix}-left-content`, { placeholder: !triggerLeftContent, disabled })} title={triggerLeftContent}>{triggerLeftContent || placeholder}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                {triggerRightContent}
                {disabled ? <CapIcon type="chevron-down" style={{ color: styledVars.CAP_G06 }} /> : <CapIcon type="chevron-down" />}
              </span>
            </div>
          )}
        </Popover>
      </div>
    );
  }
}

CapMultiSelect.defaultProps = {
  searchKey: "title",
  getPopupContainer: () => document.body,
  showSelectButtonToolTip: false,
  showFooter: true,
  searchFocusOnMount: true,
  alwaysShowFocusOnSearch: true,
  showSelectAllText: true,
  selectTooltipPlacement: "right",
};

CapMultiSelect.propTypes = {
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  noResultsFoundText: PropTypes.string,
  selectedText: PropTypes.string,
  selectAllText: PropTypes.string,
  selectAllSearchResultsText: PropTypes.string,
  moreText: PropTypes.string,
  triggerClassName: PropTypes.string,
  popoverClassName: PropTypes.string,
  searchKey: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  closeText: PropTypes.string,
  selectText: PropTypes.string,
  appliedKeys: PropTypes.array,
  treeData: PropTypes.array,
  disableSelectAll: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  maxValuesToSelect: PropTypes.number,
  selectTooltipText: PropTypes.string,
  showSelectButtonToolTip: PropTypes.bool,
  showFooter: PropTypes.bool,
  searchFocusOnMount: PropTypes.bool,
  alwaysShowFocusOnSearch: PropTypes.bool,
  showSelectAllText: PropTypes.bool,
  selectTooltipPlacement: PropTypes.string,
};

export default LocaleHoc(CapMultiSelect, { key: 'CapMultiSelect' });
