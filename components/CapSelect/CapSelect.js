/**
* CapSelect
*/
import React from "react";
import PropTypes from 'prop-types';
import { Select } from "antd";
import "./_capSelect.scss";
const { Option } = Select;
export default class CapSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options = this.props.options.map((op) => <Option {...op}>{op.label}</Option>);
    return (
      <Select {...this.props} className={this.props.className ? `cap-select-v2 ${this.props.className}` : "cap-select-v2"}>
        {options}
      </Select>
    );
  }
}

CapSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
};

CapSelect.defaultProps = {

};
