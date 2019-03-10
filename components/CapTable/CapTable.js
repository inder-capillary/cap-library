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

  addScrollEventListener = () => {
    const listTable = document.querySelector(`#${this.props.id} div.ant-table-body`);
    if (listTable) {
      listTable.addEventListener('scroll', this.onScrollListTable);
    }
  }


  onScrollListTable = (event) => {
    const maxScroll = event.target.scrollHeight - event.target.clientHeight;
    const currentScroll = event.target.scrollTop;
    if (currentScroll === maxScroll) {
      const pagination = Object.assign(this.props.pagination);
      pagination.offset += 10;
      this.props.setPagination(pagination);
    }
  }

  render() {
    const { className, children, infinteScroll, ...rest} = this.props;
    return (
      <Table
        {...rest}
        pagination={!infinteScroll}
        className={classNames("cap-table-v2", className, )}>
        {React.Children.toArray(children)}
      </Table>
    );
  }
}

CapTable.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
