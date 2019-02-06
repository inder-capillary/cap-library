import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CapButtonDoc from '../src/CapButtonDoc';
import CapSliderDoc from '../src/CapSliderDoc';
import CapSideBarDoc from '../src/CapSideBarDoc';
import CapTopBarDoc from '../src/CapTopBarDoc';
import CapCheckboxDoc from '../src/CapCheckboxDoc';
import CapTabDoc from '../src/CapTabDoc';
import CapHeading0Doc from '../src/CapHeading0Doc';
import CapHeading1Doc from '../src/CapHeading1Doc';
import CapHeading2Doc from '../src/CapHeading2Doc';
import CapHeading3Doc from '../src/CapHeading3Doc';
import CapHeading4Doc from '../src/CapHeading4Doc';
import CapHeading5Doc from '../src/CapHeading5Doc';
//imported for docs










class ComponentSwitcher extends Component {
  render() {
    const { type } = this.props;
    switch (type) {
      case 'capButton':
        return <CapButtonDoc />;
      case 'capSlider':
        return <CapSliderDoc />;
      case 'capSideBar':
        return <CapSideBarDoc />;
      case 'capTopBar':
        return <CapTopBarDoc />;
      case 'capCheckbox':
        return <CapCheckboxDoc />;
      case 'capTab':
        return <CapTabDoc />;
      case 'capHeading0':
        return <CapHeading0Doc />;
      case 'capHeading1':
        return <CapHeading1Doc />;
      case 'capHeading2':
        return <CapHeading2Doc />;
      case 'capHeading3':
        return <CapHeading3Doc />;
      case 'capHeading4':
        return <CapHeading4Doc />;
      case 'capHeading5':
        return <CapHeading5Doc />;
      //components for docs










      default:
        return null;
    }
  }
}

ComponentSwitcher.propTypes = {
  type: PropTypes.string,
};

export default ComponentSwitcher;
