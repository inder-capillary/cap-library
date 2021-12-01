import React from "react";
import PropTypes from "prop-types";
import CapMultiSelect from "../CapMultiSelect";
import { StyledFlexWrapDiv } from "./style";

export const ConditionMultiSelect = (props) => {
  const { treeData, conditionExpression, setConditionExpression } = props;

  const handleOnSelect = (values) => {
    setConditionExpression({
      operand: values,
    });
  };

  return (
    <StyledFlexWrapDiv className="cap-condition-multi-select">
      <CapMultiSelect
        popoverClassName="cap-condition-popover"
        treeData={treeData}
        onSelect={handleOnSelect}
        placeholder="placeholder"
        appliedKeys={conditionExpression.operand}
        searchKey="title"
        width="250px"
      />
    </StyledFlexWrapDiv>
  );
};

ConditionMultiSelect.propTypes = {
  treeData: PropTypes.array,
  conditionExpression: PropTypes.any,
  setConditionExpression: PropTypes.func,
};

export default ConditionMultiSelect;
