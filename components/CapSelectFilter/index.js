/**
*
* CapSelectFilter
*
*/

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import CapDropdown from '../CapDropdown';
import CapLabel from '../CapLabel';
import CapMenu from '../CapMenu';
import CapHeading from '../CapHeading';
import CapIcon from '../CapIcon';
import { StyledDiv, MenuItem, Badge } from './style';
import {
  CAP_G12,
} from '../styled/variables';

const { CapLabelInline } = CapLabel;
const clsPrefix = 'cap-select-filter-v2';

function CapSelectFilter(props) {
  const {
    className,
    overlayClassName,
    onSelect,
    selectedValue,
    placeholder,
    placement,
    width,
    dropdownMaxHeight,
    dropdownWidth,
    data,
    showBadge = false,
    ...rest
  } = props;

  const getMenuItems = (dataArray = []) => {
    const menuItems = (
      <CapMenu style={{ border: `1px solid ${CAP_G12}` }}>
        {dataArray?.map(({ key, value, label }) => (
          <MenuItem
            key={key}
            value={value}
            onClick={onSelect}
            selected={value === selectedValue}
          >
            <CapHeading type="h5">{label}</CapHeading>
          </MenuItem>
        ))
        }
      </CapMenu>
    );
    return menuItems;
  };

  return (
    <CapDropdown
      placement={placement}
      trigger={['click']}
      overlay={getMenuItems(data)}
      className={classNames(clsPrefix, className)}
      overlayClassName={classNames(`${clsPrefix}-overlay`, overlayClassName)}
      overlayStyle={{
        maxHeight: dropdownMaxHeight,
        width: dropdownWidth,
        overflowY: 'scroll',
      }}
      getPopupContainer={(trigger) => trigger?.parentNode || document.body}
      {...rest}
    >
      <StyledDiv selected={selectedValue?.length} width={width} showBadge={showBadge && selectedValue}>
        <CapLabelInline type="label9">
          {placeholder}
        </CapLabelInline>
        {(showBadge && selectedValue) && (
          <Badge>{[selectedValue].length}</Badge>
        )}
        <CapIcon type="chevron-down" />
      </StyledDiv>
    </CapDropdown>
  );
}

CapSelectFilter.defaultProps = {
  placement: "bottomLeft",
  width: '80px',
  dropdownMaxHeight: '320px',
  dropdownWidth: '228px',
};

CapSelectFilter.propTypes = {
  placement: PropTypes.string,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  onSelect: PropTypes.func,
  selectedValue: PropTypes.string,
  data: PropTypes.array,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  width: PropTypes.string,
  dropdownMaxHeight: PropTypes.string,
  dropdownWidth: PropTypes.string,
};

export default CapSelectFilter;
