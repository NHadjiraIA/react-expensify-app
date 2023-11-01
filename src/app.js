import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'; 
import AppRouter from './routers/AppRouter'
import configureStore from '../src/store/configureStore'
import getVisibleExpense from '../src/selectors/expenses'
import { addExpense } from '../src/actions/exprenses'
import { setTextFilter} from '../src/actions/filters'



const storeConfig = configureStore();

const jsx = (
    // provider help  us to difiend  the store that we provide for all ours components
    <Provider store={storeConfig}>
      <AppRouter />
    </Provider>
   
)
// we can passe some defaut value in props for our IndecisionApp
ReactDOM.render(jsx , document.getElementById('app'))

// BrowserRouter for create router and Route to create a route for singal page