/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CapCSVFileUploader from "../CapCSVFileUploader";
import CapRow from "../CapRow";
import CapIcon from "../CapIcon";
import CapLabel from "../CapLabel";
import CapTag from "../CapTag";
import LocaleHoc from "../LocaleHoc";
import * as styledVars from "../styled/variables";
import "./_capSKUUploader.scss";
import CapTruncateList from "../CapTruncateList";

const CapSKUUploader = (props) => {
  const {
    validateSkuIds,
    setSkuList,
    skuList,
    removeUploadedSkus,
    /* Locale messages */
    validatingSKUs: validatingSKUsMsg,
    invalid: invalidMsg,
    invalidSKUs: invalidSKUsMsg,
    valid: validMsg,
    addedSKUsMsg,
    skuFileName,
    invalidSKUFilename,
    uploadedMsg,
  } = props;

  const [validatingSKUs, setValidatingSKUs] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (skuList?.valid?.length) {
      setIsEditMode(true);
    }
  }, []);

  const handleSkuUpload = (event) => {
    function getAsText(fileToRead) {
      const reader = new FileReader();
      reader.readAsText(fileToRead);
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }
    function loadHandler(obj) {
      const csv = obj.target.result;
      processData(csv);
    }
    function processData(csv) {
      const allTextLines = csv.split(/\r\n|\n/);
      const lines = [];
      for (let i = 1; i < allTextLines.length; i++) {
        const data = allTextLines[i].split(",");
        data[0] !== "" && lines.indexOf(data[0]) === -1 && lines.push(data[0]); //eslint-disable-line
      }
      if (lines.length > 0) {
        setValidatingSKUs(true);
        validateSkuIds(lines)
          .then((resData) => {
            let valid = [];
            let inValid = [];
            const data = resData?.result?.reduce((res, list) => [...res, ...list], [])
              || [];
            const errors = data
              .filter((skuValidity) => !skuValidity.isValidSku)
              .map((sku) => sku.skuId);
            const validSkus = data
              .filter((skuValidity) => skuValidity.isValidSku)
              .map((sku) => sku.skuId);
            if (errors.length) {
              inValid = errors;
              setValidatingSKUs(false);
            }
            if (validSkus.length) {
              valid = validSkus;
            }
            setSkuList({ valid, inValid });
            setValidatingSKUs(false);
          })
          .catch((error) => {
            console.log(error);
            setValidatingSKUs(false);
          });
      }
    }
    function errorHandler(evt) {
      if (evt.target.error.name === "NotReadableError") {
        console.log(evt.target.error);
      }
    }

    if (window.FileReader) {
      getAsText(event.target.files[0]);
    }
  };

  const onRemoveAddedSKUs = () => {
    setSkuList({ valid: [], inValid: [] });
    setIsEditMode(false);
  };

  //common function to handle csv downloads
  const downloadHandler = (event, data, downloadedFileName) => {
    event.target.setAttribute(
      "href",
      `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`
    );
    event.target.setAttribute("download", downloadedFileName);
  };

  const downloadSKUs = (event, isValidSKU) => {
    const csvArray = [[isValidSKU ? addedSKUsMsg : invalidSKUsMsg]];
    (isValidSKU ? skuList?.valid : skuList?.inValid)?.forEach((sku) => csvArray.push([sku]));
    const csvContent = csvArray.map((e) => e.join(",")).join("\n");
    downloadHandler(
      event,
      csvContent,
      isValidSKU ? skuFileName : invalidSKUFilename
    );
  };

  return (
    <CapRow type="flex" align="middle" className="cap-sku-uploader">
      {isEditMode ? (
        <>
          <CapTag onClose={onRemoveAddedSKUs} closable>
            <CapTruncateList
              list={skuList?.valid}
              showNumber={1}
              capLabelType="label4"
              showTooltip={false}
            />
          </CapTag>
          <a
            onClick={(e) => downloadSKUs(e, true)}
            className="download-SKU-link"
          >
            <>
              <CapIcon type="download" size="s" />
              {uploadedMsg}
            </>
          </a>
        </>
      ) : (
        <>
          <CapCSVFileUploader
            sampleCsvFilePath={require("./productSample.csv")}
            onUpload={(e) => handleSkuUpload(e)}
            onChipClose={() => removeUploadedSkus()}
            showNumberOfEntries={false}
          />
          {validatingSKUs && (
            <div>
              <CapIcon type="loading" />
              {validatingSKUsMsg}
            </div>
          )}
          {!validatingSKUs
            && (skuList?.valid?.length || skuList?.inValid?.length) ? (
              <CapRow type="flex" align="middle">
                <CapLabel type="label2">
                  {skuList?.valid?.length || 0}
                  {' '}
                  {validMsg}
                </CapLabel>
                <CapIcon
                  type="check-circle"
                  size="s"
                  svgProps={{
                    fill: styledVars.CAP_G06,
                  }}
                />
                {skuList?.inValid?.length ? (
                  <CapRow
                    type="flex"
                    align="middle"
                    style={{ marginLeft: "8px" }}
                  >
                    <CapLabel type="label2">
                      {skuList?.inValid.length}
                      {' '}
                      {invalidMsg}
                    </CapLabel>
                    <CapIcon type="warning" size="s" />
                    <a
                      onClick={(e) => downloadSKUs(e, false)}
                      className="download-SKU-link"
                    >
                      <>
                        <CapIcon type="download" size="s" />
                        {invalidMsg}
                      </>
                    </a>
                  </CapRow>
                ) : null}
              </CapRow>
            ) : null}
        </>
      )}
    </CapRow>
  );
};
CapSKUUploader.defaultProps = {};

CapSKUUploader.propTypes = {
  validateSkuIds: PropTypes.func,
  setSkuList: PropTypes.func,
  skuList: PropTypes.object,
  removeUploadedSkus: PropTypes.func,
  /* Locale messages */
  validatingSKUs: PropTypes.string,
  invalid: PropTypes.string,
  invalidSKUs: PropTypes.string,
  valid: PropTypes.string,
  addedSKUsMsg: PropTypes.string,
  skuFileName: PropTypes.string,
  invalidSKUFilename: PropTypes.string,
  uploadedMsg: PropTypes.string,
};

export default LocaleHoc(CapSKUUploader, { key: "CapSKUUploader" });
