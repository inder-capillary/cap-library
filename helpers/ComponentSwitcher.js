import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CapButtonDoc from '../src/CapButtonDoc';
import CapSliderDoc from '../src/CapSliderDoc';
import CapSideBarDoc from '../src/CapSideBarDoc';
import CapTopBarDoc from '../src/CapTopBarDoc';
import CapCheckboxDoc from '../src/CapCheckboxDoc';
import CapTabDoc from '../src/CapTabDoc';
import CapSlideBoxDoc from '../src/CapSlideBoxDoc';
import CapHeadingDoc from '../src/CapHeadingDoc';
import CapSwitchDoc from '../src/CapSwitchDoc';
import CapSelectDoc from '../src/CapSelectDoc';
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
      case 'capSlideBox':
        return <CapSlideBoxDoc />;
      case 'capHeading':
        return <CapHeadingDoc />;
      case 'capSwitch':
        return <CapSwitchDoc />;
      case 'capSelect':
        return <CapSelectDoc />;

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
