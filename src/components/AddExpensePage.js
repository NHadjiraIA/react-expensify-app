import React , {useState} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { addExpense} from '../actions/exprenses'
 

export class AddExpensePage extends React.Component {
        onSubmit = (expense) =>{
            //props.dispatch(addExpense(expense));
            this.props.addExpense(expense)
            //to redurect to other page
            this.props.history.push('/')
        }
        render() {
            return (
                <div>
                    <h1> Add Expense</h1>
                    <ExpenseForm
                    onSubmit={this.onSubmit}
                    /> 
                </div>
                
         )}
}
 
const mapDispatchToProps =(dispatch) =>{
    return{
        addExpense : (expense) => dispatch(addExpense(expense))
    }
}
   export default connect(undefined, mapDispatchToProps)(AddExpensePage);