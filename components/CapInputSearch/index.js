/**
*
* CapInputSearch
*
*/

import React from 'react';
import { Input } from 'antd';
import './_capInputSearch.scss';
// import styled from 'styled-components';


class CapInputSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <div>
        <Input {...this.props}>
          {children}
        </Input>
      </div>
    );
  }
}

CapInputSearch.propTypes = {

};

export default CapInputSearch;
