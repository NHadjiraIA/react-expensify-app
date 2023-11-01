import { createStore} from 'redux';

//Action generators - functions that return action objects 

const add = (data) =>{
    return data.a +  data.b;
}
console.log(add({a:1, b:13}))
const add2 = ({a, b}, c) =>{
    return a + b + c;
}
console.log(add2({a:1, b:13}, 100))
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = ()=>({
    type:'RESET'
})
const SetCount = ({count }={}) =>({
  type:'SET',
  count
})
//Reducer 
// 1.reducer is a pure function (the out determined by the input)
// 2. never change state or action 

const countReducer = (
    (state = {count: 0}, action) =>{
        switch (action.type){
            
            case 'INCREMENT':
                return{
                    // to access to incrementBy we need to use action because we create it in incrementCount function 
                    count:state.count +  action.incrementBy
                };
            case 'DECREMENT' :
                return{
                    count:state.count - action.decrementBy
                }   
            case "SET" :
                return{
                    count: action.count
                }    
            case 'RESET':
                return{
                    count:0
                }    
                default:
                    return state;
        }
      
    }
)
// 
// redux has state for store the state and the actions to make changes in the state 
const store = createStore((state = {count: 0}, action) =>{
    switch (action.type){
        
        case 'INCREMENT':
            return{
                // to access to incrementBy we need to use action because we create it in incrementCount function 
                count:state.count +  action.incrementBy
            };
        case 'DECREMENT' :
            return{
                count:state.count - action.decrementBy
            }   
        case "SET" :
            return{
                count: action.count
            }    
        case 'RESET':
            return{
                count:0
            }    
            default:
                return state;
    }
  
});
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})


// action --than an object that gets sent to the store

// I'd like to incriment the count
store.dispatch(incrementCount())
console.log(store.getState());
store.dispatch(decrementCount( { decrementBy: 10}))
store.dispatch(SetCount({count: 3}))
console.log(store.getState());
store.dispatch(resetCount())

 