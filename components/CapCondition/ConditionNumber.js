import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import CapSelect from "../CapSelect";
import CapInput from "../CapInput";
import CapLabel from "../CapLabel";
import LocaleHoc from "../LocaleHoc";
import { StyledFlexWrapDiv } from "./style";

import { validateNonEmptyNumberHelper } from "./helper";

import './_capCondition.scss';

import { INPUT_EMPTY, SECOND_INPUT_SMALLER } from "./constants";

const ConditionNumber = (props) => {
  const {
    conditionExpressionOptions,
    conditionExpression,
    setConditionExpression,
    setConditionValidationError,
    equalMsg,
    greaterThanMsg,
    lessThanMsg,
    greaterThanOrEqualMsg,
    lessThanorEqualMsg,
    inRangeMsg,
    notEqualMsg,
    andMsg,
  } = props;
  const { operator, operand } = conditionExpression;

  /**
   * operandsMapping, mapping for supported operands for numbers
   */
  const operandsMapping = {
    EQ: { text: equalMsg, isList: false },
    GT: { text: greaterThanMsg, isList: false },
    LT: { text: lessThanMsg, isList: false },
    GTE: { text: greaterThanOrEqualMsg, isList: false },
    LTE: { text: lessThanorEqualMsg, isList: false },
    IN_RANGE: { text: inRangeMsg, isList: true },
    NEQ: { text: notEqualMsg, isList: false },
  };

  /**
   * Use operandsMapping to create list of objects for dropdown.
   */
  const dropDown = Object.keys(conditionExpressionOptions || operandsMapping).reduce((acc, cur) => {
    acc.push({ label: operandsMapping[cur].text, value: cur, key: cur });
    return acc;
  }, []);

  /**
   * Initially, if no operator, set it to 'EQ'
   */
  useEffect(() => {
    if (!operator) {
      const { value = '' } = dropDown?.[0];
      if (value) handleOperatorChange(value);
    }
  }, []);

  /**
   * Whenever operator is changed,
   * update the operator and reset the operand.
   * Set conditionValidationError to INPUT_EMPTY
   * @param {*} value : Operator selected
   */
  const handleOperatorChange = (value) => {
    const newOperand = operandsMapping[value].isList === false ? null : Array(2).fill(null);

    setConditionExpression({
      ...conditionExpression,
      operator: value,
      operand: newOperand,
    });

    setConditionValidationError(INPUT_EMPTY);
  };

  /**
   *
   * @param {Number} pos : i.e. I / II inputbox
   * @param {String} value : Value of inputbox
   */
  const handleOperandChange = (pos, value) => {
    // Evaluate 'value' with RegEx that it is a NON EMPTY valid Number.
    const isValidNum = validateNonEmptyNumberHelper(value);

    const num = Number(value);
    const {isList} = operandsMapping[operator];
    if (!isList) {
      const newOperand = isValidNum ? num : null;
      setConditionExpression({...conditionExpression, operand: newOperand});
      if (newOperand === null) {
        setConditionValidationError(INPUT_EMPTY);
      } else {
        setConditionValidationError(null);
      }
    } else {
      const newOperand = [...operand];
      newOperand[pos] = isValidNum ? num : null;
      setConditionExpression({...conditionExpression, operand: newOperand});

      if (newOperand[0] === null || newOperand[1] === null) {
        setConditionValidationError(INPUT_EMPTY);
      } else if (newOperand[0] > newOperand[1]) {
        setConditionValidationError(SECOND_INPUT_SMALLER);
      } else {
        setConditionValidationError(null);
      }
    }
  };
  /**
   * Return number of Input boxes equal to number of operand a operator supports
   */
  const getInputElements = () => {
    if (!operator) return null;

    const {isList} = operandsMapping[operator];
    switch (isList) {
      case false:
        return (
          <CapInput
            type="number"
            className="cap-condition-num-input-1"
            value={operand}
            onChange={(e) => handleOperandChange(0, e.target.value)}
            style={{width: '95px' }}
            size="medium"
          />
        );
      case true:
        return (
          <>
            <CapInput
              type="number"
              className="cap-condition-num-input-1"
              value={operand[0]}
              onChange={(e) => handleOperandChange(0, e.target.value)}
              style={{width: '95px' }}
              size="medium"
            />
            <CapLabel type="label18">{andMsg}</CapLabel>
            <CapInput
              type="number"
              className="cap-condition-num-input-2"
              value={operand[1]}
              onChange={(e) => handleOperandChange(1, e.target.value)}
              style={{width: '95px'}}
              size="medium"
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <StyledFlexWrapDiv className="cap-condition-number">
      <CapSelect
        options={dropDown}
        value={operator}
        style={{ width: "100px"}}
        onChange={handleOperatorChange}
        size="medium"
      />
      {getInputElements()}
    </StyledFlexWrapDiv>
  );
};
ConditionNumber.propTypes = {
  conditionExpressionOptions: PropTypes.object,
  conditionExpression: PropTypes.any,
  setConditionExpression: PropTypes.func,
  setConditionValidationError: PropTypes.func,
  /**Below fields are added in components/translations/en.js */
  equalMsg: PropTypes.string,
  greaterThanMsg: PropTypes.string,
  lessThanMsg: PropTypes.string,
  greaterThanOrEqualMsg: PropTypes.string,
  lessThanorEqualMsg: PropTypes.string,
  inRangeMsg: PropTypes.string,
  notEqualMsg: PropTypes.string,
  andMsg: PropTypes.string,
};
export default LocaleHoc(ConditionNumber, { key: "CapCondition" });
