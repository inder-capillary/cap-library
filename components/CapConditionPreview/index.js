import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

import CapColumn from "../CapColumn";
import CapRow from "../CapRow";
import CapIcon from "../CapIcon";
import LocaleHoc from "../LocaleHoc";
import CapLabel from "../CapLabel";
import CapTruncateList from "../CapTruncateList";
import {
  MULTI_SELECT,
  LIST,
  NUMBER,
} from './constants';
import {
  StyledFlexWrapDiv,
  StyledCapLabel,
} from "./style";

const { CapLabelInline } = CapLabel;

const CapConditionPreview = ({
  className,
  type,
  operand,
  operator,
  dstData,
  isExcluded,
  conditionName,
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
      <CapLabelInline type="label18">
        {operandsMapping[operator].text}
      </CapLabelInline>
    </>
  );

  const Values = () => {
    switch (type) {
      case MULTI_SELECT: {
        return (
          <CapRow type="flex" align="middle">
            <CapIcon className="offer-icon" size="s" type="attachment" />
            <CapTruncateList list={dstData.couponSeriesNames} showNumber={1} capLabelType="label4" />
          </CapRow>
        );
      }
      case NUMBER:
        return (
          <>
            <ValuesPrefix />
            <CapLabelInline type="label16">
              {operand}
            </CapLabelInline>
          </>
        );
      case LIST:
        return (
          <>
            <ValuesPrefix />
            <CapLabelInline type="label16">
              {operand[0]}
            </CapLabelInline>
            <CapLabelInline type="label18">
              {andMsg}
            </CapLabelInline>
            <CapLabelInline type="label16">
              {operand[1]}
            </CapLabelInline>
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
          <CapLabelInline type="label18">
            {isExcluded ? excludeMsg : includeMsg}
          </CapLabelInline>
          <CapLabelInline type="label18">{whoseMsg}</CapLabelInline>
          <StyledCapLabel type="label2">
            {conditionName}
          </StyledCapLabel>
          <CapLabelInline type="label18">{isMsg}</CapLabelInline>
          <Values />
        </StyledFlexWrapDiv>
      </CapColumn>
    </CapRow>
  );
};

CapConditionPreview.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  conditionName: PropTypes.string,
  operand: PropTypes.any,
  operator: PropTypes.string,
  isExcluded: PropTypes.bool,
  dstData: PropTypes.object,
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
