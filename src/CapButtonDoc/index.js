import React, {Component} from 'react';
import { Row, Col, Icon } from 'antd';
import { CapButton } from '../../components';
import PropertyTable from '../../helpers/PropertyTable';
import './info.scss';

const api = [
  {
    key: 1,
    property: "type",
    description: "Type of the component. Can set to `primary`, `secondary`, `flat`, `dashed`",
    type: "string",
    default: "primary",
  },
  {
    key: 2,
    property: "prefix",
    description: "Prefix content of button",
    type: "string | Node",
    default: "-",
  },
  {
    key: 3,
    property: "suffix",
    description: "Suffix content of button",
    type: "string | ReactNode",
    default: "-",
  },
  {
    key: 4,
    property: 'isAddBtn',
    description: 'Pass as true if you want to use the button for add action purpose. If passed "true", plus icon will be added as prefix and font color of button will be differnt',
    type: 'boolean',
    default: "false",
  },
];

class CapButtonDoc extends Component {
  render() {
    return (
      <div className="cap-button-info">
        <Row span={24} style={{display: 'flex', marginTop: 20}} className="cap-button-showcase">
          <Col span={5} className="button-type">
            <div className="button-type-title">Primary button</div>
            <CapButton>Primary</CapButton>
            <CapButton disabled>Primary</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Secondary button</div>
            <CapButton type="secondary">Secondary</CapButton>
            <CapButton type="secondary" disabled>Secondary</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Flat button</div>
            <CapButton type="flat">Flat</CapButton>
            <CapButton type="flat" isAddBtn>Flat</CapButton>
            <CapButton type="flat" disabled>Flat</CapButton>
          </Col>
          <Col span={5} className="button-type">
            <div className="button-type-title">Flat button with icons</div>
            <CapButton type="flat" prefix={<Icon type="plus" />}>Prefix</CapButton>
            <CapButton type="flat" suffix={<Icon type="plus" />}>Suffix</CapButton>
            <CapButton type="flat" suffix={<Icon type="plus" />} disabled>Flat</CapButton>
          </Col>
          <Col span={4} className="button-type">
            <div className="button-type-title">Dashed button</div>
            <CapButton type="dashed">Dashed</CapButton>
            <CapButton type="dashed" disabled>Dashed</CapButton>
          </Col>
        </Row>
        <PropertyTable data={api} />
        <div style={{marginTop: '24px'}}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/button/#header"> Button </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}

export default CapButtonDoc;
