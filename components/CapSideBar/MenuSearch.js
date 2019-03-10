import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Spin } from 'antd';
import { CapInput, CapIcon } from '../index';
import * as styledVars from "../styled/variables";

import './_menuSearch.scss';
const clsPrefix = 'menu-search-v2';

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
          html.push(<span key={index} data-value={text} className={classNames(`${clsPrefix}-highlighted-item`)}><span data-value={text}>{miniWord}</span></span>);
        } else {
          html.push(<span key={index} data-value={text}>{miniWord}</span>);
        }
      }
    });
    return <span data-value={text}>{html}</span>;
  }


  onItemClick = (item) => {
    const { onLinkClick } = this.props;
    this.setState({ visible: false });
    if (onLinkClick) {
      onLinkClick(item);
    }
  }

  renderItem = (item) => {
    const { onLinkClick } = this.props;
    const linkProps = { href: item.link };
    const newTabLinkProps = { href: item.link, target: "_blank" };
    if (item.target) { linkProps.target = item.target; }
    return (
      <div className="link-items" key={`item-${item.key}`}>
        {onLinkClick
          ? <div onClick={() => { this.onItemClick(item); }} className={classNames(`${clsPrefix}-ellipsis`, `${clsPrefix}-item-link`)}>{this.generateHighlightedText(item.title)}</div>
          : <a onClick={this.onItemClick} {...linkProps} className={classNames(`${clsPrefix}-ellipsis`)}>{this.generateHighlightedText(item.title)}</a>
        }
        <a {...newTabLinkProps}>
          <CapIcon className="new-tab-link-wrapper" type="open-in-new" size="s" />
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
          <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
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
          <div style={{ position: 'relative' }}>
            <CapInput.Search
              placeholder={placeholder}
              onChange={this.handleSearch}
              value={searchText}
              onClear={this.clearSearch}
            />
          </div>
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
  noSearchResultsFoundText: PropTypes.string,
  searchSupportPortalText: PropTypes.string,
  isAdvancedSearching: PropTypes.bool,
  advancedSearchMessage: PropTypes.string,
  searchSupportPortalUrl: PropTypes.string,
  onLinkClick: PropTypes.func,
};
