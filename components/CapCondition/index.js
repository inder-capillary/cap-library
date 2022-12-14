import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CapColumn from "../CapColumn";
import CapSelect from "../CapSelect";
import CapRow from "../CapRow";
import CapLabel from "../CapLabel";
import ConditionNumber from "./ConditionNumber";
import ConditionString from "./ConditionString";
import ConditionMultiSelect from "./ConditionMultiSelect";
import ConditionMultiSelectTree from "./ConditionMultiSelectTree";
import CapButton from "../CapButton";
import CapProductSelection from "../CapProductSelection";
import ConditionSKUUploader from "./ConditionSKUUploader";
import LocaleHoc from "../LocaleHoc";

import { StyledFlexWrapDiv, StyledCapLabel } from "./style";
import {
  INCLUDE,
  EXCLUDE,
  DOUBLE,
  LONG,
  INTEGER,
  STRING,
  MULTI_SELECT,
  MULTI_SELECT_TREE,
  OPERATORS,
  SKU,
  CATEGORY,
  PRODUCT_ATTRIBUTE,
  EXTERNAL_SEARCH_ENABLED_ITEMS,
  CUSTOM_FIELD
} from "./constants";
import ConditionCustomField from "./ConditionCustomField";
const { CapLabelInline } = CapLabel;

const CapCondition = (props) => {
  const {
    fact,
    dataType,
    treeData,
    conditionExpressionOptions,
    conditionExpression,
    setConditionExpression,
    criteriaOptions,
    criteria,
    setCriteria,
    conditionValidationError,
    setConditionValidationError,
    onSearch,
    hasProductSelection,
    additionalFields,
    handleSelectAdditionalCondition,
    showProductSelectionCriteria,
    isProductMandatory,
    getEntities,
    multiSelectPlaceholder,
    className,
    categoryTreeData,
    searchedCategoryTreeData,
    brandTreeData,
    productTreeData,
    searchedAttributeTreeData,
    showProductSearchLoader,
    allSearchedCatgeories,
    allSearchedAttributes,
    flattenedCategory,
    prefix,
    suffix,
    includeMsg,
    excludeMsg,
    whoseMsg,
    isMsg,
    andMsg,
    inMsg,
    notInMsg,
    lineItemMsg,
    additionalFieldsMsg,
    validateSkuIds,
    plusMinus,
    shouldRemoveOperator,
    removeOperatorsList,
    getEntityDetails,
    uploadFailedError,
    uploadLimitExceeded,
    uploadReqLoader,
    or,
    search: searchMsg,
    searchWithExact: searchWithExactMsg,
    customerSegmentsTreeData,
    conceptTreeData,
    zoneTreeData,
    hideNumberAndProductFields, // This flag is to hide some fields for Store profile, Custom fields etc in journey context.
    customFieldConditions,
    setCustomFieldConditions
  } = props;

  /**
   * Initially if no criteria(include/exclude) is set, set to include by default.
   */
  useEffect(() => {
    if (!criteria) {
      setCriteria(INCLUDE);
    }
  }, []);

  const treeDataMap = {
    BRAND: brandTreeData,
    CATEGORY: categoryTreeData,
    PRODUCT_ATTRIBUTE: productTreeData,
    CUSTOMER_SEGMENT_FILTER: customerSegmentsTreeData,
    CONCEPT_FILTER: conceptTreeData,
    ZONE_FILTER: zoneTreeData,
  };

  const searchedTreeDataMap = {
    [CATEGORY]: searchedCategoryTreeData,
    [PRODUCT_ATTRIBUTE]: searchedAttributeTreeData,
  };


  const handleCriteriaChange = (value) => {
    setCriteria(value);
  };

  const list = criteriaOptions || [
    { label: includeMsg, value: INCLUDE, key: "0" },
    { label: excludeMsg, value: EXCLUDE, key: "1" },
  ];

  const additionalConditionConditionExpressionOptions = [
    { label: inMsg, value: OPERATORS.IN, key: OPERATORS.IN },
    { label: notInMsg, value: OPERATORS.NOT_IN, key: OPERATORS.NOT_IN },
  ];

  const getOperatorsAndOperand = (additionalConditionFact, additionalConditionDataType, additionalConditionConditionExpression, isAsynchronous, addFieldPlaceholder) => {
    const dataTypeLocal = additionalConditionDataType || dataType;
    const additionalConditionConditionLocal = additionalConditionConditionExpression || conditionExpression;
    const additionalConditionFactLocal = additionalConditionFact || fact;
    const additionalConditionFactTreeData = treeDataMap[additionalConditionFact] || [];
    const treeDataLocal = additionalConditionFactTreeData.length ? additionalConditionFactTreeData : treeData;
    const isExternalSearch = EXTERNAL_SEARCH_ENABLED_ITEMS.includes(additionalConditionFact);
    if (!dataTypeLocal) return null;
    switch (dataTypeLocal) {
      /** if fact type is among DOUBLE,INTEGER and LONG - map it to ConditionNumber */
      case DOUBLE:
      case INTEGER:
      case LONG:
        return (
          <ConditionNumber
            conditionExpressionOptions={conditionExpressionOptions}
            conditionExpression={conditionExpression}
            setConditionExpression={setConditionExpression}
            conditionValidationError={conditionValidationError}
            setConditionValidationError={setConditionValidationError}
            shouldRemoveOperator={shouldRemoveOperator}
            removeOperatorsList={removeOperatorsList}
          />
        );
      case MULTI_SELECT:
        return (
          <ConditionMultiSelect
            conditionExpressionOptions={conditionExpressionOptions}
            treeData={treeData}
            conditionExpression={conditionExpression}
            setConditionExpression={setConditionExpression}
            conditionValidationError={conditionValidationError}
            setConditionValidationError={setConditionValidationError}
            placeholder={multiSelectPlaceholder}
          />
        );
      case MULTI_SELECT_TREE:
        return (
          <ConditionMultiSelectTree
            fact={additionalConditionFactLocal}
            getEntities={getEntities}
            isAsynchronous={isAsynchronous}
            conditionExpressionOptions={additionalConditionConditionExpressionOptions}
            treeData={treeDataLocal}
            searchedTreeData={searchedTreeDataMap[additionalConditionFact] || []}
            conditionExpression={additionalConditionConditionLocal}
            setConditionExpression={setConditionExpression}
            placeholder={addFieldPlaceholder || multiSelectPlaceholder}
            showProductSelectionCriteria={showProductSelectionCriteria}
            getEntityDetails={getEntityDetails}
            uploadFailedError={uploadFailedError}
            uploadLimitExceeded={uploadLimitExceeded}
            uploadReqLoader={uploadReqLoader}
            showProductSearchLoader={showProductSearchLoader[additionalConditionFact]}
            or={or}
            onSearch={(searchText) => onSearch(additionalConditionFact, searchText)}
            isExternalSearch={isExternalSearch}
            searchMsg={searchMsg}
            searchWithExactMsg={searchWithExactMsg}
            allSearchedAttributes={allSearchedAttributes}
            allSearchedCatgeories={allSearchedCatgeories}
            flattenedCategory={flattenedCategory}
          />
        );
      case SKU:
        return (
          <ConditionSKUUploader
            fact={additionalConditionFact}
            validateSkuIds={validateSkuIds}
            conditionExpressionOptions={additionalConditionConditionExpressionOptions}
            conditionExpression={additionalConditionConditionExpression}
            setConditionExpression={setConditionExpression}
            showProductSelectionCriteria={showProductSelectionCriteria}
          />);
      case STRING:
        if(!hideNumberAndProductFields) {
          return (
            <ConditionString
              conditionExpression={conditionExpression}
              setConditionExpression={setConditionExpression}
            />
          );
        }
        return null;
      case CUSTOM_FIELD:
        return (
          <ConditionCustomField
              treeData={treeData}
              customFieldConditions={customFieldConditions}
              setCustomFieldConditions={setCustomFieldConditions}
            /> 
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
    ? Object.values(additionalFields).map(({
      description: additionalConditionDescription,
      factId: additionalConditionFact,
      dataType: additionalConditionDataType,
      expression: additionalConditionConditionExpression,
      isAsynchronous,
      multiSelectPlaceholder: addFieldPlaceholder,
    }, index) => (
      <>
        {
          !hideNumberAndProductFields && (
            <LabelType>{ !index ? lineItemMsg : andMsg }</LabelType>
          )
        }
        {!hideNumberAndProductFields && <StyledCapLabel type="label2">{additionalConditionDescription}</StyledCapLabel>}
        {getOperatorsAndOperand(
          additionalConditionFact,
          additionalConditionDataType,
          additionalConditionConditionExpression,
          isAsynchronous,
          addFieldPlaceholder
        )}
      </>
    )) : null;

  const getSelectedAttributes = () => Object.keys(additionalFields || {}).map((attribute) => attribute);
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
          {getAdditionalConditions()}
          {hasProductSelection && (
            <CapProductSelection
              selectedAttributes={getSelectedAttributes()}
              handleSelect={handleSelectAdditionalCondition}
              placement="bottom"
              isProductMandatory={isProductMandatory}
              target={(
                <CapButton
                  type="flat"
                  has-icon
                  prefix={plusMinus}
                  className="add-condition-button add-btn"
                >
                  {additionalFieldsMsg}
                </CapButton>
              )}
            />
          )}
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
  showProductSelectionCriteria: true,
  shouldRemoveOperator: false,
  removeOperatorsList: [],
  customerSegmentsTreeData: [],
  conceptTreeData: [],
  zoneTreeData: [],
  hideNumberAndProductFields: false,
};

CapCondition.propTypes = {
  fact: PropTypes.string,
  dataType: PropTypes.string,
  conditionExpressionOptions: PropTypes.object,
  conditionExpression: PropTypes.object,
  setConditionExpression: PropTypes.func,
  criteriaOptions: PropTypes.array,
  criteria: PropTypes.string,
  setCriteria: PropTypes.func,
  conditionValidationError: PropTypes.string,
  setConditionValidationError: PropTypes.func,
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  treeData: PropTypes.array,
  multiSelectPlaceholder: PropTypes.string,
  additionalFields: PropTypes.array,
  categoryTreeData: PropTypes.array,
  searchedCategoryTreeData: PropTypes.array,
  searchedAttributeTreeData: PropTypes.array,
  brandTreeData: PropTypes.array,
  productTreeData: PropTypes.array,
  showProductSearchLoader: PropTypes.bool,
  getEntities: PropTypes.func,
  handleSelectAdditionalCondition: PropTypes.func,
  hasProductSelection: PropTypes.bool,
  validateSkuIds: PropTypes.func,
  showProductSelectionCriteria: PropTypes.bool,
  isProductMandatory: PropTypes.bool,
  onSearch: PropTypes.func,
  allSearchedAttributes: PropTypes.array,
  allSearchedCatgeories: PropTypes.array,
  flattenedCategory: PropTypes.array,
  /**Below fields are added in translations/en.js */
  includeMsg: PropTypes.string,
  excludeMsg: PropTypes.string,
  whoseMsg: PropTypes.string,
  isMsg: PropTypes.string,
  andMsg: PropTypes.string,
  lineItemMsg: PropTypes.string,
  additionalFieldsMsg: PropTypes.string,
  plusMinus: PropTypes.string,
  inMsg: PropTypes.string,
  notInMsg: PropTypes.string,
  shouldRemoveOperator: PropTypes.bool,
  removeOperatorsList: PropTypes.array,
  uploadFailedError: PropTypes.string,
  uploadLimitExceeded: PropTypes.string,
  uploadReqLoader: PropTypes.string,
  or: PropTypes.string,
  search: PropTypes.string,
  searchWithExact: PropTypes.string,
  customerSegmentsTreeData: PropTypes.array,
  hideNumberAndProductFields: PropTypes.bool,
  conceptTreeData: PropTypes.array,
  zoneTreeData: PropTypes.array,
};

export default LocaleHoc(CapCondition, { key: "CapCondition" });
