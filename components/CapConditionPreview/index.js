import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import CapColumn from "../CapColumn";
import CapRow from "../CapRow";
import CapIcon from "../CapIcon";
import LocaleHoc from "../LocaleHoc";
import CapLabel from "../CapLabel";
import CapTruncateList from "../CapTruncateList";
import { MULTI_SELECT, LIST, NUMBER, SKU, PRODUCT_ATTRIBUTE } from "./constants";
import { StyledFlexWrapDiv, StyledCapLabel, SkuDownloadLink } from "./style";

const { CapLabelInline } = CapLabel;

const CapConditionPreview = ({
  className,
  type,
  operand,
  operator,
  dstData,
  listData = null,
  additionalFields,
  brand,
  category,
  attribute,
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
  lineItemMsg,
  addedSKUsMsg,
  skuFileName,
  uploadedMsg,
  inMsg,
  notInMsg,
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
    IN: { text: inMsg, isList: false },
    NOT_IN: { text: notInMsg, isList: false },
  };
  const ValuesPrefix = () => (
    <>
      {operator ? (
        <CapLabelInline type="label18">
          {operandsMapping[operator].text}
        </CapLabelInline>
      ) : null}
    </>
  );

  const treeData = {
    BRAND: brand,
    CATEGORY: category,
    PRODUCT_ATTRIBUTE: attribute,
  };

  //common function to handle csv downloads
  const downloadHandler = (event, data, downloadedFileName) => {
    event.target.setAttribute(
      'href',
      `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`,
    );
    event.target.setAttribute('download', downloadedFileName);
  };

  const downloadSKUs = (event, list = []) => {
    const csvArray = [
      [
        addedSKUsMsg,
      ],
    ];
    list.forEach((sku) => csvArray.push([sku]));
    const csvContent = csvArray.map((e) => e.join(',')).join('\n');
    downloadHandler(event, csvContent, skuFileName);
  };

  const OperandValues = ({ linkedFact, linkedDataType, linkedConditionExpression }) => {
    let dataTypeLocal = type;
    let operandLocal = operand;
    let listDataLocal = listData;
    if (linkedFact) {
      dataTypeLocal = linkedDataType;
      operandLocal = linkedConditionExpression?.operand;
      if (linkedFact !== SKU) {
        const linkedFactTreeData = treeData[linkedFact] || [];
        const selectedIds = {};
        // eslint-disable-next-line no-unused-expressions
        Array.isArray(operandLocal) && operandLocal?.forEach((id) => { selectedIds[id] = true; });
        const selectedListLocal = linkedFactTreeData?.reduce((acc, data) => {
          if (selectedIds[data.id]) {
            acc.push(
              linkedFact === PRODUCT_ATTRIBUTE
                ? `${data.parentName}: ${data.title}`
                : data.name || data.title
            );
          }
          return acc;
        }, []);
        listDataLocal = selectedListLocal;
      } else {
        listDataLocal = linkedConditionExpression?.operand || [];
      }
    }

    switch (dataTypeLocal) {
      case MULTI_SELECT: {
        return (
          <>
            {!linkedFact && <ValuesPrefix />}
            <CapRow type="flex" align="middle">
              {!listDataLocal && (
                <CapIcon className="offer-icon" size="s" type="attachment" />
              )}
              {
                linkedFact === SKU ? (
                  <>
                    <CapTruncateList
                      list={listDataLocal}
                      showNumber={1}
                      capLabelType="label4"
                      showTooltip={false}
                    />
                    <SkuDownloadLink
                      onClick={(e) => downloadSKUs(e, listDataLocal)}
                    >
                      <>
                        <CapIcon type="download" size="s" />
                        {uploadedMsg}
                      </>
                    </SkuDownloadLink>
                  </>
                ) : (
                  <CapTruncateList
                    list={listDataLocal || dstData.couponSeriesNames}
                    showNumber={1}
                    capLabelType="label4"
                  />
                )
              }
            </CapRow>
          </>
        );
      }
      case NUMBER:
        return (
          <>
            <ValuesPrefix />
            <CapLabelInline type="label16">{operand}</CapLabelInline>
          </>
        );
      case LIST:
        return (
          <>
            <ValuesPrefix />
            <CapLabelInline type="label16">{operand[0]}</CapLabelInline>
            <CapLabelInline type="label18">{andMsg}</CapLabelInline>
            <CapLabelInline type="label16">{operand[1]}</CapLabelInline>
          </>
        );
      default:
        return null;
    }
  };

  const LabelType = ({ children }) => (
    <CapLabelInline type="label18">
      {children}
    </CapLabelInline>
  );

  const getAdditionalConditions = () => Object.values(additionalFields || {})?.length > 0
    ? Object.values(additionalFields).map(
      ({
        description: linkedDescription,
        factId: linkedFact,
        expression: linkedConditionExpression,
      }, index) => (
              <>
                {
                  !index ? (
                    <LabelType>{lineItemMsg}</LabelType>
                  ) : (
                    <LabelType>{andMsg}</LabelType>
                  )
                }
                <StyledCapLabel type="label2">
                  {linkedDescription}
                </StyledCapLabel>
                <CapLabelInline type="label18">
                  {operandsMapping[linkedConditionExpression.operator]?.text}
                </CapLabelInline>
                <OperandValues
                  linkedFact={linkedFact}
                  linkedDataType={MULTI_SELECT}
                  linkedConditionExpression={linkedConditionExpression}
                />
              </>
      )
    )
    : null;

  return (
    <CapRow
      display="flex"
      className={classnames(className, "cap-condition-wrapper")}
    >
      <CapColumn xs={25}>
        <StyledFlexWrapDiv>
          <CapLabelInline type="label18">
            {isExcluded ? excludeMsg : includeMsg}
          </CapLabelInline>
          <CapLabelInline type="label18">{whoseMsg}</CapLabelInline>
          <StyledCapLabel type="label2">{conditionName}</StyledCapLabel>
          <CapLabelInline type="label18">{isMsg}</CapLabelInline>
          <OperandValues />
          {getAdditionalConditions()}
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
  listData: PropTypes.array,
  additionalFields: PropTypes.object,
  brand: PropTypes.array,
  category: PropTypes.array,
  attribute: PropTypes.array,
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
  lineItemMsg: PropTypes.string,
  addedSKUsMsg: PropTypes.string,
  skuFileName: PropTypes.string,
  uploadedMsg: PropTypes.string,
  inMsg: PropTypes.string,
  notInMsg: PropTypes.string,
};

export default LocaleHoc(CapConditionPreview, { key: "CapConditionPreview" });
