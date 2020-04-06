/**
* CapCardBoxDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import { CapCardBox, CapLink, CapIcon } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "width",
    description: "width of the card",
    type: "string",
    default: "100%",
  }, {
    key: 2,
    property: "height",
    description: "height of the card",
    type: "string",
    default: "100%",
  }, {
    key: 3,
    property: "avatarText",
    description: "text of the avatar",
    type: "string",
    default: "-",
  }, {
    key: 4,
    property: "borderStyle",
    description: "if you wish to change the border style to dashed, pass DASHED",
    type: "string",
    default: "solid",
  }, {
    key: 5,
    property: "topLeftIcon",
    description: "if you wish to show top left icon in the card",
    type: "element",
    default: "-",
  }, {
    key: 6,
    property: "content",
    description: "content of the card",
    type: "element | string",
    default: "",
  },
];
const MarginDiv = styled.div`
  margin-top: 8px;
`;
export default class CapCardBoxDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-card-box-doc-info">
        <div className="cap-card-box-doc-showcase">
          <CapCardBox
            width="25%"
            height="100px"
            avatarText="1"
            borderStyle="DASHED"
            topLeftIcon={<CapIcon type="close" size="s" style={{marginLeft: '92%', marginTop: '2%'}} />}
            content={(
              <CapLink
                title={(
                  <div style={{display: 'flex', flexGrow: 1, alignItems: 'center', margin: '10px 30px 10px 70px'}}>
                    <CapIcon
                      type="open-in-new-light"
                      size="m"
                      style={{ marginRight: 4 }}
                      svgProps={{
                        fill: '#2466ea',
                      }} />
                    <div>open in new tab</div>
                  </div>
                )}
              />
            )}
          />
          <MarginDiv />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
