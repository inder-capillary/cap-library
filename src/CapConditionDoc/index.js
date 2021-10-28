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
    description: "fact dataType i.e. DOUBLE/LONG/INTEGER etc.",
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
];

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
        />
      </div>
      <PropertyTable data={infoData} />
    </div>
  );
};
export default CapConditionDoc;
