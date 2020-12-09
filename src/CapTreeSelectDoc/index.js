/**
* CapSelectDoc
*/
import React from "react";
import { CapTreeSelect } from "../../components";
import PropertyTable from '../../helpers/PropertyTable';
const infoData = [
  {
    key: 1,
    property: "bordered",
    description: "Whether has border style",
    type: "boolean",
    default: "true",
  },
  {
    key: 2,
    property: "dropdownClassName",
    description: "The className of dropdown menu",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "dropdownStyle",
    description: "To set the style of the dropdown menu",
    type: "Css Properties",
    default: "-",
  },
  {
    key: 4,
    property: "multiple",
    description: "Support multiple or not, will be true when enable treeCheckable",
    type: "boolean",
    default: "false",
  },
  {
    key: 5,
    property: "placeholder",
    description: "Placeholder of the select input",
    type: "String",
    default: "-",
  },
  {
    key: 6,
    property: "showSearch",
    description: "Support search or not",
    type: "boolean",
    default: "single: false | multiple: true",
  },
  {
    key: 7,
    property: "size",
    description: "To set the size of the select input",
    type: "large | middle | small",
    default: "-",
  },
  {
    key: 8,
    property: "treeCheckable",
    description: "Whether to show checkbox on the treeNodes",
    type: "boolean",
    default: "false",
  },
  {
    key: 9,
    property: "treeData",
    description: "Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)",
    type: "array<{ value, title, children, [disabled, disableCheckbox, selectable, checkable] }>",
    default: "[]",
  },
  {
    key: 10,
    property: "treeDefaultExpandAll",
    description: "Whether to expand all treeNodes by default",
    type: "boolean",
    default: "false",
  },
];

function CapTreeSelectDoc() {
  const treeData = [
    {
      title: "Optout",
      value: "{{optout}}",
    },
    {
      title: "lt",
      value: "{{lt}}",
    },
    {
      title: "gt",
      value: "{{gt}}",
    },
    {
      title: "ADV",
      value: "{{adv}}",
    },
    {
      title: "user_id_b64",
      value: "{{user_id_b64}}",
    },
    {
      title: "Customer",
      value: "{{customer}}",
      children: [
        {
          title: "First Name",
          value: "{{first_name}}",
        },
        {
          title: "Last Name",
          value: "{{last_name}}",
        },
        {
          title: "Full Name",
          value: "{{fullname}}",
        },
        {
          title: "Loyalty Points",
          value: "{{loyalty_points}}",
        },
        {
          title: "Loyalty Points Floor",
          value: "{{loyalty_points_floor}}",
        },
        {
          title: "Loyalty Points Value",
          value: "{{loyalty_points_value}}",
        },
        {
          title: "Loyalty Points Value Floor",
          value: "{{loyalty_points_value_floor}}",
        },
        {
          title: "Slab Name",
          value: "{{slab_name}}",
        },
        {
          title: "External Id",
          value: "{{external_id}}",
        },
        {
          title: "Lifetime purchases",
          value: "{{lifetime_purchases}}",
        },
        {
          title: "Lifetime points",
          value: "{{lifetime_points}}",
        },
        {
          title: "Customer Email",
          value: "{{customer_email}}",
        },
        {
          title: "Customer Mobile",
          value: "{{customer_mobile}}",
        },
      ],
    },
    {
      title: "Store",
      value: "{{Store}}",
      children: [
        {
          title: "Registered Store",
          value: "{{registered_store_tags}}",
          children: [
            {
              title: "Store Name",
              value: "{{registered_store_name}}",
            },
            {
              title: "Mobile Number",
              value: "{{registered_store_number}}",
            },
            {
              title: "Land Line",
              value: "{{registered_store_land_line}}",
            },
            {
              title: "Email",
              value: "{{registered_store_email}}",
            },
            {
              title: "External ID",
              value: "{{registered_store_external_id}}",
            },
            {
              title: "External ID 1",
              value: "{{registered_store_external_id_1}}",
            },
            {
              title: "External ID 2",
              value: "{{registered_store_external_id_2}}",
            },
          ],
        },
        {
          title: "Last transacted Store",
          value: "{{last_transacted_store_tags}}",
          children: [
            {
              title: "Store Name",
              value: "{{last_transacted_store_name}}",
            },
            {
              title: "Mobile Number",
              value: "{{last_transacted_store_number}}",
            },
            {
              title: "Land Line",
              value: "{{last_transacted_store_land_line}}",
            },
            {
              title: "Email",
              value: "{{last_transacted_store_email}}",
            },
            {
              title: "External ID",
              value: "{{last_transacted_store_external_id}}",
            },
            {
              title: "External ID 1",
              value: "{{last_transacted_store_external_id_1}}",
            },
            {
              title: "External ID 2",
              value: "{{last_transacted_store_external_id_2}}",
            },
          ],
        },
        {
          title: "Store Templates",
          value: "{{store_templates}}",
          children: [
            {
              title: "Name",
              value: "{{sms_store_name}}",
            },
            {
              title: "EMAIL",
              value: "{{sms_email}}",
            },
            {
              title: "Mobile",
              value: "{{sms_mobile}}",
            },
            {
              title: "Landline",
              value: "{{sms_land_line}}",
            },
            {
              title: "Address",
              value: "{{sms_address}}",
            },
            {
              title: "Extra",
              value: "{{sms_extra}}",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="cap-alert-info">
      <div className="cap-alert-showcase">
        <div style={{ marginBottom: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/tree-select"> TreeSelect </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
        <CapTreeSelect
          treeData={treeData}
          style={{ width: '35%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          size="large"
        />
      </div>
      <PropertyTable data={infoData} title="CapTreeSelect Component Properties" />
    </div>
  );
}

export default CapTreeSelectDoc;
