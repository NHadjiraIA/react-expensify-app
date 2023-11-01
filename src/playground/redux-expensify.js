import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
    store.subscribe(() =>{
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
        console.log(visibleExpenses)
    })
    // it dispatch the tow reducers but when it checks the action it will find it in expensesReducer
const expenseOne = store.dispatch(addExpense({description: "Rent", amount:100, createdAt: -100}));
const expenseTow = store.dispatch(addExpense({description: "this is a test2", amount:1020, createdAt: 5000}));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTow.expense.id,{amount:50}));
 //store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
//store.dispatch(setStartDate(125))
//store.dispatch(setEndDate('24/10/2017'))
const demoState ={
    expenses:[{
        id: 'poijasdfhwer',
        description:'January Rent',
        note: 'This was the final payement for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name:'Jen',
    age:24
}
console.log({
    // babel object spread operator we need to add in babelIrc
    ...user
})