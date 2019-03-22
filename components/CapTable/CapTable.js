/**
* CapTable
*/
import React from "react";
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { Table } from "antd";
import "./_capTable.scss";
const classNames = require('classnames');

export default class CapTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onScrollThrottle = throttle(this.onScrollListTable, 50);
    this.setPaginationCalled = false;
  }

  componentDidMount() {
    if (this.props.infinteScroll) {
      this.addScrollEventListener();
      this.callSetPaginationIfNotOverflow();
    }
  }

  componentDidUpdate() {
    if (!this.setPaginationCalled && this.props.infinteScroll) {
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
    if (currentScroll === maxScroll && !this.props.showLoader) {
      const offsetLimit = Object.assign(this.props.offset_limit);
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
      <Table
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
