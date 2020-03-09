import React from 'react';
import PropertyTable from '../../helpers/PropertyTable';
import { CapShape } from '../../components';

const infoData = [
  {
    key: 1,
    property: "width",
    description: "width",
    type: "number or string with px",
    default: "8px",
  },
  {
    key: 2,
    property: "height",
    description: "height",
    type: "number or string with px",
    default: "8px",
  },
  {
    key: 3,
    property: "bgColor",
    description: "Background color",
    type: "color value or ui library color variable",
    default: "color value: #091e42, ui library variable: CAP_G01",
  },
  {
    key: 4,
    property: "shape",
    description: "Shape",
    type: "string, Supported values (circle, square)",
    default: "circle",
  },
];

const CapShapeDoc = () => (
  <div className="cap-shape-info">
    <div className="ap-shape-info-showcase">
      <CapShape
        shape="square"
        transform="rotate(45deg)"
      />
    </div>
    <PropertyTable data={infoData} />
  </div>
);

export default CapShapeDoc;
