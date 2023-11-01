import React from "react";
import { shallow } from 'enzyme';
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses'

let addExpense, wrapper,history;
beforeEach (() => {
     addExpense = jest.fn();
     history = { push: jest.fn()};
     wrapper = shallow( <AddExpensePage addExpense ={addExpense} history={history}/>);
})
test ('should render AddExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit' , () =>{
    //access the element onSubmit in ExpenseForm 
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})