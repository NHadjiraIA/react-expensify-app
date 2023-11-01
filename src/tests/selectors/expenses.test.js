import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
const expenses = [{
    id:'1',
    description:'Gaz',
    amount:123,
    createdAt: 0,
    note:'this is  1st note'
},
{
    id:'2',
    description:'Rent',
    amount:300,
    createdAt: moment(0).subtract(4, 'day').valueOf(),
    note:'this is  2nd note'
},
{
    id:'3',
    description:'Credit card',
    amount:500,
    createdAt: moment(0).add(4, 'day').valueOf(),
    note:'this is  3rd note'
}
]
test('should filter by test text value', () =>{
    const filters ={
        text:'e',
        sortBy: 'date',
        StratDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters) 
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by start date', () =>{
    const filters ={
        text:'',
        sortBy: 'date',
        StratDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters) 
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('should filter by end date', () =>{
    const filters ={
        text:'',
        sortBy: 'date',
        StratDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses,filters) 
    expect(result).toEqual([expenses[0],expenses[1]])
})
test('should filter by  date', () =>{
    const filters ={
        text:'',
        sortBy: 'date',
        StratDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters) 
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('should filter by amount ', () =>{
    const filters ={
        text:'',
        sortBy: 'amount',
        StratDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters) 
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})