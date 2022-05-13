import React from "react";
import PropTypes from 'prop-types';
import CapIcon from "../../../CapIcon";
import CapMenu from "../../../CapMenu";
import CapButton from "../../../CapButton";
import CapDropdown from "../../../CapDropdown";
import { CAP_G01 } from "../../../styled/variables";

const DayDropdown = ({fetchDay, dayLabels, day}) => {
  const handleMenuItemClick = (dayNum) => {
    fetchDay(dayNum);
  };
  const menu = (
    <CapMenu selectable>
      {
        dayLabels.map((label, index) => (
          <CapMenu.Item
            key={`${label}-${index}`}
            onClick={() => handleMenuItemClick(index)}>
            {label}
          </CapMenu.Item>
        ))
      }
    </CapMenu>
  );

  return (
    <CapDropdown overlay={menu} placement="topRight">
      <CapButton
        type="flat"
        suffix={<CapIcon size="m" type="chevron-down" color={CAP_G01} />}>
        {dayLabels[day]}
      </CapButton>
    </CapDropdown>
  );
};

DayDropdown.propTypes = {
  fetchDay: PropTypes.func,
  day: PropTypes.number,
  dayLabels: PropTypes.array,
};

export default DayDropdown;
