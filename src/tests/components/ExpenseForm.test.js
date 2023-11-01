import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expenses data', () =>{
    const wrapper = shallow(<ExpenseForm  expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission ', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    console.log('here jhhh',wrapper)
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () =>{
    const value ='New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () =>{  
    const value ='New note';
    const wrapper = shallow(<ExpenseForm />);
     //simulate the event for the 1st imput in the from
    wrapper.find('textarea').simulate('change', {
        target:{value}
    });
    //expect(wrapper.state('note')).toBe(value);
})

test('should set amount on input change', () =>{
    const value ='23.12';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    });
    //expect(wrapper.state('amount')).toBe(value);
})

test('should set amount if invalid input change', () =>{
    const value ='23.122';
    const wrapper = shallow(<ExpenseForm />);
    //simulate the event for the 2nd imput in the from 
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    });
    // access to the state of the component for the amount element 
    //expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', ()=>{
    //create spy
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    });
});

test('should set  new date on date change', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set  calender focus on change', ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused)
})