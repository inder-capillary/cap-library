/**
* CapLinkDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapLink from "../../components/CapLink";
import "./info.scss";

const infoData = [
  {
    property: "href",
    description: "target of hyperlink",
    type: "string",
    default: "",
  },
  {
    property: "title",
    description: "content of  hyperlink",
    type: "string|ReactNode",
    default: "",
  },
];

export default class CapLinkDoc extends Component { // eslint-disable-line react/prefer-stateless-function
   handleClick = (e, link) => {
     console.log(link);
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
