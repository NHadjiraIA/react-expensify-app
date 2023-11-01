import { addExpense, editExpense, removeExpense } from "../../actions/exprenses";
 

test('should setup remove expense action object', () => {  
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual ({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});
 
test('should setup  edit expense action object', () =>{
    const action = editExpense('123abc', {note:'abc'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id:'123abc',
        updates:{note:'abc'}
    })
})

test('should setup  add an expense ', () =>{
    const expensesData ={
        description:'abcd',
        amount:123,
        createdAt: 1000,
        note:'this is new note'
    };
    const action = addExpense(expensesData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expensesData,
            id: expect.any(String)
        }
    })
})

test('should setup  add expense action object with defaut value', () =>{

    const action = addExpense({  description : 'vv'});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           id: expect.any(String),
           description : 'vv',
           note : ' ',
           amount : 0,
           createdAt :0
        }
    })
})
 