import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from 'antd';

import CapCarousel from '../index';

const data = [
  {
    name: 'SMS1',
    content: <div><h3>1</h3></div>,
    key: 1,
  },
  {
    name: 'SMS2',
    content: <div><h3>2</h3></div>,
    key: 2,
  },
  {
    name: 'SMS3',
    content: <div><h3>3</h3></div>,
    key: 3,
  },
  {
    name: 'SMS4',
    content: <div><h3>4</h3></div>,
    key: 4,
  },
  {
    name: 'SMS5',
    content: <div><h3>5</h3></div>,
    key: 5,
  },
];

describe('<CapCarousel />', () => {
  const defaultProps = {
    data,
    width: "300px",
    wrapperClassName: "test",
  };
  const wrapper = shallow(<CapCarousel {...defaultProps} />);

  it('Should render antd carousel', () => {
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });

  it('Should set test in wrapper className', () => {
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  it('Should render top switcher', () => {
    expect(wrapper.find('.switcher-icons')).toHaveLength(1);
  });

  it('Should not render switcher when prop showTopSwitcher is false', () => {
    wrapper.setProps({ showTopSwitcher: false });
    expect(wrapper.find('.switcher-icons')).toHaveLength(0);
  });
});
