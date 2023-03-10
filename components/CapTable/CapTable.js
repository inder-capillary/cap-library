/**
* CapTable
*/
import React from "react";
import PropTypes from 'prop-types';
import { throttle, cloneDeep } from 'lodash';
import { Table } from "antd";
import "./_capTable.scss";
import styled from "styled-components";
import classNames from 'classnames';
import { CAP_G07 } from '../styled/variables';
import LocaleHoc from '../LocaleHoc';

const StyledTable = styled(Table)`
  &.show-loader {
    .ant-table-body > table > tbody::after {
      content: "${(props) => props.loadMoreData}";
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      align-items: center;
      height: 60px;
      text-align: center;
      font-size: 16px;
      color: gray;
      border-top: 1px solid ${CAP_G07};
    }
  }
`;

class CapTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onScrollThrottle = throttle(this.onScrollListTable, 50);
    this.setPaginationCalled = false;
  }

  componentDidMount() {
    // eslint-disable-next-line camelcase
    const { infinteScroll, dataSource, offset_limit } = this.props;
    // eslint-disable-next-line camelcase
    const limit = offset_limit && (offset_limit.limit || 10);
    if (infinteScroll) {
      this.addScrollEventListener();
      if (dataSource && dataSource.length >= limit) {
        this.callSetPaginationIfNotOverflow();
      }
    }
  }

  componentDidUpdate() {
    // eslint-disable-next-line camelcase
    const { infinteScroll, dataSource, offset_limit } = this.props;
    // eslint-disable-next-line camelcase
    const limit = offset_limit && (offset_limit.limit || 10);
    if (!this.setPaginationCalled && infinteScroll && dataSource && dataSource.length >= limit) {
      this.callSetPaginationIfNotOverflow();
    }
  }

  componentWillUnmount() {
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    if (listTable) {
      listTable.removeEventListener('scroll', this.onScrollThrottle);
    }
  }

  addScrollEventListener = () => {
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    if (listTable) {
      listTable.addEventListener('scroll', this.onScrollThrottle);
    }
  }


  onScrollListTable = (event) => {
    const maxScroll = event.target.scrollHeight - event.target.clientHeight;
    const currentScroll = event.target.scrollTop;
    if (currentScroll >= (maxScroll - 10) && !this.props.showLoader) {
      const offsetLimit = { ...this.props.offset_limit };
      offsetLimit.offset += offsetLimit.limit;
      this.props.setPagination(offsetLimit);
    }
  }

  callSetPaginationIfNotOverflow() {
    const yscrollheight = this.props.scroll ? this.props.scroll.y : 0;
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    let isOverflow = false;
    if (yscrollheight && yscrollheight < listTable.scrollHeight) {
      isOverflow = true;
    }
    if (!isOverflow && this.props.setPagination && this.props.dataSource.length > 0) {
      this.setPaginationCalled = true;
      const offsetLimit = { ...this.props.offset_limit };
      offsetLimit.offset += offsetLimit.limit;
      this.props.setPagination(offsetLimit);
    }
  }

  render() {
    const { className, children, infinteScroll, pagination, ...rest } = this.props;
    return (
      <StyledTable
        {...rest}
        pagination={infinteScroll ? false : pagination}
        className={classNames('cap-table-v2', className, { 'show-loader': this.props.showLoader })} />
    );
  }
}

CapTable.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default LocaleHoc(CapTable, { key: 'CapTable' });
