import { UPLOAD_LIMIT_EXCEEDED, UPLOAD_FAIL } from './constants';

export const handleStoreCodeUpload = (event, payload = {}) => {
  const { setShowLoader, uploadErrorType, setUploadedStores, getEntityDetails } = payload;

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
      const data = allTextLines[i].split(',');
      data[0] !== '' && lines.indexOf(data[0]) === -1 && lines.push(data[0]);
    }
    if (lines.length > 0) {
      if (lines.length > 1000) {
        uploadErrorType(UPLOAD_LIMIT_EXCEEDED);
      } else {
        const reqObjBody = {
          entityIds: lines,
          entity: 'store',
          filterAttribute: 'code',
        };
        setShowLoader(true);
        getEntityDetails(reqObjBody)
          .then(resData => {
            if (resData.status === 200) {
              const newStores = resData.result.map(storeInfo =>
                storeInfo.id.toString(),
              );
              setUploadedStores(newStores);
              setShowLoader(false);
            } else {
              uploadErrorType(UPLOAD_FAIL);
            }
          })
          .catch(() => {
            setShowLoader(false);
            uploadErrorType(UPLOAD_FAIL);
          });
      }
    }
  }
  function errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError') {
      console.log(evt.target.error);
    }
  }

  if (window.FileReader) {
    getAsText(event.target.files[0]);
  }
};


export const validateNonEmptyNumberHelper = (num) => {
  const numPattern = /^-?\d+\.?\d*$/;
  return numPattern.test(num);
};
