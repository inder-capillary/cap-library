// /**
// * CapPopoverTreeDoc
// */
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapPopoverTree, CapButton } from "../../components";
import "./info.scss";

const treeData = [
  {
    title: "on Event",
    key: "onEvent",
    icon: "survey-response",
    children: [
      {
        title: "skuCode",
        key: "skuCode",
      },
      {
        title: "brandCode",
        key: "brandCode",
      },
      {
        title: "Price",
        key: "price",
      },
      {
        title: "Quantity",
        key: "quantity",
      },
      {
        title: "Product name",
        key: "productName",
      },
    ],
  },
  {
    title: "on Customer",
    key: "onCustomer",
    icon: "user",
    children: [
      {
        key: "customerName",
        title: "Customer name",
      },
      {
        key: "productModel",
        title: "Product model",
      },
      {
        key: "onProduct",
        title: "On product",
      },
    ],
  },
  {
    title: "on Store",
    key: "onStore",
    icon: "bulb",
    children: [
      {
        title: "New store",
        key: "newStore",

      },
    ],
  },
];

const infoData = [
  {
    key: 1,
    property: "onVisibleChange",
    description: "Callback executed when visibility of the CapPopoverTree is changed",
    type: "(visible) => void",
    default: "-",
  },
  {
    key: 2,
    property: "visible",
    description: "Whether the CapPopoverTree is visible or not",
    type: "boolean",
    default: "visible",
  },
  {
    key: 3,
    property: "trigger",
    description: "CapPopoverTree trigger mode. Could be multiple by passing an array",
    type: "hover | focus | click | contextMenu | Array<string>",
    default: "hover",
  },
  {
    key: 4,
    property: "placement",
    description: "The position of the CapPopoverTree relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
    type: "string",
    default: "rightBottom",
  },
  {
    key: 5,
    property: "overlayClassName",
    description: "  Class name of the CapPopoverTree",
    type: "string",
    default: "-",
  },
  {
    key: 6,
    property: "treeData",
    description: "The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array)",
    type: "array<{ key, title, children, [disabled, selectable] }>",
    default: "-",
  },
  {
    key: 7,
    property: "blockNode",
    description: "Whether treeNode fill remaining horizontal space",
    type: "boolean",
    default: "false",
  },
  {
    key: 9,
    property: "switcherIcon",
    description: "Customize collapse/expand icon of tree node",
    type: "ReactNode",
    default: "-",
  },
  {
    key: 10,
    property: "showIcon",
    description: "  Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true",
    type: "boolean",
    default: "false",
  },
  {
    key: 11,
    property: "title",
    description: "Customize icon. When you pass component, whose render will receive full TreeNode props as component props",
    type: "ReactNode | (props) => ReactNode",
    default: "-",
  },
  {
    key: 12,
    property: "key",
    description: "Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree",
    type: "string",
    default: "-",
  },
  {
    key: 13,
    property: "emptyDataMessage",
    description: "This is used to display the message when treeData is empty or no search item found",
    type: "string | ReactNode",
    default: "No data found",
  },
  {
    key: 14,
    property: "searchPlaceholder",
    description: "This is used as placeholder in search input",
    type: "string | ReactNode",
    default: "Search",
  },
];

export default class CapPopoverTreeDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: [],
      popoverVisibility: false,
    };
  }


  handleSelect = (selectedKey) => {
    this.setState({ selectedKey });
  };

  handleClick = () => {
    this.setState( (prevState) => ({ popoverVisibility: !prevState?.popoverVisibility }));
  };

  render() {
    const { selectedKey, popoverVisibility } = this.state;
    return (
      <div className="cap-popover-tree-info">
        <div className="cap-popover-tree-showcase">

          <CapPopoverTree
            treeData={treeData}
            onSelect={this.handleSelect}
            selectedKey={selectedKey}
            visible={popoverVisibility}
          >
            <CapButton onClick={this.handleClick}> Click here </CapButton>
          </CapPopoverTree>

        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is a combination and extended version of ant design
          <a href="https://ant.design/components/popover/#header"> Popover </a>
,
          <a href="https://ant.design/components/tree/#header"> Tree </a>
, and
          <a href="https://ant.design/components/input/#header"> Input </a>
        component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}
