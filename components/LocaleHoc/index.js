import React, { Component } from 'react';
import * as files from '../translations';

const LocaleHoc = (WrapperComponent, customProps) => class Wrapper extends Component {
  constructor() {
    super();
    const mapLocale = {
      // eslint-disable-next-line prettier/prettier
      'en': 'enUS',
      'zh-cn': 'zhCN',
      'en-US': 'enUS',
      "zh": 'zhCN',
    };
    const jlocale = localStorage.getItem('jlocale') || 'en';
    const localKey = mapLocale[jlocale];
    this.translatedDefaults = files[localKey][customProps.key] || {};
  }

  render() {
    return (
      <WrapperComponent
        {...this.translatedDefaults}
        {...this.props}
      />
    );
  }
};

export default LocaleHoc;
