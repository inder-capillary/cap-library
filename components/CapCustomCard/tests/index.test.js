import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import {mount} from 'enzyme';
import CapCustomCard from '../index';
import CapIcon from "../../CapIcon";
import CapButton from '../../CapButton';
describe('<CapCustomCard />', () => {
  it('CapCustomCard renders correctly', () => {
    const tree = renderer.create(<CapCustomCard type="sms" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Email card shows placeholder skeleton when template preview url is not given", () => {
    const templateData = {
      hoverOption: <CapButton>Select</CapButton>,
      title: "40% off on footwear",
      extra: [<CapIcon type="eye" />],
      type: "email",
    };
    const component = mount(<CapCustomCard {...templateData} />);
    expect(component.find('CapSkeleton')).toHaveLength(1);
  });
});
