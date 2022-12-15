import React from 'react';;
import '@testing-library/jest-dom';
import { fireEvent, render,screen, userEvent } from '@testing-library/react';
import ConditionCustomField from '../ConditionCustomField';
import {customFieldsData} from '../../../src/CapConditionDoc/index';

const renderComponent = props => render(<ConditionCustomField {...props} />);
describe('custom fields component', () => {
    let props = {
      treeData:customFieldsData,
      multiSelectPlaceholder:"select custom field",
      customFieldConditions:{
        key:null,
        operator:'CONTAINS',
        operand:""
        },
      setCustomFieldConditions:jest.fn(),
    }

    renderComponent(props);
    it('test for custom field tree', async () => {
      const customFieldDropdown = screen.getByText(/select custom field/i);
      expect(customFieldDropdown).toBeInTheDocument();
      fireEvent.click(customFieldDropdown);
      const searchPlaceholder = screen.getByPlaceholderText(/search/i);
      expect(searchPlaceholder).toBeInTheDocument();
      const searchBox = screen.getByRole('textbox');
      expect(searchBox).toBeInTheDocument();
      const customField = await screen.findByText(/abc/i);
      expect(customField).toBeInTheDocument();
      fireEvent.click(customField);
    });

    it("test for particular custom field condition string component", async () => {
      renderComponent({...props,
        customFieldConditions: {key:'abc',operator:'CONTAINS',operand:''},
      });
      const stringPlaceholder = screen.getByPlaceholderText("Enter min. 3 characters");
      expect(stringPlaceholder).toBeInTheDocument();
      fireEvent.change(stringPlaceholder, {target: {value: 'xyz'}});
    })
});