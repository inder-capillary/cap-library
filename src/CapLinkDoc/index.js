/**
* CapLinkDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapLink from "../../components/CapLink";
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
];

export default class CapLinkDoc extends Component { // eslint-disable-line react/prefer-stateless-function
   handleClick = () => {

   };

   render() {
     return (
       <div className="cap-link-info">
         <div className="cap-link-showcase">
           <CapLink title="Campaign 1" onClick={this.handleClick}></CapLink>
         </div>
         <PropertyTable data={infoData} />
       </div>
     );
   }
}
