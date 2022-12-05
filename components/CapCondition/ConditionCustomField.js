import React, { useState } from "react";
import PropTypes from "prop-types";
import { CONTAINS } from "./constants";
import CapLabel from "../CapLabel";
import CapButton from "../CapButton";
import LocaleHoc from "../LocaleHoc";
import { StyledFlexWrapDiv, StyledCapLabel } from "./style";
import "./_capCondition.scss";
import CapMultiSelect from "../CapMultiSelect";
import ConditionString from "./ConditionString";

const ConditionCustomField = props => {
  const {
    plusMinus,
    multiSelectPlaceholder,
    andMsg,
    treeData,
    customFieldsTag,
    customFieldConditions,
    setCustomFieldConditions,
  } = props;
  const { CapLabelInline } = CapLabel;
  const selectedCustomFields = customFieldConditions?.map((customField)=>customField.key);

  const handleSelect = values => {
    let previousCustomFields = selectedCustomFields;

    //sets the customFieldCondition for the selectedField with default value
    let selectedField = values?.find((field) => !previousCustomFields.includes(field));
    selectedField && setCustomFieldConditions([
      ...customFieldConditions, 
        {
          key: selectedField,
          operator: CONTAINS,
          operand: ''
        }
      ]);

    //removes the customFieldCondition for the deselectedField from customFieldConditions array 
    let deselectedField = previousCustomFields?.find((field) => !values.includes(field));
    deselectedField && setCustomFieldConditions(
      customFieldConditions?.filter(customField =>
        deselectedField !== customField.key 
      )
    );
  };

  //sets the values of operand and operator for the custom fields conditionString component
  const handleConditionExpressionChange = value => {
    setCustomFieldConditions(
      customFieldConditions?.map(customField =>
        value.key === customField.key ? value : customField
      )
    );
  };
  
  return (
    <StyledFlexWrapDiv className="cap-condition-string">
      {selectedCustomFields?.map((customField,index) => (
            <StyledFlexWrapDiv className="cap-label-custom-field">
              {index !== 0 && <CapLabelInline type="label18">{andMsg}</CapLabelInline>}
              <StyledCapLabel type="label2">{customField}</StyledCapLabel>
              <ConditionString
                conditionExpression={customFieldConditions.find(
                  value => value.key === customField
                )}
                setConditionExpression={handleConditionExpressionChange}
              />
            </StyledFlexWrapDiv>
          ))
      }
      <StyledFlexWrapDiv className="cap-condition-multi-select cap-label-custom-field">
        <CapMultiSelect
          popoverClassName="cap-condition-popover"
          treeData={treeData}
          onSelect={handleSelect}
          placeholder={multiSelectPlaceholder}
          searchKey="title"
          width="250px"
          showSelectAllText={false}
          disableSelectAll={true}
          showFooter={false}
          collapseOnSelect={true}
          target={
            <CapButton
              type="flat"
              has-icon
              prefix={plusMinus}
              className="add-condition-button add-btn"
            >
              {customFieldsTag}
            </CapButton>
          }
        />
      </StyledFlexWrapDiv>
    </StyledFlexWrapDiv>
  );
};
ConditionCustomField.propTypes = {
  customFieldConditions: PropTypes.any,
  setCustomFieldConditions: PropTypes.func,
  selectedCustomFields: PropTypes.any,
  setSelectedCustomFields: PropTypes.func,
  /**Below fields are added in components/translations/en.js */
  plusMinus: PropTypes.string,
  customFieldsTag: PropTypes.string,
  andMsg: PropTypes.string,
  conditionStringInputPlaceholderMsg: PropTypes.string,
};
export default LocaleHoc(ConditionCustomField, { key: "CapCondition" });
