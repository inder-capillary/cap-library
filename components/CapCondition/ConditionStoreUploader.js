import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CapCSVFileUploader from "../CapCSVFileUploader";
import CapSpin from "../CapSpin";
import CapLabel from "../CapLabel";
import { handleStoreCodeUpload } from "./helper";
import { UPLOAD_LIMIT_EXCEEDED, UPLOAD_FAIL } from "./constants";

export const ConditionStoreUploader = (props) => {
  const {
    handleOnSelect,
    getEntityDetails,
    uploadFailedError,
    uploadLimitExceeded,
    uploadReqLoader,
    or,
  } = props;

  const [uploadError, setUploadError] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [uploadedStores, setUploadedStores] = useState([]);

  useEffect(() => {
    if (uploadedStores.length) {
      const uniqueStores = [...new Set([...uploadedStores])];
      handleOnSelect(uniqueStores);
    }
  }, [uploadedStores]);

  //handling different kind of errors while upload
  const uploadErrorType = (type) => {
    switch (type) {
      case UPLOAD_FAIL:
        setUploadError(uploadFailedError);
        break;
      case UPLOAD_LIMIT_EXCEEDED:
        setUploadError(uploadLimitExceeded);
        break;
    }
  };

  //handler for CapCSVFileUploader onChipClose callback
  const removeUploadedStores = () => {
    const updatedStores = [];
    handleOnSelect(updatedStores);
  };

  return (
    <>
      <CapLabel>{or}</CapLabel>
      <CapSpin spinning={showLoader} tip={uploadReqLoader}>
        <CapCSVFileUploader
          sampleCsvFilePath={require("./storeCode.csv")}
          onUpload={(event) => handleStoreCodeUpload(event, {
            setUploadedStores,
            setShowLoader,
            uploadErrorType,
            getEntityDetails,
          })
          }
          errorMessage={uploadError}
          onChipClose={removeUploadedStores}
        />
      </CapSpin>
    </>
  );
};

ConditionStoreUploader.propTypes = {
  handleOnSelect: PropTypes.func.isRequired,
  getEntityDetails: PropTypes.func.isRequired,
  uploadFailedError: PropTypes.string.isRequired,
  uploadLimitExceeded: PropTypes.string.isRequired,
  uploadReqLoader: PropTypes.string.isRequired,
  or: PropTypes.string.isRequired,
};
export default ConditionStoreUploader;
