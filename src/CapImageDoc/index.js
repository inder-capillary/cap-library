/**
* CapImageDoc
*/
import React from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapImage, CapHeading } from "../../components";
import accountIntegrationImage from '../../components/assets/images/accountIntegration.svg';
import './info.scss';

const infoData = [
  {
    key: 1,
    property: "src",
    description: "src of image. This is required field. The src of icon is mentioned beside each image. If src of image is not present in the mentioned list, then no image will be rendered.",
    type: "string",
  },
  {
    key: 2,
    property: "alt",
    description: "alt of image. This is required field. The alt of icon is mentioned below each image.",
    type: "string",
  },
  {
    key: 3,
    property: "className",
    description: "Custom class name",
    type: "string",
    default: "",
  },
];

export default () => (
  <div className="cap-image-info">
    <ul className="cap-image-list">
      <li>
        <CapImage src={accountIntegrationImage} />
        <p className="text-item">accountIntegration.svg</p>
      </li>
    </ul>
    {`Used as:`}
    <CapHeading type="h2">{`<CapImage src={accountIntegrationImage} />`}</CapHeading>
    <br />
    <CapHeading type="h3">Font size and color property can be changed through css for these Images</CapHeading>
    <PropertyTable data={infoData} />
  </div>
);
