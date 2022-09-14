/* eslint-disable react/no-find-dom-node */
/**
 *
 * ExpressionEditor
 *
 */

 import React from "react";
 import { findDOMNode } from "react-dom";
 import PropTypes from "prop-types";
 import { CapInput } from "../index";
 import fix from "./js/fixGrammar";
 import defaultGrammar from "./js/grammar";
 import "./_expressionEditor.scss";
 
 //Require js plugins
 require("./js/jquery");
 require("./js/expressionEditor");
 
 const classNames = require("classnames");
 const { TextArea } = CapInput;
 /* eslint-disable react/prefer-stateless-function */
 class CapExpressionEditor extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       expressionJSON: {},
       expression: props.expression || "",
       isError: false
     };
   }
 
   componentDidMount() {
     /**
      * this.$expressionEditorContainer => This is the Jquery ref for entire expressionJSON container, will help us traverse through all the DOM node using jquery
      * this.$expressionEditor => this refers to the textArea of the expressionEditor
      */
     const {
       grammar,
       expected,
       typeSource,
       delims,
       expression,
       disabled
     } = this.props;
     if (!disabled) {
       this.$expressionEditorContainer = $(
         findDOMNode(this.expressionEditorContainer)
       );
       this.$expressionEditor = this.$expressionEditorContainer.find("textarea");
       this.$expressionEditor
         .expredit(fix(grammar), {
           expected,
           typeSource,
           delims
         })
         .change(() => this.onChange());
 
       //If we are already passing the expression then trigger a onchange to keep the JSON updated in the state
       if (expression) {
         this.$expressionEditor.trigger("change");
       }
     }
   }
 
   onChange = () => {
     const { onChange } = this.props;
     this.setState(
       {
         expressionJSON: this.$expressionEditor.data("json"),
         expression: this.$expressionEditor.val(),
         isError:
           this.$expressionEditorContainer.find("span.has_errors").length > 0
       },
       () =>
         onChange &&
         onChange(
           this.state.expressionJSON,
           this.state.expression,
           this.state.isError
         )
     );
   };
 
   setRef = textArea => {
     this.expressionEditorContainer = textArea;
   };
 
   render() {
     const {
       className,
       onChange,
       grammar,
       expectedTypes,
       typeSource,
       delims,
       ...rest
     } = this.props;
     const { expression: value } = this.state;
     return (
       <TextArea
         className={classNames("cap-expression-editor", className)}
         {...rest}
         ref={this.setRef}
         value={value}
         onChange={this.onChange}
       />
     );
   }
 }
 
 CapExpressionEditor.defaultProps = {
   grammar: defaultGrammar,
   expected: ["boolean"],
   delims: ["{{", "}}"]
 };
 
 CapExpressionEditor.propTypes = {
   grammar: PropTypes.object,
   expected: PropTypes.array,
   typeSource: PropTypes.string,
   delims: PropTypes.array,
   expression: PropTypes.string
 };
 
 export default CapExpressionEditor;
 