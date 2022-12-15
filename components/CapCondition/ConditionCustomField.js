import React, { useState } from "react";
import PropTypes from "prop-types";
import LocaleHoc from "../LocaleHoc";
import { StyledFlexWrapDiv, StyledCapLabel } from "./style";
import "./_capCondition.scss";
import ConditionString from "./ConditionString";
import CapCustomSelect from '../CapCustomSelect';

const ConditionCustomField = props => {
  const {
    multiSelectPlaceholder,
    treeData,
    customFieldConditions = {},
    setCustomFieldConditions,
    showCustomFieldDropDown,
    setShowCustomFieldDropDown
  } = props;
  
  //selects the custom field from the dropdown menu and renders the condition string
  //for that custom field and hides the dropdown
  const handleCustomFieldSelect = values => {
    setCustomFieldConditions({
      ...customFieldConditions,
      key: values,
    });
    setShowCustomFieldDropDown(false);
  };

  //sets the values of operand and operator for the custom fields conditionString component
  const handleConditionExpressionChange = value => {
    setCustomFieldConditions(value);
  };
  
  return (
    <StyledFlexWrapDiv className="cap-condition-string">
      {showCustomFieldDropDown && <StyledFlexWrapDiv className="cap-condition-multi-select cap-label-custom-field">
        <CapCustomSelect
          popoverClassName="cap-condition-popover"
          value={customFieldConditions?.key}
          options={treeData}
          onChange={handleCustomFieldSelect}
          selectPlaceholder={multiSelectPlaceholder}
          searchKey="title"
          width="200px"
          showSearch={true}
        />
      </StyledFlexWrapDiv>}
      {customFieldConditions.key && 
        <StyledFlexWrapDiv className="cap-label-custom-field">
          <StyledCapLabel type="label2">{customFieldConditions?.key}</StyledCapLabel>
            <ConditionString
              conditionExpression={customFieldConditions}
              setConditionExpression={handleConditionExpressionChange}
            />
        </StyledFlexWrapDiv>}
    </StyledFlexWrapDiv>
  );
};
ConditionCustomField.propTypes = {
  customFieldConditions: PropTypes.any,
  setCustomFieldConditions: PropTypes.func,
  selectedCustomFields: PropTypes.any,
  setSelectedCustomFields: PropTypes.func,
  showCustomFieldDropDown: PropTypes.any,
  setShowCustomFieldDropDown: PropTypes.func,
};
export default LocaleHoc(ConditionCustomField, { key: "CapCondition" });
