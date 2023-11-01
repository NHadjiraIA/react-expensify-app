import React  from "react";
import { shallow } from "enzyme";
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach (()=>{
    setTextFilter = jest.fn();
    setEndDate  = jest.fn();
    setStartDate  = jest.fn();
    sortByAmount  = jest.fn();
    sortByDate  = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    );
})

test('should render ExpensesListFilters correctly ', () =>{
    expect(wrapper).toMatchSnapshot();
})


test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// test('should handle set Text' , () =>{
//     const value = 'rent'
//     wrapper.find('input').simulate('change', {
//         target : {value}
//     });
//     expect(setTextFilter).toHaveBeenLastCalledWith(value);
// })

// test('should handle sort by date' , () =>{
//     const value = 'date';
//     wrapper.setProps({
//         filters: altFilters
//       });
//     wrapper.find('select').simulate('change', {
//         target : {value}
//     });
//     expect(sortByDate).toHaveBeenLastCalledWith(date);
// })


// test('should handle sort by amount' , () =>{
//     const value = 'amount';
//     wrapper.setProps({
//         filters: altFilters
//       });
//     wrapper.find('select').simulate('change', {
//         target : {value}
//     });
//     expect(sortByAmount).toHaveBeenLastCalledWith(value);
// })


// test('should handle  date changes' , () =>{
//     const startDate = moment(0).add(4,'years');
//     const endDate = moment(0).add(8,'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// })


// test('should handle  focus changes' , () =>{
//     const calendarFocused = 'endDate';
//     // we check the prop because in the component we change the props for this element 
//     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
//     //  we check the state because for this method we change the state
//    // expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
// })
 