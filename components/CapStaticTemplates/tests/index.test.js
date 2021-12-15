
import React from 'react';
import { mount } from 'enzyme';
import CapStaticTemplates from '../index';
import mockData from './mockData';

const { categories } = mockData;
const componentProps = {
  categories,
};
const setStrategyTemplate = jest.fn();

const renderFunction = (props) => <CapStaticTemplates {...props} />;

describe('<CapStaticTemplates />', () => {
  let wrapper;
  it('should render default component', () => {
    wrapper = mount(renderFunction(componentProps));
    expect(wrapper).toMatchSnapshot();
  });

  it('should show categories and templates', () => {
    wrapper = mount(renderFunction(componentProps));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render blank template if isBlankTemplateRequired is true', () => {
    const newComponentProps = {
      ...componentProps,
      isBlankTemplateRequired: true,
    };
    wrapper = mount(renderFunction(newComponentProps));
    expect(wrapper).toMatchSnapshot();
  });

  it('should show modal on click of template', () => {
    const event = { target: { value: 'bootSales' }};
    const newComponentProps = {
      ...componentProps,
      setStrategyTemplate,
    };
    wrapper = mount(renderFunction(newComponentProps));
    wrapper.find('Styled(CapRadioCard)').props().onChange(event);
    expect(wrapper).toMatchSnapshot();
  });

  it('should close modal on click of close icon', () => {
    wrapper = mount(renderFunction(componentProps));
    wrapper.find('CapModal').props().onCancel();
    expect(wrapper).toMatchSnapshot();
  });

  it('should get search result', () => {
    const event = { target: { value: 'bootSale' }};
    wrapper = mount(renderFunction(componentProps));
    wrapper.find('Search').props().onChange(event);
    expect(wrapper).toMatchSnapshot();
  });
});
