import React from "react";
import PropTypes from 'prop-types';
import { weekDays } from "../../constants";
import CapIcon from "../../../CapIcon";
import CapMenu from "../../../CapMenu";
import CapButton from "../../../CapButton";
import CapDropdown from "../../../CapDropdown";

const DayDropdown = ({fetchDay, day}) =>{
    const menu = (
        <CapMenu selectable={true}>
           {
                Object.keys(weekDays).map(key =>
                    <CapMenu.Item key={`${weekDays[key]}-${key}`} 
                    onClick={event => fetchDay(parseInt(key))}>
                        {weekDays[key]}
                    </CapMenu.Item>
                )
            }
        </CapMenu>
    );
    
    return (
        <CapDropdown overlay={menu} placement="topRight">
            <CapButton
              type="flat"
              suffix={<CapIcon size="m" type="chevron-down" color="#091e42" />}>
              {weekDays[day]}
            </CapButton>
          </CapDropdown>
    )
}

DayDropdown.propTypes = {
    fetchDay: PropTypes.func,
    day: PropTypes.number
}

export default DayDropdown;