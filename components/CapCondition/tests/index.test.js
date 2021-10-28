import React from 'react';

import {mount} from 'enzyme';

import CapCondition from '../index';
import ConditionNumber from '../ConditionNumber';
import CapSelect from '../../CapSelect';

import {INCLUDE, DOUBLE} from '../constants';

const setCriteria = jest.fn();
const setConditionExpression = jest.fn();
const setConditionValidationError = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const MountCapCondition = (operator) => mount(
  <CapCondition
    fact="Price"
    dataType={DOUBLE}
    criteria={INCLUDE}
    setCriteria={setCriteria}
    conditionExpression={{operator, operand: null}}
    setConditionExpression={setConditionExpression}
    conditionValidationError={null}
    setConditionValidationError={setConditionValidationError}
  />
);

const MountConditionNumber = (operator, operand) => mount(
  <ConditionNumber
    conditionExpression={{operator, operand}}
    setConditionExpression={setConditionExpression}
    setConditionValidationError={setConditionValidationError}
  />
);

describe("CapCondition", () => {
  it("It should render the CapCondition component", () => {
    const wrapper = MountCapCondition('EQ');
    expect(wrapper).toMatchSnapshot();
  });
});

describe("CapCondition component", () => {
  it("Should render the condition number component", () => {
    const wrapper = MountConditionNumber('EQ', null);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should update the operand on change", () => {
    const wrapper = MountConditionNumber('EQ', null);
    wrapper.find('.cap-condition-num-input-1').at(0).props().onChange({target: {value: '1'}});
    expect(setConditionExpression).toHaveBeenCalledTimes(1);
    expect(setConditionExpression).toHaveBeenCalledWith({operand: 1, operator: 'EQ'});
  });

  it("Should update operator list on change incase of IN_RANGE operator", () => {
    const wrapper = MountConditionNumber('IN_RANGE', [null, null]);
    wrapper.find('.cap-condition-num-input-1').at(0).props().onChange({target: {value: '1'}});
    expect(setConditionExpression).toHaveBeenCalledTimes(1);
    expect(setConditionExpression).toHaveBeenCalledWith({operand: [1, null], operator: 'IN_RANGE'});
    wrapper.find('.cap-condition-num-input-2').at(0).props().onChange({target: {value: '2'}});
    expect(setConditionExpression).toHaveBeenCalledTimes(2);
    expect(setConditionExpression).toHaveBeenCalledWith({operand: [null, 2], operator: 'IN_RANGE'});
  });
  it("Should update operator list on change incase of IN_RANGE operator", () => {
    const wrapper = MountConditionNumber('EQ', null);
    wrapper.find(CapSelect).props().onChange('LT');
    expect(setConditionExpression).toHaveBeenCalledTimes(1);
    expect(setConditionExpression).toHaveBeenCalledWith({operator: 'LT', operand: null});
  });
});
