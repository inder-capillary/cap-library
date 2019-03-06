/**
*
* CapCard
*
*/

import React from 'react';
import classNames from 'classnames';
import { Card } from 'antd';

const clsPrefix = 'cap-card-v2';


function CapCard(props) {
  const { className, ...rest } = props;
  return (
    <Card className={classNames(clsPrefix, className)} {...rest} />
  );
}

CapCard.propTypes = {

};

export default CapCard;
