import React from "react";
import PropTypes from "prop-types";
import { CONTAINS, STARTS_WITH, ENDS_WITH, EXACT } from "./constants";
import CapSelect from "../CapSelect";
import CapInput from "../CapInput";
import LocaleHoc from "../LocaleHoc";
import { StyledFlexWrapDiv } from "./style";
import "./_capCondition.scss";

const ConditionString = (props) => {
  const {
    conditionExpression,
    setConditionExpression,
    containsMsg,
    startsWithMsg,
    endsWithMsg,
    exactMsg,
    conditionStringInputPlaceholderMsg,
  } = props;
  const { operator, operand } = conditionExpression;

  /**
   * list of objects for dropdown.
   */
  const dropDown = [
    { label: containsMsg, value: CONTAINS, key: `${containsMsg}0` },
    { label: startsWithMsg, value: STARTS_WITH, key: `${startsWithMsg}1` },
    { label: endsWithMsg, value: ENDS_WITH, key: `${endsWithMsg}2` },
    { label: exactMsg, value: EXACT, key: `${exactMsg}3` },
  ];

  /**
   * Whenever operator is changed,
   * update the operator and reset the operand.
   * @param {*} value : Operator selected
   */
  const handleOperatorChange = (value) => {
    setConditionExpression({
      ...conditionExpression,
      operator: value,
      operand: "",
    });
  };

  /**
   *
   * @param {String} value : Value of inputbox
   */
  const handleOperandChange = ({ target: { value = "" } }) => {
    setConditionExpression({ ...conditionExpression, operand: value });
  };

  return (
    <StyledFlexWrapDiv className="cap-condition-string">
      <CapSelect
        options={dropDown}
        value={operator}
        style={{ width: "132px" }}
        onChange={handleOperatorChange}
        size="medium"
      />
      <CapInput
        className="cap-condition-string-input"
        value={operand || ""}
        onChange={handleOperandChange}
        placeholder={conditionStringInputPlaceholderMsg}
        style={{ width: "187px" }}
        size="medium"
      />
    </StyledFlexWrapDiv>
  );
};
ConditionString.propTypes = {
  conditionExpression: PropTypes.any,
  setConditionExpression: PropTypes.func,
  /**Below fields are added in components/translations/en.js */
  containsMsg: PropTypes.string,
  startsWithMsg: PropTypes.string,
  endsWithMsg: PropTypes.string,
  exactMsg: PropTypes.string,
  conditionStringInputPlaceholderMsg: PropTypes.string,
};
export default LocaleHoc(ConditionString, { key: "CapCondition" });
