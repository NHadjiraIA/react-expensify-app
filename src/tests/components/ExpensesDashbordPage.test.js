import { shallow } from 'enzyme'
import React from 'react'
import ExpensesDashbordPage from '../../components/ExpenseDashbordPage'

test('should render ExpensesDashbordPage correctly', () =>{
    const wrapper = shallow(< ExpensesDashbordPage />);
    expect(wrapper).toMatchSnapshot();
})

