import React, { useEffect } from "react";
import PropTypes from "prop-types";
import isEmpty from 'lodash/isEmpty';
import unionBy from 'lodash/unionBy';
import LocaleHoc from "../LocaleHoc";
import CapSelect from "../CapSelect";
import CapMultiSelectWithTree from "../CapMultiSelectWithTree";
import {
  OPERATORS,
  STORE,
  CONCEPT,
  ZONE,
  PRODUCT_ATTRIBUTE,
  BRAND,
  CATEGORY,
  CUSTOMER_SEGMENT_FILTER,
  ZONE_FILTER,
  CONCEPT_FILTER,
  STORE_FILTER,
} from "./constants";
import ConditionStoreUploader from "./ConditionStoreUploader";

export const ConditionMultiSelectTree = ({
  fact,
  treeData = [],
  getEntities,
  conditionExpressionOptions,
  conditionExpression,
  setConditionExpression,
  onSearch,
  placeholder,
  isAsynchronous,
  showProductSelectionCriteria,
  allSearchedCatgeories,
  allSearchedAttributes,
  flattenedCategory,
  getEntityDetails,
  uploadFailedError,
  uploadLimitExceeded,
  uploadReqLoader,
  or,
  searchedTreeData,
  showProductSearchLoader,
  isExternalSearch,
  searchMsg,
  searchWithExactMsg,
  helpTextMsg,
  storeSearchMsg,
  allSearchedStoreValues,
}) => {
  const prop = {};
  useEffect(() => {
    if (!conditionExpression.operator) {
      handleOperatorChange(OPERATORS.IN);
    }
  }, []);
  if (isAsynchronous && getEntities) {
    prop.loadData = ({ props = {} }) => new Promise((resolve, reject) => {
      const callback = (result) => {
        if (result) resolve();
        reject();
      };
      getEntities(props.eventKey, callback);
    });
  }

  const handleOnSelect = (values = []) => {
    if ([STORE, CONCEPT, ZONE].includes(fact)) {
      setConditionExpression({
        ...conditionExpression,
        operand: values,
      });
      return;
    }

    /*
    Motivation:

    values => array of selected ids returned by the multiselect component
    valuesWithLabel =>
      array of objects generated from values.
      each object has title and other values used for showing previews
    */
    const valuesWithLabel = [];
    // first, get the items present in recent seached response
    if (searchedTreeData?.length) {
      const { children = [], id = '', title = '', key = '' } = searchedTreeData[0] || {};
      if (fact === PRODUCT_ATTRIBUTE) {
        values = values?.filter((value) => {
          const foundIndex = children?.findIndex(
            (attributeValue) => value === attributeValue?.id
          );

          if (foundIndex > -1) {
            valuesWithLabel.push({
              parentId: id,
              parentTitle: title,
              id: value,
              title: `${title}: ${children[foundIndex]?.title}`,
            });

            // remove id from values, which was present in seached response
            // this way, we dont need to searc hfor it again in treeData

            return false;
          }
          return true;
        });
      } else if (fact !== STORE_FILTER) {
        //for category and brands
        const foundIndex = values?.findIndex((value) => value === id);
        if (foundIndex > -1) {
          valuesWithLabel.push({
            id: key,
            title,
          });
          // remove id from selected values, which was present in seached response
          // this way, we dont need to search for it again in treeData
          values?.splice(foundIndex, 1);
        }
      }
    }

    if (fact === CUSTOMER_SEGMENT_FILTER) {
      // In this loop we're pushing the selected values to valuesWithChildIds as if we select the parent then we get the parent id only not the child ids.
      const valuesWithChildIds = [];
      let foundItem = {};
      values?.forEach((value) => {
        const attributeId = value?.split("-")[0];
        const treeDataObject = treeData?.find(
          (treeObj) => treeObj?.id === attributeId
        );
        // If "-" isn't present in the selected value, eg: (parent: segment_280, child: segment_280-0) then it's a parent. We need to push the childs of it.
        if (value?.indexOf('-') < 0) {
          treeDataObject?.children?.forEach((child) => valuesWithChildIds.push(child.id));
        } else {
          valuesWithChildIds.push(value);
        }
      });

      // Looping through all the updated values to get the desired output
      valuesWithChildIds?.forEach((value) => {
        const attributeId = value?.split("-")[0];
        const treeDataObject = treeData.find(
          (treeObj) => treeObj?.id === attributeId
        );
        const {
          children = [],
          id = '',
          title = '',
        } = treeDataObject || {};
        const foundIndex = children?.findIndex(
          (attributeValue) => value === attributeValue?.id
        );
        if (foundIndex > -1) {
          foundItem = {
            parentId: id,
            parentTitle: title,
            id: value,
            title: `${title}: ${children[foundIndex]?.title}`,
          };
        }
        if (!isEmpty(foundItem)) {
          valuesWithLabel.push(foundItem);
        }
      });
    } else {
      // for the remaining selected ids, search in treeData
      values?.forEach((value) => {
        let foundItem = {
          id: value,
          title: value,
        };

        // check if id is present is previously searched items,
        const oldObj = conditionExpression?.operand?.find(
          (oldValue) => oldValue?.id === value
        );
        if (oldObj) {
          foundItem = oldObj;
        }
        // if not present in previously selected items or in recent search response,
        // search in treeData
        else if (fact === PRODUCT_ATTRIBUTE) {
          const attributeId = value?.split("-")[0];
          let treeDataObj = allSearchedAttributes?.find(
            (treeObj) => treeObj?.id === attributeId
          );
          if (isEmpty(treeDataObj)) {
            treeDataObj = treeData.find(
              (treeObj) => treeObj?.id === attributeId
            );
          }
          const {
            children = [],
            id = '',
            title = '',
          } = treeDataObj || {};
          const foundIndex = children?.findIndex(
            (attributeValue) => value === attributeValue?.id
          );
          if (foundIndex > -1) {
            foundItem = {
              parentId: id,
              parentTitle: title,
              id: value,
              title: `${title}: ${children[foundIndex]?.title}`,
            };
          }
        } else {
          //for category and brands
          let treeDataObj = allSearchedCatgeories?.find(
            (treeDataObj) => treeDataObj?.id === value
          );

          const treedataMap = {
            [BRAND]: treeData,
            [CATEGORY]: flattenedCategory,
            [CONCEPT_FILTER]: treeData,
            [ZONE_FILTER]: treeData,
            [STORE_FILTER]: isExternalSearch ? unionBy(allSearchedStoreValues, searchedTreeData, 'id') : treeData,
          };

          if (isEmpty(treeDataObj)) {
            //This is done as the value of 'fact' differs in adiona and giftCards.
            const factMap = {
              'Zone': ZONE_FILTER,
              'Concept': CONCEPT_FILTER,
              'Store': STORE_FILTER,
            };
            fact = factMap[fact] || fact;
            treeDataObj = treedataMap[fact]?.find(
              (treeDataObj) => treeDataObj?.id === value
            );
            // If we do not have a flattenedCategory if we do not find nested selection.
            if(fact===CATEGORY && !flattenedCategory &&  !treeDataObj ){
              treeDataObj = {id: value, title: value}
            }
          }
          const { id, key, title, name } = treeDataObj || {};
          foundItem = {
            id: key || id,
            title: title || name || key,
          };
        }
        valuesWithLabel.push(foundItem);
      });
    }

    setConditionExpression(
      {
        ...conditionExpression,
        operand: valuesWithLabel,
      },
      fact
    );
  };

  const handleOperatorChange = (value) => {
    if ([STORE, CONCEPT, ZONE].includes(fact)) {
      setConditionExpression({
        ...conditionExpression,
        operator: value,
      });
      return;
    }
    setConditionExpression(
      {
        ...conditionExpression,
        operator: value,
      },
      fact
    );
  };
  const isStoreFilter = fact?.toUpperCase() === STORE_FILTER;
  let searchPlaceholder = isExternalSearch ? searchWithExactMsg : searchMsg;
  if (isExternalSearch && isStoreFilter) {
    searchPlaceholder = storeSearchMsg;
  }

  return (
    <>
      {showProductSelectionCriteria && (
        <CapSelect
          options={conditionExpressionOptions}
          value={conditionExpression.operator}
          style={{ width: "55px" }}
          onChange={handleOperatorChange}
          size="medium"
        />
      )}
      <CapMultiSelectWithTree
        {...prop}
        key={fact}
        selectorClassName="cap-condition-popover-display"
        popoverClassName="cap-condition-popover-tree-multiselect"
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        closeText="Close"
        selectText="Select"
        treeData={treeData}
        searchedTreeData={searchedTreeData}
        appliedKeys={conditionExpression?.operand?.map((op) => op.id) || []}
        appliedKeyObjects={conditionExpression.operand || []}
        onSelect={(value) => {
          handleOnSelect(value);
        }}
        onSearch={onSearch}
        isExternalSearch={isExternalSearch}
        showProductSearchLoader={showProductSearchLoader}
        helpTextMsg={helpTextMsg}
        isStoreFilter={isStoreFilter}
      />
      {fact.toUpperCase() === STORE && (
        <ConditionStoreUploader
          handleOnSelect={handleOnSelect}
          getEntityDetails={getEntityDetails}
          uploadFailedError={uploadFailedError}
          uploadLimitExceeded={uploadLimitExceeded}
          uploadReqLoader={uploadReqLoader}
          or={or}
        />
      )}
    </>
  );
};

ConditionMultiSelectTree.propTypes = {
  treeData: PropTypes.array,
  conditionExpressionOptions: PropTypes.object,
  conditionExpression: PropTypes.any,
  setConditionExpression: PropTypes.func,
  placeholder: PropTypes.string,
  showProductSelectionCriteria: PropTypes.bool,
  getEntityDetails: PropTypes.func,
  uploadFailedError: PropTypes.string,
  uploadLimitExceeded: PropTypes.string,
  uploadReqLoader: PropTypes.string,
  or: PropTypes.string,
  onSearch: PropTypes.func,
  showProductSearchLoader: PropTypes.bool,
  isExternalSearch: PropTypes.bool,
  searchMsg: PropTypes.string,
  searchWithExactMsg: PropTypes.string,
  allSearchedAttributes: PropTypes.array,
  allSearchedCatgeories: PropTypes.array,
  flattenedCategory: PropTypes.array,
  helpTextMsg: PropTypes.object,
};

export default LocaleHoc(ConditionMultiSelectTree, {
  key: "ConditionMultiSelectTree",
});
