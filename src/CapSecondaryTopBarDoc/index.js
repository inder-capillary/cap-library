/**
* CapSecondaryTopBarDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapSecondaryTopBar } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "primaryMenuItem",
    description: "First Menu item to be shown on topbar",
    type: "Object{ key: String, label: String }",
    default: "-",
  },
  {
    key: 2,
    property: "secondaryMenuItem",
    description: "Second Menu item to be shown on topbar",
    type: "Object{ key: String, label: String }",
    default: "-",
  },
  {
    key: 3,
    property: "menuActions",
    description: "List of actions to be shown on the topbar",
    type: "Array[{ key: String, iconType: String }]",
    default: "-",
  },
  {
    key: 3,
    property: "menuActionHandler",
    description: "Actions Items click handler function",
    type: "Function",
    default: "-",
  },
  {
    key: 3,
    property: "menuItemHandler",
    description: "All menu Item click handler function",
    type: "Function",
    default: "-",
  },
];

export default class CapSecondaryTopBarDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  onSecNavActionsClick = () => {
  }

  render() {
    const CapSecondaryTopBarProps = {
      primaryMenuItem: { key: 'primaryMenu', label: 'Engage+' },
      secondaryMenuItem: { key: 'secondaryMenu', label: 'Van Heusen'},
      menuActions: [{ key: 'close-icon', iconType: 'close' }],
      menuActionHandler: this.onSecNavActionsClick,
    };

    return (
      <div className="cap-secondary-top-bar-info">
        <div className="cap-secondary-top-bar-showcase">
          <CapSecondaryTopBar {...CapSecondaryTopBarProps} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
