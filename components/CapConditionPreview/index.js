import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

import CapColumn from "../CapColumn";
import CapRow from "../CapRow";
import LocaleHoc from "../LocaleHoc";

import {
  StyledFlexWrapDiv,
  StyledCapInlineLabel,
  StyledCapLabel,
} from "./style";

const CapConditionPreview = ({
  className,
  condition,
  grammar,
  type,
  excludeMsg,
  includeMsg,
  whoseMsg,
  isMsg,
  andMsg,
  equalMsg,
  greaterThanMsg,
  lessThanMsg,
  greaterThanOrEqualMsg,
  lessThanorEqualMsg,
  inRangeMsg,
  notEqualMsg,
}) => {
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
  const ValuesPrefix = () => (
    <>
      <StyledCapInlineLabel type="label18">
        {operandsMapping[condition.operator].text}
      </StyledCapInlineLabel>
    </>
  );

  const Values = () => {
    switch (true) {
      case condition.fact.profileId === "COUPON_REDEMPTION_PROFILE": {
        // const couponSeriesIds = condition.fact.params[0].dst.dstInfo.couponSeriesIds;
        return null; //Coupons grammer
      }
      case type.indexOf("List") === -1:
        return (
          <>
            <ValuesPrefix condition={condition} />
            <StyledCapInlineLabel type="label18">
              {condition.operand[type]}
            </StyledCapInlineLabel>
          </>
        );
      case type.indexOf("List") !== -1:
        return (
          <>
            <ValuesPrefix condition={condition} />
            <StyledCapInlineLabel type="label18">
              {condition.operand[type][0]}
            </StyledCapInlineLabel>
            <StyledCapInlineLabel type="label18">
              {andMsg}
            </StyledCapInlineLabel>
            <StyledCapInlineLabel type="label18">
              {condition.operand[type][1]}
            </StyledCapInlineLabel>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <CapRow
      display="flex"
      className={classnames(
        className,
        'cap-condition-wrapper',
      )}
    >
      <CapColumn xs={25}>
        <StyledFlexWrapDiv>
          <StyledCapInlineLabel type="label18">
            {condition.isExcluded ? excludeMsg : includeMsg}
          </StyledCapInlineLabel>
          <StyledCapInlineLabel type="label18">{whoseMsg}</StyledCapInlineLabel>
          <StyledCapLabel type="label2">
            {grammar[condition?.fact?.factId]}
          </StyledCapLabel>
          <StyledCapInlineLabel type="label18">{isMsg}</StyledCapInlineLabel>
          <Values condition={condition} type={type} />
        </StyledFlexWrapDiv>
      </CapColumn>
    </CapRow>
  );
};

CapConditionPreview.propTypes = {
  condition: PropTypes.object,
  grammar: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  /**Below fields are added in translations/en.js */
  includeMsg: PropTypes.string,
  excludeMsg: PropTypes.string,
  whoseMsg: PropTypes.string,
  isMsg: PropTypes.string,
  andMsg: PropTypes.string,
  equalMsg: PropTypes.string,
  greaterThanMsg: PropTypes.string,
  lessThanMsg: PropTypes.string,
  greaterThanOrEqualMsg: PropTypes.string,
  lessThanorEqualMsg: PropTypes.string,
  inRangeMsg: PropTypes.string,
  notEqualMsg: PropTypes.string,
};

export default LocaleHoc(CapConditionPreview, { key: "CapConditionPreview" });
