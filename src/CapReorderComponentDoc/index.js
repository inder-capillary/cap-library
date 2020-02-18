/**
* CapReorderComponentDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapReorderComponent } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "panes",
    description: "icon, order, channel, id are mandatory other than that if you pass any key it will return with these three property",
    type: "array",
    default: "-",
  },
  {
    key: 2,
    property: "title",
    description: "title of all component that will append with order property of pane object",
    type: "string",
    default: "-",
  },
  {
    key: 1,
    property: "reOrderChannel",
    description: "callback function on every left and right carousel , return updated panes",
    type: "function",
    default: "-",
  },
];

export default class CapReorderComponentDoc extends Component { // eslint-disable-line react/prefer-stateless-function
   panes = [
     {
       icon: "smsFilled",
       order: 1,
       channel: 'sms',
       id: 1,
     },
     {
       icon: "emailFilled",
       channel: 'Email',
       order: 2,
       id: 2,
     },
     {
       icon: "mpushFilled",
       channel: "Push notification",
       order: 3,
       id: 3,
     },
     {
       icon: "wechatFilled",
       channel: "weChat",
       order: 4,
       id: 4,
     },
   ]

   getReOrderChannel=(panes) => {
     console.log(panes);
   }

   render() {
     return (
       <div className="cap-reorder-component-info">
         <div className="cap-reorder-component-showcase">
           <CapReorderComponent panes={this.panes} title="Channel" reOrderChannel={this.getReOrderChannel} />
         </div>
         <PropertyTable data={infoData} />
       </div>
     );
   }
}
