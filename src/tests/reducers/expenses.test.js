import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
 import expenses from '../fixtures/expenses'
 
test('should setup default expenses value', () =>{
    const expensesReducerDefault = []
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual(expensesReducerDefault)
})
 
test('should remove the selected expense', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    }
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[1], expenses[2]])
})

test('should  not remove if the id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: -1
    }
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses)
})

test('should  edit expense', ()=>{
    const newDescription = 'the new description'
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            description: newDescription
        }
    }

   const state = expensesReducer(expenses, action);
   expect(state[1].description).toEqual(newDescription)
})


test('should  edit expense', ()=>{
    const newDescription = 'the new description'
    const action = {
        type:'EDIT_EXPENSE',
        id:-1,
        updates:{
            description: newDescription
        }
    }

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses)
})

test('should  add an expense', ()=>{
    const newExpense = {
        id:'109',
        description:'new one',
        note:'new expense',
        amount: '',
        createdAt: 100
    };
    const action = {
        type:'ADD_EXPENSE',
        expense: newExpense
    }

   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, newExpense])
})