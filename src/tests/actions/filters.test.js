import moment from 'moment';
import {setTextFilter,sortByAmount,sortByDate, setStartDate, setEndDate} from '../../actions/filters'

test('should generate  set start date action object ' , () =>{
 const action = setStartDate(moment(0));
 expect(action).toEqual({
    type:"SET_START_DATE",
    startDateUpdate: moment(0)
 })
});


test('should generate  set end date action object ' , () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDateUpdate: moment(0)
    })
});

test('should generate  action object for sort by date' , () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
});

test('should generate  action object for sort by amount' , () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
});

test('should generate set filter object with text value' , () =>{
    const action = setTextFilter("textUpdate");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        textUpdate:'textUpdate'
    })
});


test('should generate set filter object with  default value' , () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        textUpdate:''
    })
});
