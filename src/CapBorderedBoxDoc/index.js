import React from 'react';
import { CapHeading } from '../../components';
import CapBorderedBox from '../../components/CapBorderedBox';
import PropertyTable from '../../helpers/PropertyTable';

const api = [
  {
    key: 1,
    property: "width",
    description: "width of the box",
    type: "string",
    default: 42,
  },
  {
    key: 2,
    property: "height",
    description: "height of the box",
    type: "string",
    default: 42,
  },
  {
    key: 3,
    property: "border",
    description: "border property",
    type: "string",
    default: "1px dashed #b3bac5",
  },
  {
    key: 4,
    property: "backgroundColor",
    description: "Background color of the border",
    type: "string",
    default: "#fafbfc",
  },
];

function CapBorderedBoxDoc() {
  return (
    <div className="">
      <CapHeading type="h4">With Default values</CapHeading>
      <CapBorderedBox />
      <br />
      <CapHeading type="h4">Based on passed props</CapHeading>
      <CapBorderedBox width="100" height="80" border="2px solid #6563ff" backgroundColor="#b3bac52" />
      <br />
      <PropertyTable data={api} />
    </div>
  );
}
export default CapBorderedBoxDoc;
