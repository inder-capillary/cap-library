
import React from 'react';
import { mount, shallow } from 'enzyme';
import debounce from 'lodash/debounce';
import CapStaticTemplates from '../index';
import mockData from './mockData';

const { categories, modalContent } = mockData;
const componentProps = {
  categories,
  modalContent,
};
const setStrategyTemplate = jest.fn();
// Jest to mock this import
jest.mock('lodash/debounce');

const renderFunction = (props) => <CapStaticTemplates {...props} />;

describe('<CapStaticTemplates />', () => {
  let wrapper;
  it('should render default component', () => {
    wrapper = shallow(renderFunction());
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
    debounce.mockImplementation((fn) => fn);
    const event = { target: { value: 'boostSale' }};
    wrapper = mount(renderFunction(componentProps));
    wrapper.find('Search').props().onChange(event);
    expect(wrapper).toMatchSnapshot();

    // Search with empty string
    const event2 = { target: { value: '' }};
    wrapper = mount(renderFunction(componentProps));
    wrapper.find('Search').props().onChange(event2);
    expect(wrapper).toMatchSnapshot();

    // Search with child value
    const event3 = { target: { value: 'browseAbandonNew' }};
    wrapper = mount(renderFunction(componentProps));
    wrapper.find('Search').props().onChange(event3);
    expect(wrapper).toMatchSnapshot();
  });

  it('should select category onClick of sidebar category', () => {
    const onSelect = jest.fn();
    const templatesContainer = { scrollTo: jest.fn() };
    jest.spyOn(document, 'querySelector').mockImplementation((selector) => selector === '.templates-container' ? templatesContainer : {});
    const newComponentProps = {
      ...componentProps,
      isBlankTemplateRequired: true,
      onSelect,
    };

    wrapper = mount(renderFunction(newComponentProps));
    // To select Blank category
    wrapper.find('.category-selector').at(0).props().onClick('BLANK_TEMPLATE');
    expect(document.querySelector).toHaveBeenCalled();
    wrapper.find('.category-selector').at(3).props().onClick('boostSale');
    expect(document.querySelector).toHaveBeenCalled();
  });
});
