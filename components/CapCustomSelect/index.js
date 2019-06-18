/**
*
* CapCustomSelect
*
*/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover } from "antd";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import styled from 'styled-components';
import * as styledVars from "../styled/variables";
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';
import CapInput from '../CapInput';

import './_capCustomSelect.scss';

const clsPrefix = 'cap-custom-select';

const StyledCapHeading = styled(CapHeading)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


class CapCustomSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  }

  onVisibleChange = (visible) => {
    this.setState({ visible });
    if (!visible) {
      this.setState({ visible: false, searchText: "" });
    }
  }

  handleChange = (item) => {
    const { onChange } = this.props;
    this.setState({ visible: false });
    onChange(item.value, item);
  }

  getItems = () => {
    const { options, value } = this.props;
    const { searchText } = this.state;
    return options.reduce((acc, item) => {
      if (searchText === "" || item.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        acc.push(
          <StyledCapHeading
            type="h6"
            key={item.value}
            onClick={() => this.handleChange(item)}
            className={classNames(`${clsPrefix}-select-item`, { selected: value === item.value })}
          >
            {item.label}
          </StyledCapHeading>
        );
      }
      return acc;
    }, []);
  }

  clearSearch = () => {
    this.setState({ searchText: "" });
  }

  render() {
    const { options, value, showSearch, searchPlaceholder, selectPlaceholder, width, className, popoverClassName } = this.props;
    const { visible, searchText } = this.state;
    const itemsHtml = this.getItems();
    const selectedItemIndex = findIndex(options, (item) => item.value === value);
    let selectedItemLabel = "";
    if (selectedItemIndex !== -1) {
      selectedItemLabel = options[selectedItemIndex].label;
    }
    const popwidth = this.node ? `${this.node.offsetWidth}px` : "100%";
    return (
      <Popover
        trigger="click"
        getPopupContainer={(trigger) => trigger.parentNode}
        placement="bottomLeft"
        overlayClassName={classNames(`${clsPrefix}-popover`, popoverClassName)}
        overlayStyle={{ width: popwidth }}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        content={(
          <Fragment>
            {showSearch && (
              <CapInput.Search
                className={classNames(`${clsPrefix}-search`)}
                placeholder={searchPlaceholder}
                onChange={this.handleSearch}
                value={searchText}
                onClear={this.clearSearch}
              />
            )}
            {itemsHtml.length > 0 ? <div className={classNames(`${clsPrefix}-items-wrapper`)}>{itemsHtml}</div>
              : (
                <div className={classNames(`${clsPrefix}-no-results`)}>
                  <CapIcon style={{ color: styledVars.CAP_G06 }} type="alert" />
                  <div className={classNames(`${clsPrefix}-no-results-text`)}>No results found</div>
                </div>
              )
            }
          </Fragment>
        )}
      >
        <div ref={(node) => { this.node = node; }} style={{ width: width || "100%" }} className={classNames(`${clsPrefix}-selection`, { open: !!visible }, className)}>
          <div className={(`${clsPrefix}-selected-value`)}>
            <StyledCapHeading type={value ? 'h5' : 'h6'} title={selectedItemLabel}>{selectedItemLabel || selectPlaceholder}</StyledCapHeading>
          </div>
          <CapIcon type="chevron-down" className={classNames(`${clsPrefix}-arrow`)} />
        </div>
      </Popover>
    );
  }
}

CapCustomSelect.defaultProps = {
  searchPlaceholder: 'Search',
  selectPlaceholder: 'Select Option',
};

CapCustomSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  selectPlaceholder: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  popoverClassName: PropTypes.string,
};

export default CapCustomSelect;
