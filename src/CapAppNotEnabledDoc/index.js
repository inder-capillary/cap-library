import React from 'react';
import CapAppNotEnabled from '../../components/CapAppNotEnabled';
import PropertyTable from '../../helpers/PropertyTable';

const api = [
  {
    key: 1,
    property: "headerText",
    description: "Header text of the page",
    type: "string/react node(formatted message)",
    default: null,
  },
  {
    key: 2,
    property: "title",
    description: "Title text of the page",
    type: "string/react node(formatted message)",
    default: null,
  },
  {
    key: 3,
    property: "description",
    description: "Description text of the page",
    type: "string/react node(formatted message)",
    default: null,
  },
];


function CapAdvancedIconDoc() {
  return (
      <>
        <CapAppNotEnabled
          headerText="MarkO - Marketing Orchestration"
          title="MarkO - Marketing Orchestration, is not enabled for you."
          description="This can help you in designing and automating AI enabled engagement programs that have multiple touchpoints,
            channels etc. Please reach out to your Capillary POCs to know more"
        />
        <br />
        <PropertyTable data={api} />
    </>
  );
}
export default CapAdvancedIconDoc;
