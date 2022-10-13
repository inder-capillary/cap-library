/* eslint-disable no-unused-expressions */

import React from "react";
import PropTypes from "prop-types";
import { Tree, Icon, Popover, Tooltip, Spin } from "antd";
import without from "lodash/without";
import union from "lodash/union";
import difference from "lodash/difference";
import omit from "lodash/omit";
import intersection from "lodash/intersection";
import includes from "lodash/includes";
import debounce from "lodash/debounce";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import classNames from "classnames";
import * as styledVars from "../styled/variables";
import CapButton from "../CapButton";
import CapInput from "../CapInput";
import CapIcon from "../CapIcon";
import LocaleHoc from "../LocaleHoc";

import "./_capMultiSelectWithTree.scss";

const { Search } = CapInput;

const { TreeNode } = Tree;

const clsPrefix = "cap-multi-tree-select-v2";

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

const getDataValuesInTree = (data, searchValue, searchKey, isMatching) => data.reduce((acc, item) => {
  if (item.children) {
    const isParentMatching = isMatching
        || (item.key !== "select-all-common"
          && !item.isCategory
          && !!(
            !searchValue
            || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase())
              > -1
          ));
    const temp = getDataValuesInTree(
      item.children,
      searchValue,
      searchKey,
      isParentMatching
    );
    if (temp.length > 0) {
      acc.push(item.key);
      const newAcc = union(acc, temp);
      return newAcc;
    }
    return acc;
  }
  if (
    isMatching
      || !searchValue
      || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  ) {
    acc.push(item.key);
  }
  return acc;
}, []);

const getAllParents = (keys, dataListObject) => keys.reduce((acc, key) => {
  if (dataListObject[key] && dataListObject[key].children) {
    acc.push(key);
  }
  return acc;
}, []);

const getAllChildren = (key, dataListObject) => {
  const obj = dataListObject[key];
  let allChildren = [];
  if (obj.children > 0) {
    for (let i = 0; i < obj.children; i += 1) {
      allChildren.push(obj.childrenKeys[i]);
      const children = getAllChildren(obj.childrenKeys[i], dataListObject);
      allChildren = union(allChildren, children);
    }
  }
  return allChildren;
};

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i += 1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const getExpandedKeys = (appliedKeys, treeData, dataList) => {
  const expandedKeys = dataList.map((item) => {
    if (includes(appliedKeys, item.key)) {
      const parentKey = getParentKey(item.key, treeData);
      if (typeof parentKey === "undefined") {
        return item.key;
      }
      return parentKey;
    }
    return null;
  });
  return expandedKeys.filter(
    (item, i, self) => item && self.indexOf(item) === i
  );
};

const replaceChildrenWithParent = ({ data, arr }) => {
  if (data.children && data.children.length > 0) {
    const present = [];
    data.children.forEach((item) => {
      const res = replaceChildrenWithParent({ data: item, arr });
      if (res) {
        present.push(res);
      }
    });
    if (present.length === data.children.length && !data.isCategory) {
      data.children.forEach((child) => {
        arr.splice(arr.indexOf(child.key), 1);
      });
      arr.push(data.key);
      return true;
    }
    return false;
  }
  return arr.includes(data.key);
};

const getSelectedKeysFromAppliedKeys = (appliedKeys, dataListObject) => {
  let selectedKeys = [];
  if (appliedKeys) {
    const parents = getAllParents(appliedKeys, dataListObject);
    appliedKeys.forEach((currentKey) => {
      if (parents.indexOf(currentKey) > -1) {
        const allChildren = getAllChildren(currentKey, dataListObject);
        const allParents = getAllParents(allChildren, dataListObject);
        const finalSelectedKeys = difference(allChildren, allParents);
        selectedKeys = union(selectedKeys, finalSelectedKeys);
      } else {
        selectedKeys.push(currentKey);
      }
    });
  }
  return selectedKeys;
};

class CapMultiSelectWithTree extends React.Component {
  constructor(props) {
    super(props);
    this.dataList = [];
    this.dataListObject = {};
    this.allChildrenCount = 0;
    this.generateList(props.treeData);
    if (props.enableDebouncedSearch) {
      this.debouncedSearch = debounce(this.onSearch, 200);
    }
    const selectedKeys = getSelectedKeysFromAppliedKeys(
      props.appliedKeys,
      this.dataListObject
    );
    this.state = {
      visible: false,
      expandedKeys:
        props.expandedKeys
        || (props.appliedKeys && props.appliedKeys.length > 0
          ? union(
            getExpandedKeys(props.appliedKeys, props.treeData, this.dataList),
            ["select-all-common"]
          )
          : ["select-all-common"]),
      autoExpandParent: true,
      searchValue: "",
      externalSearchValue: "",
      selectedKeys,
    };
    [
      "hide",
      "togglePopoverVisibility",
      "onSearch",
      "onCheck",
      "clearSearch",
      "applySelect",
      "onPopoverClick",
      "onExpand",
      "onDebouncedSearch",
    ].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { externalSearchValue } = this.state;
    const { appliedKeys } = this.props;
    if (!isEqual(appliedKeys, nextProps.appliedKeys)) {
      const selectedKeys = getSelectedKeysFromAppliedKeys(
        nextProps.appliedKeys,
        this.dataListObject
      );
      this.setState({
        selectedKeys,
        expandedKeys:
          nextProps.appliedKeys && nextProps.appliedKeys.length > 0
            ? union(
              getExpandedKeys(
                nextProps.appliedKeys,
                nextProps.treeData,
                this.dataList
              ),
              ["select-all-common"]
            )
            : ["select-all-common"],
      });
    }
    this.dataList = [];
    this.dataListObject = {};
    this.allChildrenCount = 0;
    const treeDataForList = externalSearchValue && nextProps.searchedTreeData.length
      ? nextProps.searchedTreeData
      : nextProps.treeData;
    this.generateList(treeDataForList);
    if (!this.props.searchedTreeData.length && nextProps.searchedTreeData.length) {
      const expandedKeys = [nextProps.searchedTreeData[0].key];
      this.setState({ expandedKeys });
    }
  }

  onExpand(expandedKeys) {
    const { expandedKeysHandler } = this.props;
    expandedKeysHandler && expandedKeysHandler(expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onDebouncedSearch(e) {
    const searchValue = e.target.value;
    this.setState({
      searchValue,
    });
    this.debouncedSearch(null, searchValue);
  }

  onSearch(e, searchVal) {
    const searchValue = searchVal === "" || searchVal ? searchVal : e.target.value;
    const {
      treeData,
      searchKey,
      expandedKeysHandler,
      isExternalSearch,
      onSearch: onExternalSearchProp,
    } = this.props;
    const { selectedKeys } = this.state;
    if (isExternalSearch) {
      this.setState({ externalSearchValue: searchValue });
      onExternalSearchProp(searchValue);
      let expandedKeys = [];
      if (!searchValue) {
        expandedKeys = selectedKeys && selectedKeys.length > 0
          ? union(getExpandedKeys(selectedKeys, treeData, this.dataList), [
            "select-all-common",
          ])
          : ["select-all-common"];
      }
      this.setState({ expandedKeys });
    } else {
      let expandedKeys = [];
      if (searchValue) {
        expandedKeys = this.dataList.map((item) => {
          if (
            item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase())
            > -1
          ) {
            const parentKey = getParentKey(item.key, treeData);
            if (typeof parentKey === "undefined") {
              return item.key;
            }
            return parentKey;
          }
          return null;
        });
        expandedKeys = expandedKeys.filter(
          (item, i, self) => item && self.indexOf(item) === i
        );
      } else {
        expandedKeys = selectedKeys && selectedKeys.length > 0
          ? union(getExpandedKeys(selectedKeys, treeData, this.dataList), [
            "select-all-common",
          ])
          : ["select-all-common"];
      }
      expandedKeysHandler && expandedKeysHandler(expandedKeys);
      this.setState((prevState) => ({
        expandedKeys,
        searchValue,
        autoExpandParent: true,
        selectedKeys: without(prevState.selectedKeys, "select-all-common"),
      }));
    }
  }

  onPopoverClick() {
    if (this.state.searchValue) {
      this.clearSearch();
    }
  }

  onCheck(selectedKeys, info) {
    const clonedSelectedKeys = [...selectedKeys];
    const alreadySelectedKeys = [...this.state.selectedKeys];
    const { searchValue, externalSearchValue } = this.state;
    const { treeData, searchKey, defaultKeys = [] } = this.props;
    const currentKey = info.node.props.eventKey;
    let updatedSelectedKeys;
    if (!searchValue && !externalSearchValue) {
      if (currentKey === "select-all-common") {
        const allParents = getAllParents(selectedKeys, this.dataListObject);
        let finalSelectedKeys = difference(selectedKeys, allParents);
        if (
          finalSelectedKeys.length === 1
          && finalSelectedKeys[0] === "select-all-common"
        ) {
          finalSelectedKeys = [];
        }
        updatedSelectedKeys = without(finalSelectedKeys, "select-all-common");
        this.setState({ selectedKeys: updatedSelectedKeys });
      } else {
        const parentKeys = getAllParents([currentKey], this.dataListObject);
        if (info.checked) {
          if (parentKeys.length > 0) {
            const allChildren = getAllChildren(currentKey, this.dataListObject);
            const allParents = getAllParents(allChildren, this.dataListObject);
            const finalSelectedKeys = difference(allChildren, allParents);
            updatedSelectedKeys = union(alreadySelectedKeys, finalSelectedKeys);
            this.setState({ selectedKeys: union(updatedSelectedKeys, defaultKeys) });
          } else {
            alreadySelectedKeys.push(currentKey);
            updatedSelectedKeys = alreadySelectedKeys;
            this.setState({ selectedKeys: union(updatedSelectedKeys, defaultKeys) });
          }
        } else if (parentKeys.length > 0) {
          const allChildren = getAllChildren(currentKey, this.dataListObject);
          finalSelectedKeys = difference(alreadySelectedKeys, allChildren);
          updatedSelectedKeys = finalSelectedKeys;
          this.setState({ selectedKeys: union(updatedSelectedKeys, defaultKeys) });
        } else {
          updatedSelectedKeys = without(alreadySelectedKeys, currentKey);
          this.setState({ selectedKeys: union(updatedSelectedKeys, defaultKeys) });
        }
      }
      return updatedSelectedKeys;
    }

    let finalSelectedKeys = union(alreadySelectedKeys, clonedSelectedKeys);
    if (currentKey === "select-all-common" && !info.checked) {
      const allValuesInCurrentTree = getDataValuesInTree(
        treeData,
        searchValue,
        searchKey
      );
      finalSelectedKeys = difference(finalSelectedKeys, allValuesInCurrentTree);
    } else {
      const allParents = getAllParents(selectedKeys, this.dataListObject);
      finalSelectedKeys = difference(finalSelectedKeys, allParents);
      if (!info.checked) {
        finalSelectedKeys = without(finalSelectedKeys, currentKey);
        const allValuesInCurrentTree = getDataValuesInTree(
          treeData,
          searchValue,
          searchKey
        );
        const allChildren = getAllChildren(currentKey, this.dataListObject);
        finalSelectedKeys = difference(
          finalSelectedKeys,
          intersection(allValuesInCurrentTree, allChildren)
        );
      }
    }
    if (
      finalSelectedKeys.length === 1
      && finalSelectedKeys[0] === "select-all-common"
    ) {
      finalSelectedKeys = [];
    }
    updatedSelectedKeys = without(finalSelectedKeys, "select-all-common");
    this.setState({ selectedKeys: updatedSelectedKeys });
    return updatedSelectedKeys;
  }

  renderTreeNodes = (data, searchValue, searchKey, isMatching, parentKey) => {
    const {
      showSelectedCountByParent,
      moreText,
      treeData,
      enableSingleParentSelection,
    } = this.props;
    let selectedParentKey;
    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i].children) {
        for (let j = 0; j < treeData[i].children.length; j++) {
          if (treeData[i].children[j].checked) {
            selectedParentKey = treeData[i].key;
            break;
          }
        }
        if (selectedParentKey) break;
      }
    }
    const { selectedKeys } = this.state;
    const nodes = (data || []).reduce((acc, item) => {
      if (!isEmpty(item.children)) {
        const finalParentKey = parentKey || item.key;
        const isParentMatching = isMatching
          || (item.key !== "select-all-common"
            && !item.isCategory
            && !!(
              !searchValue
              || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase())
                > -1
            ));
        const temp = this.renderTreeNodes(
          item.children,
          searchValue,
          searchKey,
          isParentMatching,
          item.key !== "select-all-common" ? item.key : undefined
        );
        const childrenMap = {};
        let selectedCount = 0;
        item.children.forEach((child) => {
          childrenMap[child.key] = true;
        });
        selectedKeys.forEach((key) => {
          if (childrenMap[key]) {
            selectedCount++;
          }
        });
        if (temp.length > 0) {
          acc.push(
            <TreeNode
              key={item.key}
              dataRef={item}
              className={classNames(item.className, {
                "item-category": item.isCategory,
                "not-category": !item.isCategory,
                "parent-contains-info-icon": item.info,
                "is-liability-owner": item.isLiabilityOwner,
              })}
              disableCheckbox={
                enableSingleParentSelection
                && finalParentKey
                && selectedParentKey
                && selectedParentKey !== finalParentKey
              }
              title={(
                <div className="multi-select-title">
                  <div className="multi-select-main-title" title={item.title}>
                    {item.title}
                  </div>
                  {showSelectedCountByParent && selectedCount > 0 ? (
                    <span className="selected-text-for-parent">
                      {selectedCount}
                      {' '}
                      {moreText}
                    </span>
                  ) : (
                    <></>
                  )}
                  {item.info && (
                    <span className="info-tooltip">
                      <Tooltip placement="right" title={item.info}>
                        <CapIcon className="info-icon" type="info-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                </div>
              )}
            >
              {temp}
            </TreeNode>
          );
        }
        return acc;
      }
      if (
        isMatching
        || !searchValue
        || item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      ) {
        acc.push(
          <TreeNode
            {...item}
            className={classNames("child-node", {
              "contains-info-icon": item.info,
              "is-liability-owner": item.isLiabilityOwner,
            })}
            disableCheckbox={
              enableSingleParentSelection
              && parentKey
              && selectedParentKey
              && selectedParentKey !== parentKey
            }
            title={(
              <div className="multi-select-title">
                <div className="multi-select-main-title" title={item.title}>
                  {item.title}
                </div>
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

  togglePopoverVisibility(visible) {
    const { appliedKeys, treeData, expandedKeysHandler } = this.props;
    this.setState({
      visible,
    });
    if (visible) {
      const expandedKeys = appliedKeys && appliedKeys.length > 0
        ? union(getExpandedKeys(appliedKeys, treeData, this.dataList), [
          "select-all-common",
        ])
        : ["select-all-common"];
      expandedKeysHandler && expandedKeysHandler(expandedKeys);
      this.setState({
        expandedKeys,
      });
    }
  }

  hide() {
    const { appliedKeys, treeData, expandedKeysHandler } = this.props;
    const expandedKeys = appliedKeys && appliedKeys.length > 0
      ? union(getExpandedKeys(appliedKeys, treeData, this.dataList), [
        "select-all-common",
      ])
      : ["select-all-common"];
    expandedKeysHandler && expandedKeysHandler(expandedKeys);
    this.setState({
      visible: false,
      selectedKeys: appliedKeys || [],
      autoExpandParent: true,
      expandedKeys,
    });
  }

  applySelect() {
    const { treeData, includeTreeData, expandedKeysHandler } = this.props;
    const { selectedKeys } = this.state;
    const formattedKeys = without(selectedKeys, "select-all-common");
    treeData.forEach((data) => {
      if (this.props.replaceChildrenWithParent) {
        this.props.replaceChildrenWithParent({ data, arr: formattedKeys });
      } else {
        replaceChildrenWithParent({ data, arr: formattedKeys });
      }
    });
    const expandedKeys = formattedKeys && formattedKeys.length > 0
      ? union(getExpandedKeys(formattedKeys, treeData, this.dataList), [
        "select-all-common",
      ])
      : ["select-all-common"];
    expandedKeysHandler && expandedKeysHandler(expandedKeys);
    this.setState(
      {
        visible: false,
        autoExpandParent: true,
        expandedKeys,
      },
      () => {
        this.props.onSelect(formattedKeys, includeTreeData && treeData); // passing treeData for a use-case in promo-ui. To be removed going further.
      }
    );
  }

  generateList(data, parentKey) {
    if (data) {
      for (let i = 0; i < data.length; i += 1) {
        const node = data[i];
        const { key } = node;
        const obj = {
          ...node,
          parent: parentKey || false,
          children: (node.children && node.children.length) || 0,
        };
        const childrenKeys = [];
        if (obj.children) {
          for (let j = 0; j < obj.children; j += 1) {
            childrenKeys.push(node.children[j].key);
          }
        } else {
          this.allChildrenCount += 1;
        }
        obj.childrenKeys = childrenKeys;
        this.dataList.push(obj);
        this.dataListObject[key] = obj;
        if (node.children) {
          this.generateList(node.children, node.key);
        }
      }
    }
  }

  clearSearch() {
    this.onSearch(null, "");
  }

  render() {
    const {
      placeholder,
      searchPlaceholder,
      selectorClassName,
      triggerClassName,
      disabled,
      width,
      closeText,
      selectText,
      enableDebouncedSearch,
      noResultsFoundText,
      selectedText,
      appliedKeys,
      popoverClassName,
      selectAllText,
      selectAllSearchResultsText,
      searchKey,
      showLoader,
      minValuesToSelect,
      maxValuesToSelect,
      disableSelectAll,
      getPopupContainer,
      moreText,
      showSelectButtonToolTip,
      selectTooltipText,
      title,
      showSelectedFilterCount,
      isExternalSearch,
      searchedTreeData,
      showProductSearchLoader,
      appliedKeyObjects,
      disableSearch,
    } = this.props;
    const {
      visible,
      searchValue,
      selectedKeys,
      expandedKeys,
      autoExpandParent,
      externalSearchValue,
    } = this.state;
    const { treeData, ...rest } = this.props;
    const newProps = omit(rest, ["onSelect", "treeData"]);
    let treeDataWithSelectAll = [
      {
        title: searchValue ? selectAllSearchResultsText : selectAllText,
        key: "select-all-common",
        className: "select-all-tree",
        children: treeData,
      },
    ];
    if (!treeDataWithSelectAll[0]?.children?.length) treeDataWithSelectAll = [];

    if (isExternalSearch) {
      treeDataWithSelectAll = externalSearchValue ? searchedTreeData : treeData;
    }
    const treeNodes = this.renderTreeNodes(
      treeDataWithSelectAll,
      searchValue,
      searchKey
    );
    let triggerLeftContent = "";
    let triggerRightContent = "";
    if (appliedKeys && appliedKeys.length > 0) {
      if (!isExternalSearch && appliedKeys.length === this.allChildrenCount) {
        triggerLeftContent = "All selected";
      } else {
        const obj = getObject(treeData, "key", appliedKeys[0]);
        if (obj) {
          triggerLeftContent = obj.title;
        }
        // if 1st id is not present in treeData,
        // check in appliedKeysObjects(which is array of objects containing ids and labels)
        else if (getObject(appliedKeyObjects, "id", appliedKeys[0])) {
          triggerLeftContent = getObject(
            appliedKeyObjects,
            "id",
            appliedKeys[0]
          ).title;
        } else {
          triggerLeftContent = "";
        }
        if (appliedKeys.length > 1) {
          triggerRightContent = `+ ${appliedKeys.length - 1} ${moreText}`;
        }
      }
    }
    const formattedKeys = without(this.state.selectedKeys, "select-all-common");
    treeData.forEach((data) => {
      if (this.props.replaceChildrenWithParent) {
        this.props.replaceChildrenWithParent({ data, arr: formattedKeys });
      } else {
        replaceChildrenWithParent({ data, arr: formattedKeys });
      }
    });
    const disableApplyButton = (isEmpty(selectedKeys) && isEmpty(appliedKeys))
      || (minValuesToSelect && formattedKeys.length < minValuesToSelect)
      || (maxValuesToSelect && formattedKeys.length > maxValuesToSelect);
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    let currentCheckedKeys = [...selectedKeys];
    const currentValues = getDataValuesInTree(
      treeDataWithSelectAll,
      searchValue,
      searchKey
    );
    currentCheckedKeys = intersection(currentCheckedKeys, currentValues);
    const appliedKeyMap = {};
    let disableSelectFilterButton = true;
    appliedKeys.forEach((appliedKey) => {
      appliedKeyMap[appliedKey] = true;
    });
    for (let i = 0; i < selectedKeys.length; i++) {
      if (!appliedKeyMap[selectedKeys[i]]) {
        disableSelectFilterButton = false;
        break;
      }
    }
    disableSelectFilterButton = (isEmpty(selectedKeys) && isEmpty(appliedKeys))
      || (selectedKeys.length === appliedKeys.length
        && disableSelectFilterButton)
      || (maxValuesToSelect && selectedKeys.length > maxValuesToSelect)
      || (minValuesToSelect && selectedKeys.length < minValuesToSelect);

    return (
      <div className={classNames(clsPrefix)}>
        <Popover
          visible={!disabled && visible}
          onVisibleChange={this.togglePopoverVisibility}
          trigger="click"
          overlayClassName={classNames(
            `${clsPrefix}-popover`,
            popoverClassName,
            { "select-all-disabled": disableSelectAll }
          )}
          overlayStyle={{ width: popwidth }}
          placement="bottom"
          onClick={this.onPopoverClick}
          getPopupContainer={getPopupContainer}
          content={
            showLoader ? (
              <div className="showing-spinner">
                <Spin />
              </div>
            ) : (
              <div>
                {!disableSearch && (
                  <div className="search-input">
                    <Search
                      focusOnMount
                      alwaysShowFocus
                      value={isExternalSearch ? externalSearchValue : searchValue}
                      onClear={this.clearSearch}
                      placeholder={searchPlaceholder}
                      onChange={
                        enableDebouncedSearch
                          ? this.onDebouncedSearch
                          : this.onSearch
                      }
                    />
                  </div>
                )}
                {externalSearchValue && showProductSearchLoader ? (
                  <div
                    className="showing-spinner"
                    style={{ marginTop: "72px" }}
                  >
                    <Spin />
                  </div>
                ) : (
                  <>
                    {treeNodes && treeNodes.length > 0 && (
                      <Tree
                        checkable
                        onCheck={(keys, info) => {
                          const finalSelectedKeys = this.onCheck(keys, info);
                          this.props.onChange
                            && this.props.onChange(finalSelectedKeys, info);
                        }}
                        checkedKeys={currentCheckedKeys}
                        selectedKeys={currentCheckedKeys}
                        multiple
                        onExpand={this.onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        {...newProps}
                      >
                        {treeNodes}
                      </Tree>
                    )}
                    {!(treeNodes && treeNodes.length > 0) && (
                      <div className={classNames(`${clsPrefix}-no-results`)}>
                        <CapIcon
                          style={{ color: styledVars.CAP_G06 }}
                          type="alert"
                        />
                        <div
                          className={classNames(`${clsPrefix}-no-results-text`)}
                        >
                          {noResultsFoundText}
                        </div>
                      </div>
                    )}
                    {this.props.showClearAll ? (
                      <div className="clear-all">
                        <span onClick={this.props.onClearAll}>
                          {this.props.clearAllText}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}
                    {this.props.showSelect ? (
                      <CapButton
                        type="primary"
                        className="select-dropdown"
                        disabled={disableSelectFilterButton}
                        onClick={() => {
                          this.props.onSelect();
                          this.hide();
                        }}
                      >
                        {this.props.selectText}
                      </CapButton>
                    ) : (
                      <></>
                    )}
                    {this.props.showClose ? (
                      <CapButton type="default" onClick={this.hide}>
                        {this.props.closeText}
                      </CapButton>
                    ) : (
                      <></>
                    )}
                  </>
                )}
                {treeNodes && treeNodes.length > 0 && (
                  <div className="options">
                    <div>
                      {showSelectButtonToolTip
                      && formattedKeys.length > maxValuesToSelect ? (
                        <Popover
                            placement="topLeft"
                            content={selectTooltipText}
                            overlayClassName="select-button-popover"
                          >
                            <CapButton
                            className={`${width
                              && width < "260px"
                              && "small-button"}`}
                            type="primary"
                            onClick={this.applySelect}
                            disabled={disableApplyButton}
                            >
                            {selectText}
                          </CapButton>
                          </Popover>
                        ) : (
                          <CapButton
                            className={classNames({
                              "small-button": width && width < "260px",
                            })}
                            type="primary"
                            onClick={this.applySelect}
                            disabled={disableApplyButton}
                          >
                            {selectText}
                          </CapButton>
                        )}
                      <CapButton
                        className={classNames("cancel-button", {
                          "small-button": width && width < "260px",
                        })}
                        type="flat"
                        onClick={this.hide}
                      >
                        {closeText}
                      </CapButton>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          color: disableSelectFilterButton
                            ? "#F34F56"
                            : "#333333",
                        }}
                      >
                        {`${selectedKeys
                          && selectedKeys.length} ${selectedText}`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          }
        >
          <div
            ref={(node) => {
              this.node = node;
            }}
            style={{ width: width || "100%" }}
            className={classNames(`${clsPrefix}-selection`, selectorClassName, {
              selected: triggerLeftContent,
              open: visible && !disabled,
              triggerClassName,
              disabled,
            })}
          >
            <span
              className={classNames(`${clsPrefix}-left-content`, {
                placeholder: title || !triggerLeftContent,
                disabled,
              })}
              title={triggerLeftContent}
            >
              {title || triggerLeftContent || placeholder}
            </span>
            {showSelectedFilterCount ? (
              <span className="items-selected">
                {appliedKeys.length > 0 && (
                  <div className={`${clsPrefix}-items-selected`}>
                    {appliedKeys.length}
                  </div>
                )}
              </span>
            ) : (
              <></>
            )}
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              {title ? "" : triggerRightContent}
              {disabled ? (
                <CapIcon
                  type="chevron-down"
                  style={{ color: styledVars.CAP_G06 }}
                />
              ) : (
                <CapIcon type="chevron-down" />
              )}
            </span>
          </div>
        </Popover>
      </div>
    );
  }
}

CapMultiSelectWithTree.defaultProps = {
  searchKey: "title",
  getPopupContainer: () => document.body,
  showSelectButtonToolTip: false,
  appliedKeys: [],
  searchedTreeData: [],
};

CapMultiSelectWithTree.propTypes = {
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  expandedKeys: PropTypes.array,
  expandedKeysHandler: PropTypes.func,
  onClearAll: PropTypes.func,
  showClearAll: PropTypes.bool,
  showSelect: PropTypes.bool,
  showClose: PropTypes.bool,
  clearAllText: PropTypes.string,
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
  isExternalSearch: PropTypes.bool,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  enableDebouncedSearch: PropTypes.bool,
  width: PropTypes.string,
  closeText: PropTypes.string,
  selectText: PropTypes.string,
  appliedKeys: PropTypes.array,
  appliedKeyObjects: PropTypes.array,
  searchedTreeData: PropTypes.array,
  treeData: PropTypes.array,
  minValuesToSelect: PropTypes.number,
  maxValuesToSelect: PropTypes.number,
  disableSelectAll: PropTypes.bool,
  replaceChildrenWithParent: PropTypes.func,
  getPopupContainer: PropTypes.func,
  selectTooltipText: PropTypes.string,
  showSelectButtonToolTip: PropTypes.bool,
  selectorClassName: PropTypes.string,
  title: PropTypes.string,
  showSelectedFilterCount: PropTypes.bool,
  enableSingleParentSelection: PropTypes.bool,
  defaultKeys: PropTypes.array,
  disableSearch: PropTypes.bool,
};

export default LocaleHoc(CapMultiSelectWithTree, {
  key: "CapMultiSelectWithTree",
});
