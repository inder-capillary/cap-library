/**
* CapLabelDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapExpressionEditor } from "../../components";

/*
grammar: PropTypes.object,
  expectedTypes: PropTypes.array,
  typeSource: PropTypes.string,
  delims: PropTypes.array,
  expression: PropTypes.string,
*/
const infoData = [
  {
    key: 1,
    property: "grammar",
    description: "Grammar to be passed for expression editor. This grammar will define the set of rules",
    type: "object",
    default: "refer to components/CapExpressionEdirot/js/grammar.js",
  },
  {
    key: 2,
    property: "expected",
    description: "Comma seperated values for expected Types",
    type: "array",
    default: "['boolean']",
  },
  {
    key: 3,
    property: "typeSource",
    description: "URL to load typeSource",
    type: "string",
    default: "undefined",
  },
  {
    key: 4,
    property: "delims",
    description: "delims for expression",
    type: "array",
    default: "['{{', '}}']",
  },
];

export default class CapExpressionEditorDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  onChangeEx1(expressionJSON, expression, isError) {
    // eslint-disable-next-line no-console
    console.log("from the consumer", expressionJSON, expression, isError);
  }

  render() {
    return (
      <div>
        <div className="cap-error-showcase">
          <CapExpressionEditor
            onChange={this.onChangeEx1}
          />
          <CapExpressionEditor
            expression="currentEvent.isGroupMemberTransaction"
            onChange={this.onChangeEx1}
          />
        </div>
        <PropertyTable data={infoData} />
      </div>
    );
  }
}
