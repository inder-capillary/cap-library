import React, { Component } from 'react';
import PropTypes from 'prop-types';
import last from "lodash/last";
import CapTag from "../CapTag";
import "./_capCSVFileUploader.scss";
import CapInput from '../CapInput';

class CapCSVFileUploader extends Component {
  static propTypes = {
    fileName: PropTypes.string,
    errorMessage: PropTypes.string,
    numberOfEntriesMessage: PropTypes.string,
    sampleCsvFilePath: PropTypes.string,
    onUpload: PropTypes.func,
    showNumberOfEntries: PropTypes.bool,
    onChipClose: PropTypes.func,
    checkFileSize: PropTypes.bool,
    getNumberOfEntries: PropTypes.func,
    lineCount: PropTypes.number,
  }

  static defaultProps = {
    showNumberOfEntries: true,
    checkFileSize: true,
    numberOfEntriesMessage: "entries",
  }

  constructor(props) {
    super(props);
    this.state = {
      lineCount: props.lineCount || 0,
      fileSizeExceeded: false,
      fileName: props.fileName || '',
      isCsvFile: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fileName !== this.props.fileName) {
      this.setState({
        fileName: nextProps.fileName,
      });
    }
    if (nextProps.lineCount !== this.props.lineCount) {
      this.setState({
        lineCount: nextProps.lineCount,
      });
    }
  }

  onChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    let fileSizeExceeded = false;
    const path = event.target.value.split("\\");
    let fileName = last(path);
    let isCsvFile = true;
    reader.readAsText(file);
    reader.onload = this.getNumberOfEntries;

    const fileSize = file.size / 1024 / 1024; // in MB
    if (this.props.checkFileSize && fileSize > 5) {
      fileSizeExceeded = true;
      fileName = '';
    } else if (fileName.split(".").pop() !== 'csv') {
      isCsvFile = false;
      fileName = '';
    } else {
      const { onUpload } = this.props;
      if (onUpload) {
        onUpload(event);
      }
    }
    this.setState({
      isCsvFile,
      fileSizeExceeded,
      fileName,
    });
  }

  onChipClose = () => {
    const { onChipClose } = this.props;
    this.setState({
      fileName: '',
      fileSizeExceeded: false,
      isCsvFile: true,
    });
    if (onChipClose) {
      onChipClose();
    }
  }

  getNumberOfEntries = (event) => {
    const { getNumberOfEntries } = this.props;
    const allTextLine = event.target.result.split(/\r\n|\n/);
    let lineCount = 0;
    allTextLine.forEach((line) => {
      if (line.split(';').length) {
        line.split(';').forEach((d) => {
          if (d !== '') {
            lineCount += 1;
          }
        });
      } else {
        lineCount += 1;
      }
    });

    this.setState({
      lineCount: lineCount > 0 ? lineCount - 1 : lineCount,
    });
    if (getNumberOfEntries) {
      this.props.getNumberOfEntries(lineCount);
    }
  }


  render() {
    const { errorMessage, numberOfEntriesMessage, sampleCsvFilePath, checkFileSize } = this.props;
    const { fileName, isCsvFile, lineCount } = this.state;
    return (
      <div className="cap-csv-file-uploader">
        {!fileName
          ? (
            <div className="csv-fileipload-container">
              <div className="file-upload buttonFileUpload btn ">
                <span>Choose File</span>
                <CapInput
                  type="file"
                  className="upload btn btn-secondary"
                  onChange={this.onChange}
                  accept=".csv"
                />
              </div>
              {
                sampleCsvFilePath
                  ? (
                    <a
                      href={sampleCsvFilePath}
                      download
                    >
                    Sample.csv
                    </a>
                  )
                  : null
              }
            </div>
          )
          : (
            <div>
              <CapTag onClose={this.onChipClose} closable>{fileName}</CapTag>
              {this.props.showNumberOfEntries && <span>{`${lineCount} ${numberOfEntriesMessage}`}</span>}
            </div>
          )
        }
        <div>
          {
            checkFileSize && this.state.fileSizeExceeded && (<span style={{color: 'red'}}>File size is greater than 5 MB</span>)
          }
          {
            !isCsvFile
              ? <div style={{color: 'red', margin: '7px 0'}}>Please upload a CSV file</div>
              : lineCount === 0 && fileName && (<div style={{color: 'red', margin: '7px 0'}}>Please upload a file with atleast one entry</div>)
          }
          {
            errorMessage && (<div style={{color: 'red'}}>{errorMessage}</div>)
          }
        </div>
      </div>
    );
  }
}

export default CapCSVFileUploader;
