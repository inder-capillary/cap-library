/**
* CapFormDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import CapForm from "../../components/CapForm";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "form",
    description: "Decorated by Form.create() will be automatically set this.props.form property",
    type: "object",
    default: "n/a",
  },
  {
    key: 2,
    property: "hideRequiredMark",
    description: "Hide required mark of all form items",
    type: "Boolean",
    default: "false",
  },
  {
    key: 3,
    property: "layout",
    description: "Define form layout",
    type: "'horizontal'|'vertical'|'inline'",
    default: "'horizontal'",
  },
  {
    key: 4,
    property: "onSubmit",
    description: "Defines a function will be called if form data validation is successful.",
    type: "Function(e:Event)",
    default: "",
  },
  {
    key: 5,
    property: "mapPropsToFields",
    description: "Convert props to field value(e.g. reading the values from Redux store). And you must mark returned fields with Form.createFormField",
    type: "(props) => ({ [fieldName]: FormField { value } })",
  },
  {
    key: 6,
    property: "name",
    description: "Set the id prefix of fields under form",
    type: "-",
  },
  {
    key: 7,
    property: "validateMessages",
    description: "Default validate message. And its format is similar with newMessages's returned value",
    type: "Object { [nested.path]: String }",
  },
  {
    key: 8,
    property: "onFieldsChange",
    description: "Specify a function that will be called when the value a Form.Item gets changed. Usage example: saving the field's value to Redux store.",
    type: "Function(props, fields)",
  },
  {
    key: 9,
    property: "onValuesChange",
    description: "A handler while value of any field is changed",
    type: "(props, changedValues, allValues) => void",
  },
];

export default class CapFormDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cap-form-info">
        <div className="cap-form-showcase">
          <CapForm.CapForm />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
