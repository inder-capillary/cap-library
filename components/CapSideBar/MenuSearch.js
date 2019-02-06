import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Input, Icon, Popover, Spin,
} from 'antd';

import './_menuSearch.scss';
import WarningIcon from '../assets/icons/warning.svg';
import NewTabIcon from '../assets/icons/open-in-new.svg';
const clsPrefix = 'menu-search';

export class MenuSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      visible: false,
    };
  }

  handleSearch = (e) => {
    const state = {};
    const { value } = e.target;
    state.searchText = value;
    if (value) {
      state.visible = true;
    }
    this.setState(state);
  }

  onVisibleChange = (visible) => {
    this.setState({ visible });
    if (!visible) {
      this.clearSearch();
    }
  }

  handleSearch = (e) => {
    const { onSearch } = this.props;
    const searchText = e.target.value;
    if (searchText) {
      this.setState({ searchText });
      if (onSearch) {
        onSearch(searchText);
      }
    } else {
      this.clearSearch();
    }
  };

  clearSearch = () => {
    this.setState({ searchText: '' });
  }

  generateHighlightedText = (text) => {
    const { searchText } = this.state;
    const splitPattern = searchText ? new RegExp(`(${searchText})`, 'gi') : '';
    const miniWords = text.split(splitPattern);
    const html = [];
    miniWords.forEach((miniWord, index) => {
      if (miniWord) {
        if (searchText && miniWord.toLowerCase() === searchText.toLowerCase()) {
          html.push(<span key={index} data-value={text} className="highlighted-item"><strong data-value={text}>{miniWord}</strong></span>);
        } else {
          html.push(<span key={index} data-value={text}>{miniWord}</span>);
        }
      }
    });
    return <span data-value={text}>{html}</span>;
  }

  renderItem = (item) => {
    const { handleItemClick } = this.props;
    const linkProps = { href: item.link };
    const newTabLinkProps = { href: item.link, target: "_blank" };
    if (item.target) { linkProps.target = item.target; }
    if (handleItemClick) {
      linkProps.onClick = (e) => {
        e.persist();
        this.setState({
          searchText: "",
        }, () => item.passBackId ? handleItemClick(e, item.passBackId) : handleItemClick(e));
      };
      newTabLinkProps.onClick = (e) => {
        e.persist();
        if (item.passBackId) {
          handleItemClick(e, item.passBackId);
        } else {
          handleItemClick(e);
        }
      };
    }
    return (
      <div className="link-items" key={`item-${item.key}`}>
        <a {...linkProps} className={classNames(`${clsPrefix}-ellipsis`)}>{this.generateHighlightedText(item.title)}</a>
        <a {...newTabLinkProps}>
          <div className="new-tab-link-wrapper"><img src={NewTabIcon} alt="" /></div>
        </a>
      </div>
    );
  }

  renderResults = (searchData) => {
    const result = searchData.map((data) => {
      if (!data.children) {
        return this.renderItem(data);
      }
      if (data.category && !data.subCategory) {
        const childrenHtml = data.children.map((childItem) => this.renderItem(childItem, `childItem-${childItem.key}`));
        return (
          <div key={`item-group-${data.category}`} className="links-group">
            <div className="group-heading">{data.category}</div>
            <div className="group-children">{childrenHtml}</div>
          </div>);
      } if (data.category && data.subCategory) {
        const childrenHtml = data.children.map((childItem) => this.renderItem(childItem, `childItem-${childItem.key}`));
        return (
          <div key={`item-group-${data.subCategory}`} className="links-group">
            <div className="group-heading">{`${data.category} > ${data.subCategory}`}</div>
            <div className="group-children">{childrenHtml}</div>
          </div>);
      }
      return null;
    });
    return (
      <div className="links-content">
        {result}
      </div>
    );
  }

  render() {
    const {
      isLoading, searchSupportPortalText, isAdvancedSearching, searchSupportPortalUrl,
      noSearchResultsFoundText, placeholder, searchData, fetchingMenuSearchResults,
    } = this.props;
    const { searchText, visible } = this.state;
    const noResults = (!searchData || searchData.length === 0);
    const searchResultsComponent = !!searchText && (noResults && !isAdvancedSearching
      ? (
        <div className={classNames(`${clsPrefix}-no-results content`)}>
          <img src={WarningIcon} alt="no-results" />
          <div className={classNames(`${clsPrefix}-no-results-text`)}>{noSearchResultsFoundText}</div>
        </div>
      )
      : this.renderResults(searchData));
    const supportPortalUrl = searchSupportPortalUrl && searchSupportPortalUrl.replace("{{searchText}}", searchText);
    return (
      <Popover
        overlayClassName={classNames(`${clsPrefix}-popover`)}
        placement="bottomLeft"
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        trigger="click"
        content={
          !!searchText && (
            <div>
              {isLoading || fetchingMenuSearchResults ? <div className="content"><Spin /></div> : searchResultsComponent}
              {supportPortalUrl && (
                <div className={classNames(`${clsPrefix}-portal-url-container`)}>
                  <a href={supportPortalUrl} target="_blank">{`${searchSupportPortalText}: ${searchText}`}</a>
                </div>
              )}
            </div>
          )
        }
      >
        <div className={classNames(`${clsPrefix}`)}>
          <Input
            placeholder={placeholder}
            onChange={this.handleSearch}
            value={searchText}
          />
          <Icon type="search" />
          {searchText && <Icon onClick={this.clearSearch} type="close" />}
        </div>
      </Popover>
    );
  }
}

MenuSearch.defaultProps = {
  noSearchResultsFoundText: "No results found",
  searchSupportPortalText: "Search support portal for",
  placeholder: "Search",
};

MenuSearch.propTypes = {
  searchData: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchingMenuSearchResults: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  handleItemClick: PropTypes.func,
  noSearchResultsFoundText: PropTypes.string,
  searchSupportPortalText: PropTypes.string,
  isAdvancedSearching: PropTypes.bool,
  advancedSearchMessage: PropTypes.string,
  searchSupportPortalUrl: PropTypes.string,
};
