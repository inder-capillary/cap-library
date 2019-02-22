
import renderer from 'react-test-renderer';
import React from 'react'; // eslint-disable-line no-unused-vars
import { Message, View } from "../../assets/icons/index";
import CapRadioCard from '../index';
const panes = [{title: "Outbound", content: "Sending an outbound message is like blasting the message or broadcasting the message to a pre-defined set of users", icon: <Message />},
  {title: "Dynamic", content: "for sending messages to users based on their actions in real time"}, {title: "Survey", content: "for taking survey or feedback from the audience"}, {title: "Referal", content: "for sending messages to acquire new users through existing customers", icon: <View />}];

describe('<CapRadioCard />', () => {
  it('CapRadioCard tenders correctly', () => {
    const tree = renderer.create(<CapRadioCard panes={panes} selected="none" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
