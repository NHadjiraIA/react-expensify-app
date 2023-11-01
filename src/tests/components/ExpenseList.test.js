import React from "react";
import { shallow } from "enzyme";
import { ExpensesList} from '../../components/ExpensesList'
import  expenses from '../fixtures/expenses';

test('should render  ExpensList with expenses', () =>{
  const wrapper = shallow(<ExpensesList  expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot();
 
});


test('should render  ExpensList with empty message', () =>{
    const wrapper = shallow(<ExpensesList  expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
   
  });

