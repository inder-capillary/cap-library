/**
*
* CapUploader
*
*/

import React from 'react';
import './_capUploader.scss';
import classNames from 'classnames';
import { Upload } from "antd";

const clsPrefix = 'cap-uploader-v2';
const { Dragger } = Upload;
const CapUploader = (props) => {
  const { className, ...rest } = props;
  return (
    <Upload className={classNames(clsPrefix, className)} {...rest} />
  );
};

CapUploader.CapDragger = Dragger;
CapUploader.propTypes = {

};

export default CapUploader;
