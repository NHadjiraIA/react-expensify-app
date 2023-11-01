import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense} from '../actions/exprenses'

export class  EditExpensePage extends React.Component {
  onSubmit = (expense) =>{
    //dispatch the action to edit the expense
   // props.dispatch(editExpense(props.expense.id, expense));
    this.props.editExpense(this.props.expense.id,expense);
    //redirect to the dashbord
    this.props.history.push('/');
   }
   onRemove = () => {
    //props.dispatch(removeExpense({id: props.expense.id}))
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push('/')
}
render (){
  return (
    <div>
         <ExpenseForm 
         // to pass the props from dashbord to edit form
         expense={this.props.expense}
         onSubmit={this.onSubmit}
         />
          <button onClick={this.onRemove}> Remove </button>
      </div>
  )
}
}
const mapDispatchToProps =(dispatch,props) =>{
  return({
    editExpense : (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense : (data) => dispatch(removeExpense(data))
  });
};
 
const mapStateToProps = (state, props) =>{
   return{
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);