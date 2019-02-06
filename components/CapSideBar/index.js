import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Collapse } from 'antd';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

import { MenuSearch } from './MenuSearch';

const { Panel } = Collapse;

const clsPrefix = 'cap-sidebar';

export default class CapSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchLoader: false,
      allSearchResults: [],
    };
    this.onSearch = debounce(this.getSearchResults, 200);
  }

  debouncedSearch = (searchText) => {
    this.setState({ showSearchLoader: true });
    this.onSearch(searchText);
  }

  getSearchResults = (searchText) => {
    const { sidebarItems } = this.props;
    const categorizedResults = [];
    const nonCategorizedResults = [];
    sidebarItems.forEach((item) => {
      if (item.children) {
        const obj = { category: item.title, children: [] };
        item.children.forEach((child) => {
          if (!child.children && child.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            obj.children.push(child);
          } else if (child.children) {
            const subCategory = { category: item.title, children: [], subCategory: child.title };
            child.children.forEach((child2) => {
              if (child2.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                subCategory.children.push(child2);
              }
            });
            if (subCategory.children.length > 0) {
              categorizedResults.push(subCategory);
            }
          }
        });
        if (obj.children.length > 0) {
          categorizedResults.push(obj);
        }
      } else if (item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        nonCategorizedResults.push(item);
      }
    });
    this.setState({ allSearchResults: nonCategorizedResults.concat(categorizedResults), showSearchLoader: false });
  }

  getTreeNodes = (data) => {
    const { selectedMenuItem } = this.props;
    return data.map((item) => {
      const title = <span title={item.title}>{item.title}</span>;
      if (item.children) {
        return (
          <Panel header={title} key={item.key}>
            <Collapse
              defaultActiveKey={[selectedMenuItem]}
              className={classNames(`${clsPrefix}-accordian-submenu`)}
              bordered={false}
              accordion
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
              {this.getTreeNodes(item.children)}
            </Collapse>
          </Panel>
        );
      }
      return (
        <Panel
          disabled
          className={classNames(`${clsPrefix}-leaf-node`, { selected: selectedMenuItem === item.key })}
          key={item.key}
          header={<a href={item.link}>{title}</a>}
        />
      );
    });
  }

  render() {
    const { showSearchLoader, allSearchResults } = this.state;
    const {
      sidebarItems, defaultActiveKey, searchSupportPortalUrl, searchData, handleSearch,
    } = this.props;
    return (
      <div className={classNames(`${clsPrefix}`)}>
        <MenuSearch
          searchSupportPortalUrl={searchSupportPortalUrl}
          searchData={searchData || allSearchResults}
          onSearch={handleSearch || this.debouncedSearch}
          isLoading={showSearchLoader}
        />
        <Collapse
          defaultActiveKey={defaultActiveKey}
          className={classNames(`${clsPrefix}-accordian`)}
          bordered={false}
          accordion
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          {this.getTreeNodes(sidebarItems)}
        </Collapse>
      </div>
    );
  }
}

CapSideBar.propTypes = {
  sidebarItems: PropTypes.array,
  defaultActiveKey: PropTypes.string,
  selectedMenuItem: PropTypes.string,
  searchData: PropTypes.array,
  handleSearch: PropTypes.func,
  searchSupportPortalUrl: PropTypes.string,
};
