import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectorExpenses from '../selectors/expenses';

// we can do like this in line 15 to 19
/*{props.expenses.map((expense) => 
    <ExpenseListItem 
      key = {expense}
      description = {expense.description}
      amount = {expense.amount}
    />) } */
// this is the component that we want to connect to redux
export const ExpensesList = (props) => (
    <div>
        <h1> Expenses List</h1>
        <div>
            {
                props.expenses.length === 0 ? (
                   <p> No exepenses </p>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key = {expense.id}{...expense} />     
                     })
                 )
            }
        </div>
       
    </div>
);

// this is the  store of our app
const mapsStateToProps =  (state) => {
    return {
       expenses: selectorExpenses(state.expenses, state.filters)
    }
   }
   // here we connect the store to the component means that we connect state to props
export default  connect(mapsStateToProps)(ExpensesList);
 