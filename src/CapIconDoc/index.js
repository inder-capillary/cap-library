/**
* CapIconDoc
*/
import React, { Component } from "react";
//import PropertyTable from '../../helpers/PropertyTable';
import { CapIcon } from "../../components";
import "./info.scss";

// const infoData = [
//   {
//     key: 1,
//     property: "-",
//     description: "-",
//     type: "-",
//     default: "-",
//   },
// ];

export default class CapIconDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-icon-info">
        <div className="cap-icon-showcase">
          <CapIcon type="add" />
          <CapIcon type="calendaractive" />
          <CapIcon type="chevronright" />
          <CapIcon type="close" />
          <CapIcon type="edit" />
          <CapIcon type="image" />
          <CapIcon type="info" />
          <CapIcon type="listactive" />
          <CapIcon type="logout" />
          <CapIcon type="openinnew" />
          <CapIcon type="tag" />
          <CapIcon type="tick" />
          <CapIcon type="tooltip" />
          <CapIcon type="view" />
          <div>New Icons</div>
          <CapIcon type="alert" />
          <CapIcon type="arrowfilled" />
          <CapIcon type="carrot" />
          <CapIcon type="chatbubble" />
          <CapIcon type="checkfilled" />
          <CapIcon type="checkfilleddefault" />
          <CapIcon type="communication" />
          <CapIcon type="heart" />
          <CapIcon type="location" />
          <CapIcon type="lovefilled" />
          <CapIcon type="megaphone" />
          <CapIcon type="message" />
          <CapIcon type="person" />
          <CapIcon type="task" />
          <CapIcon type="uparrrowfilled" />
          <CapIcon type="android" />
          <CapIcon type="ios" />
        </div>
        {/* <PropertyTable data={infoData} /> */}
        <div style={{ marginTop: '24px' }}>
          <b>NOTE: </b>
          This component is the extended version of ant design
          <a href="https://ant.design/components/icon/"> Icons </a>
          component. Please refer their component for detailed explaination of component and supported props.
        </div>
      </div>
    );
  }
}
