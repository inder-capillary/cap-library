/**
*
* CapTreeSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TreeSelect } from 'antd';

const clsPrefix = 'cap-tree-select-v2';

function CapTreeSelect(props) {
  const {treeData, className, ...rest } = props;
  return (
    <TreeSelect
      treeData={treeData}
      {...rest}
      className={classNames(clsPrefix, className)}
    />
  );
}

CapTreeSelect.propTypes = {
  treeData: PropTypes.array.isRequired,
};

export default CapTreeSelect;
