/**
 * CapStaticTemplatesDoc
 */
import React, { Component } from "react";
import PropertyTable from "../../helpers/PropertyTable";
import CapStaticTemplates from "../../components/CapStaticTemplates";
import "./info.scss";

const categoryColors = {
  category1: "#91e5e5",
  category2: "#fbbe91",
  category3: "#8badf0",
};

const icon = "basket";
const categories = [
  {
    key: "boostSales",
    label: "Boost sales",
    value: "Boost sales",
    color: categoryColors.category1,
    panes: [
      {
        key: "browseAbandonNew",
        label: "Browse abandon new",
        value: "Browse abandon new",
        description:
          "Target contacts who have visited your product pages more than once but have not added anything to their cart",
        icon,
        isAvailable: true,
      },
      {
        key: "cartAbandonNew",
        label: "Cart abandon new",
        value: "Cart abandon new",
        description:
          "Target contacts who have added item to cart but haven't completed the purchase",
        icon,
        isAvailable: false,
      },
      {
        key: "increaseOnline",
        label: "Increase online",
        value: "Increase online",
        description:
          "Make customers aware of ecom and social channels from where they can order products",
        icon,
        isAvailable: true,
      },
    ],
  },
  {
    key: "increaseConversion",
    label: "Increase conversion",
    value: "Increase conversion",
    color: categoryColors.category2,
    panes: [
      {
        key: "strategy4",
        label: "Strategy 4",
        value: "Strategy 4",
        description:
          "Target contacts who have visited your product pages more than once but have not added anything to their cart",
        icon,
        isAvailable: false,
      },
      {
        key: "strategy5",
        label: "Strategy 5",
        value: "Strategy 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        icon,
        isAvailable: false,
      },
      {
        key: "increaseOnline2",
        label: "Increase online2",
        value: "Increase online2",
        description:
          "Make customers aware of ecom and social channels from where they can order products",
        icon,
        isAvailable: false,
      },
      {
        key: "strategy6",
        label: "Strategy 6",
        value: "Strategy 6",
        description:
          "Target contacts who have visited your product pages more than once but have not added anything to their cart",
        icon,
        isAvailable: false,
      },
      {
        key: "strategy7",
        label: "Strategy 7",
        value: "Strategy 7",
        description:
          "Target contacts who have added item to cart but haven't completed the purchase",
        icon,
        isAvailable: false,
      },
      {
        key: "strategy8",
        label: "Strategy 8",
        value: "Strategy 8",
        description:
          "Make customers aware of ecom and social channels from where they can order products",
        icon,
        isAvailable: false,
      },
    ],
  },
  {
    key: "customerLifecycle",
    label: "Customer lifecycle",
    value: "Customer lifecycle",
    color: categoryColors.category3,
    panes: [
      {
        key: "strategy9",
        label: "Strategy 9",
        value: "Strategy 9",
        description:
          "Make customers aware of ecom and social channels from where they can order products",
        icon,
        isAvailable: false,
      },
      {
        key: "strategy10",
        label: "Strategy 10",
        value: "Strategy 10",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        icon,
        isAvailable: false,
      },
    ],
  },
];

const modalContent = {
  title: "Journey templates",
  description:
    "Pre-defined strategy driven marketing use-cases journey templates, with AI powered advanced options:",
  iconsAndMessages: [
    {
      message: "Content personalisation",
      iconType: "communication",
    },
    {
      message: "Channel personalisation",
      iconType: "megaphone",
    },
    {
      message: "Product personalisation",
      iconType: "footwear",
    },
    {
      message: "Time personalisation",
      iconType: "filled",
    },
  ],
};

const infoData = [
  {
    key: 1,
    property: "categories",
    description:
      "The data required to show the values on the side bar and templates content",
    type: "array",
    default: "-",
  },
  {
    key: 2,
    property: "onSelectCategory",
    description: "The callback function to handle the selected category",
    type: "callback",
    default: "-",
  },
  {
    key: 3,
    property: "selectedStrategyTemplate",
    description: "The selected template value",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "onSelectStrategyTemplate",
    description: "The callback function to handle the selected template",
    type: "callback",
    default: "-",
  },
  {
    key: 5,
    property: "isBlankTemplateRequired",
    description:
      "Whether to display the Blank template or not. Example, isBlankTemplateRequired={false}",
    type: "boolean",
    default: "false",
  },
  {
    key: 6,
    property: "cardWidth",
    description: "The width of the radio card",
    type: "string",
    default: "278px",
  },
  {
    key: 7,
    property: "cardHeight",
    description: "The height of the radio card",
    type: "string",
    default: "104px",
  },
  {
    key: 8,
    property: "blankCardWidth",
    description: "The width of the blank radio card",
    type: "string",
    default: "278px",
  },
  {
    key: 9,
    property: "blankCardHeight",
    description: "The height of the blank radio card",
    type: "string",
    default: "80px",
  },
  {
    key: 10,
    property: "templatesContainerWidth",
    description: "The width of the journey templates container",
    type: "string",
    default: "990px",
  },
  {
    key: 11,
    property: "templatesContainerMaxHeight",
    description: "The max height of the journey templates container",
    type: "string",
    default: "400px",
  },
  {
    key: 12,
    property: "modalContent",
    description:
      "The data required to show on the modal. Example: title, description, iconsAndMessages",
    type: "array",
    default: "-",
  },
];

export default class CapStaticTemplatesDoc extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      selectedStrategyTemplate: null,
    };
  }

  onSelectStrategyTemplate= (value) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedStrategyTemplate: value,
    }));
  };

  onSelectCategory = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedCategory: value,
    }));
  };

  render() {
    const { selectedCategory, selectedStrategyTemplate } = this.state;
    return (
      <div className="cap-static-info">
        <div className="cap-static-showcase">
          <CapStaticTemplates
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={this.onSelectCategory}
            selectedStrategyTemplate={selectedStrategyTemplate}
            onSelectStrategyTemplate={this.onSelectStrategyTemplate}
            isBlankTemplateRequired
            modalContent={modalContent}
          />
        </div>
        <PropertyTable data={infoData} />
        <div style={{ marginBottom: "24px" }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/radio/#header">
            {" "}
            CapRadioCard
            {" "}
          </a>
          component. Please refer their component for detailed explanation of
          component and supported props.
        </div>
      </div>
    );
  }
}
