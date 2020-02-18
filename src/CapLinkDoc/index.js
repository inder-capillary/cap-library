/**
* CapLinkDoc
*/
import React, { Component } from "react";
import styled from 'styled-components';
import PropertyTable from '../../helpers/PropertyTable';
import CapLink from "../../components/CapLink";
import CapIcon from "../../components/CapIcon";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "href",
    description: "target of hyperlink",
    type: "string",
    default: "",
  },
  {
    key: 2,
    property: "title",
    description: "content of  hyperlink",
    type: "string|ReactNode",
    default: "",
  },
  {
    key: 3,
    property: "onClick",
    description: "content of  hyperlink",
    type: "function",
    default: "",
  },
  {
    key: 4,
    property: "prefix",
    description: "Prefix content of link",
    type: "string | Node",
    default: "-",
  },
  {
    key: 5,
    property: "suffix",
    description: "Suffix content of link",
    type: "string | ReactNode",
    default: "-",
  },
  {
    key: 6,
    property: "fontWeight",
    description: "sets the fontweight of the title. You can pass 'm' to make fontweight as 500",
    type: "string",
    default: "400",
  },
  {
    key: 7,
    property: "disabled",
    description: "disabled cap link",
    type: "string",
    default: "false",
  },

];

const MarginDiv = styled.div`
  margin-top: 8px;
`;

export default class CapLinkDoc extends Component { // eslint-disable-line react/prefer-stateless-function
   handleClick = () => {
     window.open('#', '_blank');
   };

   render() {
     return (
       <div className="cap-link-info">
         <div className="cap-link-showcase">
           <CapLink title="regular font weight" onClick={this.handleClick} />
         </div>
         <MarginDiv />
         <div className="cap-link-showcase">
           <CapLink title="medium font weight" onClick={this.handleClick} fontWeight="m" />
         </div>
         <MarginDiv />
         <div className="cap-link-showcase">
           <CapLink
             title={(
               <div style={{display: 'flex', flexGrow: 1, alignItems: 'center'}}>
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
             onClick={this.handleClick}
           />
         </div>
         <MarginDiv />
         <div className="cap-link-showcase">
           <CapLink
             title="open in current tab"
             href="#"
           />
         </div>
         <div className="cap-link-showcase">
           <CapLink
             title="Disabled"
             href="www.google.com"
             disabled
           />
         </div>
         <PropertyTable data={infoData} />
       </div>
     );
   }
}
