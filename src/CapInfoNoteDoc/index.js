/**
* CapSelectDoc
*/
import React from "react";
import { CapInfoNote } from "../../components";
import PropertyTable from '../../helpers/PropertyTable';
const infoData = [
  {
    key: 1,
    property: "message",
    description: "message that needs to be shown in the info note has border style",
    type: "string/node - denotes type of icon",
    default: "info",
  },

];

function CapInfoNoteDoc() {
  return (
    <div className="cap-alert-info">
      <div className="cap-alert-showcase">
        <div style={{ marginBottom: '24px' }}>
          <CapInfoNote message="You won’t be able to add loyalty related attributes if the loyalty program/ card series is None." />
        </div>
      </div>
      <PropertyTable data={infoData} title="CapInfoNote Component Properties" />
    </div>
  );
}

export default CapInfoNoteDoc;
