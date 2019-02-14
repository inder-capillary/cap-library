import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import CapForm from '../index';

describe('<CapForm />', () => {
  it('CapForm renders correctly', () => {
    const tree = renderer.create(<CapForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
