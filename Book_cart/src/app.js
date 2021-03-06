'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import {Router, Route , IndexRoute ,browserHistory} from 'react-router';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
  
const  middleware=applyMiddleware(logger);
const store=createStore(reducers,middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes=(
 <Provider store={store}>
<Router history={browserHistory}>
<Route path="/" component={Main}>
<IndexRoute component={BooksList}/>
<Route path="/admin" component={BooksForm}/>
<Route path="/cart" component={Cart}/>


</Route>
</Router>
</Provider>


	)

render(
 Routes,document.getElementById('app')
);

// store.dispatch(postBooks (
	
// ))
// store.dispatch(deleteBooks(
//  {	_id: 2
// } ))
// store.dispatch(updateBooks(
//  {_id: 1 , 
//  	 	title:'learning'
//    }
//  ))

// store.dispatch(
// 	addToCart
// 	(
// 		[{
// 			_id:2
// 		}])
// 	)


