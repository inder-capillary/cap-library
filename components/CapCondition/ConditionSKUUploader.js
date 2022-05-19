import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import CapSKUUploader from '../CapSKUUploader';
import CapSelect from '../CapSelect';

const ConditionSKUUploader = ({
  fact,
  validateSkuIds,
  conditionExpressionOptions,
  conditionExpression,
  setConditionExpression,
  showProductSelectionCriteria,
}) => {
  const handleSetSku = (value) => {
    setConditionExpression({
      ...conditionExpression,
      operand: value,
    }, fact);
  };

  const handleOperatorChange = useCallback((value) => {
    setConditionExpression({
      ...conditionExpression,
      operator: value,
    }, fact);
  }, []);

  return (
    <>
      {
        showProductSelectionCriteria && (
          <CapSelect
            options={conditionExpressionOptions}
            value={conditionExpression.operator}
            style={{ width: "55px"}}
            onChange={handleOperatorChange}
            size="medium"
          />
        )
      }
      <CapSKUUploader
        setSkuList={handleSetSku}
        skuList={conditionExpression.operand}
        removeUploadedSkus={() => { handleSetSku([]); }}
        validateSkuIds={validateSkuIds}
      />
    </>
  );
};

ConditionSKUUploader.propTypes = {
  validateSkuIds: PropTypes.func,
  conditionExpressionOptions: PropTypes.object,
  showProductSelectionCriteria: PropTypes.bool,
};

export default ConditionSKUUploader;
