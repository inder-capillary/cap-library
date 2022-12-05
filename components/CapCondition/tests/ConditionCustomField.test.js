import React from 'react';;
import '@testing-library/jest-dom';
import { fireEvent, render,screen, waitFor, within } from '@testing-library/react';
import ConditionCustomField from '../ConditionCustomField';
import {customFieldsData} from '../../../src/CapConditionDoc/index';

const renderComponent = props => render(<ConditionCustomField {...props} />);
describe('custom fields component', () => {
    let props = {
      plusMinus: '+/-',
      multiSelectPlaceholder:'Search',
      andMsg:'and',
      customFieldsTag:'custom fields',
      treeData:customFieldsData,
      customFieldConditions:[],
      setCustomFieldConditions:jest.fn(),
    }

    renderComponent(props);
    it('test for custom field tree', async () => {
      expect(screen.getByText('+/-')).toBeInTheDocument();
      expect(screen.getByText(/custom fields/i)).toBeInTheDocument();
      const conditionButton = screen.getByRole('button',{name:'+/- custom fields'});
      fireEvent.click(conditionButton);
      const searchPlaceholder = screen.getByPlaceholderText(/search/i);
      expect(searchPlaceholder).toBeInTheDocument();
      const customField = await screen.findByText(/abc/i);
      expect(customField).toBeInTheDocument();
      const customTooltip = screen.getByRole('tooltip', {
        name: /abc bcd cde def efg fgh/i
      });
      expect(customTooltip).toBeInTheDocument();
      const searchBox = screen.getByRole('textbox');
      expect(searchBox).toBeInTheDocument();
      // test to check multiple custom field condition string are displayed on checkbox click
      const customFieldsTree = await screen.findByRole('group');
      const { getAllByRole } = within(customFieldsTree);
      const customFields = getAllByRole('treeitem');
      const firstCustomField = customFields[0];
      const firstCheckbox = firstCustomField.querySelector('.ant-tree-checkbox');
      fireEvent.click(firstCheckbox);
      const secondCustomField = customFields[1];
      const secondCheckbox = secondCustomField.querySelector('.ant-tree-checkbox');
      fireEvent.click(secondCheckbox);
    });

    it("test for particular custom field condition string component", async () => {
      renderComponent({...props,
        customFieldConditions:[
          {key:'abc',operator:'CONTAINS',operand:''}
        ],
      });
      const conditionButton = screen.getByRole('button',{name:'+/- custom fields'});
      fireEvent.click(conditionButton);
      const customFieldsTree = await screen.findByRole('group');
      const { getAllByRole } = within(customFieldsTree);
      const customFields = getAllByRole('treeitem');
      const customField = customFields[2];
      const customFieldCheckBox = customField.querySelector('.ant-tree-checkbox');
      fireEvent.click(customFieldCheckBox);
      const customFieldPlaceholder = screen.getByPlaceholderText(/search/i);
      expect(customFieldPlaceholder).toBeInTheDocument();
      const stringPlaceholder = screen.getByPlaceholderText("Enter min. 3 characters");
      expect(stringPlaceholder).toBeInTheDocument();
      fireEvent.change(stringPlaceholder, {target: {value: 'xyz'}});
    })
});