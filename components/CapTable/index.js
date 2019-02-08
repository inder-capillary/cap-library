/**
* CapTable
*/
import React from "react";
import PropTypes from 'prop-types';
import { Table } from "antd";
import "./_capTable.scss";


export default class CapTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table {...this.props} className={`${this.props.className || ''} cap-table`}>
        {React.Children.toArray(this.props.children)}
      </Table>
    );
  }
}

CapTable.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
