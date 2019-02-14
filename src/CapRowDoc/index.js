/**
* CapRowDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapRow from "../../components/CapRow";
import CapColumn from "../../components/CapColumn";

import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "align",
    description: "the vertical alignment of the flex layout: top middle bottom",
    type: "string",
    default: "top",
  },
  {
    key: 2,
    property: "gutter",
    description: "spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}",
    type: "number/object",
    default: "0",
  },
  {
    key: 3,
    property: "justify",
    description: "horizontal arrangement of the flex layout: start end center space-around space-between",
    type: "string",
    default: "start",
  },
  {
    key: 4,
    property: "type",
    description: "layout mode, optional flex, browser support",
    type: "string",
    default: "",
  },
];

export default class CapRowDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;
    return (
      <div className="cap-row-info">
        <div className="cap-row-showcase">
          <p>
            To change the element sort by
            {' '}
            <b>Flex layout order.</b>
          </p>
          <br />
          <CapRow type="flex">
            <CapColumn span={6} order={4} className="gutter-box">1 CapColumn-order-4</CapColumn>
            <CapColumn span={6} order={3} className="gutter-box">2 CapColumn-order-3</CapColumn>
            <CapColumn span={6} order={2} className="gutter-box">3 CapColumn-order-2</CapColumn>
            <CapColumn span={6} order={1} className="gutter-box">4 CapColumn-order-1</CapColumn>
          </CapRow>
          <br />
          <br />
          <p>
            sub-element
            {' '}
            <b>justify align left</b>
          </p>
          <CapRow type="flex" justify="start">
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
          </CapRow>
          <br />
          <br />
          <p>
sub-element
            {' '}
            <b>justify align center</b>
          </p>
          <CapRow type="flex" justify="center">
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
          </CapRow>
          <br />
          <br />
          <p>
            sub-element
            {' '}
            <b>justify align right</b>
          </p>
          <CapRow type="flex" justify="end">
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
            <CapColumn span={4} className="gutter-box">CapColumn-4</CapColumn>
          </CapRow>
          <br />
          <br />
          <p>
            use the
            {' '}
            <b>gutter</b>
            {' '}
            property of Row as grid spacing
          </p>
          <CapRow gutter={16}>
            <CapColumn span={6}>
              <div className="gutter-box">col-6</div>
            </CapColumn>
            <CapColumn span={6}>
              <div className="gutter-box">col-6</div>
            </CapColumn>
            <CapColumn span={6}>
              <div className="gutter-box">col-6</div>
            </CapColumn>
            <CapColumn span={6}>
              <div className="gutter-box">col-6</div>
            </CapColumn>
          </CapRow>
          <br />
          <br />
          <p>Align Top</p>
          <CapRow type="flex" justify="center" align="top">
            <CapColumn span={4}><DemoBox value={100}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={50}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={120}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={80}>col-4</DemoBox></CapColumn>
          </CapRow>
          <br />
          <br />
          <p>Align Middle</p>
          <CapRow type="flex" justify="center" align="middle">
            <CapColumn span={4}><DemoBox value={100}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={50}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={120}>col-4</DemoBox></CapColumn>
            <CapColumn span={4}><DemoBox value={80}>col-4</DemoBox></CapColumn>
          </CapRow>
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
