
import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'antd';

import CapForm from '../index';

describe('<CapForm />', () => {
  const wrapper = shallow(<CapForm.CapForm />);

  it('Should render antd form', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
