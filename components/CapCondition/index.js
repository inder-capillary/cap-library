import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import CapSelect from "../CapSelect";
import CapLabel from "../CapLabel";
import ConditionNumber from "./ConditionNumber";
import LocaleHoc from "../LocaleHoc";

import { StyledFlexWrapDiv, StyledCapLabel } from "./style";
import {INCLUDE, EXCLUDE, DOUBLE, LONG, INTEGER} from './constants';

const { CapLabelInline } = CapLabel;


const CapCondition = (props) => {
  const {
    fact,
    dataType,
    conditionExpression,
    setConditionExpression,
    criteria,
    setCriteria,
    conditionValidationError,
    setConditionValidationError,
    includeMsg,
    excludeMsg,
    whoseMsg,
    isMsg,
  } = props;

  /**
   * Initially if no criteria(include/exclude) is set, set to include by default.
   */
  useEffect(() => {
    if (!criteria) {
      setCriteria(INCLUDE);
    }
  }, []);

  const handleCriteriaChange = (value) => {
    setCriteria(value);
  };

  const list = [
    { label: includeMsg, value: INCLUDE, key: "0" },
    { label: excludeMsg, value: EXCLUDE, key: "1" },
  ];

  const getOperatorsAndOperand = () => {
    if (!dataType) return null;
    switch (dataType) {
      /** if fact type is among DOUBLE,INTEGER and LONG - map it to ConditionNumber */
      case DOUBLE:
      case INTEGER:
      case LONG:
        return (
          <ConditionNumber
            conditionExpression={conditionExpression}
            setConditionExpression={setConditionExpression}
            conditionValidationError={conditionValidationError}
            setConditionValidationError={setConditionValidationError}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledFlexWrapDiv>
      <CapSelect
        options={list}
        value={criteria}
        onChange={handleCriteriaChange}
        style={{ width: "100px"}}
        size="medium"
      />
      <CapLabelInline type="label18">{whoseMsg}</CapLabelInline>
      <StyledCapLabel type="label2">{fact}</StyledCapLabel>
      <CapLabelInline type="label18">{isMsg}</CapLabelInline>
      {getOperatorsAndOperand()}
    </StyledFlexWrapDiv>
  );
};

CapCondition.propTypes = {
  fact: PropTypes.string,
  dataType: PropTypes.string,
  conditionExpression: PropTypes.object,
  setConditionExpression: PropTypes.func,
  criteria: PropTypes.string,
  setCriteria: PropTypes.func,
  conditionValidationError: PropTypes.string,
  setConditionValidationError: PropTypes.func,
  /**Below fields are added in translations/en.js */
  includeMsg: PropTypes.string,
  excludeMsg: PropTypes.string,
  whoseMsg: PropTypes.string,
  isMsg: PropTypes.string,
};

export default LocaleHoc(CapCondition, { key: "CapCondition" });
