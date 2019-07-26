/**
* CapListDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapList } from "../../components";
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

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


export default class CapListDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-list-info">
        <div className="cap-list-showcase">
          <div>
            <h3 style={{ marginBottom: 16 }}>Default Size</h3>
            <CapList
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              dataSource={data}
              renderItem={(item) => (<CapList.Item>{item}</CapList.Item>)}
            />
          </div>
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          Get Item from capList as follows:
          {' '}
          <b>{`{ Item } = CapList`}</b>
        </div>
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/list/#header"> List </a>
          component. Please refer their component for detailed explanation of component and supported props.
        </div>
      </div>
    );
  }
}
