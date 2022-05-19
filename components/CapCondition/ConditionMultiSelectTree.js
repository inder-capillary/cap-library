import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CapSelect from '../CapSelect';
import CapMultiSelectWithTree from "../CapMultiSelectWithTree";
import {
  OPERATORS,
  STORE,
  CONCEPT,
  ZONE,
} from './constants';


export const ConditionMultiSelectTree = ({
  fact,
  treeData = [],
  getEntities,
  conditionExpressionOptions,
  conditionExpression,
  setConditionExpression,
  placeholder,
  isAsynchronous,
  showProductSelectionCriteria,
}) => {
  const prop = {};
  useEffect(() => {
    if (!conditionExpression.operator) {
      handleOperatorChange(OPERATORS.IN);
    }
  }, []);
  if (isAsynchronous && getEntities) {
    prop.loadData = ({ props = {} }) => new Promise((resolve, reject) => {
      const callback = (result) => {
        if (result) resolve();
        reject();
      };
      getEntities(props.eventKey, callback);
    });
  }

  const handleOnSelect = (values) => {
    if ([STORE, CONCEPT, ZONE].includes(fact)) {
      setConditionExpression({
        ...conditionExpression,
        operand: values,
      });
      return;
    }
    setConditionExpression({
      ...conditionExpression,
      operand: values,
    }, fact);
  };

  const handleOperatorChange = (value) => {
    if ([STORE, CONCEPT, ZONE].includes(fact)) {
      setConditionExpression({
        ...conditionExpression,
        operator: value,
      });
      return;
    }
    setConditionExpression({
      ...conditionExpression,
      operator: value,
    }, fact);
  };

  return (
    <>
      {
        showProductSelectionCriteria && (
          <CapSelect
            options={conditionExpressionOptions}
            value={conditionExpression.operator}
            style={{ width: "55px" }}
            onChange={handleOperatorChange}
            size="medium"
          />
        )
      }
      <CapMultiSelectWithTree
        {...prop}
        selectorClassName="cap-condition-popover-display"
        popoverClassName="cap-condition-popover-tree-multiselect"
        placeholder={placeholder}
        searchPlaceholder="Search"
        closeText="Close"
        selectText="Select"
        treeData={treeData}
        appliedKeys={conditionExpression.operand || []}
        onSelect={(value) => {
          handleOnSelect(value);
        }}
      />
    </>
  );
};

ConditionMultiSelectTree.propTypes = {
  treeData: PropTypes.array,
  conditionExpressionOptions: PropTypes.object,
  conditionExpression: PropTypes.any,
  setConditionExpression: PropTypes.func,
  placeholder: PropTypes.string,
  showProductSelectionCriteria: PropTypes.bool,
};

export default ConditionMultiSelectTree;
