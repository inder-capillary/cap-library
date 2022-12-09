import React, { useState } from "react";
import CapCondition from "../../components/CapCondition";
import PropertyTable from "../../helpers/PropertyTable";

const infoData = [
  {
    key: 1,
    property: "fact",
    description: "fact name",
    type: "string",
    default: "-",
  },
  {
    key: 2,
    property: "dataType",
    description: "fact dataType i.e. DOUBLE/LONG/INTEGER/STRING etc.",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "criteria",
    description: "current criteria i.e. include/exclude",
    type: "string",
    default: "-",
  },
  {
    key: 4,
    property: "setCriteria",
    description: "callback to setCriteria",
    type: "func",
    default: "-",
  },
  {
    key: 5,
    property: "conditionExpression",
    description: "{...}",
    type: "object",
    default: "-",
  },
  {
    key: 6,
    property: "setConditionExpression",
    description:
      "callback to setConditionExpression",
    type: "func",
    default: "-",
  },
  {
    key: 7,
    property: "conditionValidationError",
    description:
      "condition validation error text i.e. input empty etc.",
    type: "string",
    default: "-",
  },
  {
    key: 8,
    property: "setConditionValidationError",
    description:
      "callback to setConditionValidationError",
    type: "func",
    default: "-",
  },
  {
    key: 9,
    property: "shouldRemoveOperator",
    description:
      "Boolean value to remove operators",
    type: "boolean",
    default: "false",
  },
  {
    key: 10,
    property: "removeOperatorsList",
    description:
      "List of removable operators. eg: ['LTE', 'EQ']",
    type: "array",
    default: "[]",
  },
  {
    key: 11,
    property: "hidePrimaryDTCondition",
    description:
      "Boolean value to hide primary data type related texts",
    type: "boolean",
    default: "false",
  },
  {
    key: 12,
    property: "customerSegmentsTreeData",
    description: "customer segments value data",
    type: "array",
    default: "[]",
  },
  {
    key: 13,
    property: "conceptTreeData",
    description: "Store profile's concept data",
    type: "array",
    default: "[]",
  },
  {
    key: 14,
    property: "zoneTreeData",
    description: "Store profile's zone data",
    type: "array",
    default: "[]",
  },
];

const couponsTreeData = [
  {
    title: 'CouponId1',
    key: '10001',
  },
  {
    title: 'CouponId2',
    key: '10002',
  },
  {
    title: 'CouponId3',
    key: '10003',
  },
  {
    title: 'CouponId4',
    key: '10004',
  },
];
export const customFieldsData = [
  { key: "abc", id: "71", title: "abc" },
  { key: "bcd", id: "72", title: "bcd" },
  { key: "cde", id: "73", title: "cde" },
  { key: "def", id: "74", title: "def" },
  { key: "efg", id: "75", title: "efg" },
  { key: "fgh", id: "76", title: "fgh" },
];

const customerSegmentsTreeData = [{
  key: 'segment_3771',
  id: 'segment_3771',
  title: 'segmentautomationtest_1663676433195',
  children: [
    {
      key: 'segment_3771-0',
      id: 'segment_3771-0',
      title: 'automationtestpartationtest',
    },
  ],
}];

const CapConditionDoc = () => {
  /**
   * General fact structure.
   */
  // const fact = {
  //   id: "tjqr20",
  //   name: "value",
  //   description: "Value of the transaction",
  //   exprPrefix: "getValue",
  //   params: [],
  //   returnType: {
  //     isList: false,
  //     typeInfo: {
  //       type: "DOUBLE",
  //       typeId: null,
  //     },
  //     list: false,
  //   },
  // };

  const defaultState = {
    operator: null,
    operand: null,
  };
  const [conditionExpression, setConditionExpression] = useState(defaultState);
  const [conditionExpressionDst, setConditionExpressionDst] = useState(defaultState);
  const [conditionExpressionString, setConditionExpressionString] = useState({
    operator: 'CONTAINS',
    operand: 'test',
  });
  const [customFieldConditions, setCustomFieldConditions] = useState([]);
  const [criteria, setCriteria] = useState(null);
  const [conditionValidationError, setConditionValidationError] = useState(null);
  return (
    <div className="cap-card-box-doc-info">
      <div className="cap-card-box-doc-showcase">
        <CapCondition
          fact="Value of the transaction"
          dataType="DOUBLE"
          criteria={criteria}
          setCriteria={setCriteria}
          conditionExpression={conditionExpression}
          setConditionExpression={setConditionExpression}
          conditionValidationError={conditionValidationError}
          setConditionValidationError={setConditionValidationError}
          hasProductSelection
        />
      </div>
      <div className="cap-card-box-doc-showcase">
        <CapCondition
          fact="Customers who have redeemed"
          dataType="DOMAIN_SPECIFIC_TYPE"
          treeData={couponsTreeData}
          criteria={criteria}
          setCriteria={setCriteria}
          conditionExpression={conditionExpressionDst}
          setConditionExpression={setConditionExpressionDst}
          conditionValidationError={conditionValidationError}
          setConditionValidationError={setConditionValidationError}
        />
      </div>
      <div className="cap-card-box-doc-showcase">
        <CapCondition
          fact="Bill type of the transaction"
          dataType="STRING"
          criteria={criteria}
          setCriteria={setCriteria}
          conditionExpression={conditionExpressionString}
          setConditionExpression={setConditionExpressionString}
          conditionValidationError={conditionValidationError}
          setConditionValidationError={setConditionValidationError}
        />
      </div>
      <div className="cap-card-box-doc-showcase">
        <CapCondition
          fact="Customer's segments"
          dataType="STRING"
          criteria={criteria}
          setCriteria={setCriteria}
          conditionExpression={conditionExpressionDst}
          setConditionExpression={setConditionExpressionDst}
          conditionValidationError={conditionValidationError}
          setConditionValidationError={setConditionValidationError}
          hidePrimaryDTCondition
          customerSegmentsTreeData={customerSegmentsTreeData}
        />
      </div>
      <div className="cap-card-box-doc-showcase">
        <CapCondition
          fact="custom field"
          dataType="CUSTOM_FIELD"
          criteria={criteria}
          setCriteria={setCriteria}
          treeData={customFieldsData}
          customFieldConditions={customFieldConditions}
          setCustomFieldConditions={setCustomFieldConditions}
        />
      </div>
      <PropertyTable data={infoData} />
    </div>
  );
};
export default CapConditionDoc;
