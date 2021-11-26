
import React from 'react';
import { shallow } from 'enzyme';
import CapSelectFilter from '../index';

describe('<CapSelectFilter />', () => {
  let wrapper;
  const onSelect = jest.fn();
  const data = [
    {
      key: 'approved',
      value: 'APPROVED',
    },
    {
      key: 'completed',
      value: 'COMPLETED',
    },
    {
      key: 'disabled',
      value: 'DISABLED',
    }];

  const componentProps = {
    data,
    onSelect,
  };

  const renderFunction = (props) => shallow(<CapSelectFilter {...props} />);


  it('should render default component', () => {
    wrapper = renderFunction();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default component with data', () => {
    wrapper = renderFunction(componentProps);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component selected value and badge', () => {
    componentProps.showBadge = true;
    componentProps.selectedValue = 'LIVE';
    wrapper = renderFunction(componentProps);
    expect(wrapper).toMatchSnapshot();
  });
});
