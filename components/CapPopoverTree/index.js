import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tree } from 'antd';
import CapPopover from '../CapPopover';
import CapInput from '../CapInput';
import CapHeading from '../CapHeading';
import CapRow from '../CapRow';
import './_capPopoverTree.scss';
import LocaleHoc from "../LocaleHoc";
import { ExpandIcon, StyledIcon, StyledCapHeading, StyledCapTree, StyledCapColumn } from './style';

const { TreeNode } = Tree;
const { Search } = CapInput;
const clsPrefix = 'cap-popover-tree-v2';

export const CapPopoverTree = (props) => {
  const {
    treeData: propsTreeData = [],
    overlayClassName,
    trigger,
    placement,
    switcherIcon,
    className,
    visible: popoverVisible,
    onVisibleChange: onPopoverVisibleChange,
    defaultExpandAll,
    onSelect,
    selectedKey: propsSelectedKey,
    emptyDataMessage,
    searchPlaceholder,
    ...rest
  } = props || {};

  const [searchText, setSearchText] = useState(null);
  const [filteredTreeData, setFilteredTreeData] = useState(propsTreeData || []);
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchText(value);
    setExpandedKeys([]);
    getFilteredData(value);
  };

  const handleOnExpand = (key) => {
    const keyLength = key?.length;
    let keys = [...key];
    // This condition is to make only one parent expand at a time.
    if (keyLength) {
      keys = [key[keyLength - 1]];
    }
    setExpandedKeys(keys);
  };

  const handleSelect = (selectedKey, { node }) => {
    const { isLeafNode, eventKey, expanded } = node?.props || {};
    // This condition is to select only child node and expand/collapse the parent node.
    if (isLeafNode) {
      onSelect(selectedKey);
    } else {
      const key = expanded ? [] : [eventKey];
      handleOnExpand(key);
    }
  };

  const getTreeData = ( treeData ) => {
    const finalTreeData = treeData?.reduce(( result, data ) => {
      const { title, key, icon, children = [] } = data;
      if (title) {
        const itemName = title?.toLowerCase()?.trim();
        const searchValue = searchText?.toLowerCase()?.trim();
        const searchIndex = searchValue && itemName?.indexOf(searchValue);
        const beforeString = title?.substr(0, searchIndex);
        const afterString = title?.substr(searchIndex + searchValue?.length);
        const matchedSearch = title?.substr(searchIndex, searchValue?.length);
        const searchResult = (<>
          <StyledCapColumn>{beforeString}</StyledCapColumn>
          <StyledCapColumn style={{ fontWeight: 500 }}>{matchedSearch}</StyledCapColumn>
          <StyledCapColumn>{afterString}</StyledCapColumn>
        </>);

        const treeNodeProps = {
          title: (
            <StyledCapHeading className="tree-node-title">
              {searchIndex > -1 ? searchResult : title}
            </StyledCapHeading>
          ),
          key,
          isLeafNode: !children?.length,
          icon: icon && (
            <StyledIcon
              className="tree-node-icon"
              size="s"
              type={icon}
            />
          ),
        };

        result.push(
          <TreeNode
            {...treeNodeProps}
          >
            {children?.length && getTreeData(children)}
          </TreeNode>
        );
      }
      return result;
    }, []);
    return finalTreeData;
  };


  // This function is to handle the search items;
  const getFilteredData = (searchValue) => {
    const searchString = searchValue?.toLowerCase()?.trim();
    const expandedKeysData = [];
    if (!searchString) {
      return;
    }
    const filteredData = propsTreeData.reduce(( result, currentData ) => {
      const parentName = currentData?.title?.toLowerCase();
      const isParent = parentName?.indexOf(searchString) > -1;
      const childItems = currentData?.children?.filter((childItem) => childItem?.title?.toLowerCase()?.indexOf(searchString) > -1);
      const hasChildren = !!childItems?.length;
      const currentDataCopy = {...currentData};
      if (hasChildren) {
        currentDataCopy.children = childItems;
        result.push(currentDataCopy);
        expandedKeysData.push(currentDataCopy?.key);
      } else if (isParent) {
        result.push(currentData);
      }
      return result;
    }, []);

    setExpandedKeys(expandedKeysData);
    setFilteredTreeData(filteredData);
  };

  return (
    <CapPopover
      visible={popoverVisible}
      onVisibleChange={onPopoverVisibleChange}
      trigger={trigger}
      placement={placement}
      overlayClassName={classNames(`${clsPrefix}`, overlayClassName)}
      {...rest}
      content={(
        <CapRow className="search-and-tree-wrapper">
          <Search
            placeholder={searchPlaceholder}
            onChange={handleSearch}
            className="search-tree-node"
          />
          <div className="divider" />
          {filteredTreeData?.length ? (
            <StyledCapTree
              showIcon
              blockNode
              expandedKeys={expandedKeys}
              selectedKeys={propsSelectedKey}
              defaultExpandAll={defaultExpandAll}
              onExpand={handleOnExpand}
              onSelect={handleSelect}
              switcherIcon={switcherIcon}
              isExpanded={expandedKeys?.length && !searchText}
              {...rest}
            >
              { getTreeData( searchText ? filteredTreeData : propsTreeData ) }
            </StyledCapTree>
          ) : (
            <CapHeading type="h5" className="empty-data-text">{emptyDataMessage}</CapHeading>
          )}
        </CapRow>)}
    />
  );
};

CapPopoverTree.defaultProps = {
  trigger: 'click',
  placement: 'rightBottom',
  showIcon: true,
  blockNode: true,
  visible: true,
  defaultExpandAll: false,
  switcherIcon: <ExpandIcon size="m" type="chevron-down" />,
};

CapPopoverTree.propTypes = {
  trigger: PropTypes.string,
  placement: PropTypes.string,
  className: PropTypes.string,
  defaultExpandAll: PropTypes.bool,
  overlayClassName: PropTypes.string,
  showIcon: PropTypes.bool,
  blockNode: PropTypes.bool,
  propsTreeData: PropTypes.array,
  switcherIcon: PropTypes.node,
  onSelect: PropTypes.func,
  onPopoverVisibleChange: PropTypes.func,
  visible: PropTypes.bool,
  propsSelectedKey: PropTypes.array,
  searchPlaceholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  emptyDataMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};


export default LocaleHoc(CapPopoverTree, {key: 'CapPopoverTree'});
