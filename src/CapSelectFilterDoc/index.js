/**
* CapDropdownDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapSelectFilter from "../../components/CapSelectFilter";
import "./info.scss";
import CapLabel from "../../components/CapLabel";

const data = [
  {
    key: 'approved',
    value: 'APPROVED',
  },
  {
    key: 'completed',
    value: 'COMPLETED',
  },
  {
    key: 'disabled',
    value: 'DISABLED',
  },
  {
    key: 'draft',
    value: 'DRAFT',
  },
  {
    key: 'live',
    value: 'LIVE',
  },
  {
    key: 'stopped',
    value: 'STOPPED',
  },
  {
    key: 'sunset',
    value: 'SUNSET',
  },
  {
    key: 'suspended',
    value: 'SUSPENDED',
  },
  {
    key: 'waitingForApproval',
    value: 'WAITING_FOR_APPROVAL',
  }];

const infoData = [
  {
    key: 1,
    property: "placement",
    description: "The position of the CapSelectFilter relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
    type: "string",
    default: "bottomLeft",
  },
  {
    key: 2,
    property: "showBadge",
    description: "To display the badge when an item is selected. Example, showBadge={true}",
    type: "boolean",
    default: "false",
  },
  {
    key: 3,
    property: "overlayClassName",
    description: "Overlay class name of the CapSelectFilter",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "className",
    description: "Class name of the CapSelectFilter",
    type: "string",
    default: "-",
  },
  {
    key: 5,
    property: "data",
    description: "An array of object that has key and value",
    type: "array<{ key: 'test', value: 'Test' }>",
    default: "-",
  },
  {
    key: 6,
    property: "onSelect",
    description: "Called when clicked/select any item",
    type: "function(value)",
    default: "-",
  },
  {
    key: 7,
    property: "placeholder",
    description: "This is used as placeholder",
    type: "string | ReactNode",
    default: "-",
  },
  {
    key: 8,
    property: "width",
    description: "Width of the select component",
    type: "string",
    default: "80px",
  },
  {
    key: 9,
    property: "dropdownMaxHeight",
    description: "Maximum height of the dropdown",
    type: "string",
    default: "320px",
  },
  {
    key: 10,
    property: "dropdownWidth",
    description: "Width of the dropdown",
    type: "string",
    default: "228px",
  },
];

export default class CapSelectFilterDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
    };
  }

  handleSelect = (value) => {
    const selectedValue = value?.item?.props?.value;
    this.setState({ selectedValue });
  };

  removeStatusFilter = () => {
    this.setState({ selectedValue: null });
  };

  getComponent = (showBadge = false) => {
    const { selectedValue } = this.state;
    return (
      <CapSelectFilter
        placement="bottomLeft"
        data={data}
        onSelect={this.handleSelect}
        selectedValue={selectedValue}
        placeholder="Status"
        showBadge={showBadge}
      />
    );
  }

  render() {
    return (
      <div className="cap-select-chip-info">
        <div className="cap-select-chip-showcase">
          <CapLabel type="label16" className="margin-b-16">CapSelectFilter with Badge</CapLabel>
          {this.getComponent(true)}
          <CapLabel type="label16" className="margin-b-16 margin-t-16">CapSelectFilter without Badge</CapLabel>
          {this.getComponent(false)}
        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginBottom: '24px' }}>
          <b>NOTE: </b>
            This component is the extended version of ant design
          <a href="https://ant.design/components/dropdown/#header"> Dropdown </a>
            component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}
