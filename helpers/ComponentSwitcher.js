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
import CapNotificationDoc from '../src/CapNotificationDoc';
import CapListDoc from '../src/CapListDoc';
import CapTooltipWithInfoDoc from '../src/CapTooltipWithInfoDoc';
import CapCardDoc from '../src/CapCardDoc';
import CapUploaderDoc from '../src/CapUploaderDoc';
import CapAlertDoc from '../src/CapAlertDoc';
import CapMenuDoc from '../src/CapMenuDoc';
import CapDropdownDoc from '../src/CapDropdownDoc';
import CapCarouselDoc from '../src/CapCarouselDoc';
import CapTagDoc from '../src/CapTagDoc';
import CapColoredTagDoc from '../src/CapColoredTagDoc';
import CapDividerDoc from '../src/CapDividerDoc';
import CapLabelDoc from '../src/CapLabelDoc';
import CapTimePickerDoc from '../src/CapTimePickerDoc';
import CapErrorDoc from '../src/CapErrorDoc';
import CapSecondaryTopBarDoc from '../src/CapSecondaryTopBarDoc';
import CapSkeletonDoc from '../src/CapSkeletonDoc';
import CapMultiSelectDatePickerDoc from '../src/CapMultiSelectDatePickerDoc';
import CapHierarchyComponentDoc from '../src/CapHierarchyComponentDoc';
import CapDrawerDoc from '../src/CapDrawerDoc';
import CapBannerDoc from '../src/CapBannerDoc';
import CapExpressionEditorDoc from '../src/CapExpressionEditorDoc';
import CapIllustrationDoc from '../src/CapIllustrationDoc';
import CapCustomCheckboxListDoc from '../src/CapCustomCheckboxListDoc';
import CapGraphDoc from '../src/CapGraphDoc';
import CapCustomListDoc from '../src/CapCustomListDoc';
import CapStepsDoc from '../src/CapStepsDoc';
import CapReorderComponentDoc from '../src/CapReorderComponentDoc';
import CapShapeDoc from '../src/CapShapeDoc';
import CapImageDoc from '../src/CapImageDoc';
import CapCardBoxDoc from '../src/CapCardBoxDoc';
import CapSnackBarDoc from '../src/CapSnackBarDoc';
import CapTreeSelectDoc from '../src/CapTreeSelectDoc';
import CapNavigationDoc from '../src/CapNavigationDoc';
import CapLoginDoc from '../src/CapLoginDoc';
import CapDndGraphSidebarDoc from '../src/CapDndGraphSidebarDoc';
import CapAdvancedIconDoc from '../src/CapAdvancedIconDoc';
import CapColorPickerDoc from '../src/CapColorPickerDoc';
import CapLevelGraphRendererDoc from '../src/CapLevelGraphRendererDoc';
import CapInfoNoteDoc from '../src/CapInfoNoteDoc';
import CapErrorStateIllustrationDoc from '../src/CapErrorStateIllustrationDoc';
import CapErrorBoundaryDoc from '../src/CapErrorBoundaryDoc';
import CapMultiplePathDoc from "../src/CapMultiplePathDoc";
import CapBlockDoc from '../src/CapBlockDoc';
import CapDnDGraphDoc from '../src/CapDndGraphDoc';
import CapBorderedBoxDoc from '../src/CapBorderedBoxDoc';
import CapConditionDoc from '../src/CapConditionDoc';
import CapPopoverTreeDoc from '../src/CapPopoverTreeDoc';
import CapSelectFilterDoc from '../src/CapSelectFilterDoc';
import CapStaticTemplatesDoc from '../src/CapStaticTemplatesDoc';
import CapAppNotEnabledDoc from '../src/CapAppNotEnabledDoc';
import CapStatusDoc from '../src/CapStatusDoc';
import CapEventCalendarDoc from '../src/CapEventCalendarDoc';
import CapSKUUploaderDoc from '../src/CapSKUUploaderDoc';
//imported for docs


class ComponentSwitcher extends Component {
  render() {
    const { type } = this.props;
    switch (type) {
      case 'capMultiplePath':
        return <CapMultiplePathDoc />;
      case 'capButton':
        return <CapButtonDoc />;
      case 'capBlock':
        return <CapBlockDoc />;
      case 'capCondition':
        return <CapConditionDoc />;
      case 'capSlider':
        return <CapSliderDoc />;
      case 'capSideBar':
        return <CapSideBarDoc />;
      case 'capTopBar':
        return <CapTopBarDoc />;
      case 'capCheckbox':
        return <CapCheckboxDoc />;
      case 'capExpressionEditor':
        return <CapExpressionEditorDoc />;
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
      case 'capTreeSelect':
        return <CapTreeSelectDoc />;
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
      case 'capSteps':
        return <CapStepsDoc />;
      case 'capLink':
        return <CapLinkDoc />;
      case 'capRadioCard':
        return <CapRadioCardDoc />;
      case 'capNotification':
        return <CapNotificationDoc />;
      case 'capList':
        return <CapListDoc />;
      case 'capTooltipWithInfo':
        return <CapTooltipWithInfoDoc />;
      case 'capCard':
        return <CapCardDoc />;
      case 'capUploader':
        return <CapUploaderDoc />;
      case 'capAlert':
        return <CapAlertDoc />;
      case 'capMenu':
        return <CapMenuDoc />;
      case 'capDropdown':
        return <CapDropdownDoc />;
      case 'capCarousel':
        return <CapCarouselDoc />;
      case 'capTag':
        return <CapTagDoc />;
      case 'capColoredTag':
        return <CapColoredTagDoc />;
      case 'capDivider':
        return <CapDividerDoc />;
      case 'capLabel':
        return <CapLabelDoc />;
      case 'capTimePicker':
        return <CapTimePickerDoc />;
      case 'capError':
        return <CapErrorDoc />;
      case 'capSecondaryTopBar':
        return <CapSecondaryTopBarDoc />;
      case 'capSkeleton':
        return <CapSkeletonDoc />;
      case 'capMultiSelectDatePicker':
        return <CapMultiSelectDatePickerDoc />;
      case 'capHierarchyComponent':
        return <CapHierarchyComponentDoc />;
      case 'capDrawer':
        return <CapDrawerDoc />;
      case 'capBanner':
        return <CapBannerDoc />;
      case 'capIllustration':
        return <CapIllustrationDoc />;
      case 'capCustomCheckbox':
        return <CapCustomCheckboxListDoc />;
      case 'capGraph':
        return <CapGraphDoc />;
      case 'capCustomList':
        return <CapCustomListDoc />;
      case 'capReorderComponent':
        return <CapReorderComponentDoc />;
      case 'capShape':
        return <CapShapeDoc />;
      case 'capImage':
        return <CapImageDoc />;
      case 'capCardBox':
        return <CapCardBoxDoc />;
      case 'capSnackBar':
        return <CapSnackBarDoc />;
      case 'capNavigation':
        return <CapNavigationDoc />;
      case 'capLogin':
        return <CapLoginDoc />;
      case 'capDndGraphSidebarDoc':
        return <CapDndGraphSidebarDoc />;
      case 'capAdvancedIcon':
        return <CapAdvancedIconDoc />;
      case 'capDnDGraph':
        return <CapDnDGraphDoc />;
      case 'capColorPicker':
        return <CapColorPickerDoc />;
      case 'capLevelGraphRenderer':
        return <CapLevelGraphRendererDoc />;
      case 'capInfoNote':
        return <CapInfoNoteDoc />;
      case 'capErrorStateIllustration':
        return <CapErrorStateIllustrationDoc />;
      case 'capErrorBoundary':
        return <CapErrorBoundaryDoc />;
      case 'capBorderedBox':
        return <CapBorderedBoxDoc />;
      case 'capPopoverTree':
        return <CapPopoverTreeDoc />;
      case 'CapSelectFilter':
        return <CapSelectFilterDoc />;
      case 'CapStaticTemplates':
        return <CapStaticTemplatesDoc />;
      case 'capAppNotEnabled':
        return <CapAppNotEnabledDoc />;
      case 'capStatus':
        return <CapStatusDoc />;
      case 'capEventCalendar':
        return <CapEventCalendarDoc />;
      case 'capSKUUploader':
        return <CapSKUUploaderDoc />;
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
