import uuid from 'uuid'
//ADD EXPENSE
// action allow us to change the redux store
export const addExpense = (
    {
     description = '',
     note = ' ',
     amount = 0,
     createdAt =  0
    }
    ) =>({
 type: 'ADD_EXPENSE',
 expense: {
     id:uuid(),
     description,
     note,
     amount,
     createdAt
 }
})
//REMOVE EXPENSE
export const removeExpense = ({id} = {}) =>({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id,updates) =>({
    type: "EDIT_EXPENSE",
    id,
    updates
});