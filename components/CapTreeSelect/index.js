/**
*
* CapTreeSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TreeSelect } from 'antd';
import ComponentWithLabelHOC from '../assets/HOCs/ComponentWithLabelHOC';

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

const CapTreeSelectFinal = ComponentWithLabelHOC(CapTreeSelect);
export default CapTreeSelectFinal;
