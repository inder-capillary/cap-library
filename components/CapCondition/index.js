import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CapColumn from "../CapColumn";
import CapSelect from "../CapSelect";
import CapRow from "../CapRow";
import CapLabel from "../CapLabel";
import ConditionNumber from "./ConditionNumber";
import ConditionMultiSelect from "./ConditionMultiSelect";
import LocaleHoc from "../LocaleHoc";

import { StyledFlexWrapDiv, StyledCapLabel } from "./style";
import {
  INCLUDE,
  EXCLUDE,
  DOUBLE,
  LONG,
  INTEGER,
  MULTI_SELECT,
} from "./constants";

const { CapLabelInline } = CapLabel;

const CapCondition = (props) => {
  const {
    fact,
    dataType,
    treeData,
    conditionExpression,
    setConditionExpression,
    criteria,
    setCriteria,
    conditionValidationError,
    setConditionValidationError,
    multiSelectPlaceholder,
    className,
    prefix,
    suffix,
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
      case MULTI_SELECT:
        return (
          <ConditionMultiSelect
            treeData={treeData}
            conditionExpression={conditionExpression}
            setConditionExpression={setConditionExpression}
            conditionValidationError={conditionValidationError}
            setConditionValidationError={setConditionValidationError}
            placeholder={multiSelectPlaceholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <CapRow
      display="flex"
      className={classnames(className, "cap-condition-wrapper")}
    >
      <CapColumn xs={1} className="condition-prefix">
        {prefix}
      </CapColumn>
      <CapColumn xs={22}>
        <StyledFlexWrapDiv>
          <CapSelect
            options={list}
            value={criteria}
            onChange={handleCriteriaChange}
            style={{ width: "100px" }}
            size="medium"
          />
          <CapLabelInline type="label18">{whoseMsg}</CapLabelInline>
          <StyledCapLabel type="label2">{fact}</StyledCapLabel>
          <CapLabelInline type="label18">{isMsg}</CapLabelInline>
          {getOperatorsAndOperand()}
        </StyledFlexWrapDiv>
      </CapColumn>
      <CapColumn xs={1} className="condition-suffix">
        {suffix}
      </CapColumn>
    </CapRow>
  );
};

CapCondition.defaultProps = {
  conditionValidationError: 'false',
  setConditionValidationError: () => {},
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
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  treeData: PropTypes.array,
  multiSelectPlaceholder: PropTypes.string,
  /**Below fields are added in translations/en.js */
  includeMsg: PropTypes.string,
  excludeMsg: PropTypes.string,
  whoseMsg: PropTypes.string,
  isMsg: PropTypes.string,
};

export default LocaleHoc(CapCondition, { key: "CapCondition" });
