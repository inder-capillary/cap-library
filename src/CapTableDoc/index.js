/**
* CapTableDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapTable from "../../components/CapTable";
import CapHeader from '../../components/CapHeader';
import "./info.scss";

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  u_user: 5,
  m_sent: 10,
  viewed: 2,
  responded: 1,
  address: '10 Downing Street',
}, {
  key: '2',
  name: 'John',
  age: 42,
  u_user: 17,
  m_sent: 3,
  viewed: 100,
  responded: 30,
  address: '101 Downing Street',
}, {
  key: '3',
  name: 'Mike',
  age: 32,
  u_user: 5,
  m_sent: 10,
  viewed: 2,
  responded: 1,
  address: '10 Downing Street',
},
];

const columns = [{
  title: <CapHeader size="small" title="Campaign name" description="Marketing objective" />,
  dataIndex: 'name',
  key: 'name',
  width: '30%',
}, {
  title: <CapHeader size="small" title="Address" withHiddenDescription />,
  dataIndex: 'address',
  key: 'address',
  width: '30%',
}, {
  title: <CapHeader size="small" title="Performance" />,
  width: '40%',
  className: "table-parent",
  children: [{
    title: <CapHeader size="small" description="Unique users" />,
    dataIndex: 'u_user',
    key: 'u_user_2',
    className: "table-children",
  }, {
    title: <CapHeader size="small" description="Message Sent" />,
    dataIndex: 'm_sent',
    key: 'm_sent',
    className: "table-children",
  },
  {
    title: <CapHeader size="small" description="Viewed" />,
    dataIndex: 'viewed',
    key: 'viewed',
    className: "table-children",
  },
  {
    title: <CapHeader size="small" description="Responded" />,
    dataIndex: 'responded',
    key: 'responded',
    className: "table-children",
  }],
}];
const infoData = [{
  key: 1,
  property: 'column [classname]',
  description: "If column has children then class need to pass as table-parent",
  type: "string",
  default: "",
  required: "-",
},
{
  key: 2,
  property: 'column [table-children]',
  description: "If column has children then pass as array of children and every children should have table-children class",
  type: "string",
  default: "",
  required: "-",
},
{
  key: 3,
  property: 'infinteScroll',
  description: "scrolling will be manage based on the flag and pagination & setPagination props need to pass",
  type: "boolean",
  default: "false",
  required: "-",
},
{
  key: 4,
  property: 'pagination',
  description: "if infinteScroll is true, pagination needs to pass as object of {limit, offset} values",
  type: "object",
  default: "false",
  required: "-",
},
{
  key: 5,
  property: 'setpagination',
  description: "if infinteScroll is true, setpagination function needs to pass as callback function to call api",
  type: "function",
  default: "false",
  required: "-",
},
{
  key: 6,
  property: 'id',
  description: "table unique id",
  type: "string",
  default: "",
  required: "yes",
},
{
  key: 7,
  property: 'showLoader',
  description: "This is for loading on pagination",
  type: "boolean",
  default: "false",
  required: "",
},
];
export default class CapTableDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  getTableData2 = () => ({
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    }, {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    }, {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    }],
    dataSource: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }],
  })


  render() {
    const tableData2 = this.getTableData2();
    return (
      <div className="cap-table-info">
        <div className="cap-table-showcase">
          <CapTable id="capTable_1" ColumnGroup={columns} columns={columns} dataSource={dataSource} infinteScroll />
        </div>
        <div style={{ marginTop: '24px' }}>
          <CapTable dataSource={tableData2.dataSource} columns={tableData2.columns} />
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/table/#header"> Table </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
