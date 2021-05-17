/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CapSelect from '../CapSelect';
import CapMultiSelect from '../CapMultiSelect';
import CapUploader from '../CapUploader';
import CapRow from '../CapRow';
import CapColumn from '../CapColumn';
import CapInput from '../CapInput';
import CapMultiSelectWithTree from '../CapMultiSelectWithTree';
import CapFormItem from '../CapFormItem';
import CapCSVFileUploader from '../CapCSVFileUploader';


const componentList = {
  CapSelect,
  CapUploader,
  CapMultiSelect,
  CapMultiSelectWithTree,
  CapInput,
  CapCSVFileUploader,
};

function RenderComponent(props) {
  const {childComponents, ...componentProps} = props;
  const dataToBeDisplayed = [];
  dataToBeDisplayed.push(GetComponentFromProps(componentProps));
  if (childComponents) {
    Object.keys(childComponents).forEach((key) => (
      dataToBeDisplayed.push(
        RenderComponent(childComponents[key])
      )
    ));
  }
  return dataToBeDisplayed;
}

function GetComponentFromProps(props) {
  const ComponentToBeRendered = componentList[props.component];
  return (
    <CapColumn {...props.capColumn} key={props.entity}>
      <CapFormItem {...props.formItem}>
        <ComponentToBeRendered
          {...props.componentProps}
        >
          {(props.componentProps || {} ).children}
        </ComponentToBeRendered>
      </CapFormItem>
    </CapColumn>
  );
}

class CapHierarchyComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CapRow className={classNames("cap-hierarchy-component", this.props.className)}>
        {this.props.structure && RenderComponent(this.props.structure)}
      </CapRow>
    );
  }
}

GetComponentFromProps.defaultProps = {
  componentProps: {},
};

CapHierarchyComponent.propTypes = {
  className: PropTypes.string,
  structure: PropTypes.object,
};

GetComponentFromProps.propTypes = {
  component: PropTypes.object,
  capColumn: PropTypes.object,
  formItem: PropTypes.object,
  componentProps: PropTypes.object,
  children: PropTypes.func,
  entity: PropTypes.string,
};

export default CapHierarchyComponent;
