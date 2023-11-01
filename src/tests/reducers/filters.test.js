import filtersReducer from '../../reducers/filters'
import moment from 'moment'; 

test('should setup default filter values' , () =>{
    const state = filtersReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to amount', () =>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate:undefined,
        sortBy: 'date'
    }
    const action = {type:'SORT_BY_AMOUNT'};
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () =>{
    const state = filtersReducer(undefined, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})

test('should set text filter ', () =>{
    const textUpdate = 'this is my filter';
    const action = {
        type:'SET_TEXT_FILTER',
        textUpdate
    };
    const state =  filtersReducer(undefined,action);
    expect(state.text).toBe(textUpdate);
})
 test('should set startDate filter ', () =>{ 
     const startDateUpdate = moment();
    const action = {
        type:'SET_START_DATE',
        startDateUpdate
    };
    const state =  filtersReducer(undefined, action);
     expect(state.startDate).toEqual(startDateUpdate);
})

  test('should set endDate filter', () => {
    const endDateUpdate = moment();
    const action = {
      type: 'SET_END_DATE',
      endDateUpdate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDateUpdate);
  });