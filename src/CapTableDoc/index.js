/**
* CapTableDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapTable from "../../components/CapTable";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street',
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street',
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

export default class CapTableDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-table-info">
        <div className="cap-table-showcase">
          <CapTable columns={columns} dataSource={dataSource} />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
