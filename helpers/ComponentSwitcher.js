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
import CapInputDoc from '../src/CapInputDoc';
import CapTableDoc from '../src/CapTableDoc';
import CapSelectDoc from '../src/CapSelectDoc';
import CapDateRangePickerDoc from '../src/CapDateRangePickerDoc';
import CapDatePickerDoc from '../src/CapDatePickerDoc';
import CapHeaderDoc from '../src/CapHeaderDoc';
import CapCustomCardDoc from '../src/CapCustomCardDoc';
import CapRowDoc from '../src/CapRowDoc';
import CapColumnDoc from '../src/CapColumnDoc';
import CapRadioDoc from '../src/CapRadioDoc';
import CapRadioGroupDoc from '../src/CapRadioGroupDoc';
import CapProgressDoc from '../src/CapProgressDoc';
import CapFormDoc from '../src/CapFormDoc';
import CapFormItemDoc from '../src/CapFormItemDoc';
import CapMultiSelectWithTreeDoc from '../src/CapMultiSelectWithTreeDoc';
import CapModalDoc from '../src/CapModalDoc';
import CapSpinDoc from '../src/CapSpinDoc';
import CapPopoverDoc from '../src/CapPopoverDoc';
import CapMultiSelectDoc from '../src/CapMultiSelectDoc';
import CapTooltipDoc from '../src/CapTooltipDoc';
import CapIconDoc from '../src/CapIconDoc';
import CapStepsAccordianDoc from '../src/CapStepsAccordianDoc';
import CapLinkDoc from '../src/CapLinkDoc';
import CapRadioCardDoc from '../src/CapRadioCardDoc';
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
      case 'capInput':
        return <CapInputDoc />;
      case 'capTable':
        return <CapTableDoc />;
      case 'capSelect':
        return <CapSelectDoc />;
      case 'capDatePicker':
        return <CapDatePickerDoc />;
      case 'capDateRangePicker':
        return <CapDateRangePickerDoc />;
      case 'capHeader':
        return <CapHeaderDoc />;
      case 'capCustomCard':
        return <CapCustomCardDoc />;
      case 'capRow':
        return <CapRowDoc />;
      case 'capColumn':
        return <CapColumnDoc />;
      case 'capRadio':
        return <CapRadioDoc />;
      case 'capRadioGroup':
        return <CapRadioGroupDoc />;
      case 'capProgress':
        return <CapProgressDoc />;
      case 'capForm':
        return <CapFormDoc />;
      case 'capFormItem':
        return <CapFormItemDoc />;
      case 'capMultiSelectWithTree':
        return <CapMultiSelectWithTreeDoc />;
      case 'capModal':
        return <CapModalDoc />;
      case 'capSpin':
        return <CapSpinDoc />;
      case 'capPopover':
        return <CapPopoverDoc />;
      case 'capMultiSelect':
        return <CapMultiSelectDoc />;
      case 'capTooltip':
        return <CapTooltipDoc />;
      case 'capIcon':
        return <CapIconDoc />;
      case 'capStepsAccordian':
        return <CapStepsAccordianDoc />;
      case 'capLink':
        return <CapLinkDoc />;
      case 'capRadioCard':
        return <CapRadioCardDoc />;
      default:
        return null;
    }
  }
}

ComponentSwitcher.propTypes = {
  type: PropTypes.string,
};

export default ComponentSwitcher;
