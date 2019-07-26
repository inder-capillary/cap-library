/**
* CapUploaderDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapUploader, CapButton, CapIcon } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

export default class CapUploaderDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-uploader-info">
        <div className="cap-uploader-showcase">
          <CapUploader {...this.props}>
            <CapButton>
              <CapIcon type="upload" />
              {"Upload"}
              {' '}
            </CapButton>
          </CapUploader>
        </div>
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/upload/#header"> Upload </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}
