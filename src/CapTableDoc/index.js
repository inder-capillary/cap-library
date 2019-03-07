/**
* CapTableDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapTable from "../../components/CapTable";
import CapHeader from '../../components/CapHeader';
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
  address: '10 Downing Street' },
];

const columns = [{
  title: <CapHeader size="small" title="Campaign name" />,
  dataIndex: 'name',
  key: 'name',
  width: '30%',
  className: "parent",
  children: [{
    title: <CapHeader size="small" description="Marketing objective" />,
    dataIndex: 'u_user',
    key: 'u_user',
    className: "children",
  }],
}, {
  title: <CapHeader size="small" title="Address" />,
  dataIndex: 'address',
  key: 'address',
  width: '30%',
}, {
  title: <CapHeader size="small" title="Performance" />,
  width: '40%',
  className: "parent",
  children: [{
    title: <CapHeader size="small" description="Unique users" />,
    dataIndex: 'u_user',
    key: 'u_user',
    className: "children",
  }, {
    title: <CapHeader size="small" description="Message Sent" />,
    dataIndex: 'm_sent',
    key: 'm_sent',
    className: "children",
  },
  {
    title: <CapHeader size="small" description="Viewed" />,
    dataIndex: 'viewed',
    key: 'viewed',
    className: "children",
  },
  {
    title: <CapHeader size="small" description="Responded" />,
    dataIndex: 'responded',
    key: 'responded',
    className: "children",
  }],
}];
const infoData = [{
  key: 1,
  property: 'column [classname]',
  description: "If column has children then class need to pass as parent",
  type: "string",
  default: "",
  required: "-",
},
{
  key: 2,
  property: 'column [children]',
  description: "If column has children then pass as array of children and every children should have children class",
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
];
export default class CapTableDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-table-info">
        <div className="cap-table-showcase">
          <CapTable ColumnGroup={columns} columns={columns} dataSource={dataSource} />
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{marginTop: '24px'}}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/table/#header"> Table </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
