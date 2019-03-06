/**
*
* CapList
*
*/

import React from 'react';
import { List } from 'antd';
import classNames from 'classnames';
import './_capList.scss';

const { Item } = List;

const clsPrefix = 'cap-list-v2';

function CapList(props) {
  const { className, ...rest } = props;
  return (
    <List className={classNames(clsPrefix, className)} {...rest} />
  );
}

CapList.propTypes = {

};

CapList.Item = Item;

export default CapList;
