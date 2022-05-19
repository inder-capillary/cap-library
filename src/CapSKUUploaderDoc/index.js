import React, { useState } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapSKUUploader from "../../components/CapSKUUploader";

const defaultSKUList = { valid: [], inValid: [] };

const infoData = [
  {
    key: 1,
    property: "skuList",
    description: "object with valid and invalid arrays",
    type: "object",
    default: "{ valid: [], inValid: [] }",
  },
  {
    key: 2,
    property: "setSkuList",
    description: "function to modify skuList state",
    type: "function",
    default: "-",
  },
  {
    key: 3,
    property: "validateSkuIds",
    description: "function to validate uploaded skus",
    type: "function",
    default: "-",
  },
  {
    key: 4,
    property: "removeUploadedSkus",
    description: "function to set skuList to default value",
    type: "function",
    default: "-",
  },
];


const CapSKUUploaderDoc = () => {
  const [skuList, setSkuList] = useState(defaultSKUList);

  const validateSkuIds = (toValidateList) => Promise.resolve({
    success: true,
    status: 200,
    result: [
      [
        {
          isValidSku: true,
          skuId: toValidateList[0],
        },
        {
          isValidSku: true,
          skuId: toValidateList[1],
        },
        {
          isValidSku: false,
          skuId: toValidateList[2],
        },
        {
          isValidSku: true,
          skuId: toValidateList[3],
        },
        {
          isValidSku: false,
          skuId: toValidateList[4],
        },
      ],
    ],
  });

  const removeUploadedSkus = () => {
    setSkuList(defaultSKUList);
  };

  return (
    <>
      <CapSKUUploader
        skuList={skuList}
        setSkuList={setSkuList}
        validateSkuIds={validateSkuIds}
        removeUploadedSkus={removeUploadedSkus}
      />
      <PropertyTable data={infoData} />
    </>
  );
};

export default CapSKUUploaderDoc;
