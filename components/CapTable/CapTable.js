/**
* CapTable
*/
import React from "react";
import PropTypes from 'prop-types';
import { Table } from "antd";
import "./_capTable.scss";
const classNames = require('classnames');

export default class CapTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.infinteScroll) {
      this.addScrollEventListener();
    }
  }

  componentWillUnmount() {
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    if (listTable) {
      listTable.removeEventListener('scroll', this.onScrollListTable);
    }
  }

  addScrollEventListener = () => {
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    if (listTable) {
      listTable.addEventListener('scroll', this.onScrollListTable);
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
