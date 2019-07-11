/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import get from 'lodash/get';
import unset from 'lodash/unset';
import CapHierarchyComponent from "../../components/CapHierarchyComponent";
import CapButton from "../../components/CapButton";
import CapIcon from "../../components/CapIcon";
import PropertyTable from '../../helpers/PropertyTable';


const infoData = [
  {
    key: 1,
    property: "structure",
    description: "Structure of the component. Please find the structure schema below",
    type: "object",
    default: "-",
  },
];

const propStructureData = [
  {
    key: 1,
    property: "entityName",
    description: "Entity Name related to the component",
    type: "object",
    default: "-",
  },
  {
    key: 2,
    property: "component",
    description: "Component to be displayed. Accepted values are CapSelect | CapUploader | CapMultiSelect | CapMultiSelectWithTree | CapInput | CapElasticSearch | CapCSVFileUploader,",
    type: "string",
    default: "-",
  },
  {
    key: 3,
    property: "formItem",
    description: "form item property enclosing the component",
    type: "CapFormItem",
    default: "-",
  },
  {
    key: 4,
    property: "capColumn",
    description: "capColumn property enclosing the formitem",
    type: "CapColumn",
    default: "-",
  },
  {
    key: 5,
    property: "componentProps",
    description: "Component Properties of components specified in 'component' key",
    type: "specific to component",
    default: "-",
  },
  {
    key: 6,
    property: "childComponents",
    description: "JSON object of child components, key could be anything(preferably entityName), value should be the structure ",
    type: "",
    default: "-",
  },
];

class CapHierarchyComponentDoc extends Component {
  constructor(props) {
    super(props);
    this.levelOne = this.levelOne.bind(this);
    this.addChild = this.addChild.bind(this);
    this.selectAdditionalOption = this.selectAdditionalOption.bind(this);
    this.selectAttribute = this.selectAttribute.bind(this);
    this.selectStoreOption = this.selectStoreOption.bind(this);
    this.state = {
      props: this.getComponentProps(),
    };
  }

  getComponentProps() {
    return {
      structure: {
        entity: "store",
        component: "CapSelect",
        formItem: {
          label: "Customers who registered at",
          labelCol: {
            xs: { span: 24 },
            sm: { span: 12 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
          },
        },
        capColumn: {
          span: 10,
        },
        componentProps: {
          options: [{label: 'zone', value: 'zone', key: '0'},
            {label: 'concept', value: 'concept', key: '1'},
            {label: 'store id', value: 'store_id', key: '2'}],
          onSelect: this.levelOne,
        },
      },
    };
  }

  getStoreOptionProps() {
    return {
      entity: "storeOption",
      component: "CapSelect",
      formItem: {
        label: "Stores",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 6,
      },
      componentProps: {
        options: [{label: 'Upload list', value: 'upload', key: '0'},
          {label: 'Enter Values', value: 'enterValues', key: '1'},
          {label: 'With Attributes', value: 'withAttributes', key: '2'}],
        onSelect: this.selectStoreOption,
      },
    };
  }

  getUploaderProps() {
    return {
      entity: "storeUploader",
      component: "CapUpload",
      formItem: {
        label: "Upload stores list",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        children: this.getUploadComponentChildren(),
      },
    };
  }

  getZoneProps() {
    return {
      entity: "zone",
      component: "CapMultiSelect",
      formItem: {
        label: "Zone",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'east', key: 'zone' },
          { title: 'north', key: 'north'},
          { title: 'south', key: 'south' },
          { title: 'west', key: 'west' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getStoreElasticSearchProps() {
    return {
      entity: "storeEnterValues",
      component: "CapElasticSearch",
      formItem: {
        label: "Select Store",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'st', key: 'zone' },
          { title: 'north', key: 'north'},
          { title: 'south', key: 'south' },
          { title: 'west', key: 'west' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getConceptProps() {
    return {
      entity: "concept",
      component: "CapMultiSelect",
      formItem: {
        label: "Concept",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        key: 1,
        treeData: [
          { title: 'Concept 1', key: 'concept1' },
          { title: 'Concept 2', key: 'concept2'},
          { title: 'Concept 3', key: 'concept3' },
          { title: 'Concept 4', key: 'concept4' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getAttrProps() {
    return {
      entity: "attributes",
      component: "CapMultiSelect",
      formItem: {
        label: "attributes",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'Area', key: 'area' },
          { title: 'External', key: 'external'},
          { title: 'Is Billable', key: 'is_billable' },
        ],
        onSelect: this.selectAttribute,
      },
    };
  }

  getAreaProps() {
    return {
      entity: "area",
      component: "CapMultiSelect",
      formItem: {
        label: "Area",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'Area 1', key: 'area1' },
          { title: 'Area 2', key: 'area2'},
          { title: 'Area 3', key: 'area3' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getExternalProps() {
    return {
      entity: "external",
      component: "CapMultiSelect",
      formItem: {
        label: "External",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'External 1', key: 'external1' },
          { title: 'External 2', key: 'external2'},
          { title: 'External 3', key: 'external3' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getIsBillableProps() {
    return {
      entity: "isBillable",
      component: "CapMultiSelect",
      formItem: {
        label: "Is Billable",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        treeData: [
          { title: 'Is Billable 1', key: 'isbillable1' },
          { title: 'Is Billable 2', key: 'isbillable2'},
          { title: 'Is Billable 3', key: 'isbillable3' },
        ],
        onSelect: this.levelOne,
      },
    };
  }

  getAdditionalOption() {
    return {
      entity: "additionalOption",
      component: "CapSelect",
      formItem: {
        label: "",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
      },
      capColumn: {
        span: 10,
      },
      componentProps: {
        options: [{label: 'any store', value: 'any', key: '0'},
          {label: 'with attribute', value: 'attr', key: '1'}],
        onSelect: this.selectAdditionalOption,
      },
    };
  }

  setAttributes() {
    this.addChild("component.childComponents", [{
      value: this.getAttrProps(),
      entity: "attribute",
    }]);
  }

  getUploadComponentChildren() {
    return (
      <CapButton>
        <CapIcon type="upload" />
        Upload
      </CapButton>
    );
  }

  selectAttribute(values) {
    //Code is not optimized
    const propsToBeAdded = [];
    values.forEach((value) => {
      if (value === 'area') {
        propsToBeAdded.push({
          value: this.getAreaProps(),
          entity: "area",
        });
      }
      if (value === 'external') {
        propsToBeAdded.push({
          value: this.getExternalProps(),
          entity: "external",
        });
      }
      if (value === 'is_billable') {
        propsToBeAdded.push({
          value: this.getIsBillableProps(),
          entity: "isBillable",
        });
      }
      if (propsToBeAdded.length > 0) {
        this.addChild("component.childComponents.attributes.childComponents", propsToBeAdded, true);
      }
    });
  }

  selectStoreOption(value) {
    switch (value) {
      case 'upload':
        this.addChild("component.childComponents.storeOption.childComponents", [{
          value: this.getUploaderProps(),
          entity: "upload",
        }], true);
        break;
      case 'enterValues':
        break;
      case 'withAttributes':
        this.addChild("component.childComponents.storeOption.childComponents", [{
          value: this.getAttrProps(),
          entity: "attributes",
        }], true);
        break;
      default:
        return false;
    }
    return false;
  }

  resetAttributes(key) {
    const currentState = cloneDeep(this.state.props);
    unset(currentState, `${key}.hasAttribute`);
    unset(currentState, `${key}.selectedAttributes`);
    unset(currentState, `${key}.childComponents.attribute`);
    this.setState({
      props: currentState,
    });
  }

  selectAdditionalOption(value) {
    if (value === "any") {
      this.resetAttributes("component");
    } else {
      this.setAttributes("component");
    }
  }

  levelOne(value) {
    console.log("caphierarchycomp", value);
    switch (value) {
      case "zone":
        this.addChild("component.childComponents", [{
          value: this.getZoneProps(),
          entity: "concept",
        }, {
          value: this.getAdditionalOption(),
          entity: "additionalOption",
        }], true);
        break;
      case "concept":
        this.addChild("component.childComponents", [{
          value: this.getConceptProps(),
          entity: "concept",
        }, {
          value: this.getAdditionalOption(),
          entity: "additionalOption",
        }], true);
        break;
      case "store_id":
        this.addChild("component.childComponents", [{
          value: this.getStoreOptionProps(),
          entity: "storeOption",
        }], true);
        break;
      default:
        return false;
    }
    return false;
  }

  addChild(key, childDetails, reset = false) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const currentState = cloneDeep(this.state.props);
    let childComponents;
    if (!reset) {
      childComponents = get(currentState, key);
    }
    childDetails.forEach((childDetail) => {
      if (childComponents === undefined) {
        childComponents = {};
      }
      childComponents[childDetail.value.entity] = childDetail.value;
      set(currentState, key, childComponents);
    });
    this.setState({
      props: currentState,
    });
  }

  render() {
    return (
      <div className="cap-hierarchy-component-info">
        <div className="cap-hierarchy-component-showcase">
          <CapHierarchyComponent
            {...this.state.props}
            key={2}
          />
        </div>
        <PropertyTable data={infoData} />
        Schema:
        <PropertyTable data={propStructureData} />
      </div>
    );
  }
}

CapHierarchyComponentDoc.propTypes = {
  entities: PropTypes.object,
};

export default CapHierarchyComponentDoc;
