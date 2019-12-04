/**
* CapCustomListDoc
*/
import React, { Component } from "react";
import PropertyTable from '../../helpers/PropertyTable';
import { CapCustomList, CapButton, CapDrawer } from "../../components";
import "./info.scss";

const infoData = [
  {
    key: 1,
    property: "-",
    description: "-",
    type: "-",
    default: "-",
  },
];

export default class CapCustomListDoc extends Component { // eslint-disable-line react/prefer-stateless-function
  list=[{
    levelName: 'category',
    levelvalueCount: '3 stores',
    subCategory: ['Mild', 'ExtraDark', 'NOT-CAPTURED'],
  }, {
    levelName: 'parent_category',
    levelvalueCount: '2 stores',
    subCategory: ["Beer", "Wafers"],
  }]

  state={
    showCustomList: false,
  }

  closeSlideBox=() => {
    this.setState({showCustomList: false});
  }

  render() {
    return (
      <>
        <CapButton onClick={() => { this.setState({showCustomList: true}); }}>
        custome list
        </CapButton>
        <CapDrawer
          show
          size="s"
          content={<CapCustomList list={this.list} title="Personalised store" />}
          onClose={this.closeSlideBox}
          visible={this.state.showCustomList}
          destroyOnClose
        />

        <PropertyTable data={infoData} />
      </>
    );
  }
}
