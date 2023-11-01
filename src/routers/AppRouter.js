import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashbordPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header  from '../components/Header';
import {history} from  '../history'
   
 
   
 

 
   // whith switch the browser check if each route mach with the path in the browser if not it switch to the second route 
   // route can pass props to other component but header is not a route so it can not pass props to other component 
   const AppRouter = () =>(
    <BrowserRouter  history={history}> 
    <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/edit/:id" component={EditExpensePage}/>
          <Route path= "/help" component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
   )
       
        
       
    
   
   export default AppRouter;