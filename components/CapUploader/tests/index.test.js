
import React from 'react';
import { shallow } from 'enzyme';
import { Upload } from 'antd';

import CapUploader from '../index';

describe('<CapUploader />', () => {
  const wrapper = shallow(<CapUploader />);

  it('Should render antd upload', () => {
    expect(wrapper.find(Upload)).toHaveLength(1);
  });
});
